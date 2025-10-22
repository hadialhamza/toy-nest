// src/pages/ToyDetails.jsx
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa"; // Using react-icons
import useToysData from "../Hook/useToysData";
import TryNowForm from "../Components/Form/TryNowForm";

const ToyDetails = () => {
  const { id } = useParams(); // Get the ID from the URL
  const { toys, loading, error } = useToysData();
  const toy = toys.find((toy) => toy.toyId === parseInt(id));

  if (loading) {
    return <div className="text-center py-20">Loading toy details...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  if (!toy) {
    return <div className="text-center py-20">Toy not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Toy Image */}
        <div>
          <img
            src={toy.pictureURL}
            alt={toy.name}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Toy Info & Form */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{toy.toyName}</h1>
          <p className="text-gray-600">{toy.description}</p>

          <div className="flex items-center space-x-4">
            <span className="text-3xl font-semibold text-blue-600">
              ${toy.price}
            </span>
            <div className="flex items-center text-yellow-400">
              <FaStar />
              <span className="ml-1 text-gray-700">{toy.rating}</span>
            </div>
            <span className="text-gray-500">
              ({toy.availableQuantity} in stock)
            </span>
          </div>

          <div className="text-sm">
            <p>
              <strong>Seller:</strong> {toy.sellerName}
            </p>
            <p>
              <strong>Seller Email:</strong> {toy.sellerEmail}
            </p>
            <p>
              <strong>Category:</strong> {toy.subCategory}
            </p>
          </div>

          {/* Requirement 8.d: "Try Now" Form */}
          <div className="pt-6 border-t">
            <h2 className="text-2xl font-semibold mb-4">Want to try it out?</h2>
            <TryNowForm toyName={toy.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
