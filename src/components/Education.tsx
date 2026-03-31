import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const education = [
  {
    institution: "University of Scholars",
    degree: "Bachelor of Arts, English Language and Literature",
    period: "May 2023 — Present",
    icon: GraduationCap,
  },
  {
    institution: "Mangrove Institute of Science & Technology",
    degree: "Diploma, Computer Science",
    period: "2017 — 2020",
    icon: BookOpen,
  },
];

const Education = () => {
  return (
    <section className="py-20 md:py-32 px-4 relative" id="education">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-neon-purple font-mono text-sm tracking-widest uppercase">
            Academic Background
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-2 gradient-text">
            Education
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-xl p-6 flex flex-col items-center text-center md:items-start md:text-left gap-4 hover:border-neon-purple/40 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center group-hover:from-neon-purple/40 group-hover:to-neon-blue/40 transition-all">
                <edu.icon className="w-7 h-7 text-neon-purple" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-neon-purple transition-colors">
                  {edu.institution}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">{edu.degree}</p>
                <p className="text-muted-foreground/70 text-xs mt-2 font-mono">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
