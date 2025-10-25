import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-baloo font-bold text-gray-700 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-3xl font-baloo font-semibold text-gray-700 mb-4">
              Your Privacy Matters
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At ToyNest, we are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy
              Policy explains how we collect, use, and safeguard your data when
              you use our platform.
            </p>
          </section>

          {/* Information Collection */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              1. Information We Collect
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">
                  Personal Information:
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Name, email address, and contact information</li>
                  <li>Shipping and billing addresses</li>
                  <li>
                    Payment information (processed securely by our partners)
                  </li>
                  <li>Profile photo and account preferences</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">
                  Usage Information:
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Browser type and device information</li>
                  <li>IP address and general location</li>
                  <li>Pages visited and time spent on site</li>
                  <li>Search queries and product views</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              2. How We Use Your Information
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Process and fulfill your orders</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send order confirmations and shipping updates</li>
              <li>Personalize your shopping experience</li>
              <li>Improve our website and services</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Prevent fraud and ensure platform security</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              3. Information Sharing
            </h3>
            <p className="text-gray-600 mb-2">
              We may share your information with:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>
                <strong>Sellers:</strong> Necessary information to fulfill your
                orders (name, shipping address, contact info)
              </li>
              <li>
                <strong>Payment Processors:</strong> Secure payment information
                for transaction processing
              </li>
              <li>
                <strong>Shipping Carriers:</strong> Delivery information for
                order fulfillment
              </li>
              <li>
                <strong>Legal Authorities:</strong> When required by law or to
                protect our rights
              </li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              4. Data Security
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We implement industry-standard security measures to protect your
              personal information. This includes SSL encryption, secure
              servers, and regular security assessments. However, no method of
              transmission over the internet is 100% secure.
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              5. Cookies & Tracking
            </h3>
            <p className="text-gray-600 mb-2">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Remember your preferences and login information</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide personalized recommendations</li>
              <li>Improve our website functionality</li>
            </ul>
            <p className="text-gray-600 mt-2">
              You can control cookie settings through your browser preferences.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              6. Children's Privacy
            </h3>
            <p className="text-gray-600 leading-relaxed">
              ToyNest does not knowingly collect personal information from
              children under 13. Our platform is designed for parents and
              guardians to purchase toys for children. If we discover we have
              collected information from a child under 13, we will promptly
              delete it.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              7. Your Rights
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Access and review your personal information</li>
              <li>Update or correct inaccurate data</li>
              <li>Request deletion of your account and data</li>
              <li>Opt-out of marketing communications</li>
              <li>Export your data in a portable format</li>
            </ul>
          </section>

          {/* Data Retention */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              8. Data Retention
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined in this policy, unless a longer
              retention period is required by law. You may request account
              deletion at any time.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              9. Changes to This Policy
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy periodically. We will notify you
              of any material changes by posting the new policy on our website
              and updating the "Last updated" date.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              10. Contact Us
            </h3>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy or your
              personal information, please contact us:
              <br />
              <strong>Email:</strong> privacy@toynest.com
              <br />
              <strong>Phone:</strong> +1 (555) 123-TOYS
              <br />
              <strong>Address:</strong> 123 Play Street, Toy City, TC 12345
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
