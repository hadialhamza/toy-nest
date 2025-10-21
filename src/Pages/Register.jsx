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

const Register = () => {
  const { createUser, profileUpdate, verifyEmail, logout, setUser } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    const displayName = event.target.name?.value;
    const photoURL = event.target.photo?.value;
    const email = event.target.email?.value;
    const password = event.target.password?.value;

    event.preventDefault();

    const regExPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
    if (!regExPassword.test(password)) {
      toast.error(
        "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number and one special characters"
      );
      return;
    }

    setIsLoading(true);

    createUser(email, password)
      .then(() => {
        toast.success("User Created Successfully");
        profileUpdate({ displayName, photoURL })
          .then(() => {
            verifyEmail()
              .then(() => {
                toast.success("Email Verification Sent");
                logout()
                  .then(() => {
                    setUser(null);
                    navigate("/login");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              })
              .catch((err) => {
                console.log(err);
                toast.error(err.message);
              });
          })
          .catch((err) => {
            console.log(err);
            toast.error(err.message);
          });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const inputClass =
    "w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-300/50 focus:border-transparent transition-all duration-200";

  return (
    <div className="min-h-[90vh] flex items-center justify-center p-4 bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 animate-gradient-x">
      <div className="w-11/12 mx-auto flex max-w-5xl rounded-2xl shadow-2xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 transform transition-all duration-300 hover:shadow-3xl">
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent mb-2">
              Join Our Community
            </h2>
            <p className="text-white/80 text-sm">
              Create your account in seconds
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-6">
            <div className="form-group">
              <div className="relative">
                <MdPerson
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/90"
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
                <MdPhoto
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/90"
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
                <MdEmail
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/90"
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
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 rounded-xl my-btn active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
          <div className="text-center mt-6 pt-4 border-t border-white/30">
            <p className="text-white/80 text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-white font-semibold hover:text-cyan-200 transition-colors duration-200 underline underline-offset-4"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
        <div className="hidden md:flex md:w-1/2 p-12 flex-col items-center justify-center bg-gradient-to-br from-white/10 to-white/5 border-l border-white/10 overflow-hidden">
          <div className="text-center relative z-10">
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Start Your{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Adventure
              </span>
            </h1>
            <p className="text-white/80 text-lg font-light leading-relaxed mb-8 max-w-md">
              Join thousands of users who are already building amazing projects
              with our platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
