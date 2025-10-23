import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  MdPerson,
  MdEmail,
  MdLock,
  MdVisibility,
  MdVisibilityOff,
  MdPhoto,
} from "react-icons/md";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { createUser, profileUpdate, googleLogin, setUser } =
    useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    const displayName = event.target.name?.value;
    const photoURL = event.target.photo?.value;
    const email = event.target.email?.value;
    const password = event.target.password?.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and include at least one uppercase and one lowercase letter."
      );
      return;
    }

    setIsLoading(true);

    createUser(email, password)
      .then((userCredential) => {
        toast.success("User Created Successfully");
        profileUpdate({ displayName, photoURL })
          .then(() => {
            setUser(userCredential.user);
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
            toast.error(err.message);
          });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    googleLogin()
      .then((res) => {
        toast.success("Registration Successfully");
        setUser(res.user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const btnClass =
    "group w-full flex items-center justify-center gap-3 py-3 px-4 rounded-lg border border-gray-300 bg-white text-gray-700 font-semibold hover:bg-gray-50 transition-colors duration-200 active:scale-[0.98]";

  const inputClass =
    "w-full pl-12 pr-10 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400";

  return (
    <div className="min-h-[85vh] flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-md rounded-2xl shadow-xl overflow-hidden bg-white">
        <div className="w-full p-8">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Register your Account
            </h2>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            <div className="form-group">
              <div className="relative">
                <MdPerson
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  className={inputClass}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="relative">
                <MdEmail
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className={inputClass}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="relative">
                <MdPhoto
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  name="photo"
                  placeholder="Your photo URL here"
                  className={inputClass}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="relative">
                <MdLock
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder={showPassword ? "Enter Password" : "••••••••"}
                  className={inputClass}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  {showPassword ? (
                    <MdVisibilityOff size={20} />
                  ) : (
                    <MdVisibility size={20} />
                  )}
                </button>
              </div>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full text-md font-semibold py-3 px-4 rounded-xl my-btn active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Creating Account...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>
          <div className="flex justify-center text-sm my-3">
            <p className="px-3 bg-white text-gray-500">Or continue with</p>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleGoogleLogin}
              className={btnClass}
              disabled={isLoading}
            >
              <FcGoogle
                size={24}
                className="group-hover:scale-110 transition-transform duration-200"
              />
              Continue with Google
            </button>
          </div>
          <div className="text-center mt-3 py-3 border-t border-gray-200">
            <p className="text-gray-600 text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 underline underline-offset-4"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
