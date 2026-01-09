import { useState } from "react";
import { Calendar, Clock, CheckCircle } from "lucide-react";

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="boka"
      className="py-20 md:py-28 gradient-hero relative overflow-hidden"
    >
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm mb-6">
            Boka din städning
          </span>

          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Boka enkelt online
          </h2>

          <p className="text-lg text-white/85 mb-12">
            Fyll i formuläret så återkommer vi inom 24 timmar.
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 md:p-12 text-left">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Förnamn"
                    required
                    className="w-full px-4 py-3 rounded-lg text-black"
                  />
                  <input
                    type="text"
                    placeholder="Efternamn"
                    required
                    className="w-full px-4 py-3 rounded-lg text-black"
                  />
                </div>

                <input
                  type="tel"
                  placeholder="Telefonnummer"
                  required
                  className="w-full px-4 py-3 rounded-lg text-black"
                />

                <input
                  type="email"
                  placeholder="E-postadress"
                  required
                  className="w-full px-4 py-3 rounded-lg text-black"
                />

                <textarea
                  placeholder="Beskriv ditt ärende (t.ex. flyttstäd, storlek, datum)"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg text-black"
                />

                <button
                  type="submit"
                  className="w-full bg-white text-primary font-semibold py-3 rounded-lg hover:bg-white/90 transition"
                >
                  Skicka bokningsförfrågan
                </button>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <CheckCircle size={48} className="text-green-400" />
                </div>
                <h3 className="text-2xl font-bold">
                  Tack för din förfrågan!
                </h3>
                <p className="text-white/80">
                  Vi har mottagit din bokning och kontaktar dig inom 24 timmar.
                </p>
              </div>
            )}

            <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Clock size={16} />
                <span>Svar inom 24h</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Calendar size={16} />
                <span>Kostnadsfri offert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
