import { useState } from "react";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

type FormState = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
  company: string; // 🛡️ Honeypot (anti-spam)
};

const Booking = () => {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    company: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 🛡️ Honeypot: om bot fyller i detta fält → avbryt
    if (form.company.trim() !== "") {
      console.warn("Spam detected (honeypot filled).");
      return;
    }

    setStatus("sending");

    // ✅ Debug: bekräfta att rätt ID:n används
    console.log("SENDING WITH:", {
      SERVICE_ID,
      TEMPLATE_ID,
      PUBLIC_KEY: PUBLIC_KEY.slice(0, 6) + "...",
    });

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          firstName: form.firstName,
          lastName: form.lastName,
          phone: String(form.phone),
          email: form.email,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      );

      setStatus("success");
      setForm({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
        company: "",
      });
    } catch (err: any) {
      console.error("EmailJS error (raw):", err);
      console.error("EmailJS status:", err?.status);
      console.error("EmailJS text:", err?.text);
      console.error("EmailJS message:", err?.message);
      setStatus("error");
    }
  };

  return (
    <section
      id="boka"
      className="py-20 md:py-28 gradient-hero relative overflow-hidden"
    >
      {/* Dekor */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            Boka din städning
          </span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Boka enkelt online
          </h2>

          <p className="text-lg text-white/85 mb-12 max-w-2xl mx-auto">
            Fyll i formuläret så återkommer vi inom 24 timmar.
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 md:p-12 text-left">
            {status === "success" ? (
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <CheckCircle size={48} className="text-green-300" />
                </div>
                <h3 className="font-display text-2xl font-bold">
                  Tack för din förfrågan!
                </h3>
                <p className="text-white/80">
                  Vi har mottagit din bokning och kontaktar dig inom 24 timmar.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-2 bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition"
                >
                  Skicka en till
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 🛡️ Honeypot (osynlig) */}
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Förnamn"
                    required
                    className="w-full px-4 py-3 rounded-lg text-black"
                  />
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Efternamn"
                    required
                    className="w-full px-4 py-3 rounded-lg text-black"
                  />
                </div>

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Telefonnummer"
                  required
                  className="w-full px-4 py-3 rounded-lg text-black"
                />

                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="E-postadress"
                  required
                  className="w-full px-4 py-3 rounded-lg text-black"
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Beskriv ditt ärende (t.ex. flyttstäd, storlek, datum)"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg text-black"
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-white text-primary font-semibold py-3 rounded-lg hover:bg-white/90 transition disabled:opacity-60"
                >
                  {status === "sending"
                    ? "Skickar..."
                    : "Skicka bokningsförfrågan"}
                </button>

                {status === "error" && (
                  <p className="text-red-200 text-sm">
                    Något gick fel. Försök igen.
                  </p>
                )}
              </form>
            )}

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Clock size={18} />
                <span className="text-sm">Svar inom 24h</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Calendar size={18} />
                <span className="text-sm">Kostnadsfri offert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
