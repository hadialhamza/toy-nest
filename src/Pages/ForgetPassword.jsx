import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { MdEmail, MdArrowBack } from "react-icons/md";
import Swal from "sweetalert2";
import { ArrowRight } from "lucide-react";

const ForgetPassword = () => {
  const { forgetPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const loginEmail = location.state?.email || "";

  const [email, setEmail] = useState(loginEmail);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire({
        title: "Please enter your email address",
        icon: "warning",
      });
      return;
    }

    setIsLoading(true);

    forgetPassword(email)
      .then(() => {
        Swal.fire({
          title: "Password reset email sent! Redirecting to Gmail...",
          icon: "success",
        });

        setTimeout(() => {
          window.open("https://mail.google.com", "_blank");
        }, 2000);
      })
      .catch((error) => {
        console.error("Password reset error:", error);
        Swal.fire({
          title: error.message || "Failed to send reset email",
          icon: "error",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleBackToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center p-4 bg-base-200">
      <title>Toy Nest | Forget Password</title>
      <div className="w-full max-w-md rounded-2xl shadow-xl overflow-hidden bg-white border border-gray-200">
        <div className="p-8">
          <button
            onClick={handleBackToLogin}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200 mb-6"
          >
            <MdArrowBack size={20} />
            Back to Login
          </button>

          <div className="text-center mb-8">
            <div className="inline-block p-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 mb-4 shadow-lg">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                  ?
                </span>
              </div>
            </div>
            <h2 className="text-4xl font-baloo font-bold text-gray-800 mb-2">
              Reset Password
            </h2>
            <p className="text-gray-600 text-base">
              Enter your email to receive a password reset link
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group">
              <label className="block text-gray-700 font-semibold mb-3">
                Email Address
              </label>
              <div className="relative">
                <MdEmail
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500"
                  size={20}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400 transition-all duration-300"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="my-btn py-4 w-full flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <span className="loading loading-spinner text-success"></span>
              ) : (
                <span className="flex items-center gap-2">
                  Send Reset Link
                  <ArrowRight />
                </span>
              )}
            </button>
          </form>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-600 text-sm text-center">
              We'll send you a link to reset your password. After clicking the
              button, you'll be redirected to Gmail to check your email.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
