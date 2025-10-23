import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { MdPerson, MdEmail, MdPhoto, MdCalendarToday } from "react-icons/md";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [showForm, setShowForm] = useState(false);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-400 via-red-500 to-orange-600">
        <div className="text-white text-center">
          <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <p>Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-orange-600 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">My Profile</h1>
          <p className="text-orange-100">Your account information</p>
        </div>

        {/* Main Container */}
        <div className="flex justify-center">
          <div className="flex rounded-2xl shadow-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-500">
            {/* Profile Section - Always on left */}
            <div
              className={`transition-all duration-500 ${
                showForm ? "w-1/2" : "w-full max-w-md"
              }`}
            >
              <div className="p-8">
                {/* Profile Picture */}
                <div className="flex justify-center mb-6">
                  <img
                    src={
                      user.photoURL ||
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        user.displayName || user.email
                      )}&background=fdba74&color=fff`
                    }
                    alt="Profile"
                    className="w-24 h-24 rounded-full border-4 border-white/20 shadow-lg"
                  />
                </div>

                {/* Edit Button */}
                <div className="flex justify-center mb-6">
                  <button
                    onClick={() => setShowForm(!showForm)}
                    className="py-2 px-6 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                  >
                    {showForm ? "Cancel" : "Edit Profile"}
                  </button>
                </div>

                {/* User Information */}
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <MdPerson className="text-orange-300" size={20} />
                      <span className="text-orange-200 font-semibold">
                        Name
                      </span>
                    </div>
                    <p className="text-white text-lg font-semibold">
                      {user.displayName || "Not set"}
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <MdEmail className="text-orange-300" size={20} />
                      <span className="text-orange-200 font-semibold">
                        Email
                      </span>
                    </div>
                    <p className="text-white text-lg font-semibold">
                      {user.email}
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <MdPhoto className="text-orange-300" size={20} />
                      <span className="text-orange-200 font-semibold">
                        Photo URL
                      </span>
                    </div>
                    <p className="text-white text-sm break-all">
                      {user.photoURL || "No profile photo set"}
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <MdCalendarToday className="text-orange-300" size={20} />
                      <span className="text-orange-200 font-semibold">
                        Status
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          user.emailVerified ? "bg-green-500" : "bg-red-500"
                        }`}
                      ></div>
                      <span className="text-white">
                        {user.emailVerified
                          ? "Email Verified"
                          : "Email Not Verified"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Account Metadata */}
                <div className="mt-6 pt-6 border-t border-white/20">
                  <h3 className="text-white font-semibold mb-3 text-center">
                    Account Details
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-white/5 rounded-lg p-3 text-center">
                      <p className="text-orange-200">Created</p>
                      <p className="text-white font-semibold">
                        {user.metadata?.creationTime
                          ? new Date(
                              user.metadata.creationTime
                            ).toLocaleDateString()
                          : "N/A"}
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 text-center">
                      <p className="text-orange-200">Last Login</p>
                      <p className="text-white font-semibold">
                        {user.metadata?.lastSignInTime
                          ? new Date(
                              user.metadata.lastSignInTime
                            ).toLocaleDateString()
                          : "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section - Slides in from right */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                showForm
                  ? "w-1/2 opacity-100 border-l border-white/20"
                  : "w-0 opacity-0"
              }`}
            >
              <div className="p-8 w-full">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                  Edit Profile
                </h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <MdPerson
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-500"
                        size={20}
                      />
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-orange-200 bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 placeholder-orange-300"
                        defaultValue={user.displayName || ""}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Photo URL
                    </label>
                    <div className="relative">
                      <MdPhoto
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-500"
                        size={20}
                      />
                      <input
                        type="url"
                        placeholder="https://example.com/photo.jpg"
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-orange-200 bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 placeholder-orange-300"
                        defaultValue={user.photoURL || ""}
                      />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="flex-1 py-3 rounded-lg border border-orange-300 text-orange-300 font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
