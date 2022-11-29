import { Image } from "@chakra-ui/react";

export default function ProfilePicture({ src, name }) {
  return <Image borderRadius="full" boxSize="30px" src={src} alt={name} />;
}
