import cup9 from "../assets/cups/Rectangle 9.png";
import cup10 from "../assets/cups/Rectangle 10.png";
import cup11 from "../assets/cups/Rectangle 11.png";
import cup12 from "../assets/cups/Rectangle 12.png";
import cup13 from "../assets/cups/Rectangle 13.png";
import cup14 from "../assets/cups/Rectangle 14.png";
import cup15 from "../assets/cups/Rectangle 15.png";
import cup16 from "../assets/cups/Rectangle 16.png";

const FollowUs = () => {
  return (
    <div>
      <h1 className="text-xl sm:text-3xl lg:text-5xl text-center mb-3">Follow on Instagram</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <img src={cup9} alt="cup" />
        <img src={cup10} alt="cup" />
        <img src={cup11} alt="cup" />
        <img src={cup12} alt="cup" />
        <img src={cup13} alt="cup" />
        <img src={cup14} alt="cup" />
        <img src={cup15} alt="cup" />
        <img src={cup16} alt="cup" />
      </div>
    </div>
  );
};

export default FollowUs;
