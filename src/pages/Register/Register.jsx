import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../components/firebase";
import { toast } from "react-toastify";
import React from "react";
import { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { db } from "./../../components/firebase.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
        });
      }
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
      // Redirect to login page after registration
      setTimeout(() => {
        navigate("/login");
      }, 6000);
    } catch (error) {
      console.log(error.message);
      toast.success(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <>
          <ToastContainer
            />
      <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="bg-white shadow-md rounded-md p-6">
            <img
              className="mx-auto h-24 w-auto"
              src="https://media.tenor.com/YcHBvIIpTnsAAAAi/hug-telagram-emoji.gif"
              alt="emoji"
            />

            <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign up for an account
            </h2>


            <form className="space-y-6" method="POST" onSubmit={handleRegister}>
              <div>
                <label
                  for="fname"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <div className="mt-1">
                  <input
                    name="username"
                    type="name"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                    id="fname"
                    onChange={(e) => setFname(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label
                  for="lname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <div className="mt-1">
                  <input
                    name="email"
                    type="name"
                    autoComplete="email-address"
                    required
                    id="lname"
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                    onChange={(e) => setLname(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label
                  for="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    id="email"
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label
                  for="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    name="password"
                    type="password"
                    autoComplete="password"
                    required
                    id="password"
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                >
                  Register Account
                </button>
              </div>

              <div class="mt-4 text-center">
                <span class="text-sm text-gray-500 dark:text-gray-300">
                  Already have an account?{" "}
                </span>
                <a href="#" class="text-blue-500 hover:text-blue-600">
                  <Link to="/login">Login</Link>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
