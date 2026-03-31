import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const categories = ["All", "Web App", "Marketing", "SaaS", "E-Commerce"];

const projects = [
  {
    title: "Revenue Dashboard Pro",
    desc: "Real-time analytics dashboard for sales teams. Built with React, D3.js, and Node.js. Increased team productivity by 40%.",
    tags: ["React", "Node.js", "D3.js"],
    category: "SaaS",
    color: "glow-purple",
  },
  {
    title: "E-Com Funnel Optimizer",
    desc: "End-to-end e-commerce funnel that boosted conversions by 65%. Custom checkout flow with A/B testing built in.",
    tags: ["Next.js", "Stripe", "Tailwind"],
    category: "E-Commerce",
    color: "glow-blue",
  },
  {
    title: "Lead Gen Machine",
    desc: "Automated lead generation system handling 10k+ leads/month. CRM integration with HubSpot and custom scoring.",
    tags: ["Python", "HubSpot", "APIs"],
    category: "Marketing",
    color: "glow-orange",
  },
  {
    title: "SaaS Landing Builder",
    desc: "Drag-and-drop landing page builder for SaaS companies. 50+ templates, analytics, and A/B testing.",
    tags: ["React", "TypeScript", "Supabase"],
    category: "Web App",
    color: "glow-purple",
  },
  {
    title: "Brand Identity Platform",
    desc: "Digital brand management platform. Asset library, brand guidelines, and team collaboration tools.",
    tags: ["Vue.js", "Figma API", "AWS"],
    category: "SaaS",
    color: "glow-blue",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Featured <span className="gradient-text">projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Real results. Real impact. Here's what happens when problems meet solutions.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? "bg-primary text-primary-foreground glow-purple"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`glass rounded-2xl p-6 group cursor-pointer hover:${project.color} transition-all duration-500`}
              >
                {/* Placeholder thumbnail */}
                <div className="w-full h-40 rounded-xl bg-gradient-to-br from-primary/20 via-secondary to-accent/20 mb-5 flex items-center justify-center overflow-hidden">
                  <span className="text-4xl font-heading font-bold gradient-text opacity-30 group-hover:opacity-60 transition-opacity">
                    {project.title.split(" ").map((w) => w[0]).join("")}
                  </span>
                </div>

                <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="p-2 rounded-lg glass hover:glow-purple transition-all" aria-label="Live demo">
                    <ExternalLink size={16} />
                  </button>
                  <button className="p-2 rounded-lg glass hover:glow-blue transition-all" aria-label="Source code">
                    <Github size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
