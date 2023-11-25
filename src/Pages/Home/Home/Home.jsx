import Banner from "../../Shared/Banner/Banner";
import BestServices from "../BestServices/BestServices";
import TourType from "../TourType/TourType";
import TourismAndTravel from "../TourismAndTravel/TourismAndTravel";
import TouristStories from "../TouristStories/TouristStories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BestServices></BestServices>
      <TourismAndTravel></TourismAndTravel>
      <TourType></TourType>
      <TouristStories></TouristStories>
    </div>
  );
};

export default Home;
