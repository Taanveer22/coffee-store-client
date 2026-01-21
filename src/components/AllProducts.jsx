import { Link } from "react-router-dom";

const AllProducts = () => {
  return (
    <div>
      <h1 className="text-xl sm:text-3xl lg:text-5xl text-center mb-3">
        Our Popular Products
      </h1>
      <div className="flex justify-center items-center ">
        <Link to="/addCoffee" className="btn btn-warning cursive-font">
          Add Coffee
        </Link>
      </div>
    </div>
  );
};

export default AllProducts;
