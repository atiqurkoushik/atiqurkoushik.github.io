import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Sales & Marketing",
    color: "from-neon-purple to-neon-blue",
    skills: [
      { name: "Lead Generation", level: 95 },
      { name: "Sales Strategy", level: 90 },
      { name: "Digital Marketing", level: 88 },
      { name: "CRM Management", level: 85 },
      { name: "Content Strategy", level: 82 },
    ],
  },
  {
    title: "Development",
    color: "from-neon-blue to-neon-orange",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Python", level: 75 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    title: "Tools & Platforms",
    color: "from-neon-orange to-neon-purple",
    skills: [
      { name: "Figma", level: 85 },
      { name: "HubSpot", level: 88 },
      { name: "Google Analytics", level: 90 },
      { name: "AWS / Cloud", level: 72 },
      { name: "Git & CI/CD", level: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">What I Bring</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Skills that <span className="gradient-text">deliver</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A rare blend of sales hustle and technical chops. I don't just talk strategy — I build it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.15, duration: 0.5 }}
              className="glass rounded-2xl p-6 hover:glow-blue transition-all duration-500"
            >
              <h3 className="text-lg font-heading font-semibold mb-6">{cat.title}</h3>
              <div className="space-y-5">
                {cat.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: catIdx * 0.15 + i * 0.1, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${cat.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
