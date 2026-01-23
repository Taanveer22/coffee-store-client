import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignIn = () => {
  const { signInUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("google sign in successful");
      })
      .catch(() => {
        toast.error("failed google sign in");
      });
  };

  const handleSignInForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        // console.log(result.user);
        toast.success("user sign in successfully");
        navigate("/", { replace: true });
        // send data to backend
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const signInData = { email, lastSignInTime };
        fetch(`${import.meta.env.VITE_API_URL}/users`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signInData),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data)
            if (data.modifiedCount > 0) {
              toast.success("sign is sucessfully done");
            }
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h2 className="text-5xl font-bold">Sign In Now!</h2>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignInForm} className="card-body">
              <fieldset className="fieldset">
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
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Sign In</button>
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-info mt-4"
                >
                  Sign In With Google
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
