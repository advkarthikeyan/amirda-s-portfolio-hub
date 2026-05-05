import { Linkedin, Mail, Phone, Briefcase } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export const Contact = () => {
  const channels = [
    {
      icon: Mail,
      label: "Email",
      value: "amirdavarshini14@gmail.com",
      href: "mailto:amirdavarshini14@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8248445188",
      href: "tel:+918248445188",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/amirda-varshini",
      href: "https://www.linkedin.com/in/amirda-varshini1114vakkv/",
    },
    {
      icon: Briefcase,
      label: "Naukri",
      value: "View profile",
      href: "https://www.naukri.com/mnjuser/profile?id=&altresid",
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-card/20">
      <div className="container">
        <p className="font-mono-tag mb-4 text-purple-400">// Contact</p>
        <h2 className="font-display text-4xl md:text-7xl mb-8 max-w-3xl">
          Let's build <span className="text-gradient italic">something</span> together.
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mb-12">
          Open to Full Stack Developer opportunities, freelance contracts and collaborations.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {channels.map((c, i) => (
            <ContactCard key={c.label} channel={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({ channel: c, index }: { channel: { icon: any; label: string; value: string; href: string }; index: number }) => {
  const Icon = c.icon;
  const { ref, visible } = useReveal<HTMLAnchorElement>();
  return (
    <a
      ref={ref}
      href={c.href}
      target={c.href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={`glass-card rounded-2xl p-6 hover:border-primary/50 hover-lift group reveal ${visible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Icon className="w-6 h-6 text-primary mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
      <p className="font-mono-tag text-muted-foreground mb-1">{c.label}</p>
      <p className="font-medium break-all">{c.value}</p>
    </a>
  );
};

export const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Amirda Varshini MN. Built with care.</p>
      <p className="font-mono-tag">FULL STACK · .NET · ANGULAR</p>
    </div>
  </footer>
);