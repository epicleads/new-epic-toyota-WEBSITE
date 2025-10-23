import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Epic Toyota Chennai",
  description: "Terms and Conditions for Epic Toyota - Read about our policies on vehicle sales, bookings, payments, and refunds.",
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Terms &amp; Conditions
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
                Welcome to Epic Toyota, a premium authorized Toyota dealership located in Chennai, Tamil Nadu, and a proud member of Raam Group, India's fastest-growing automotive collective.
              </p>
              <p className="leading-relaxed mt-3">
                These Terms and Conditions ("Terms") govern your use of our website, services, and any transactions conducted through or with EPIC Motors India Private Limited ("Epic Toyota," "we," "us," or "our"). By accessing our website, booking a test drive, making an inquiry, or purchasing a vehicle or accessory, you acknowledge that you have read, understood, and agree to be bound by these Terms.
              </p>
              <p className="leading-relaxed mt-3">
                If you do not agree with any part of these Terms, please do not use our website or services.
              </p>
            </section>

            {/* Acceptance of Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By using our website or engaging with our services, you agree to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Comply with these Terms and Conditions</li>
                <li>Provide accurate, complete, and current information when submitting forms or making bookings</li>
                <li>Use our website and services in a lawful manner and for legitimate purposes only</li>
                <li>Accept responsibility for all activities conducted under your account or booking reference</li>
              </ul>
              <p className="leading-relaxed mt-4">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on this page. Your continued use of our website or services after any modifications constitutes acceptance of the updated Terms.
              </p>
            </section>

            {/* Use of Website and Services */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of Website and Services</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-3">3.1 Permitted Use</h3>
              <p className="leading-relaxed">
                Our website is provided for informational and transactional purposes related to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Browsing Toyota vehicle models, specifications, and pricing</li>
                <li>Booking test drives and service appointments</li>
                <li>Submitting inquiries and contacting our dealership</li>
                <li>Exploring financing options and promotional offers</li>
                <li>Purchasing vehicles, accessories, and services</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-3">3.2 Prohibited Activities</h3>
              <p className="leading-relaxed">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Use the website for any unlawful or fraudulent purpose</li>
                <li>Attempt to gain unauthorized access to our systems, networks, or databases</li>
                <li>Transmit viruses, malware, or any harmful code</li>
                <li>Scrape, copy, or reproduce content without our written permission</li>
                <li>Impersonate any person or entity, or falsely represent your affiliation with any party</li>
                <li>Interfere with the proper functioning of the website or disrupt other users' experience</li>
                <li>Use automated systems (bots, scrapers, etc.) to access the website</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Violation of these prohibited activities may result in immediate termination of your access to our website and services, and we reserve the right to pursue legal action.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-3">3.3 Account Security</h3>
              <p className="leading-relaxed">
                If you create an account or receive a booking reference, you are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. Please notify us immediately of any unauthorized use or security breach.
              </p>
            </section>

            {/* Booking, Payments & Refund Policy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Booking, Payments &amp; Refund Policy</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-3">4.1 Vehicle Bookings</h3>
              <p className="leading-relaxed">
                When you book a vehicle with Epic Toyota:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>A booking amount is required to reserve the vehicle, which will be communicated at the time of booking</li>
                <li>The booking amount is adjustable against the final purchase price of the vehicle</li>
                <li>Bookings are subject to vehicle availability and may be affected by manufacturer production timelines</li>
                <li>We will keep you informed of the expected delivery timeline, but we are not liable for delays caused by factors beyond our control (e.g., manufacturer delays, supply chain disruptions, regulatory changes)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-3">4.2 Payment Terms</h3>
              <p className="leading-relaxed">
                Payments can be made through the following methods:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Online payment gateways (credit card, debit card, UPI, net banking)</li>
                <li>Bank transfer or NEFT/RTGS</li>
                <li>Cheque or demand draft (subject to clearance)</li>
                <li>Cash payments (up to limits prescribed by Indian law)</li>
              </ul>
              <p className="leading-relaxed mt-4">
                All payments are processed securely through authorized payment service providers. We do not store your complete payment card details on our servers.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-3">4.3 Refund and Cancellation Policy</h3>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 my-4 rounded-r-lg">
                <p className="font-semibold text-gray-900 mb-2">Important Policy Terms:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-800">
                  <li><strong>Once paid, amounts for completed purchases are non-refundable.</strong></li>
                  <li><strong>Items (vehicles or accessories) once sold cannot be returned.</strong></li>
                  <li><strong>Booking amounts may be refunded, subject to dealership discretion and the terms applicable at the time of booking.</strong></li>
                </ul>
              </div>

              <p className="leading-relaxed mt-4">
                Specific conditions for booking refunds:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Customer-Initiated Cancellation:</strong> If you cancel your booking before the vehicle is invoiced or delivered, refund eligibility will be determined based on the stage of processing and any costs incurred by the dealership. A processing fee or deduction may apply as per dealership policy.</li>
                <li><strong>Dealership-Initiated Cancellation:</strong> In rare cases where we are unable to fulfill your booking due to vehicle unavailability or unforeseen circumstances, we will refund the full booking amount without deductions.</li>
                <li><strong>Refund Processing Time:</strong> Approved refunds will be processed within 7-14 business days to the original payment method.</li>
              </ul>

              <p className="leading-relaxed mt-4">
                For any refund requests or cancellation inquiries, please contact us at{" "}
                <a href="mailto:support@epictoyota.co.in" className="text-red-600 hover:text-red-700 underline">
                  support@epictoyota.co.in
                </a>{" "}
                or call{" "}
                <a href="tel:+919500007575" className="text-red-600 hover:text-red-700 underline">
                  +91 95000 07575
                </a>.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-3">4.4 Finance and Insurance</h3>
              <p className="leading-relaxed">
                We partner with leading financial institutions to offer vehicle financing and insurance solutions. Any financing or insurance products are subject to the terms and conditions of the respective service provider. We act as a facilitator and are not responsible for approval, interest rates, or claims processing by third-party finance and insurance partners.
              </p>
            </section>

            {/* Pricing and Availability */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Pricing and Availability Disclaimer</h2>
              <p className="leading-relaxed">
                All prices, offers, and promotions displayed on our website are:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Subject to change without prior notice</li>
                <li>Inclusive of applicable taxes, unless otherwise stated</li>
                <li>Applicable at the time of booking or purchase confirmation</li>
                <li>Valid for Chennai and surrounding regions served by Epic Toyota</li>
              </ul>
              <p className="leading-relaxed mt-4">
                We make every effort to ensure that pricing, specifications, and availability information on our website is accurate. However, errors may occur. In the event of a pricing error, we reserve the right to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Notify you of the correct price and offer you the option to proceed or cancel</li>
                <li>Cancel the booking or order and issue a full refund if the error significantly impacts the transaction</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Vehicle availability is subject to manufacturer production schedules and dealership inventory. We do not guarantee immediate availability of all models, variants, or colors.
              </p>
            </section>

            {/* Vehicle Information Disclaimer */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Vehicle Information Disclaimer</h2>
              <p className="leading-relaxed">
                The vehicle information, images, specifications, features, colors, and accessories displayed on our website are provided for general informational purposes and are based on data supplied by Toyota Kirloskar Motor Private Limited and other official sources.
              </p>
              <p className="leading-relaxed mt-3">
                Please note:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Specifications may vary:</strong> Actual vehicle specifications, features, and equipment may differ from those shown on the website</li>
                <li><strong>Colors and images:</strong> Vehicle colors and images are indicative and may vary from the actual product due to screen resolution, photography, and lighting conditions</li>
                <li><strong>Features and variants:</strong> Availability of specific features, variants, and accessories is subject to model year, production changes, and regional availability</li>
                <li><strong>Performance and fuel efficiency:</strong> Claimed mileage, performance figures, and technical specifications are based on manufacturer testing under controlled conditions and may vary based on driving habits, road conditions, and vehicle maintenance</li>
              </ul>
              <p className="leading-relaxed mt-4">
                We recommend visiting our showroom for a physical inspection, test drive, and detailed consultation with our sales team to confirm all specifications and features before making a purchase decision.
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property Rights</h2>
              <p className="leading-relaxed">
                All content on this website, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Text, graphics, logos, images, videos, and audio files</li>
                <li>Software, code, and website design</li>
                <li>Trademarks, service marks, and trade names (including "Epic Toyota," "Raam Group," and Toyota-related marks)</li>
                <li>Compilations, databases, and proprietary information</li>
              </ul>
              <p className="leading-relaxed mt-4">
                ...is the property of EPIC Motors India Private Limited, Toyota Kirloskar Motor Private Limited, Raam Group, or their respective licensors and is protected by Indian and international intellectual property laws.
              </p>
              <p className="leading-relaxed mt-3">
                You may not:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Reproduce, distribute, modify, or create derivative works from any content without written permission</li>
                <li>Use any trademarks, logos, or service marks without authorization</li>
                <li>Remove or alter any copyright, trademark, or proprietary notices</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Limited use of content for personal, non-commercial purposes (such as viewing and printing) is permitted, provided proper attribution is maintained.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="leading-relaxed">
                To the fullest extent permitted by Indian law:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-3">8.1 Website Use</h3>
              <p className="leading-relaxed">
                Our website is provided on an "as is" and "as available" basis. We do not warrant that:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>The website will be uninterrupted, secure, or error-free</li>
                <li>All information is accurate, complete, or current</li>
                <li>Any defects or errors will be corrected</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-3">8.2 Exclusion of Liability</h3>
              <p className="leading-relaxed">
                Epic Toyota and Raam Group shall not be liable for:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Any direct, indirect, incidental, consequential, or punitive damages arising from your use of our website or services</li>
                <li>Loss of data, profits, revenue, business opportunities, or goodwill</li>
                <li>Delays or failures in vehicle delivery caused by factors beyond our control (manufacturer delays, natural disasters, strikes, government regulations, etc.)</li>
                <li>Third-party content, services, or links provided on our website</li>
                <li>Unauthorized access to or alteration of your data</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-3">8.3 Maximum Liability</h3>
              <p className="leading-relaxed">
                Our maximum liability for any claim arising out of or related to these Terms or your use of our services shall not exceed the amount paid by you for the specific transaction or service in question.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-3">8.4 Indemnification</h3>
              <p className="leading-relaxed">
                You agree to indemnify, defend, and hold harmless Epic Toyota, Raam Group, and their affiliates, officers, employees, and agents from any claims, liabilities, damages, losses, and expenses (including legal fees) arising out of:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Your violation of these Terms and Conditions</li>
                <li>Your misuse of our website or services</li>
                <li>Your violation of any third-party rights, including intellectual property or privacy rights</li>
              </ul>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Third-Party Links and Services</h2>
              <p className="leading-relaxed">
                Our website may contain links to third-party websites and services, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Toyota Kirloskar Motor (Official OEM Website):</strong> <a href="https://www.toyotabharat.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 underline">www.toyotabharat.com</a></li>
                <li><strong>Finance Partners:</strong> Banks and non-banking financial companies (NBFCs) offering vehicle loans</li>
                <li><strong>Insurance Providers:</strong> Vehicle insurance companies</li>
                <li><strong>Google Maps:</strong> For location and directions</li>
                <li><strong>Social Media Platforms:</strong> Facebook, Instagram, YouTube, etc.</li>
                <li><strong>Payment Gateways:</strong> Secure third-party payment processors</li>
              </ul>
              <p className="leading-relaxed mt-4">
                These third-party websites and services are not under our control. We do not endorse, monitor, or assume responsibility for:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>The content, accuracy, or availability of third-party sites</li>
                <li>The privacy practices or terms of service of external websites</li>
                <li>Any transactions or interactions you have with third parties</li>
              </ul>
              <p className="leading-relaxed mt-4">
                We recommend reviewing the terms and privacy policies of any third-party websites or services before engaging with them. Your use of third-party services is at your own risk.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms and Conditions</h2>
              <p className="leading-relaxed">
                We reserve the right to update, modify, or replace these Terms and Conditions at any time without prior notice. Changes will be effective immediately upon posting on this page with an updated "Last Updated" date.
              </p>
              <p className="leading-relaxed mt-3">
                It is your responsibility to review these Terms periodically. Your continued use of our website or services following any changes constitutes acceptance of the revised Terms.
              </p>
              <p className="leading-relaxed mt-3">
                If we make material changes that significantly affect your rights, we may provide additional notice through email or a prominent announcement on our website.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law and Jurisdiction</h2>
              <p className="leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India.
              </p>
              <p className="leading-relaxed mt-3">
                Any disputes, claims, or legal proceedings arising out of or related to these Terms or your use of our website and services shall be subject to the exclusive jurisdiction of the courts located in Chennai, Tamil Nadu, India.
              </p>
              <p className="leading-relaxed mt-3">
                In the event of any dispute, we encourage you to contact us first to seek an amicable resolution before pursuing formal legal action.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="leading-relaxed mb-4">
                If you have any questions, concerns, or feedback regarding these Terms and Conditions, please contact us:
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
                <h3 className="text-lg font-bold text-gray-900 mb-3">Customer Support Hours</h3>
                <p className="text-gray-700">
                  Monday to Saturday: 9:00 AM - 7:00 PM<br />
                  Sunday: 10:00 AM - 6:00 PM
                </p>
                <p className="text-gray-700 text-sm mt-3 text-gray-600">
                  We strive to respond to all inquiries within 24-48 business hours.
                </p>
              </div>
            </section>

            {/* Acknowledgment Statement */}
            <section className="bg-red-50 border border-red-200 p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Acknowledgment and Agreement</h2>
              <p className="leading-relaxed text-gray-800">
                By using our website, booking a test drive, making an inquiry, subscribing to our newsletter, or making a purchase, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
              <p className="leading-relaxed text-gray-800 mt-3">
                If you do not agree with any part of these Terms, you must immediately discontinue your use of our website and services. Your continued access and use of Epic Toyota's website and services constitutes your acceptance of these Terms and any future amendments.
              </p>
              <p className="leading-relaxed text-gray-800 mt-3 font-semibold">
                Thank you for choosing Epic Toyota. We look forward to serving you.
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
