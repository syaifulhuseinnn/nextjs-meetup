import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  VStack,
  Center,
  Textarea,
  Button,
  useToast,
  Text,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";
import Head from "next/head";
import MainLayout from "../../layouts/MainLayout";

function MyCustomInput({ label, field, form: { touched, errors }, ...props }) {
  return <Input type="text" {...field} {...props} />;
}

function MyCustomTextarea({
  label,
  field,
  form: { touched, errors },
  ...props
}) {
  return <Textarea {...field} {...props} />;
}

export default function AddNewMeetup() {
  const toast = useToast();

  async function addNewMeetupHandler(data) {
    try {
      const postNewMeetup = await fetch(
        "https://meetup-fake-api.herokuapp.com/meetups",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(data),
        }
      );

      if (postNewMeetup.status === 201) {
        toast({
          title: "New Meetup Added",
          description: "We've added your meetup for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <MainLayout title="Add New Meetup" meta_description="Add your own meetup!">
      <Formik
        initialValues={{
          title: "",
          address: "",
          description: "",
          image: "",
        }}
        onSubmit={async (values, action) => {
          console.log(action);
          await addNewMeetupHandler({ ...values, id: nanoid() });
          action.setSubmitting(false);
          action.resetForm();
        }}
      >
        {(formik) => (
          <Form>
            <Center p={8}>
              <VStack w="xl" spacing={6}>
                <FormControl isRequired>
                  <FormLabel>Meetup Title</FormLabel>
                  <Field
                    name="title"
                    component={MyCustomInput}
                    placeholder="Meetup Title"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Address</FormLabel>
                  <Field
                    name="address"
                    component={MyCustomTextarea}
                    placeholder="Address"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Description</FormLabel>
                  <Field
                    name="description"
                    component={MyCustomTextarea}
                    placeholder="Description"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Image</FormLabel>
                  <Field
                    name="image"
                    component={MyCustomInput}
                    placeholder="image"
                  />
                </FormControl>

                <Button
                  colorScheme="messenger"
                  alignSelf="flex-end"
                  type="submit"
                  isDisabled={formik.isSubmitting}
                  isLoading={formik.isSubmitting}
                  loadingText="Adding Meetup"
                >
                  Submit
                </Button>
              </VStack>
            </Center>
          </Form>
        )}
      </Formik>
    </MainLayout>
  );
}
