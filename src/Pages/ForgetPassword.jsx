import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { MdEmail, MdArrowBack } from "react-icons/md";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const { forgetPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Get email from login page if available
  const loginEmail = location.state?.email || "";

  const [email, setEmail] = useState(loginEmail);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsLoading(true);

    forgetPassword(email)
      .then(() => {
        toast.success("Password reset email sent! Redirecting to Gmail...");

        // Redirect to Gmail after successful email send
        setTimeout(() => {
          window.open("https://mail.google.com", "_blank");
        }, 2000);
      })
      .catch((error) => {
        console.error("Password reset error:", error);
        toast.error(error.message || "Failed to send reset email");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleBackToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-orange-400 via-red-500 to-orange-600">
      <div className="w-full max-w-md rounded-2xl shadow-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20">
        <div className="p-8">
          {/* Back Button */}
          <button
            onClick={handleBackToLogin}
            className="flex items-center gap-2 text-white hover:text-orange-200 transition-colors duration-200 mb-6"
          >
            <MdArrowBack size={20} />
            Back to Login
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block p-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mb-4 shadow-lg">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  ?
                </span>
              </div>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
              Reset Password
            </h2>
            <p className="text-orange-100 text-sm">
              Enter your email to receive a password reset link
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group">
              <label className="block text-white font-semibold mb-3">
                Email Address
              </label>
              <div className="relative">
                <MdEmail
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-500"
                  size={20}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-orange-200 bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900 placeholder-orange-300 transition-all duration-300"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 px-4 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:from-orange-600 hover:to-red-600 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <span className="flex items-center gap-2">
                  Send Reset Link
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              )}
            </button>
          </form>

          {/* Info Text */}
          <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
            <p className="text-orange-200 text-sm text-center">
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
