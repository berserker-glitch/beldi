import Layout from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <Layout>
      <div className="min-h-screen page-pattern">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Terms of Service
          </h1>

          <Card className="p-8 border-2 border-border space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-foreground leading-relaxed">
                By accessing and using MarocMarket, you accept and agree to be bound by
                the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. Use of Service
              </h2>
              <p className="text-foreground leading-relaxed mb-3">
                You agree to use this service for lawful purposes only. You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Use the service in any way that violates any applicable law</li>
                <li>Engage in any conduct that restricts or inhibits anyone's use of the service</li>
                <li>Impersonate or attempt to impersonate another user or person</li>
                <li>Post false, inaccurate, or misleading information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. User Accounts
              </h2>
              <p className="text-foreground leading-relaxed">
                When you create an account with us, you must provide accurate and complete
                information. You are responsible for safeguarding your account and for all
                activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. Orders and Payments
              </h2>
              <p className="text-foreground leading-relaxed">
                All orders are subject to availability and confirmation of the order price.
                We reserve the right to refuse any order you place with us. Payment must
                be received before your order is dispatched.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. Intellectual Property
              </h2>
              <p className="text-foreground leading-relaxed">
                The service and its original content, features, and functionality are
                owned by MarocMarket and are protected by international copyright,
                trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. Contact Information
              </h2>
              <p className="text-foreground leading-relaxed">
                For any questions about these Terms of Service, please contact us
                through our customer support channels.
              </p>
            </section>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
