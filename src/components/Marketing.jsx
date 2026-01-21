import icon1 from "../assets/icons/1.png";
import icon2 from "../assets/icons/2.png";
import icon3 from "../assets/icons/3.png";
import icon4 from "../assets/icons/4.png";

const Marketing = () => {
  return (
    <div className="bg-[#eceae3] py-6">
      <section className="w-11/12 mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-2">
          <img src={icon1} className="w-16 h-16" />
          <h1 className="text-xl lg:text-4xl">Awesome Aroma</h1>
          <p className="text-base">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className="space-y-2">
          <img src={icon2} className="w-16 h-16" />
          <h1 className="text-xl lg:text-4xl">High Quality</h1>
          <p className="text-base">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        <div className="space-y-2">
          <img src={icon3} className="w-16 h-16" />
          <h1 className="text-xl lg:text-4xl">Pure Grades</h1>
          <p className="text-base">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div className="space-y-2">
          <img src={icon4} className="w-16 h-16" />
          <h1 className="text-xl lg:text-4xl">Proper Roasting</h1>
          <p className="text-base">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </section>
    </div>
  );
};

export default Marketing;
