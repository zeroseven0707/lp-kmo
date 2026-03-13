import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsConditions = () => (
  <>
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground mb-2">Terms & Conditions</h1>
        <p className="text-sm text-muted-foreground mb-8">KMO App – Ekosistem Literasi</p>

        <div className="prose prose-sm max-w-none space-y-8 text-muted-foreground">
          <p>Welcome to KMO App. These Terms and Conditions govern your access to and use of the KMO App mobile application and related services.</p>
          <p>By accessing or using the application, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use the application.</p>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">1. About KMO App</h2>
            <p>KMO App is a digital platform designed to support literacy development, particularly in the areas of writing, publishing, and building a career as a writer.</p>
            <p className="mt-2">The application may provide services such as:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Writing learning materials</li>
              <li>Literacy classes and educational content</li>
              <li>Writer community interaction</li>
              <li>Discussions and collaborative learning</li>
            </ul>
            <p className="mt-2">The goal of KMO App is to help users develop writing skills and participate in a positive and productive literacy ecosystem.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">2. Eligibility</h2>
            <p>By using KMO App, you confirm that:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>You are at least 13 years old, or you are using the application with parental or guardian consent.</li>
              <li>The information you provide during registration is accurate and truthful.</li>
              <li>You will use the application in compliance with applicable laws and regulations.</li>
            </ul>
            <p className="mt-2">We reserve the right to suspend or terminate accounts that violate these terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">3. User Accounts</h2>
            <p>Some features of the application may require users to create an account.</p>
            <p className="mt-2">Users are responsible for:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Maintaining the confidentiality of their account credentials</li>
              <li>Safeguarding their login information</li>
              <li>All activities that occur under their account</li>
            </ul>
            <p className="mt-2">KMO App is not responsible for any loss or damage resulting from unauthorized use of user accounts.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">4. User Content</h2>
            <p>Users may create, upload, or share content within the application, including writing, comments, or discussions.</p>
            <p className="mt-2">By submitting content, you agree that:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>The content is your original work or you have the legal right to share it.</li>
              <li>The content does not violate any intellectual property rights or applicable laws.</li>
              <li>The content does not contain harmful, illegal, or misleading material.</li>
            </ul>
            <p className="mt-2">KMO App reserves the right to remove content that violates these terms without prior notice.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">5. Intellectual Property</h2>
            <p>All content, trademarks, designs, logos, and software within the KMO App are the property of KMO App or its licensors.</p>
            <p className="mt-2">Users may not copy, modify, distribute, or reproduce any part of the application without prior written permission from the rightful owner.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">6. Prohibited Activities</h2>
            <p>Users agree not to use the application to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Post harmful, misleading, or illegal content</li>
              <li>Conduct spam, fraud, or malicious activities</li>
              <li>Interfere with the operation or security of the application</li>
            </ul>
            <p className="mt-2">Violation of these rules may result in account suspension or permanent termination.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">7. Limitation of Liability</h2>
            <p>KMO App strives to provide reliable and useful services. However, we do not guarantee that:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>The application will always be error-free or uninterrupted</li>
              <li>All content available in the application will always be accurate or complete</li>
            </ul>
            <p className="mt-2">Your use of the application is at your own risk.</p>
            <p className="mt-2">KMO App shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of the application.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">8. Third-Party Services</h2>
            <p>The application may contain links or integrations with third-party services.</p>
            <p className="mt-2">KMO App does not control and is not responsible for the policies, content, or services provided by these third parties.</p>
            <p className="mt-2">Users are encouraged to review the terms and privacy policies of third-party services they access.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">9. Service Modifications</h2>
            <p>KMO App reserves the right to modify, update, suspend, or discontinue any part of the application or services at any time without prior notice.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">10. Changes to Terms & Conditions</h2>
            <p>We may update these Terms and Conditions from time to time.</p>
            <p className="mt-2">Any updates will be posted on this page and will take effect immediately upon publication.</p>
            <p className="mt-2">Users are encouraged to review this page periodically.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">11. Governing Law</h2>
            <p>These Terms and Conditions shall be governed and interpreted in accordance with the laws of the Republic of Indonesia.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">12. Contact Information</h2>
            <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
            <p>Email: <a href="mailto:devs.kmo@gmail.com" className="text-primary hover:underline">devs.kmo@gmail.com</a></p>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default TermsConditions;
