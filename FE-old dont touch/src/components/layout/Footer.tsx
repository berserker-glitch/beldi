import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto bg-secondary text-secondary-foreground">
      <div className="absolute inset-0 opacity-20 zelij-pattern-dark" aria-hidden="true" />
      <div className="container relative mx-auto px-4 py-12 lg:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div>
              <span className="font-display text-2xl tracking-[0.3em] text-primary">BELDI</span>
              <p className="mt-2 text-xs uppercase tracking-[0.5em] text-secondary-foreground/70">
                Maison
              </p>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              A modern riad of Moroccan craftsmanship. We partner with verified artisans to curate
              timeless pieces for contemporary homes.
            </p>
            <div className="h-px w-12 bg-primary/70" />
            <p className="text-xs uppercase tracking-[0.4em] text-secondary-foreground/60">
              Casablanca • Marrakech • Fès
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-secondary-foreground/70">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/search?collection=casa" className="transition hover:text-primary">
                  Ceremonial Tea Sets
                </Link>
              </li>
              <li>
                <Link to="/search?category=Handicrafts" className="transition hover:text-primary">
                  Handwoven Rugs
                </Link>
              </li>
              <li>
                <Link to="/search?tag=gift" className="transition hover:text-primary">
                  Gifting Atelier
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="transition hover:text-primary">
                  Reviews & Stories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-secondary-foreground/70">
              Visit & Support
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:concierge@beldi.ma"
                  className="transition hover:text-primary"
                >
                  concierge@beldi.ma
                </a>
              </li>
              <li>
                <Link to="/terms" className="transition hover:text-primary">
                  Terms & Rituals
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="transition hover:text-primary">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/order-tracking" className="transition hover:text-primary">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-secondary-foreground/70">
              Souk Dispatch
            </h3>
            <p className="text-sm text-secondary-foreground/80">
              Receive limited capsule drops, artisan stories, and private appointments.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm backdrop-blur placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary/60"
              />
              <button className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
                Join
              </button>
            </div>
            <div className="flex gap-3 pt-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Mail, label: "Email" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:-translate-y-0.5 hover:border-primary"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs uppercase tracking-[0.4em] text-secondary-foreground/60">
          © {currentYear} Maison BELDI — Crafted with Moroccan soul.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
