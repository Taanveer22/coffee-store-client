import { useLoaderData } from "react-router-dom";

const DetailsCoffee = () => {
  
  const loadedOneCoffee = useLoaderData();
  // console.log(loadedOneCoffee);

  return (
    <div className="w-11/12 mx-auto">
      <div className="card bg-gray-300 shadow-sm">
        <figure>
          <img src={loadedOneCoffee?.photo} className="max-w-md" />
        </figure>
        <div className="card-body justify-center items-center">
          <h2 className="card-title">
            {loadedOneCoffee?.name}
            <div className="badge badge-secondary">
              {loadedOneCoffee?.supplier}
            </div>
          </h2>
          <p>Details Info : {loadedOneCoffee?.details}</p>
          <div className="card-actions justify-start">
            <div className="badge badge-outline">
              Taste : {loadedOneCoffee?.taste}
            </div>
            <div className="badge badge-outline">
              Category : {loadedOneCoffee?.category}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCoffee;
