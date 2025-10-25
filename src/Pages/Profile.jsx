import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { MdPerson, MdEmail, MdPhoto, MdCalendarToday } from "react-icons/md";
import LoadingPage from "./LoadingPage";
import Swal from "sweetalert2";

const Profile = () => {
  const { user, loading, profileUpdate } = useContext(AuthContext);
  const [showForm, setShowForm] = useState(false);

  if (loading) {
    return <LoadingPage />;
  }

  const handleProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.displayName.value;
    const photo = form.photoURL.value;

    const updatedInfo = {
      displayName: name,
      photoURL: photo,
    };

    profileUpdate(updatedInfo)
      .then(() => {
        Swal.fire({
          title: "Profile updated successfully",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: error.message || "Failed to update profile",
          icon: "error",
        });
      })
      .finally(() => {
        setShowForm(false);
      });
  };
  return (
    <div className="min-h-screen bg-base-200 py-15 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-baloo text-5xl font-bold text-gray-700 mb-2">
            My Profile
          </h1>
          <p className="text-gray-600 text-lg">Your account information</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className={`p-8 ${showForm ? "lg:w-1/2" : "w-full"}`}>
              <div className="flex justify-center mb-6">
                <img
                  src={
                    user.photoURL ||
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      user.displayName || user.email
                    )}&background=4f46e5&color=fff`
                  }
                  alt="Profile"
                  className="w-30 h-30 rounded-full border-4 border-blue-500 shadow-lg"
                />
              </div>

              <div className="flex justify-center mb-6">
                <button
                  onClick={() => setShowForm(!showForm)}
                  className="my-btn py-2 px-6 cursor-pointer transition-colors"
                >
                  {showForm ? "Cancel" : "Edit Profile"}
                </button>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <MdPerson className="text-blue-600" size={25} />
                    <span className="text-gray-700 font-semibold">Name</span>
                  </div>
                  <p className="text-gray-900 text-lg font-semibold">
                    {user.displayName || "Not set"}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <MdEmail className="text-red-600" size={23} />
                    <span className="text-gray-700 font-semibold">Email</span>
                  </div>
                  <p className="text-gray-900 text-lg font-semibold">
                    {user.email}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <MdPhoto className="text-green-600" size={25} />
                    <span className="text-gray-700 font-semibold">
                      Photo URL
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm break-all">
                    {user.photoURL || "No profile photo set"}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <MdCalendarToday className="text-yellow-500" size={22} />
                    <span className="text-gray-700 font-semibold">Status</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        user.emailVerified ? "bg-green-500" : "bg-red-500"
                      }`}
                    ></div>
                    <span className="text-gray-700">
                      {user.emailVerified
                        ? "Email Verified"
                        : "Email Not Verified"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-gray-800 font-semibold mb-3 text-center">
                  Account Details
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <p className="text-gray-600">Created</p>
                    <p className="text-gray-900 font-semibold">
                      {user.metadata?.creationTime
                        ? new Date(
                            user.metadata.creationTime
                          ).toLocaleDateString()
                        : "N/A"}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <p className="text-gray-600">Last Login</p>
                    <p className="text-gray-900 font-semibold">
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

            {showForm && (
              <div className="lg:w-1/2 border-t lg:border-t-0 lg:border-l border-gray-200 p-8">
                <h2 className="font-baloo text-3xl font-bold text-gray-700 mb-6 text-center">
                  Edit Profile
                </h2>
                <form onSubmit={handleProfile} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <MdPerson
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500"
                        size={25}
                      />
                      <input
                        type="text"
                        name="displayName"
                        placeholder="Enter your full name"
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
                        defaultValue={user.displayName || ""}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Photo URL
                    </label>
                    <div className="relative">
                      <MdPhoto
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500"
                        size={20}
                      />
                      <input
                        type="url"
                        name="photoURL"
                        placeholder="https://example.com/photo.jpg"
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
                        defaultValue={user.photoURL || ""}
                      />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="flex-1 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
