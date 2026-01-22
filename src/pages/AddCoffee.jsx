import { toast } from "react-toastify";

const AddCoffee = () => {
  const handleAddCoffeeForm = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const quantity = e.target.quantity.value;
    const supplier = e.target.supplier.value;
    const taste = e.target.taste.value;
    const category = e.target.category.value;
    const details = e.target.details.value;
    const photo = e.target.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    // console.log(newCoffee);

    // ==== send create operation data to backend =====
    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          toast.success("coffee added successfully");
        }
      });
  };

  return (
    <div className="bg-[#eceae3] py-6">
      <section className="w-11/12 mx-auto">
        <div className="text-center space-y-2 lg:space-y-4">
          <h1 className="text-xl sm:text-3xl lg:text-5xl">Add New Coffee</h1>
          <p className="text-base">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleAddCoffeeForm}>
          {/* 1st */}
          <div className="flex items-center justify-between gap-6 my-4">
            <fieldset className="fieldset w-1/2">
              <legend className="fieldset-legend">Coffee Name</legend>
              <input
                name="name"
                type="text"
                className="input w-full"
                placeholder="Coffee Name"
              />
            </fieldset>
            <fieldset className="fieldset w-1/2">
              <legend className="fieldset-legend">Quantity</legend>
              <input
                name="quantity"
                type="text"
                className="input w-full"
                placeholder="Quantity"
              />
            </fieldset>
          </div>
          {/* 2nd */}
          <div className="flex items-center justify-between gap-6 mb-4">
            <fieldset className="fieldset w-1/2">
              <legend className="fieldset-legend">Supplier</legend>
              <input
                name="supplier"
                type="text"
                className="input w-full"
                placeholder="Supplier"
              />
            </fieldset>
            <fieldset className="fieldset w-1/2">
              <legend className="fieldset-legend">Taste</legend>
              <input
                name="taste"
                type="text"
                className="input w-full"
                placeholder="Taste"
              />
            </fieldset>
          </div>
          {/* 3rd */}
          <div className="flex items-center justify-between gap-6 mb-4">
            <fieldset className="fieldset w-1/2">
              <legend className="fieldset-legend">Category</legend>
              <input
                name="category"
                type="text"
                className="input w-full"
                placeholder="Category"
              />
            </fieldset>
            <fieldset className="fieldset w-1/2">
              <legend className="fieldset-legend">Details</legend>
              <input
                name="details"
                type="text"
                className="input w-full"
                placeholder="Details"
              />
            </fieldset>
          </div>
          {/* 4th */}
          <div className="mb-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Photo Url</legend>
              <input
                name="photo"
                type="text"
                className="input w-full"
                placeholder="Photo Url"
              />
            </fieldset>
          </div>
          {/* btn */}
          <div>
            <button className="btn btn-warning w-full">Add Coffee</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddCoffee;
