import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: "/#tjanster", label: "Tjänster" },
    { to: "/#priser", label: "Priser" },
    { to: "/#om-oss", label: "Om oss" },
    { to: "/#boka", label: "Boka städning" },
  ];

  return (
    <footer id="kontakt" className="bg-card border-t border-border">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="Elite Clean Service"
              className="h-16 w-auto mb-4"
            />
            <p className="text-muted-foreground max-w-md mb-6">
              Professionell städning och flytthjälp i Karlskrona och hela Blekinge.
              Fasta priser, kvalitetsgaranti och RUT-avdrag.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/elitecleanserviceblekinge"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/elitecleanservice"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Snabblänkar</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <HashLink
                    to={link.to}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">
                  Karlskrona, Blekinge
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a
                  href="tel:+46701234567"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  070-123 45 67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a
                  href="mailto:info@elitecleanservice.se"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@elitecleanservice.se
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Elite Clean Service. Alla rättigheter förbehållna.</p>
          <p>@elitecleanserviceblekinge</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
