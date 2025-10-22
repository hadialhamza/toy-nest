import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { MdEmail, MdLock, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { setUser, emailLogin, googleLogin, githubLogin, forgetPassword } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef(null);

  const handleLogin = async (event) => {
    const email = event.target.email?.value;
    const password = event.target.password?.value;
    event.preventDefault();
    setIsLoading(true);

    emailLogin(email, password)
      .then((res) => {
        if (!res.user?.emailVerified) {
          toast.error("Please Verify Your Email First");
          return;
        }
        toast.success("Logged In Successfully");
        setUser(res.user);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        toast.success("Logged In Successfully");
        setUser(res.user);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
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
    "w-full px-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-300/50 focus:border-transparent transition-all duration-200";

  const btnClass =
    "w-full py-3 px-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 group cursor-pointer";

  return (
    <div className="min-h-[92vh] flex items-center justify-center p-4 bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 animate-gradient-x">
      <div className="flex w-11/12 mx-auto max-w-5xl rounded-2xl shadow-2xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 transform transition-all duration-300 hover:shadow-3xl">
        <div className="w-full md:w-1/2 p-8 md:px-12 flex flex-col justify-center">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent mb-2">
              Welcome Back
            </h2>
            <p className="text-white/80 text-sm">Sign in to your account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="form-group">
              <div className="relative">
                <MdEmail
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/90"
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
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/90"
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
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors duration-200"
                >
                  {showPassword ? (
                    <MdVisibilityOff size={20} />
                  ) : (
                    <MdVisibility size={20} />
                  )}
                </button>
              </div>

              <div className="flex justify-end mt-2">
                <a
                  onClick={handleForgetPassword}
                  className="text-cyan-200 hover:text-white text-sm font-medium transition-colors duration-200 underline underline-offset-4 cursor-pointer"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 rounded-xl my-btn transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
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

          <div className="flex justify-center text-sm my-3">
            <p className="px-3 bg-transparent text-white/70">
              Or continue with
            </p>
          </div>

          <div className="space-y-3">
            <button onClick={handleGoogleLogin} className={btnClass}>
              <FcGoogle
                size={24}
                className="group-hover:scale-110 transition-transform duration-200"
              />
              Continue with Google
            </button>
          </div>

          <div className="text-center mt-4 pt-2 border-t border-white/10">
            <p className="text-white/80 text-sm">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-white font-semibold hover:text-cyan-200 transition-colors duration-200 underline underline-offset-4"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
        <div className="hidden md:flex md:w-1/2 p-12 flex-col items-center justify-center bg-gradient-to-br from-white/10 to-white/5 border-l border-white/10 relative overflow-hidden">
          <div className="text-center relative z-10">
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Great to{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                See You!
              </span>
            </h1>
            <p className="text-white/80 text-lg font-light leading-relaxed mb-8 max-w-md">
              Continue your journey with us. Access all your projects and
              features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
