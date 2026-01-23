import { Link } from "react-router-dom";
import bannerPhoto from "../assets/more/3.png";
const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bannerPhoto})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-left justify-end w-full">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl sm:text-3xl lg:text-5xl font-bold">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="mb-5 text-base">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <Link to="/users" className="btn btn-warning cursive-font">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
