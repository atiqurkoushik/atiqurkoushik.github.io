import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Phone, MapPin } from "lucide-react";

const experiences = [
  {
    company: "AFFIRM Business Solutions",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    totalDuration: "2 yrs 3 mos",
    roles: [
      {
        title: "Business Development Manager",
        period: "Aug 2024 — Present",
        mode: "Hybrid",
        description:
          "Driving growth through strategic partnerships, client acquisitions, and expanding market reach. Leading initiatives to identify new business opportunities, foster client relationships, and implement tailored solutions. Collaborating with cross-functional teams to develop impactful strategies that align with company goals and enhance revenue streams.",
        skills: ["Business Development", "Sales", "Client Relations", "Strategy"],
      },
      {
        title: "Telesales Specialist",
        period: "Jan 2024 — Aug 2024 · 8 mos",
        mode: "Remote",
        description:
          "Managed outbound sales campaigns, appointment scheduling, and client engagement to drive revenue growth and build customer relationships.",
        skills: ["Appointment Making", "Outbound Sales", "CRM", "Negotiation"],
      },
    ],
  },
  {
    company: "One Call Center",
    location: "Kyiv City, Ukraine · Remote",
    type: "Full-time",
    totalDuration: "6 mos",
    roles: [
      {
        title: "Inside Sales Representative",
        period: "Feb 2023 — Jul 2023 · 6 mos",
        mode: "Remote",
        description:
          "Communicated with customers, made outbound calls to potential customers, developed new leads, created and maintained customer database, understood customer needs, explained product features, and achieved sales quotas.",
        skills: ["Communication", "CRM Databases", "Lead Generation", "Sales"],
      },
    ],
  },
];

const Career = () => {
  return (
    <section className="py-20 md:py-32 px-4 relative" id="career">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-neon-purple font-mono text-sm tracking-widest uppercase">
            Professional Experience
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-2 gradient-text">
            Career Journey
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-purple/60 via-neon-blue/40 to-transparent hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-neon-purple/60 via-neon-blue/40 to-transparent md:hidden" />

          <div className="space-y-12">
            {experiences.map((exp, expIdx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: expIdx * 0.2, duration: 0.5 }}
                className={`relative flex flex-col md:flex-row ${expIdx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-neon-purple glow-purple z-10 mt-8" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="ml-14 md:ml-0 md:w-1/2">
                  <div className="glass rounded-2xl p-6 hover:border-neon-purple/40 transition-all duration-300 group">
                    {/* Company header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center shrink-0 group-hover:from-neon-purple/40 group-hover:to-neon-blue/40 transition-all">
                        <Briefcase className="w-6 h-6 text-neon-purple" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-neon-purple transition-colors">
                          {exp.company}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mt-1">
                          <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary">{exp.type}</span>
                          <span>·</span>
                          <span>{exp.totalDuration}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground/70 mt-1">
                          <MapPin size={10} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Roles */}
                    <div className="space-y-5">
                      {exp.roles.map((role, roleIdx) => (
                        <div
                          key={role.title}
                          className={`${roleIdx > 0 ? "border-t border-border/50 pt-5" : ""}`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <TrendingUp size={14} className="text-neon-purple" />
                            <h4 className="font-heading font-semibold text-foreground">{role.title}</h4>
                          </div>
                          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-2">
                            <span className="font-mono">{role.period}</span>
                            <span>·</span>
                            <span className="px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">{role.mode}</span>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                            {role.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {role.skills.map((skill) => (
                              <span
                                key={skill}
                                className="text-[10px] px-2 py-0.5 rounded-full bg-neon-purple/10 text-neon-purple border border-neon-purple/20"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
