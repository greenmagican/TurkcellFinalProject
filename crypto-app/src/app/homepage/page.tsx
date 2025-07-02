import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "../pages/homePage/components/organisms/slider/Slider";
import Market from "../pages/homePage/components/organisms/market/Market";
import HowItWork from "../pages/homePage/components/organisms/howitwork/HowItWork";
import About from "../pages/homePage/components/organisms/about/About";
import DownloadApp from "../pages/homePage/components/organisms/downloadapp/DownloadApp";
import Testimonials from "../pages/homePage/components/organisms/testimonial/Testimonials";
import Calltoaction from "../pages/homePage/components/organisms/calltoaction/Calltoaction";
import Footer from "../pages/homePage/components/organisms/footer/Footer";
import Navbar from "../pages/homePage/components/organisms/navbar/Navbar";
const Homepage = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Market />
      <HowItWork />
      <About />
      <DownloadApp />
      <Testimonials />
      <Calltoaction />
      <Footer />
    </>
  );
};
export default Homepage;
