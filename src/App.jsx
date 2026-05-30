import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Home,
  HeartHandshake,
  ShieldCheck,
  CalendarCheck,
  Stethoscope,
  ClipboardCheck,
  CheckCircle2,
  Menu,
  ArrowRight,
} from "lucide-react";

const navItems = [
  ["About Us", "about-us"],
  ["Our Services", "our-services"],
  ["Why Choose Us", "why-choose-us"],
  ["Contact Us", "contact-us"],
];

const services = [
  {
    icon: <Home className="h-7 w-7" />,
    title: "Home Services:",
    text: "We take care of everyday tasks like housekeeping, meal preparation, errands, and transportation.",
  },
  {
    icon: <HeartHandshake className="h-7 w-7" />,
    title: "Personal Care:",
    text: "Our caregivers can assist with grooming, bathing, dressing, medication reminders, and more.",
  },
  {
    icon: <Stethoscope className="h-7 w-7" />,
    title: "Nursing Services:",
    text: "We understand that some individuals may require additional medical support. Our qualified private duty nurses can provide in-home treatment, care, support, and education to help you manage your health at home.",
  },
  {
    icon: <ClipboardCheck className="h-7 w-7" />,
    title: "In-Home Assessments:",
    text: "We conduct assessments to understand your needs and create a personalized care plan.",
  },
];

const reasons = [
  ["24/7 Availability:", "We are here for you, whenever you need us."],
  ["Compassionate Care:", "Our caregivers are dependable, trustworthy, and dedicated to your well-being."],
  ["Peace of Mind:", "Our employees are thoroughly screened, insured, and bonded."],
  ["Flexible Scheduling:", "We tailor our services to your preferences."],
  ["Experienced Team:", "We have a proven track record of providing quality care."],
];

const imagePlaceholders = {
  hero: "images/your_health_priority.jpg",
  about: "images/about_us_care_giver.webp",
  priority: "images/hero_home.webp",
  serviceOne: "images/home_services.png",
  serviceTwo: "images/personal_care.jpg",
  goldenCare: "images/golden_care.jpg",
};

function Button({ children, variant = "primary", className = "" }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition";
  const styles = {
    primary: "bg-[#D6A03B] text-[#062F5F] hover:bg-[#F0BE57]",
    navy: "bg-[#062F5F] text-white hover:bg-[#08467E]",
    outline: "border border-[#D6A03B] bg-white text-[#062F5F] hover:bg-[#FFF6E2]",
  };

  return <button className={`${base} ${styles[variant]} ${className}`}>{children}</button>;
}

function ImageBox({ src, alt, className = "" }) {
  return (
    <div className={`relative overflow-hidden bg-[#EAF1F7] ${className}`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}
function SectionIntro({ eyebrow, title, text, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-black uppercase tracking-[0.28em] text-[#D6A03B]">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-black tracking-tight text-[#062F5F] md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-8 text-[#51687E]">{text}</p>}
    </div>
  );
}

function ServiceCard({ service, index }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[#D8E2EA] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#FFF3D6]" />
      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#062F5F] text-[#D6A03B]">
        {service.icon}
      </div>
      <p className="relative mt-6 text-xs font-black uppercase tracking-[0.24em] text-[#D6A03B]">
        Service 0{index + 1}
      </p>
      <h3 className="relative mt-2 text-2xl font-black text-[#062F5F]">{service.title}</h3>
      <p className="relative mt-3 leading-7 text-[#51687E]">{service.text}</p>
    </div>
  );
}

function ReasonRow({ title, text, index }) {
  return (
    <div className="grid gap-4 border-b border-[#D8E2EA] py-5 last:border-b-0 md:grid-cols-[70px_1fr]">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF3D6] text-[#062F5F]">
        <CheckCircle2 className="h-6 w-6" />
      </div>
      <div>
        <p className="text-lg font-black text-[#062F5F]">{title}</p>
        <p className="mt-1 leading-7 text-[#51687E]">{text}</p>
      </div>
    </div>
  );
}

function ContactLine({ icon, label, value, href }) {
  const content = (
    <div className="flex gap-3 rounded-xl bg-white p-4 shadow-sm">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FFF3D6] text-[#062F5F]">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#A67924]">{label}</p>
        <p className="mt-1 break-words text-sm font-bold leading-5 text-[#062F5F]">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}

export default function GoldenTenderHeartWebsite() {
  return (
    <div className="min-h-screen bg-[#F7FAFC] text-[#062F5F]">
      <div className="bg-[#062F5F] px-5 py-2 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-xs font-semibold md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <span className="inline-flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-[#D6A03B]" />351-667-4058</span>
            <span className="inline-flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-[#D6A03B]" />e.muhoya@goldentenderheart.com</span>
          </div>
          <span className="inline-flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-[#D6A03B]" />Monday to Friday (9:00 a.m. to 5:00 p.m)</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-[#D8E2EA] bg-white/95 px-5 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between py-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D6A03B] text-[#062F5F]">
              <HeartHandshake className="h-7 w-7" />
            </div>
            <div>
              <p className="text-xl font-black uppercase tracking-tight text-[#062F5F]">Golden Tender Heart</p>
              <p className="text-xs font-bold text-[#A67924]">High Standards of Care Everyday</p>
            </div>
          </a>

          <div className="hidden items-center gap-7 text-sm font-bold lg:flex">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="text-[#51687E] transition hover:text-[#D6A03B]">
                {label}
              </a>
            ))}
          </div>

          <a href="#contact-us" className="hidden md:block">
            <Button variant="navy">Schedule Consultation</Button>
          </a>
          <Menu className="h-6 w-6 lg:hidden" />
        </nav>
      </header>

      <section id="home" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-0 px-5 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <div className="flex flex-col justify-center rounded-l-[2rem] bg-[#F7FAFC] p-8 md:p-12 lg:p-16">
            <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-[#D6A03B]/40 bg-[#FFF3D6] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#A67924]">
              <ShieldCheck className="h-4 w-4" /> In-home care services
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-[#062F5F] md:text-6xl">
              Live life independently, in the comfort of your own home.
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-[#51687E]">
              GoldenTenderHeart is your trusted partner for in-home care services.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact-us"><Button>Schedule A FREE Consultation <ArrowRight className="h-4 w-4" /></Button></a>
              <a href="#our-services"><Button variant="outline">View Services</Button></a>
            </div>
          </div>

          <div className="relative min-h-[460px] overflow-hidden rounded-r-[2rem] bg-[#062F5F]">
            <ImageBox src={imagePlaceholders.hero} alt="Golden Tender Heart home care" className="absolute inset-0 h-full w-full rounded-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#062F5F]/80 via-[#062F5F]/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white p-5 shadow-xl">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#D6A03B]">Your Health, Our Passion</p>
              <p className="mt-2 text-xl font-black text-[#062F5F]">Our dedicated team is committed to providing personalized and compassionate care.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about-us" className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <ImageBox src={imagePlaceholders.about} alt="About GoldenTenderHeart" className="h-[520px] rounded-[2rem]" />
          <div>
            <SectionIntro
              eyebrow="About Us"
              title="Helping individuals and families maintain a dignified and independent lifestyle at home."
              text="GoldenTenderHeart is your trusted partner for in-home care services. We are dedicated to helping individuals and families maintain a dignified and independent lifestyle at home. Our compassionate caregivers are carefully selected and trained to meet your specific needs."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-3xl font-black text-[#D6A03B]">24/7</p>
                <p className="mt-1 font-bold text-[#062F5F]">Availability</p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-3xl font-black text-[#D6A03B]">FREE</p>
                <p className="mt-1 font-bold text-[#062F5F]">Consultation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="our-services" className="bg-[#062F5F] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="lg:sticky lg:top-28 lg:h-fit">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#D6A03B]">Our Services</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">Your Health, Our Passion</h2>
              <p className="mt-5 text-lg leading-8 text-white/75">
                We conduct assessments to understand your needs and create a personalized care plan.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <ImageBox src={imagePlaceholders.serviceOne} alt="Home services" className="h-44 rounded-2xl" />
                <ImageBox src={imagePlaceholders.serviceTwo} alt="Personal care" className="h-44 rounded-2xl" />
                <ImageBox src={imagePlaceholders.goldenCare} alt="Golden Tender Heart care" className="col-span-2 h-44 rounded-2xl" />
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {services.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="your-health-our-priority" className="bg-white px-5 py-20">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-[#D8E2EA] shadow-sm lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-[#FFF3D6] p-8 md:p-12 lg:p-16">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#A67924]">Your Health Our Priority</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#062F5F] md:text-5xl">Your Health Our Priority</h2>
            <p className="mt-6 text-2xl font-bold leading-10 text-[#51687E]">
              Our dedicated team is committed to providing personalized and compassionate care.
            </p>
          </div>
          <ImageBox src={imagePlaceholders.priority} alt="Your Health Our Priority" className="min-h-[420px] rounded-none" />
        </div>
      </section>

      <section id="why-choose-us" className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro
            eyebrow="Why Choose GoldenTenderHeart?"
            title="Dependable, trustworthy, and dedicated to your well-being."
            text="Our employees are thoroughly screened, insured, and bonded. We tailor our services to your preferences."
          />
          <div className="rounded-[2rem] bg-white p-6 shadow-sm md:p-8">
            {reasons.map(([title, text], index) => (
              <ReasonRow key={title} title={title} text={text} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact-us" className="bg-[#EAF1F7] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Contact Us"
            title="Schedule A FREE Consultation"
            text="Office Hours; Monday to Friday (9:00 a.m. to 5:00 p.m). VoiceMail (Available)."
            centered
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[2rem] bg-[#062F5F] p-8 text-white shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#D6A03B]">Golden Tender Heart</p>
              <h3 className="mt-4 text-3xl font-black">High Standards of Care Everyday</h3>
              <p className="mt-5 leading-8 text-white/75">Live life independently, in the comfort of your own home.</p>
              <a href="tel:3516674058" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#D6A03B] px-5 py-4 text-sm font-black text-[#062F5F] transition hover:bg-[#F0BE57]">
                <Phone className="h-5 w-5" /> 351-667-4058
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <ContactLine icon={<HeartHandshake className="h-5 w-5" />} label="Social" value="@GoldenTenderHeart" />
              <ContactLine icon={<Phone className="h-5 w-5" />} label="Phone" value="351-667-4058" href="tel:3516674058" />
              <ContactLine icon={<Mail className="h-5 w-5" />} label="Email" value="e.muhoya@goldentenderheart.com" href="mailto:e.muhoya@goldentenderheart.com" />
              <ContactLine icon={<MapPin className="h-5 w-5" />} label="Address" value="11 Main St, Andover, MA 01810" />
              <ContactLine icon={<Clock className="h-5 w-5" />} label="Office Hours" value="Monday to Friday (9:00 a.m. to 5:00 p.m)" />
              <ContactLine icon={<ShieldCheck className="h-5 w-5" />} label="Website" value="www.goldentenderheart.com" href="http://www.goldentenderheart.com" />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#062F5F] px-5 py-8 text-center text-sm font-semibold text-white/70">
        © 2026 Golden Tender Heart. High Standards of Care Everyday.
      </footer>
    </div>
  );
}

