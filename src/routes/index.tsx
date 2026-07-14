import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, Clock, Shield, CheckCircle, Award, Home, Sparkles } from "lucide-react";

import heroImage from "@/assets/hero-fireplace.jpg";
import aboutImage from "@/assets/about-chimney.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const contactInfo = {
  phone: "(563) 349-8192",
  email: "Earl.bunch@icloud.com",
  hours: "Mon–Fri: 9am–5pm",
  owner: "Earl Bunch III, Owner/Operator",
};

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-2 text-foreground">
            <span className="font-heading text-2xl leading-none tracking-tight">Falcon's Nest</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/80 md:flex">
            <a href="#services" className="transition-colors hover:text-foreground">Services</a>
            <a href="#about" className="transition-colors hover:text-foreground">About</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </nav>
          <a
            href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">{contactInfo.phone}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="order-2 lg:order-1">
            <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
              Family Owned Since 1976
            </span>
            <h1 className="mt-6 font-heading text-4xl leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
              Professional chimney sweeping you can trust.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Falcon's Nest Chimney Sweeps keeps your home safe, warm, and efficient with honest, reliable service from a family that's been caring for chimneys for nearly 50 years.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                <Phone className="h-5 w-5" />
                Call {contactInfo.phone}
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Explore Services
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Bonded & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Est. 1976</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>No Mess Guarantee</span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={heroImage}
                alt="A warm, glowing fireplace with professional chimney sweep tools nearby"
                width={1440}
                height={912}
                className="h-full w-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">What We Do</span>
            <h2 className="mt-3 font-heading text-3xl text-foreground sm:text-4xl">Services that keep your hearth happy</h2>
            <p className="mt-4 text-muted-foreground">
              From routine maintenance to detailed inspections, we handle every part of your chimney and fireplace with care.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              icon={<Sparkles className="h-6 w-6" />}
              title="Chimney Sweeping"
              description="Thorough removal of soot, creosote, and debris to reduce fire risk and improve airflow."
            />
            <ServiceCard
              icon={<Shield className="h-6 w-6" />}
              title="Safety Inspections"
              description="Level 1 and Level 2 inspections to identify cracks, blockages, and structural concerns."
            />
            <ServiceCard
              icon={<Home className="h-6 w-6" />}
              title="Fireplace Cleaning"
              description="Deep cleaning of fireboxes, hearths, and glass doors so your fireplace looks its best."
            />
            <ServiceCard
              icon={<Award className="h-6 w-6" />}
              title="Relining & Repairs"
              description="Expert liner installation, masonry repair, and cap replacement to protect your home."
            />
          </div>
          <div className="mx-auto mt-12 max-w-4xl rounded-2xl bg-card p-8 shadow-sm">
            <h3 className="font-heading text-xl text-foreground">Full service list</h3>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Fireplace sweeping",
                "Level 1, 2 & 3 chimney inspections",
                "ChimScan video inspections",
                "Damper repair",
                "Animal removal",
                "Crowns & tuck pointing",
                "Liners & waterproofing",
                "Chimney caps & accessories",
                "Animal guards & screening",
                "Ventilation products",
                "Dryer vent cleaning",
                "Gutters cleaned",
              ].map((s) => (
                <li key={s} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-xl">
            <img
              src={aboutImage}
              alt="A professional chimney sweep cleaning a fireplace from inside the firebox"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Story</span>
            <h2 className="mt-3 font-heading text-3xl text-foreground sm:text-4xl">A local family tradition since 1976</h2>
            <p className="mt-4 text-muted-foreground">
              Falcon's Nest Chimney Sweeps was founded by Earl Bunch III, who bought the business at age 24 from Tony Barnett—the original owner and Earl's next-door neighbor growing up. Earl had worked for Tony as a teenager, and he's been working on chimneys his whole life, bringing more than 30 years of professional experience to every home we serve.
            </p>
            <p className="mt-4 text-muted-foreground">
              Today, Earl Bunch IV is the full-time chimney technician with over a decade of hands-on experience. For larger repair work like rebuilding chimneys, replacing caps, and repairing crowns, Josh Keever joins the team as our full-time Master Chimney Mason. With his help, we've repaired thousands of chimneys over the years.
            </p>
            <p className="mt-4 text-muted-foreground">
              At Falcon's Nest, we believe in hard work, honesty, and physical health—we all take the gym seriously. Climbing roofs and putting in real labor keeps us ready to serve the QC and surrounding areas to the best of our ability.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="rounded-xl bg-card p-5 shadow-sm">
                <div className="font-heading text-3xl text-primary">48+</div>
                <div className="mt-1 text-sm text-muted-foreground">Years of experience</div>
              </div>
              <div className="rounded-xl bg-card p-5 shadow-sm">
                <div className="font-heading text-3xl text-primary">10k+</div>
                <div className="mt-1 text-sm text-muted-foreground">Chimneys serviced</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-primary/5 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Why Choose Us</span>
            <h2 className="mt-3 font-heading text-3xl text-foreground sm:text-4xl">The Falcon's Nest difference</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ReasonCard
              title="No Mess Guarantee"
              description="We use drop cloths, vacuums, and protective gear to leave your home as clean as we found it."
            />
            <ReasonCard
              title="Upfront Pricing"
              description="Clear, honest quotes before any work begins. No hidden fees or last-minute add-ons."
            />
            <ReasonCard
              title="Local & Reliable"
              description="We live in the communities we serve. Count on us to show up when we say we will."
            />
            <ReasonCard
              title="Certified Expertise"
              description="Our sweeps are trained and certified, following industry standards for safety and quality."
            />
            <ReasonCard
              title="Year-Round Service"
              description="From fall prep to mid-winter emergencies, we're here when you need us."
            />
            <ReasonCard
              title="Family Values"
              description="Integrity, respect, and hard work aren't just words—they're how we've done business since 1976."
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Get In Touch</span>
            <h2 className="mt-3 font-heading text-3xl text-foreground sm:text-4xl">Ready to schedule your sweep?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The easiest way to reach us is by phone or email. We typically respond the same business day.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="grid gap-6 sm:grid-cols-2">
              <ContactCard
                icon={<Phone className="h-6 w-6" />}
                label="Phone"
                value={contactInfo.phone}
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              />
              <ContactCard
                icon={<Mail className="h-6 w-6" />}
                label="Email"
                value={contactInfo.email}
                href={`mailto:${contactInfo.email}`}
              />
              <ContactCard
                icon={<Clock className="h-6 w-6" />}
                label="Hours"
                value={contactInfo.hours}
              />
            </div>

            <div className="rounded-2xl bg-card p-8 shadow-lg">
              <h3 className="font-heading text-2xl text-foreground">Request an appointment</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us a little about your chimney and we'll get back to you with availability.
              </p>
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const formData = new FormData(form);
                  const subject = encodeURIComponent("New appointment request from Falcon's Nest website");
                  const body = encodeURIComponent(
                    `Name: ${formData.get("name")}\nPhone: ${formData.get("phone")}\nEmail: ${formData.get("email")}\nMessage: ${formData.get("message")}`,
                  );
                  window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-offset-background transition-colors focus:border-primary focus:ring-2 focus:ring-ring"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-offset-background transition-colors focus:border-primary focus:ring-2 focus:ring-ring"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email address"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-offset-background transition-colors focus:border-primary focus:ring-2 focus:ring-ring"
                />
                <textarea
                  name="message"
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-offset-background transition-colors focus:border-primary focus:ring-2 focus:ring-ring"
                />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Mail className="h-5 w-5" />
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <div className="font-heading text-2xl text-foreground">Falcon's Nest Chimney Sweeps, Ltd.</div>
              <p className="mt-1 text-sm text-muted-foreground">{contactInfo.owner} • Family owned since 1976 • Bonded & Insured</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-muted-foreground">
              <a href="#services" className="transition-colors hover:text-foreground">Services</a>
              <a href="#about" className="transition-colors hover:text-foreground">About</a>
              <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Falcon's Nest Chimney Sweeps. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="inline-flex items-center justify-center rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </div>
      <h3 className="mt-4 font-heading text-xl text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function ReasonCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-4 rounded-2xl bg-card p-6 shadow-sm">
      <div className="mt-1 flex-shrink-0 text-primary">
        <CheckCircle className="h-6 w-6" />
      </div>
      <div>
        <h3 className="font-heading text-xl text-foreground">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const className =
    "group flex h-full items-start gap-4 rounded-2xl bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md";
  const content = (
    <>
      <div className="flex-shrink-0 rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-sm font-semibold text-muted-foreground">{label}</div>
        <div className="mt-1 text-base font-medium text-foreground break-words">{value}</div>
      </div>
    </>
  );

  if (!href) {
    return <div className={className}>{content}</div>;
  }

  return (
    <a href={href} className={className}>
      {content}
    </a>
  );
}
