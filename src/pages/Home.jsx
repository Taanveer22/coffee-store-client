import AllProducts from "../components/AllProducts";
import Banner from "../components/Banner";
import Marketing from "../components/Marketing";

const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section className="mb-6 lg:mb-12">
        <Marketing></Marketing>
      </section>
      <section>
        <AllProducts></AllProducts>
      </section>
    </div>
  );
};

export default Home;
