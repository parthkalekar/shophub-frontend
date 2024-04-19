import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const scrollerY = () =>
{
  window.scrollTo(0,850);
}
 
const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            One click away from your shopping needs.<br/>
            Saving time and money with every click.
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2" onClick={scrollerY}>Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
