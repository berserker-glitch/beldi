import Layout from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <Layout>
      <div className="min-h-screen page-pattern">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Privacy Policy
          </h1>

          <Card className="p-8 border-2 border-border space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. Information We Collect
              </h2>
              <p className="text-foreground leading-relaxed mb-3">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Name, phone number, and delivery address</li>
                <li>Order history and preferences</li>
                <li>Payment information (processed securely)</li>
                <li>Communications with customer support</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-foreground leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Process and deliver your orders</li>
                <li>Communicate with you about your orders</li>
                <li>Improve our services and user experience</li>
                <li>Send you promotional communications (with your consent)</li>
                <li>Protect against fraud and unauthorized transactions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. Information Sharing
              </h2>
              <p className="text-foreground leading-relaxed">
                We do not sell your personal information. We may share your information
                with business partners who assist us in operating our service, such as
                delivery services and payment processors. These parties are obligated to
                protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. Data Security
              </h2>
              <p className="text-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect
                your personal information against unauthorized or unlawful processing and
                against accidental loss, destruction, or damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. Your Rights
              </h2>
              <p className="text-foreground leading-relaxed mb-3">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. Contact Us
              </h2>
              <p className="text-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us
                through our customer support channels.
              </p>
            </section>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
