import { useLoaderData } from "react-router-dom";
import AllProducts from "../components/AllProducts";
import Banner from "../components/Banner";
import Marketing from "../components/Marketing";

const Home = () => {
  const loadedCoffees = useLoaderData();
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section className="mb-6 lg:mb-12">
        <Marketing></Marketing>
      </section>
      <section className="w-11/12 mx-auto">
        <AllProducts loadedCoffees={loadedCoffees}></AllProducts>
      </section>
    </div>
  );
};

export default Home;
