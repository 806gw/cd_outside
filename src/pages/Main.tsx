import Header from "../components/Header/Header";
import HitGallery from "../components/HitGallery";
import Navigation from "../components/Navigation";
import PostContainer from "../components/PostContainer";

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