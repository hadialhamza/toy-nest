import { useParams } from "react-router";
import { FaStar, FaUser, FaEnvelope, FaTag } from "react-icons/fa";
import useToysData from "../Hook/useToysData";
import TryNowForm from "../Components/Form/TryNowForm";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";

const ToyDetails = () => {
  const { id } = useParams();
  const { toys, loading, error } = useToysData();
  const toy = toys.find((toy) => toy.toyId === parseInt(id));

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorPage />;
  }

  if (!toy) {
    return (
      <div className="text-center py-20 text-3xl font-baloo">
        Toy not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-12">
      <div className="my-container">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 flex items-center justify-center">
              <img
                src={toy.pictureURL}
                alt=""
                className="w-full max-w-md object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-8 lg:p-10 my-auto">
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-baloo lg:text-5xl font-bold text-gray-700 mb-4">
                    {toy.toyName}
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {toy.description}
                  </p>
                </div>

                <div className="flex items-center space-x-6">
                  <span className="text-4xl font-baloo font-bold text-blue-600">
                    ${toy.price}
                  </span>
                  <div className="flex items-center bg-yellow-50 px-4 py-2 rounded-full">
                    <FaStar className="text-xl text-yellow-400" />
                    <span className="ml-2 text-gray-800 font-semibold">
                      {toy.rating}
                    </span>
                  </div>
                  <span className="px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                    In stock
                  </span>
                </div>

                <div className="space-y-3 bg-gray-50 p-6 rounded-2xl">
                  <div className="flex items-center space-x-3">
                    <FaUser className="text-red-500" />
                    <div>
                      <strong className="text-gray-900">Seller:</strong>
                      <span className="ml-2 text-gray-600">
                        {toy.sellerName}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-green-500" />
                    <div>
                      <strong className="text-gray-900">Seller Email:</strong>
                      <span className="ml-2 text-gray-600">
                        {toy.sellerEmail}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaTag className="text-yellow-400" />
                    <div>
                      <strong className="text-gray-900">Category:</strong>
                      <span className="ml-2 text-gray-600">
                        {toy.subCategory}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TryNowForm toyName={toy.toyName} />
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
