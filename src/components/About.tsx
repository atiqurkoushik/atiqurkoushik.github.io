import { motion } from "framer-motion";
import { Zap, Target, TrendingUp } from "lucide-react";

const traits = [
  { icon: Zap, title: "Problem Solver", desc: "I don't just work. I fix broken systems.", color: "text-neon-purple" },
  { icon: Target, title: "Sales + Tech", desc: "If it's messy, I'll clean it.", color: "text-neon-blue" },
  { icon: TrendingUp, title: "Growth Driven", desc: "Your problem = my next win.", color: "text-neon-orange" },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Who I Am</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Not your average <span className="gradient-text">operator</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm a hybrid of sales instinct and tech precision. I thrive in the gap between "this is broken"
            and "now it works." Whether it's optimizing a funnel, building a product, or closing a deal —
            I make things happen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {traits.map((trait, i) => (
            <motion.div
              key={trait.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass rounded-2xl p-8 hover:glow-purple transition-all duration-500 group cursor-default"
            >
              <trait.icon className={`${trait.color} mb-4 group-hover:scale-110 transition-transform`} size={36} />
              <h3 className="text-xl font-heading font-semibold mb-2">{trait.title}</h3>
              <p className="text-muted-foreground">{trait.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 glass rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                From <span className="text-primary">chaos</span> to clarity
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With a foundation in sales, marketing, and modern tech stacks, I've helped businesses
                streamline operations, launch products, and scale revenue. I combine strategic thinking
                with hands-on execution — because ideas without action are just noise.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "50+", label: "Projects Delivered" },
                { num: "3+", label: "Years Experience" },
                { num: "20+", label: "Happy Clients" },
                { num: "100%", label: "Commitment" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-secondary/50">
                  <div className="text-2xl md:text-3xl font-heading font-bold gradient-text">{stat.num}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
