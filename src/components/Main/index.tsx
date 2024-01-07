import useGeolocation from "../../hooks/useGeolocation";
import { Footer } from "../Footer";
import { NavBar } from "../NavBar";
export const Main = () => {
  const location = useGeolocation();
  return (
    <>
      <NavBar />
      <h1 className="text-center">Главная страница</h1>
      {location.loaded
        ? JSON.stringify(location)
        : "Location data is not available yet."}
      <Footer />
    </>
  );
};
