import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Users, Clock, AlertTriangle, DollarSign, Activity, ShoppingCart, Megaphone, Truck, BarChart3, Mail, Flame, Inbox, ListOrdered, CalendarClock, MapPin, Cog } from "lucide-react";
import { Link } from "react-router-dom";
import hrmPreview from "@/assets/hrm-preview.png";
import ecommercePreview from "@/assets/ecommerce-preview.png";
import emailAutomationPreview from "@/assets/email-automation-preview.png";

const categories = ["All", "Web App", "Marketing", "SaaS", "E-Commerce"];

const projects = [
  {
    title: "HRM",
    subtitle: "Human Resource Management System",
    desc: "Full-featured HRM with night shift support (8PM-5AM), 1:3 late penalty ratio, auto payroll with attendance-based adjustments, and real-time clock-in/out tracking. Built for modern workforce management.",
    tags: ["React", "Node.js", "Supabase"],
    category: "SaaS",
    link: "/project/hrm",
    image: hrmPreview,
    features: [
      { icon: Clock, label: "Night Shift 8PM-5AM" },
      { icon: AlertTriangle, label: "1:3 Late Penalty" },
      { icon: DollarSign, label: "Auto Payroll" },
      { icon: Activity, label: "Real-time Attendance" },
    ],
  },
  {
    title: "E-Commerce",
    subtitle: "Complete E-Commerce Platform",
    desc: "Complete e-commerce website development solution with courier sync, payment control, Meta Ads automation, and advanced order intelligence — designed for BD online businesses.",
    tags: ["React", "Node.js", "Supabase"],
    category: "E-Commerce",
    link: "/project/ecommerce",
    image: ecommercePreview,
    features: [
      { icon: ShoppingCart, label: "Order Management" },
      { icon: Megaphone, label: "Marketing Automation" },
      { icon: Truck, label: "Courier Integration" },
      { icon: BarChart3, label: "Product Analysis" },
    ],
  },
  {
    title: "Email Automation",
    subtitle: "Cold Email Sending Platform",
    desc: "Full-featured cold email platform with auto warm-up, unlimited SMTP/IMAP support, master inbox (Unibox), and smart email sequences for outbound campaigns.",
    tags: ["React", "Node.js", "Supabase"],
    category: "Marketing",
    link: "/project/email-automation",
    image: emailAutomationPreview,
    features: [
      { icon: Flame, label: "Auto Email Warm-Up" },
      { icon: Mail, label: "Unlimited SMTP & IMAP" },
      { icon: Inbox, label: "Unibox - Master Inbox" },
      { icon: ListOrdered, label: "Email Sequence" },
    ],
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
            {filtered.map((project, i) => {
              const CardWrapper = ({ children }: { children: React.ReactNode }) =>
                project.link ? (
                  <Link to={project.link} className="block">
                    {children}
                  </Link>
                ) : (
                  <>{children}</>
                );

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className={`glass rounded-2xl p-6 group cursor-pointer hover:${project.color} transition-all duration-500`}
                >
                  <CardWrapper>
                    {/* Thumbnail */}
                    <div className="w-full h-40 rounded-xl bg-gradient-to-br from-primary/20 via-secondary to-accent/20 mb-5 flex items-center justify-center overflow-hidden">
                      {project.image ? (
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
                      ) : (
                        <span className="text-4xl font-heading font-bold gradient-text opacity-30 group-hover:opacity-60 transition-opacity">
                          {project.title.split(" ").map((w) => w[0]).join("")}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-heading font-semibold mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-xs text-neon-purple font-mono mb-2">{project.subtitle}</p>
                    )}
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.desc}</p>

                    {/* Features */}
                    {project.features && (
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {project.features.map((f) => (
                          <div key={f.label} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <f.icon size={12} className="text-neon-purple shrink-0" />
                            <span className="truncate">{f.label}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <span className="p-2 rounded-lg glass hover:glow-purple transition-all" aria-label="View details">
                        <ExternalLink size={16} />
                      </span>
                    </div>
                  </CardWrapper>
                </motion.div>
              );
            })}

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
