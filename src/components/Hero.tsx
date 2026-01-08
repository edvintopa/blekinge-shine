import { Sparkles, CheckCircle, MapPin } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 left-10 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 text-white/20 animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          <Sparkles size={40} />
        </div>
        <div
          className="absolute top-1/3 right-1/4 text-white/15 animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          <Sparkles size={30} />
        </div>
      </div>

      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
            <MapPin size={16} />
            <span className="text-sm font-medium">Karlskrona & hela Blekinge</span>
          </div>

          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Professionell städning
            <br />
            <span className="text-white/90">med kvalitetsgaranti</span>
          </h1>

          <p
            className="text-lg sm:text-xl text-white/85 mb-8 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Flyttstäd, lägenhetsstäd och flytthjälp utfört med noggrannhet och ansvar.
            Fasta priser, tydlig kommunikation och RUT-avdrag.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <HashLink
              to="/#boka"
              className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all hover:scale-105 shadow-lg"
            >
              Få offert idag
            </HashLink>

            <HashLink
              to="/#priser"
              className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Se våra priser
            </HashLink>
          </div>

          <div
            className="flex flex-wrap justify-center gap-6 text-sm text-white/90 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {["RUT-avdrag godkänt", "Fasta priser", "Kvalitetsgaranti"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-sparkle" />
                  <span>{item}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
