import Navigation from "../components/navigation/Navigation";

export default function MainLayout({ children }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}
