import { Link } from "react-router-dom";
import Card from "../components/Card";

const AllProducts = ({ loadedCoffees }) => {
  // console.log(loadedCoffees);
  return (
    <div>
      <h1 className="text-xl sm:text-3xl lg:text-5xl text-center mb-3">
        Our Popular Products
      </h1>
      <div className="flex justify-center items-center mb-3">
        <Link to="/addCoffee" className="btn btn-warning cursive-font">
          Add Coffee
        </Link>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {loadedCoffees.map((item) => (
          <Card key={item._id} item={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
