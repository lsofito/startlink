import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund Policy for ABT Business & Financial Services LLC - Learn about our refund terms and conditions.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <PageHero
        title="Refund Policy"
        subtitle="Our refund terms and conditions"
        breadcrumbs={[{ name: "Refund Policy", href: "/refund-policy" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                At ABT BUSINESS & FINANCIAL SERVICES LLC, we are committed to providing excellent services
                to our clients. This Refund Policy outlines the terms and conditions under which refunds
                may be requested and processed.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                <p className="text-gray-700 font-medium">
                  Please read this policy carefully before engaging our services. By using our services,
                  you agree to the terms outlined below.
                </p>
              </div>

              {/* Section 1: Service Nature */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-dark mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-lg font-bold">1</span>
                  Nature of Services
                </h2>
                <div className="pl-13 space-y-4 text-gray-600">
                  <p>
                    ABT BUSINESS & FINANCIAL SERVICES LLC provides business setup, licensing, visa processing,
                    PRO services, and related consultancy services in the United Arab Emirates. Our services
                    involve third-party government fees, processing charges, and professional service fees.
                  </p>
                </div>
              </div>

              {/* Section 2: Government Fees */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-dark mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-lg font-bold">2</span>
                  Government & Third-Party Fees
                </h2>
                <div className="pl-13 space-y-4 text-gray-600">
                  <p>
                    Government fees, free zone fees, and any third-party charges paid on behalf of the client
                    are <strong>non-refundable</strong> once submitted to the respective authorities. These
                    fees are collected and paid directly to government entities and cannot be recovered.
                  </p>
                  <p>
                    Such fees include but are not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Trade license fees</li>
                    <li>Visa processing and stamping fees</li>
                    <li>Medical examination fees</li>
                    <li>Emirates ID fees</li>
                    <li>Free zone registration fees</li>
                    <li>Document attestation and typing fees</li>
                    <li>Labor card and establishment card fees</li>
                  </ul>
                </div>
              </div>

              {/* Section 3: Service Fees */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-dark mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-lg font-bold">3</span>
                  Professional Service Fees
                </h2>
                <div className="pl-13 space-y-4 text-gray-600">
                  <p>
                    Our professional service fees cover consultation, documentation preparation, application
                    submission, follow-up, and coordination with relevant authorities. Refund eligibility
                    for service fees depends on the stage of service delivery:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Before work commences:</strong> Full refund of service fees may be provided
                      if the request is made within 48 hours of payment and no work has been initiated.
                    </li>
                    <li>
                      <strong>Work in progress:</strong> Partial refunds may be considered based on the
                      percentage of work completed. Assessment will be made on a case-by-case basis.
                    </li>
                    <li>
                      <strong>Service completed:</strong> No refund will be provided once the service
                      has been delivered successfully.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 4: Cancellation */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-dark mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-lg font-bold">4</span>
                  Cancellation by Client
                </h2>
                <div className="pl-13 space-y-4 text-gray-600">
                  <p>
                    If you wish to cancel your service request, please notify us in writing as soon as
                    possible. Cancellation requests should be sent to our official email address.
                  </p>
                  <p>
                    Cancellation fees may apply based on:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Time elapsed since service initiation</li>
                    <li>Work already completed</li>
                    <li>Third-party fees already incurred</li>
                    <li>Administrative processing costs</li>
                  </ul>
                </div>
              </div>

              {/* Section 5: Application Rejection */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-dark mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-lg font-bold">5</span>
                  Application Rejection
                </h2>
                <div className="pl-13 space-y-4 text-gray-600">
                  <p>
                    In cases where a license application, visa application, or any other government-related
                    application is rejected by the authorities:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Rejection due to client-related issues:</strong> No refund will be provided
                      if the rejection is due to incomplete documentation, false information, or failure
                      to meet eligibility criteria on the client's part.
                    </li>
                    <li>
                      <strong>Rejection due to regulatory changes:</strong> If rejection is due to sudden
                      regulatory changes beyond our control, we will work with you to find alternative
                      solutions or provide a partial service fee refund.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 6: Refund Process */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-dark mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-lg font-bold">6</span>
                  Refund Process
                </h2>
                <div className="pl-13 space-y-4 text-gray-600">
                  <p>
                    To request a refund, please follow these steps:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Submit a written refund request to our official email address</li>
                    <li>Include your order/invoice number and reason for refund</li>
                    <li>Provide supporting documentation if applicable</li>
                    <li>Allow up to 7 business days for our team to review your request</li>
                  </ol>
                  <p className="mt-4">
                    If approved, refunds will be processed within 14 business days to the original
                    payment method used for the transaction.
                  </p>
                </div>
              </div>

              {/* Section 7: Disputes */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-dark mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-lg font-bold">7</span>
                  Dispute Resolution
                </h2>
                <div className="pl-13 space-y-4 text-gray-600">
                  <p>
                    Any disputes arising from this refund policy shall be governed by the laws of the
                    United Arab Emirates. Both parties agree to attempt to resolve any disputes amicably
                    before seeking legal remedies.
                  </p>
                  <p>
                    The courts of the United Arab Emirates shall have exclusive jurisdiction over any
                    legal proceedings arising from or related to this policy.
                  </p>
                </div>
              </div>

              {/* Section 8: Policy Changes */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-dark mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-lg font-bold">8</span>
                  Policy Updates
                </h2>
                <div className="pl-13 text-gray-600">
                  <p>
                    ABT BUSINESS & FINANCIAL SERVICES LLC reserves the right to modify this Refund Policy
                    at any time. Changes will be effective immediately upon posting on this website.
                    Continued use of our services after any modifications indicates your acceptance
                    of the updated policy.
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 className="font-display text-xl font-bold text-dark mb-4">
                  Questions About Our Refund Policy?
                </h3>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Refund Policy or need to request a refund, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> Info@starlinkbiz.com</p>
                  <p><strong>Phone:</strong> +97150 9490768</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
