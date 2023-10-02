import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signInUser, setUser, signInGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        setUser(result.user);
        e.target.reset();
        navigate("/");
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGoogle = () => {
    signInGoogle()
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-semibold text-white text-center py-3">
          Please Login
        </h1>
        <form
          onSubmit={handleLogin}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <span className="inline-flex items-center justify-center mt-2 gap-2">
              Login with:{" "}
              <FcGoogle
                onClick={handleGoogle}
                className="mt-px text-2xl hover:cursor-pointer"
              />
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
