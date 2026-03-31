import { motion } from "framer-motion";
import { Code, TrendingUp, Megaphone, Database, Rocket, Zap } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    desc: "Modern, fast, and responsive web apps built with React, Next.js, and TypeScript.",
    glow: "hover:glow-purple",
  },
  {
    icon: TrendingUp,
    title: "Sales Strategy",
    desc: "Data-driven sales funnels, CRM optimization, and pipeline management that converts.",
    glow: "hover:glow-blue",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "SEO, content strategy, and paid campaigns that drive real, measurable growth.",
    glow: "hover:glow-orange",
  },
  {
    icon: Database,
    title: "Tech Consulting",
    desc: "Stack selection, architecture reviews, and technical strategy for startups and teams.",
    glow: "hover:glow-blue",
  },
  {
    icon: Rocket,
    title: "Product Launch",
    desc: "End-to-end launch support — from MVP to market. Strategy, build, ship, iterate.",
    glow: "hover:glow-orange",
  },
  {
    icon: Zap,
    title: "E-Commerce Automation",
    desc: "Shopify, WooCommerce, and custom store automation — from inventory to checkout, fully optimized.",
    glow: "hover:glow-purple",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">What I Do</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Services that <span className="gradient-text">move needles</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            I don't do "tasks." I solve problems end-to-end and deliver results you can measure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className={`glass rounded-2xl p-8 group cursor-default ${service.glow} transition-all duration-500`}
            >
              <service.icon
                className="text-primary mb-5 group-hover:scale-110 transition-transform duration-300"
                size={32}
              />
              <h3 className="text-lg font-heading font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
