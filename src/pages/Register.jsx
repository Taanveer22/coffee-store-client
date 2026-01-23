import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { registerUser, updateProfileData } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegisterForm = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, email, password);
    try {
      // 1️⃣ Register user
      const result = await registerUser(email, password);
      // 2️⃣ Update profile (WAIT for it)
      await updateProfileData(name, photo);
      // 3️⃣ Navigate only after profile update
      navigate("/", { replace: true });
      // 4️⃣ Save to backend
      const creationTime = result.user.metadata.creationTime;
      const lastSignInTime = result.user.metadata.lastSignInTime;

      const newUser = { name, email, creationTime, lastSignInTime };

      const res = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const data = await res.json();
      if (data.insertedId) {
        toast.success("user added to db successfully");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleRegisterForm}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">Name</label>
          <input name="name" type="text" className="input" placeholder="Name" />

          <label className="label">Photo</label>
          <input
            name="photo"
            type="text"
            className="input"
            placeholder="Photo Url"
          />

          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
          />

          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
