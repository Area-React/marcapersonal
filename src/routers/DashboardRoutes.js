import { Cards } from "../components/home/cardnews/Cards";
import { Titulo } from "../components/home/titulo/Titulo";
import { Footer } from "../components/structure/footer/Footer";
import { NavbarTopMenu } from "../components/structure/navbar-top-menu/NavbarTopMenu";
import { Slider } from "../home/slider/Slider";

export const DashboardRoutes = () => {
  return (
    <>
      <NavbarTopMenu />
      <Slider />
      <Titulo/>
      <Cards/>
      <br />
      <Footer/>
    </>
  );
};
