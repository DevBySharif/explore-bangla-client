import Banner from "../../Shared/Banner/Banner";
import BestServices from "../BestServices/BestServices";
import TourType from "../TourType/TourType";
import TourismAndTravel from "../TourismAndTravel/TourismAndTravel";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BestServices></BestServices>
      <TourismAndTravel></TourismAndTravel>
      <TourType></TourType>
    </div>
  );
};

export default Home;
