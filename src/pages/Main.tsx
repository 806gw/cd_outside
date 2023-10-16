import Header from "../components/Header/Header";
import HitGallery from "../components/HitGallery/HitGallery";
import Navigation from "../components/Navigation/Navigation";
import PostContainer from "../components/PostContainer/PostContainer";

const Main = () => {
  return (
      <div className="container">
        <Header/>
        <Navigation/>
        <PostContainer/>
      </div>
  );
};

export default Main;