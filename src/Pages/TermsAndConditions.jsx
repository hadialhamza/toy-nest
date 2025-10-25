import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <title>ToyNest | Terms & Conditions</title>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Welcome to ToyNest
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms and Conditions govern your use of ToyNest ("we,"
              "our," or "us") website and services. By accessing or using our
              platform, you agree to be bound by these terms.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              1. Account Registration
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>You must be at least 18 years old to create an account</li>
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
              <li>You are responsible for all activities under your account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              2. Purchases & Payments
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>
                All prices are in USD and subject to change without notice
              </li>
              <li>We accept major credit cards and digital payment methods</li>
              <li>Orders are processed within 1-3 business days</li>
              <li>
                Local sellers are responsible for product quality and shipping
              </li>
              <li>Taxes are calculated based on your shipping location</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              3. Shipping & Delivery
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Shipping times vary by seller and location</li>
              <li>Free shipping on orders over $50</li>
              <li>Tracking information provided for all orders</li>
              <li>Delivery delays may occur due to carrier issues</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              4. Returns & Refunds
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>
                30-day return policy for unused items in original packaging
              </li>
              <li>Contact the seller directly for return requests</li>
              <li>Refunds processed within 5-7 business days</li>
              <li>Return shipping costs are the responsibility of the buyer</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              5. User Conduct
            </h3>
            <p className="text-gray-600 mb-2">You agree not to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Use the platform for any illegal purpose</li>
              <li>Harass or threaten other users or sellers</li>
              <li>Post false or misleading product reviews</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Upload malicious code or viruses</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              6. Intellectual Property
            </h3>
            <p className="text-gray-600 leading-relaxed">
              All content on ToyNest, including text, graphics, logos, and
              software, is our property or licensed to us. You may not
              reproduce, distribute, or create derivative works without
              permission.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              7. Limitation of Liability
            </h3>
            <p className="text-gray-600 leading-relaxed">
              ToyNest acts as a marketplace connecting buyers and sellers. We
              are not responsible for the quality, safety, or legality of items
              sold by third-party sellers. Your purchase agreements are directly
              with the sellers.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              8. Changes to Terms
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these terms at any time. Continued
              use of our platform after changes constitutes acceptance of the
              new terms.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              9. Contact Information
            </h3>
            <p className="text-gray-600">
              For questions about these Terms & Conditions, contact us at:
              <br />
              <strong>Email:</strong> legal@toynest.com
              <br />
              <strong>Phone:</strong> +1 (555) 123-TOYS
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
