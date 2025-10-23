import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { MdEmail, MdLock, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { setUser, emailLogin, googleLogin, forgetPassword } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef(null);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email?.value;
    const password = event.target.password?.value;
    setIsLoading(true);

    emailLogin(email, password)
      .then((res) => {
        toast.success("Logged In Successfully");
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

  const handleGoogleLogin = () => {
    setIsLoading(true);
    googleLogin()
      .then((res) => {
        toast.success("Logged In Successfully");
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

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error("Please enter your email address first.");
      return;
    }
    forgetPassword(email)
      .then(() => {
        toast.success("Password Reset Email Sent");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const inputClass =
    "w-full pl-12 pr-10 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400";

  const btnClass =
    "group w-full flex items-center justify-center gap-3 py-3 px-4 rounded-lg border border-gray-300 bg-white text-gray-700 font-semibold hover:bg-gray-50 transition-colors duration-200 active:scale-[0.98]";

  return (
    <div className="min-h-[85vh] flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-md rounded-2xl shadow-xl overflow-hidden bg-white">
        <div className="w-full p-8">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600 text-sm">Sign in to your account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="form-group">
              <div className="relative">
                <MdEmail
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  placeholder="Enter your email"
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

              <div className="flex justify-end mt-2">
                <button
                  type="button"
                  onClick={handleForgetPassword}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200 underline underline-offset-4 cursor-pointer"
                >
                  Forgot password?
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
                  Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="flex justify-center text-sm my-2">
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
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 underline underline-offset-4"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
