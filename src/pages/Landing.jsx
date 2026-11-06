import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Cloud,
  FileCheck2,
  MapPin,
  Menu,
  Package,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const partners = [
  "boat",
  "mamaearth",
  "BEWAKOOF",
  "NYKAA",
  "noise",
  "Minimalist",
];

const stats = [
  { value: "3 LAKH+", label: "SHIPMENTS/DAY" },
  { value: "1 LAKH+", label: "HAPPY BUSINESSES" },
  { value: "24/7", label: "TRACKING & SUPPORT" },
  { value: "29,000+", label: "PIN CODES COVERED" },
];

const capabilities = [
  {
    icon: <Package />,
    title: "Unified Order Shipping",
    text: "Single dashboard to sync, manage & ship orders from all sales channels.",
  },
  {
    icon: <ShieldCheck />,
    title: "Flexible Delivery Services",
    text: "Choose from multiple delivery options that fit your business.",
  },
  {
    icon: <Cloud />,
    title: "COD Operations",
    text: "Streamline COD collection, reconciliation & settlements.",
  },
  {
    icon: <ScanLine />,
    title: "Store Sync",
    text: "Connect your store & import orders in one click.",
  },
  {
    icon: <Truck />,
    title: "Service Choice",
    text: "Choose the right shipping service at the best price.",
  },
  {
    icon: <MapPin />,
    title: "Scan-level Tracking",
    text: "Track every scan from pickup to delivery.",
  },
  {
    icon: <FileCheck2 />,
    title: "RTO & Returns",
    text: "Automate returns & reduce return-to-origin time.",
  },
  {
    icon: <Users />,
    title: "Multi & COD",
    text: "Support multiple shipments & COD orders seamlessly.",
  },
  {
    icon: <Sparkles />,
    title: "Live Analytics",
    text: "Real-time insights to improve your delivery.",
  },
];

function Reveal({ children, className = "" }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.14 },
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="site-shell">
      {/* Offer Bar */}
      <div className="offer-bar bg-[linear-gradient(135deg,#AB9FF7_0%,#E8CAEB_50%,#FCD29F_100%)]">
        ⭐ Limited Period Offer: Sign up today & get ₹250 free credits in your
        wallet.
        <button>Sign up & Claim</button>
      </div>

      {/* Navbar */}
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#top">
            {/* <span className="brand-mark">➤</span>
            <span>
              ZIP<span>IT</span>
              <small>Ship smarter</small>
            </span> */}
            <img src="https://zipit.co.in/__l5e/assets-v1/fcd52a27-9bc8-4c27-84b3-8484ebfce3f6/zipit-horizontal.png" alt="" />
          </a>

          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {["Solutions", "Products", "Pricing", "Resources", "Company"].map(
              (item) => (
                <a key={item} href={`#${item.toLowerCase()}`}>
                  {item} <ChevronDown size={12} />
                </a>
              ),
            )}

            <a className="outline-btn" href="#track">
              Track Order
            </a>
            <a href="#partners">Partners</a>
            <Link to='/login'>Login</Link>
            <Link className="solid-btn" to='/signup'>
              Sign Up
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero container" id="top">
        <Reveal className="hero-copy">
          <div className="eyebrow">
            ⭐ India's Most Trusted Shipping Platform
          </div>

          <h1>
            The smarter way
            <br />
            to ship across
            <br />
            <em>India.</em>
          </h1>

          <p>
            From your first order to thousands of monthly parcels, Zipit brings
            booking, tracking, COD and delivery intelligence into one powerful
            platform.
          </p>

          <div className="mini-points">
            <span>◉ Lowest RTO Charges*</span>
            <span>✣ Faster Deliveries</span>
            <span>◉ Best Support</span>
          </div>

          <div className="hero-offer">
            <strong>
              ₹0<sup>*</sup>
            </strong>
            <b>RTO CHARGES*</b>
            <span>
              Ship without the fear of returns.
              <br />
              Keep more of what you earn.
            </span>
          </div>
        </Reveal>

        <div className="hero-visual">
        </div>

        {/* Signup Form */}
        <Reveal className="signup-card" id="signup">
          <h3>Start shipping with Zipit</h3>
          <p>Get started in 30 seconds. No hidden charges.</p>

          {submitted ? (
            <div className="success-state">
              <Check size={34} />
              <b>You're all set!</b>
              <span>Our team will reach out shortly.</span>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="form-row">
                <input placeholder="Full name" required />
                <input placeholder="Business name" required />
              </div>

              <input placeholder="Email address" type="email" required />

              <input placeholder="Mobile number" required />

              <input placeholder="Pickup pincode" required />

              <select defaultValue="">
                <option value="" disabled>
                  Select account (optional)
                </option>
                <option>eCommerce</option>
                <option>Enterprise</option>
              </select>

              <input placeholder="Password" type="password" required />

              <label>
                <input type="checkbox" required />I agree to Zipit's{" "}
                <b>Terms & Conditions</b>
              </label>

              <button className="gradient-btn">
                Create account & get ₹250
                <ArrowRight size={14} />
              </button>

              <small>
                Already have an account? <b>Login</b>
              </small>
            </form>
          )}
        </Reveal>
      </section>

      {/* Trust Strip */}
      <section className="trust-strip">
        <div className="container trust-items">
          <span>
            ♧ <b>500+ Courier Partners</b>
            <small>Domestic & International</small>
          </span>

          <span>
            ◉ <b>Real-time Tracking</b>
            <small>For every order, globally</small>
          </span>

          <span>
            ▣ <b>Transparent Charges</b>
            <small>No hidden fees, ever</small>
          </span>

          <span>
            ♧ <b>Dedicated Support</b>
            <small>Always here for you</small>
          </span>
        </div>
      </section>

      {/* Partners */}
      <section className="partners container" id="partners">
        <Reveal>
          <p className="center-kicker">TRUSTED BY 25,000+ BUSINESSES</p>

          <h2>Indian D2C brands love shipping with Zipit</h2>

          <div className="partner-logos" aria-label="Partner brands">
            <div className="partner-logos-track">
              {[...partners, ...partners].map((p, i) => (
                <strong key={`${p}-${i}`} aria-hidden={i >= partners.length}>
                  {p}
                </strong>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="benefit-grid">
          {[
            [
              "◉",
              "Affordable Shipping Rates",
              "Save up to 30% on every shipment",
            ],
            ["✣", "Real-time Tracking", "Live updates at every step"],
            ["▣", "Multiple COD Options", "Flexible & secure settlements"],
            ["♧", "Pan India Delivery", "Reaching 29,000+ pincodes"],
          ].map(([icon, title, description]) => (
            <div className="benefit" key={title}>
              <span>{icon}</span>
              <div>
                <b>{title}</b>
                <small>{description}</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WhatsApp Section */}
      <Reveal className="container whatsapp">
        <div>
          <span className="green-pill">● COMMUNICATE SMARTER</span>

          <h2>
            Free WhatsApp
            <br />
            <em>communication.</em>
          </h2>

          <p>
            Send order updates, notifications and promotions instantly via
            WhatsApp. Build trust & boost CX.
          </p>

          <div className="whatsapp-tags">
            <span>✓ Order Updates</span>
            <span>▣ Promo Messages</span>
            <span>◉ COD Reminders</span>
          </div>

          <div className="free-pill">
            ◉ <b>Free with Zipit</b>
            <small>No extra cost. Available to all our users.</small>
          </div>
        </div>

        <div className="w-100">
          <img src="https://zipit.co.in/assets/whatsapp-phone-visual-BGo7_BGL.png" alt="" />
        </div>
      </Reveal>

      {/* Statistics */}
      <Reveal className="stats container">
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </Reveal>

      {/* Scale Section */}
      <section className="scale container">
        <Reveal>
          <span className="section-kicker">BUILT FOR SCALE</span>

          <h2>
            Built for scale.
            <br />
            Designed for control.
          </h2>

          <p>
            Zipit offers a powerful dashboard, delivery exception automation and
            actionable insights to run a data-driven operation.
          </p>

          {[
            "Manage everything from a single dashboard",
            "Actionable Analytics",
            "Automated Workflows",
            "Commercial Clarity",
          ].map((item, i) => (
            <div className="check-line" key={item}>
              <span>◉</span>
              <b>{item}</b>
              <small>
                {
                  [
                    "One place for every shipment",
                    "Make smarter decisions with real-time reports",
                    "Reduce manual work and exceptions",
                    "Clear visibility of costs, performance & payouts",
                  ][i]
                }
              </small>
            </div>
          ))}
        </Reveal>

        <Reveal className="dashboard">
          <div className="dash-top">
            <span>
              Overview
              <br />
              <b>One dashboard. Complete control.</b>
            </span>
            <span>This month⌄</span>
          </div>

          <div className="dash-metrics">
            <b>
              Total Shipments
              <strong>1,25,430</strong>
            </b>

            <b>
              Delivered
              <strong>1,15,132</strong>
            </b>

            <b>
              RTO
              <strong>10,298</strong>
            </b>

            <b>
              COD Collected
              <strong>₹2,45,230</strong>
            </b>
          </div>

          <p>Shipments Trend</p>

          <div className="line-chart">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none">
              <path d="M0 120 C35 145 45 80 90 112 S150 120 180 78 S230 120 270 90 S330 115 360 65 S420 105 500 20" />
            </svg>
          </div>
        </Reveal>
      </section>

      {/* Ecosystem */}
      <section className="ecosystem container">
        <Reveal>
          <p className="center-kicker">COMPLETE SHIPPING ECOSYSTEM</p>

          <h2>Powerful where it matters. Simple where it should be.</h2>
        </Reveal>

        <div className="capability-grid">
          {capabilities.map((capability) => (
            <Reveal className="capability" key={capability.title}>
              <span>{capability.icon}</span>
              <b>{capability.title}</b>
              <p>{capability.text}</p>
              <a href="#signup">Explore →</a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Shipping Journey */}
      <Reveal className="journey container">
        <div className="center-kicker">YOUR SHIPPING JOURNEY</div>

        <h2>Shipping without the maze.</h2>

        <p>Four simple steps from click to doorstep.</p>

        <div className="steps">
          

          {[
            ["1", "Connect", "Sync your store and start orders"],
            ["2", "Prepare", "Generate labels & schedule pickups"],
            ["3", "Ship", "We deliver to your customer"],
            ["4", "Track", "Real-time updates at every step"],
          ].map(([number, title, description]) => (
            <div key={number}>
              <i>{number}</i>
              <b>{title}</b>
              <span>{description}</span>
            </div>
          ))}
        </div>
      </Reveal>

      {/* CTA */}
      <Reveal className="cta container">
        <div className="">
          <span>YOUR PARTNER IN GROWTH</span>

          <h2>Build a faster, clearer shipping operation.</h2>

          <p>Bring every delivery decision into one connected workspace.</p>

          <div className="flex ">
            <button className="gradient-btn">Start shipping now →</button>
            <button className="dark-btn">Schedule a demo</button>
          </div>
        </div>
      </Reveal>

      {/* Footer */}
      <footer>
        <div className="container footer-grid">
          <div>
            <a>
              <img width={130} height={130} src="https://zipit.co.in/__l5e/assets-v1/6d8e5991-08e6-475c-a3b1-eba3330e3e98/zipit-vertical-web.png" alt="" />
            </a>

            <p>
              A technology-powered shipping platform that makes shipping simple,
              reliable and delightful for businesses across India.
            </p>
          </div>

          {[
            [
              "Solutions",
              "E-commerce Shipping",
              "D2C Brands",
              "SMB & Enterprise",
            ],
            ["Products", "Order Tracking", "WhatsApp Alerts", "RTO Automation"],
            ["Resources", "Help Center", "Blog", "API Docs"],
            ["Company", "About Us", "Careers", "Contact Us"],
          ].map(([title, ...links]) => (
            <div key={title}>
              <b>{title}</b>

              {links.map((link) => (
                <a href="#top" key={link}>
                  {link}
                </a>
              ))}
            </div>
          ))}

          <div>
            <b>Registered Office</b>
            <span>
              Plot No. 70, Sector 44,
              <br />
              Gurugram, Haryana – 122003
            </span>
            <span>+91 124 000 000</span>
            <span>support@zipit.com</span>
          </div>
        </div>

        <div className="copyright">
          © 2024 Zipit Logistics Pvt. Ltd. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
