import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Epic Toyota Chennai",
  description: "Privacy Policy for Epic Toyota - Learn how we collect, use, and protect your personal information in accordance with Indian data protection laws.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
          <div className="space-y-8 text-gray-700">

            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Welcome to Epic Toyota, a premium Toyota dealership based in Chennai, Tamil Nadu, and a proud member of Raam Group, India's fastest-growing automotive collective. We are committed to protecting your privacy and ensuring the security of your personal information.
              </p>
              <p className="leading-relaxed mt-3">
                This Privacy Policy explains how EPIC Motors India Private Limited ("Epic Toyota," "we," "us," or "our") collects, uses, stores, shares, and protects your personal data when you visit our website, interact with our services, or engage with us through various channels. This policy is designed in accordance with the Information Technology Act, 2000, and the Digital Personal Data Protection Act, 2023, along with other applicable Indian data protection regulations.
              </p>
              <p className="leading-relaxed mt-3">
                By accessing our website or using our services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="leading-relaxed mb-3">
                We collect various types of information to provide and improve our services to you:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-3">2.1 Personal Information</h3>
              <p className="leading-relaxed">
                When you interact with our website or services, we may collect the following personal data:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Name:</strong> Full name as provided in contact or booking forms</li>
                <li><strong>Contact Details:</strong> Phone number, email address, and postal address</li>
                <li><strong>Vehicle Preferences:</strong> Model interests, test drive requests, and purchase inquiries</li>
                <li><strong>Communication Data:</strong> Feedback, queries, and correspondence through contact forms or customer support channels</li>
                <li><strong>Financial Information:</strong> Payment details for bookings or purchases (processed securely through authorized payment gateways)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-3">2.2 Technical and Usage Data</h3>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Device Information:</strong> IP address, browser type, operating system, device type</li>
                <li><strong>Website Analytics:</strong> Pages visited, time spent on pages, referring URLs, and navigation patterns</li>
                <li><strong>Cookies and Tracking Technologies:</strong> Session cookies, analytics cookies, and marketing cookies (see Section 6 for details)</li>
                <li><strong>Location Data:</strong> Approximate geographic location based on IP address</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-3">2.3 Newsletter and Marketing Data</h3>
              <p className="leading-relaxed">
                If you subscribe to our newsletter or opt-in for promotional communications, we collect your email address and communication preferences.
              </p>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="leading-relaxed mb-3">
                We use the information collected for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Delivery:</strong> To process test drive bookings, vehicle inquiries, service appointments, and purchase transactions</li>
                <li><strong>Customer Communication:</strong> To respond to your queries, provide customer support, and send booking confirmations</li>
                <li><strong>Marketing and Promotions:</strong> To send newsletters, promotional offers, new vehicle launches, and special events (only with your consent)</li>
                <li><strong>Website Improvement:</strong> To analyze user behavior, improve website functionality, and enhance user experience</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
                <li><strong>Security and Fraud Prevention:</strong> To protect our website, services, and users from fraudulent activities and security threats</li>
                <li><strong>Business Operations:</strong> To maintain internal records, conduct research, and improve our dealership operations</li>
              </ul>
            </section>

            {/* Data Sharing and Disclosure */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Sharing and Disclosure</h2>
              <p className="leading-relaxed mb-3">
                We respect your privacy and do not sell your personal information. However, we may share your data with the following parties under specific circumstances:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-3">4.1 Toyota Kirloskar Motor Private Limited (Toyota India)</h3>
              <p className="leading-relaxed">
                As an authorized Toyota dealership, we may share customer information with Toyota India for warranty registration, service records, vehicle tracking, and customer satisfaction programs.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-3">4.2 Raam Group Internal Systems</h3>
              <p className="leading-relaxed">
                Your data may be shared within the Raam Group's internal Customer Relationship Management (CRM) systems for centralized customer service, business analytics, and improved customer experience across Raam Group dealerships.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-3">4.3 Service Providers and Third Parties</h3>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Payment Gateways:</strong> Secure payment processors for handling online transactions</li>
                <li><strong>Analytics Providers:</strong> Google Analytics and similar tools for website performance analysis</li>
                <li><strong>Email and SMS Services:</strong> Communication platforms for sending newsletters, booking confirmations, and promotional messages</li>
                <li><strong>Cloud Service Providers:</strong> Data hosting and storage services</li>
                <li><strong>Marketing Partners:</strong> Digital marketing agencies and advertising platforms (e.g., Google Ads, Facebook Ads) for targeted campaigns</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-3">4.4 Legal and Regulatory Authorities</h3>
              <p className="leading-relaxed">
                We may disclose your information to government authorities, law enforcement agencies, or regulatory bodies if required by law, court order, or legal process.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-3">4.5 Business Transfers</h3>
              <p className="leading-relaxed">
                In the event of a merger, acquisition, or sale of assets, your personal data may be transferred to the new entity, subject to the same privacy protections outlined in this policy.
              </p>
            </section>

            {/* Data Retention and Security */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention and Security Measures</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-3">5.1 Data Retention</h3>
              <p className="leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. Retention periods may vary based on:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Customer relationship duration</li>
                <li>Legal and regulatory requirements</li>
                <li>Business operational needs</li>
              </ul>
              <p className="leading-relaxed mt-3">
                Once your data is no longer required, it will be securely deleted or anonymized.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-3">5.2 Security Measures</h3>
              <p className="leading-relaxed">
                We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Encryption:</strong> SSL/TLS encryption for data transmission over the internet</li>
                <li><strong>Access Controls:</strong> Restricted access to personal data on a need-to-know basis</li>
                <li><strong>Secure Servers:</strong> Data stored on secure, password-protected servers</li>
                <li><strong>Regular Audits:</strong> Periodic security assessments and system audits</li>
                <li><strong>Employee Training:</strong> Staff trained on data protection and confidentiality protocols</li>
              </ul>
              <p className="leading-relaxed mt-3">
                While we take reasonable precautions, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute security but strive to use commercially acceptable means to protect your information.
              </p>
            </section>

            {/* Cookies and Tracking */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="leading-relaxed">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-3">6.1 Types of Cookies We Use</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Necessary for website functionality and navigation</li>
                <li><strong>Analytics Cookies:</strong> Used to understand visitor behavior and improve website performance (e.g., Google Analytics)</li>
                <li><strong>Marketing Cookies:</strong> Track user activity for targeted advertising and remarketing campaigns</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences for a personalized experience</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-3">6.2 Managing Cookies</h3>
              <p className="leading-relaxed">
                You can control and manage cookies through your browser settings. Please note that disabling cookies may affect the functionality of certain website features. Most browsers allow you to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>View and delete cookies</li>
                <li>Block third-party cookies</li>
                <li>Block cookies from specific sites</li>
                <li>Block all cookies</li>
              </ul>
            </section>

            {/* User Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights Under Indian Law</h2>
              <p className="leading-relaxed mb-3">
                Under the Digital Personal Data Protection Act, 2023, and other applicable Indian data protection laws, you have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete personal information</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data, subject to legal and contractual obligations</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for marketing communications or data processing at any time</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your data to another service provider in a commonly used format</li>
                <li><strong>Right to Object:</strong> Object to processing of your personal data for marketing or legitimate business purposes</li>
                <li><strong>Right to Grievance Redressal:</strong> Lodge a complaint with our grievance officer or relevant data protection authority</li>
              </ul>
              <p className="leading-relaxed mt-4">
                To exercise any of these rights, please contact us using the details provided in Section 10.
              </p>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Links</h2>
              <p className="leading-relaxed">
                Our website may contain links to third-party websites, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Toyota Kirloskar Motor (Official OEM Website):</strong> <a href="https://www.toyotabharat.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 underline">www.toyotabharat.com</a></li>
                <li><strong>Google Maps:</strong> For location services and showroom directions</li>
                <li><strong>YouTube:</strong> Embedded videos and promotional content</li>
                <li><strong>Social Media Platforms:</strong> Facebook, Instagram, and other social networks</li>
                <li><strong>Finance Partners:</strong> Third-party vehicle financing providers</li>
              </ul>
              <p className="leading-relaxed mt-4">
                We are not responsible for the privacy practices or content of these external websites. We recommend reviewing the privacy policies of any third-party sites you visit.
              </p>
            </section>

            {/* Updates to Policy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Updates to this Privacy Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or business operations. Any modifications will be posted on this page with an updated "Last Updated" date.
              </p>
              <p className="leading-relaxed mt-3">
                We encourage you to review this Privacy Policy periodically. Continued use of our website and services after any changes indicates your acceptance of the updated policy.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
              <p className="leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal data, please contact us:
              </p>

              <div className="bg-gray-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Epic Toyota Chennai</h3>
                <p className="text-gray-700 mb-2">
                  <strong>EPIC Motors India Private Limited</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  Chennai, Tamil Nadu, India
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:support@epictoyota.co.in" className="text-red-600 hover:text-red-700 underline">
                    support@epictoyota.co.in
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+919500007575" className="text-red-600 hover:text-red-700 underline">
                    +91 95000 07575
                  </a>
                </p>
              </div>

              <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Grievance Officer</h3>
                <p className="text-gray-700 mb-2">
                  For grievances related to data privacy and protection matters, you may contact our designated Grievance Officer:
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:grievance@epictoyota.co.in" className="text-red-600 hover:text-red-700 underline">
                    grievance@epictoyota.co.in
                  </a>
                </p>
                <p className="text-gray-700 text-sm mt-3">
                  We will respond to your grievance within the timeframe prescribed under applicable Indian data protection laws.
                </p>
              </div>
            </section>

            {/* Consent Statement */}
            <section className="bg-red-50 border border-red-200 p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Consent and Agreement</h2>
              <p className="leading-relaxed text-gray-800">
                By using our website, submitting forms, subscribing to newsletters, or engaging with our services, you hereby consent to the collection, use, storage, and disclosure of your personal information as described in this Privacy Policy.
              </p>
              <p className="leading-relaxed text-gray-800 mt-3">
                If you do not agree with the terms of this Privacy Policy, please refrain from using our website or services. Your continued use of our website constitutes your acceptance of this Privacy Policy and any future amendments.
              </p>
            </section>

          </div>
        </div>

        {/* Back to Home Button */}
        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-3 px-8 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
