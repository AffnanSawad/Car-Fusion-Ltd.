import AboutSection from "../AllPages/AboutSection/AboutSection";
import Advertisement from "../AllPages/Advertisement/Advertisement";
import AfterBanner from "../AllPages/AfterBanner/AfterBanner";
import Banner from "../AllPages/Banner/Banner";
import CarLogoPage from "../AllPages/CarLogoPage/CarLogoPage";
import Reviews from "../AllPages/Reviews/Reviews";
import Sponsered from "../AllPages/Sponsered/Sponsered";
import SubMitReview from "../AllPages/SubMitReview/SubMitReview";
import YoutubeChannel from "../AllPages/YoutubeChannel/YoutubeChannel";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <AfterBanner></AfterBanner>
           <AboutSection></AboutSection>
           {/* <AfterBanner></AfterBanner> */}
           <Advertisement></Advertisement>
           <YoutubeChannel></YoutubeChannel>
           <CarLogoPage></CarLogoPage>
           <Reviews></Reviews>
           <Sponsered></Sponsered>
           <SubMitReview></SubMitReview>
        </div>
    );
};

export default Home;