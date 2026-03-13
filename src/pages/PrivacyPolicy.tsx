import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => (
  <>
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: March 6, 2026</p>

        <div className="prose prose-sm max-w-none space-y-8 text-muted-foreground">
          <p>KMO App – Ekosistem Literasi is committed to protecting the privacy of our users. This document explains how we collect, use, and protect your information when you use our mobile application and outlines the terms governing the use of our services.</p>
          <p>By accessing or using the KMO App's mobile application, you agree to the terms described in this Privacy Policy.</p>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">1. Google Login Policy</h2>
            <p>By installing the KMO App and logging in by Google, you agree to the terms and conditions of sharing data between Google Credential and KMO App. The data taken is only the Account ID, Given Name, Family Name, and email address. The data is used for the benefit of your profile in the KMO App and will not be distributed outside the application.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">2. Information We Collect</h2>
            <p>To provide and improve our services, we may collect certain information from users.</p>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-1">Personal Information</h3>
            <p>When you use certain features of the application, we may collect personal information such as:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Account information</li>
            </ul>
            <p className="mt-2">This information is only collected when voluntarily provided by the user.</p>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-1">Usage Data</h3>
            <p>We may automatically collect certain information about how the application is accessed and used, including:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Device type</li>
              <li>Operating system</li>
              <li>App interaction data</li>
              <li>Crash logs and diagnostics</li>
            </ul>
            <p className="mt-2">This information helps us improve the performance and reliability of the application.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">3. How We Use Your Information</h2>
            <p>The information we collect may be used for the following purposes:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>To provide and maintain the application</li>
              <li>To improve application performance and user experience</li>
              <li>To analyze application usage</li>
              <li>To identify and resolve technical issues</li>
              <li>To communicate important service updates</li>
            </ul>
            <p className="mt-2 font-medium text-foreground">We do not sell, rent, or trade personal user data to third parties.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">4. Third-Party Services</h2>
            <p>Our application may use third-party services that help us operate and improve the application. These services may include:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Google Play Services</li>
              <li>Firebase Analytics</li>
              <li>Crash reporting tools</li>
            </ul>
            <p className="mt-2">These third-party providers may collect information in accordance with their own privacy policies.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">5. Data Security</h2>
            <p>We implement reasonable security measures designed to protect user information.</p>
            <p>However, no system of data transmission or storage can be guaranteed to be 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">6. Data Retention</h2>
            <p>We retain user information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">7. Children's Privacy</h2>
            <p>KMO App – Ekosistem Literasi does not knowingly collect personal information from children under the age of 13. If we become aware that personal data from a child under 13 has been collected, we will take immediate steps to remove such information from our systems. Parents or guardians who believe their child has provided personal information are encouraged to contact us.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy and Terms of Use from time to time. Users are advised to review this page periodically for any changes. Continued use of the application after updates indicates acceptance of the revised policy.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">9. Contact Information</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p>Email: <a href="mailto:devs.kmo@gmail.com" className="text-primary hover:underline">devs.kmo@gmail.com</a></p>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default PrivacyPolicy;
