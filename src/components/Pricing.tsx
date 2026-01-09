import { Check, ArrowRight } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const pricingCategories = [
  {
    title: "Flyttstädning",
    description: "Fast pris baserat på bostadens storlek",
    items: [
      { size: "Upp till 40 m²", price: "4000 kr", rutPrice: "2 000 kr" },
      { size: "41–60 m²", price: "5 000 kr", rutPrice: "2 500 kr" },
      { size: "61–80 m²", price: "6 000 kr", rutPrice: "3 000 kr" },
      { size: "81–100 m²", price: "7 000 kr", rutPrice: "3 500 kr" },
      { size: "Över 100 m²", price: "Offert", rutPrice: "Offert" },
    ],
    featured: true,
  },
  {
    title: "Lägenhetsstädning",
    description: "Engångs- eller regelbunden städning",
    items: [
      { size: "1 rum och kök", price: "2 000 kr", rutPrice: "1 000 kr" },
      { size: "2 rum och kök", price: "3 000 kr", rutPrice: "1 500 kr" },
      { size: "3 rum och kök", price: "4 000 kr", rutPrice: "2 000 kr" },
    ],
    featured: false,
  },
  {
    title: "Flytthjälp",
    description: "Timpris för 2 personer",
    items: [
      { size: "Per timme", price: "800 kr", rutPrice: "400 kr" },
      { size: "Minimum 3 timmar", price: "2 400 kr", rutPrice: "1 200 kr" },
    ],
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section id="priser" className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Transparenta priser
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Fasta priser med RUT-avdrag
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Alla priser inkluderar arbete och material. Du betalar endast halva
            priset tack vare RUT-avdraget.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pricingCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`bg-card rounded-2xl overflow-hidden border ${category.featured
                  ? "border-primary shadow-xl shadow-primary/10 ring-2 ring-primary/20"
                  : "border-border shadow-sm"
                } animate-fade-in`}
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              {category.featured && (
                <div className="gradient-hero text-primary-foreground text-center py-2 text-sm font-semibold">
                  Mest populär
                </div>
              )}

              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {category.description}
                </p>

                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div
                      key={item.size}
                      className="flex items-center justify-between py-3 border-b border-border last:border-0"
                    >
                      <div className="flex items-center gap-2">
                        <Check size={16} className="text-primary" />
                        <span className="text-foreground">{item.size}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-muted-foreground line-through text-sm block">
                          {item.price}
                        </span>
                        <span className="text-primary font-bold">
                          {item.rutPrice}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <HashLink
                  to="/#boka"
                  className={`mt-8 w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold transition-all ${category.featured
                      ? "gradient-hero text-primary-foreground hover:opacity-90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                >
                  Boka {category.title.toLowerCase()}
                  <ArrowRight size={18} />
                </HashLink>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8">
          * RUT-avdrag beräknas som 50% av arbetskostnaden. Maxavdrag 75 000 kr per
          person och år.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
