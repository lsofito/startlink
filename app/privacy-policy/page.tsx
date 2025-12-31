import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Star Link Business Solutions FZE LLC - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information"
        breadcrumbs={[{ name: "Privacy Policy", href: "/privacy-policy" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                The terms and conditions outlined in this Privacy Policy are an integral part of the website's
                usage guidelines, including its title and terms. This Policy aims to help you understand how
                we collect, use, and protect the personal information you share with us. It is also designed
                to assist you in making informed decisions while using our website, products, and services.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                <p className="text-gray-700 font-medium">
                  Privacy & confidentiality are of utmost importance to Star Link Business Solutions FZE LLC
                </p>
              </div>

              <p className="text-gray-600 mb-8">
                This Privacy Policy outlines the types of information that may or may not be collected through
                the Star Link Business Solutions FZE LLC website and explains how such information is used.
                Star Link Business Solutions FZE LLC is committed to respecting the privacy and confidentiality
                of all website visitors, clients, prospective clients, partners, and affiliates.
              </p>

              <p className="text-gray-600 mb-8">
                The website does not collect personal information unless you voluntarily choose to provide it.
                If you provide personal information, it will only be used to process your request for information,
                service registration, or company setup. Website forms may request contact details such as your
                name and email address, which will be used to facilitate company incorporation or other legal
                entity formation as requested and to provide technical support. Contact information may also be
                used to communicate with you when necessary.
              </p>

              <p className="text-gray-600 mb-12 font-medium">
                By using this website, you acknowledge and accept these privacy terms and conditions. If you do
                not agree to these terms or any part of them, you must not use the website.
              </p>

              {/* Section 1: Security */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-dark mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-lg font-bold">1</span>
                  Security
                </h2>
                <div className="pl-13 space-y-4 text-gray-600">
                  <p>
                    This website and its administrators adhere to a comprehensive and strict information security
                    policy. Access to personal identity information is restricted to authorized personnel only. We
                    take reasonable precautions to safeguard the confidentiality and security of personal information
                    disclosed to us and do not share it with third parties unless required by law. However, in cases
                    of abuse or security breaches, we are not liable for any unauthorized access or actions by third
                    parties who may obtain information illegally.
                  </p>
                  <p>
                    By submitting registration and application forms, you confirm that the information provided is
                    accurate and truthful. You are responsible for keeping your User ID (login) and password
                    confidential and are accountable for all activities associated with your User ID, whether
                    authorized by you or not. You agree to notify us immediately of any unauthorized use of your
                    User ID or password. For more details, please refer to our Privacy Statement, which governs
                    the handling of submitted and distributed information.
                  </p>
                  <p>
                    The laws of the United Arab Emirates will exclusively govern any disputes arising from the use
                    of this website. Additionally, the courts of the United Arab Emirates shall have sole jurisdiction
                    to resolve such disputes.
                  </p>
                </div>
              </div>

              {/* Section 2: Cookies */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-dark mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-lg font-bold">2</span>
                  What is a Cookie?
                </h2>
                <div className="pl-13 space-y-4 text-gray-600">
                  <p>
                    Cookies are a feature of web browser (Firefox, Safari, Internet Explorer, Netscape Navigator, etc.)
                    software that allows web servers to recognize the computer used to access a site. They are small
                    pieces of data that are stored by a user's web browser on one site to simplify subsequent interactions
                    with that site by the same user or to use the information to streamline the user's transaction on
                    related web pages.
                  </p>
                  <p>
                    This makes it easier for a user to move from site to site and to complete transactions over the
                    Internet. Cookies should make your online experience easier and more personalized. Overall, cookies
                    help us provide you with a better website, by enabling us to monitor which pages you find useful
                    and which you do not. A cookie in no way gives us access to your computer or any information about
                    you, other than the data you choose to share with us.
                  </p>
                  <p>
                    You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but
                    you can usually modify your browser setting to decline cookies if you prefer. This may prevent
                    you from taking full advantage of the website.
                  </p>
                </div>
              </div>

              {/* Section 3: How we use cookies */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-dark mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-lg font-bold">3</span>
                  How We Use Cookies
                </h2>
                <div className="pl-13 text-gray-600">
                  <p>
                    We utilize traffic log cookies to identify the pages being accessed. This allows us to analyze
                    website traffic data and enhance our site to better meet customer needs. The information is used
                    solely for statistical analysis and is removed from the system once the analysis is complete.
                  </p>
                </div>
              </div>

              {/* Section 4: Links to other websites */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-dark mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-lg font-bold">4</span>
                  Links to Other Websites
                </h2>
                <div className="pl-13 text-gray-600">
                  <p>
                    Our website may contain links to other websites that you can access. However, once you leave our
                    site using these links, please be aware that we have no control over the content or practices of
                    those external websites. As a result, we cannot be held responsible for the protection and privacy
                    of any information you provide while visiting such sites, as they are not governed by this Privacy
                    Policy. We recommend exercising caution and reviewing the privacy policy of the website you are visiting.
                  </p>
                </div>
              </div>

              {/* Section 5: Online Privacy Policy Only */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-dark mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-lg font-bold">5</span>
                  Online Privacy Policy Only
                </h2>
                <div className="pl-13 text-gray-600">
                  <p>
                    This online privacy policy applies solely to information collected through our website and does
                    not cover information gathered offline.
                  </p>
                </div>
              </div>

              {/* Section 6: Your Consent */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-dark mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-lg font-bold">6</span>
                  Your Consent
                </h2>
                <div className="pl-13 text-gray-600">
                  <p>
                    By using our site, you agree to abide by our website's privacy policy.
                  </p>
                </div>
              </div>

              {/* Section 7: Payment Confirmation */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-dark mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-lg font-bold">7</span>
                  Payment Confirmation
                </h2>
                <div className="pl-13 text-gray-600">
                  <p>
                    The customer will receive a payment confirmation by email within 24 hours.
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 className="font-display text-xl font-bold text-dark mb-4">
                  Questions About Our Privacy Policy?
                </h3>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
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
