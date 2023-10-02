import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const {signInUser, setUser} = useContext(AuthContext);
  const handleLogin = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
    console.log(email, password)
    signInUser(email, password)
      .then(result => {
        setUser(result.user);
        console.log(result.user);
    })
      .catch(error => {
      console.error(error);
    })
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-semibold text-white text-center py-3">Please Login</h1>
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
