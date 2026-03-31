import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Vibe Coding — L4: Platinum",
    org: "Lovable",
    issued: "Mar 2026",
    icon: "🧡",
    iconBg: "bg-black",
  },
  {
    title: "Shopping Ads Certification",
    org: "Google Digital Academy (Skillshop)",
    issued: "Sep 2022",
    credentialId: "127703507",
    icon: "G",
    iconBg: "bg-white",
    isGoogle: true,
  },
  {
    title: "Google Ads Display Certification",
    org: "Google Digital Academy (Skillshop)",
    issued: "Sep 2022",
    credentialId: "127664107",
    icon: "G",
    iconBg: "bg-white",
    isGoogle: true,
  },
  {
    title: "Fundamentals of Digital Marketing",
    org: "Google Digital Garage",
    issued: "Sep 2022",
    credentialId: "AVE 56Y G3Y",
    icon: "G",
    iconBg: "bg-white",
    isGoogle: true,
  },
  {
    title: "Google Analytics for Beginners",
    org: "Google Analytics",
    issued: "Aug 2022",
    icon: "📊",
    iconBg: "bg-white",
    isGoogle: true,
  },
  {
    title: "Ad Policies for Content, Creative, and Targeting",
    org: "Meta",
    issued: "Jun 2021",
    icon: "∞",
    iconBg: "bg-blue-600",
    isMeta: true,
  },
  {
    title: "Business Manager",
    org: "Meta",
    issued: "Jun 2021",
    icon: "∞",
    iconBg: "bg-blue-600",
    isMeta: true,
  },
  {
    title: "Boost Your Marketing With Facebook Pixel",
    org: "Meta",
    issued: "Jun 2021",
    icon: "∞",
    iconBg: "bg-blue-600",
    isMeta: true,
  },
  {
    title: "Digital Literacy for Youth",
    org: "Digital Literacy — Bangladesh Govt.",
    issued: "Oct 2022",
    credentialId: "14057849",
    isGovt: true,
  },
];

const GoogleIcon = () => (
  <svg viewBox="0 0 48 48" className="w-7 h-7">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

const MetaIcon = () => (
  <svg viewBox="0 0 36 36" className="w-7 h-7">
    <path
      fill="#0081FB"
      d="M6.26 7.83C4.19 10.56 3 14.24 3 18.04c0 2.87.63 5.36 1.72 7.22 1.2 2.06 2.92 3.24 4.78 3.24 1.44 0 2.7-.56 4.38-2.88.98-1.36 2-3.24 3.44-5.98l.72-1.38c1.7-3.24 2.94-5.32 4.42-6.92 1.78-1.92 3.64-2.84 5.82-2.84 2.8 0 5.36 1.46 7.28 4.12C37.38 15.94 38.4 19.68 38.4 24c0 3.12-.64 5.68-1.76 7.6-1.16 2-2.96 3.2-5.14 3.2v-4.5c2.04 0 3.4-2.34 3.4-6.12 0-3.36-.76-6.38-2.14-8.58-1.16-1.84-2.7-2.92-4.36-2.92-1.86 0-3.38 1.18-5.14 3.72-.94 1.36-1.92 3.14-3.1 5.4l-.96 1.84c-1.38 2.64-2.34 4.3-3.36 5.66C13.94 31.72 12.2 33 9.5 33c-2.56 0-4.64-1.38-6.06-3.68C1.94 27 1 23.78 1 20.06c0-4.34 1.14-8.5 3.42-11.72l1.84 1.5z"
    />
  </svg>
);

const Certifications = () => {
  return (
    <section className="py-20 md:py-32 px-4 relative" id="certifications">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-neon-purple font-mono text-sm tracking-widest uppercase">
            Credentials
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-2 gradient-text">
            Licenses & Certifications
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Verified credentials from industry leaders — proof that I don't just talk, I deliver.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass rounded-xl p-5 flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4 hover:border-neon-purple/40 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-muted/50">
                {cert.isGoogle ? (
                  <GoogleIcon />
                ) : cert.isMeta ? (
                  <MetaIcon />
                ) : cert.title.includes("Vibe Coding") ? (
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">♥</span>
                  </div>
                ) : cert.isGovt ? (
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                    <span className="text-lg">🏛️</span>
                  </div>
                ) : (
                  <Award className="w-6 h-6 text-neon-purple" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-semibold text-foreground group-hover:text-neon-purple transition-colors">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-sm">{cert.org}</p>
                <p className="text-muted-foreground/70 text-xs mt-1">
                  Issued {cert.issued}
                  {cert.credentialId && (
                    <span className="ml-2">· Credential ID {cert.credentialId}</span>
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
