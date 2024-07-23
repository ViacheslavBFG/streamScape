import Header from "./components/header";
import RegistrationForm from "./components/registrationForm";
import CarouselFirst from "./components/carouselFirst";
import About from "./components/about";
import JoinUs from "./components/joinUs";
import FindPeople from "./components/findPeople";
import StreamingGirls from "./components/streamingGirls";
import Fishing from "./components/fishing";
import Footer from "./components/footer";
import FirstMobCar from "./components/FirstMobCar";

export default function Home() {
  return (
    <div className="p-10 ">
      <div className="flex justify-around items-center sm:mb-28">
        <Header />
        <RegistrationForm />
      </div>
      <CarouselFirst />
      <FirstMobCar />
      <About />
      <JoinUs />
      <FindPeople />
      <StreamingGirls />
      <Fishing />
      <Footer />
    </div>
  );
}
