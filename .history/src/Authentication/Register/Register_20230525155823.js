import * as React from "react";
import { auth } from "../../fire";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export default function Register({ setUser }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const onSignUpHandle = (e) => {
    if (email !== null && password !== null) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          setUser(user.user.email);
          navigate("/home");
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
    <form
      onSubmit={onSignUpHandle}
      className="w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100"
    >
      <h1 className="text-5xl font-semibold">Register</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Welcome back! Please enter your details.
      </p>
      <div className="mt-8">
        <div className="flex flex-col">
          <label className="text-lg font-medium">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-lg font-medium">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your password"
            type={"password"}
          />
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div>
            <input type="checkbox" id="remember" />
            <label className="ml-2 font-medium text-base" htmlFor="remember">
              Remember for 30 days
            </label>
          </div>
          <Link to="/" className="font-medium text-base text-violet-500">
            Already have an account?
          </Link>
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg">
            Register
          </button>
        </div>
      </div>
    </form>
    </div>
  );
}
