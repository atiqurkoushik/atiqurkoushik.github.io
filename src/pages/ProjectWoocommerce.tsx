import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, CalendarClock, MapPin, Cog, TrendingUp, Package, Users, Globe } from "lucide-react";
import woocommercePreview from "@/assets/woocommerce-preview.png";

const techStack = [
  {
    name: "WordPress",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM3.009 12c0-1.36.305-2.648.852-3.8l4.69 12.862A8.996 8.996 0 013.009 12zm8.991 9a8.96 8.96 0 01-3.222-.6l3.422-9.94 3.507 9.608a.846.846 0 00.065.152A8.963 8.963 0 0112 21zm1.244-13.219c.687-.036 1.306-.108 1.306-.108.615-.072.543-.976-.072-.94 0 0-1.849.145-3.042.145-1.121 0-3.006-.145-3.006-.145-.615-.036-.687.904-.072.94 0 0 .583.072 1.198.108l1.78 4.878-2.5 7.5-4.16-12.378c.687-.036 1.306-.108 1.306-.108.615-.072.543-.976-.072-.94 0 0-1.849.145-3.042.145-.214 0-.466-.005-.733-.015A8.973 8.973 0 0112 3.009c2.328 0 4.449.885 6.044 2.336-.038-.003-.076-.008-.116-.008-1.121 0-1.916.976-1.916 2.025 0 .94.543 1.737 1.121 2.677.435.76.94 1.737.94 3.146 0 .976-.375 2.109-.868 3.69l-1.138 3.797-4.122-12.252zM17.9 19.848l3.477-10.049c.65-1.625.868-2.925.868-4.082 0-.42-.028-.809-.079-1.17A8.964 8.964 0 0120.991 12a8.986 8.986 0 01-3.091 7.848z" />
      </svg>
    ),
    color: "text-blue-400",
  },
  {
    name: "WooCommerce",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M2.227 4.857A2.228 2.228 0 000 7.089v7.887a2.228 2.228 0 002.227 2.232h7.574l1.858 2.071 1.86-2.071h8.254A2.228 2.228 0 0024 14.976V7.089a2.228 2.228 0 00-2.227-2.232H2.227zM6.5 7.5c.828 0 1.5.895 1.5 2s-.672 2-1.5 2S5 10.605 5 9.5s.672-2 1.5-2zm5 0c.828 0 1.5.895 1.5 2s-.672 2-1.5 2-1.5-.895-1.5-2 .672-2 1.5-2zm5.5 0c.414 0 .75.336.75.75v3.5a.75.75 0 01-1.5 0v-3.5c0-.414.336-.75.75-.75z" />
      </svg>
    ),
    color: "text-purple-400",
  },
  {
    name: "PHP",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.215-6.232h2.406c.834 0 1.442.195 1.825.585.383.39.475.934.275 1.632a2.735 2.735 0 01-.396.907 2.653 2.653 0 01-.637.712zm4.89-2.312l-.477 2.444c-.074.378-.023.556.155.534.178-.021.383-.143.545-.321l-.104.537c-.254.219-.498.361-.731.427-.233.066-.467.061-.702-.014-.336-.108-.496-.399-.48-.873l.533-2.734h-.672l.12-.615h.672l.24-1.23h1.077l-.24 1.23h.864l-.12.615h-.864zm4.904 2.312c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164h-1.181l-.327 1.681h-1.378l1.215-6.232h2.406c.834 0 1.442.195 1.825.585.383.39.475.934.275 1.632a2.735 2.735 0 01-.396.907 2.653 2.653 0 01-.637.712zm-.687-1.737c.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049z" />
      </svg>
    ),
    color: "text-indigo-400",
  },
];

const features = [
  {
    icon: ShoppingCart,
    title: "Order Management",
    subtitle: "Complete Order Control",
    desc: "End-to-end order processing with status tracking, payment verification, and automated notifications for multi-location bakery operations.",
  },
  {
    icon: CalendarClock,
    title: "Schedule Order Placement",
    subtitle: "Advance Booking System",
    desc: "Customers can schedule orders for specific dates and time slots, ensuring fresh baked goods are ready for pickup or delivery at their preferred location.",
  },
  {
    icon: MapPin,
    title: "Location Pages",
    subtitle: "Multi-Branch Management",
    desc: "Dedicated pages for each bakery location with unique menus, operating hours, delivery zones, and location-specific promotions.",
  },
  {
    icon: Cog,
    title: "WooCommerce Automation",
    subtitle: "Streamlined Operations",
    desc: "Automated inventory sync across locations, scheduled product availability, dynamic pricing for special occasions, and bulk order processing.",
  },
  {
    icon: Package,
    title: "Product Catalog",
    subtitle: "Category Management",
    desc: "Organized product categories — Celebration Cakes, Sweets, Cookies, Dry Sweets, Savories — with variant management for sizes and flavors.",
  },
  {
    icon: Globe,
    title: "Multi-Location Delivery",
    subtitle: "Zone-Based Delivery",
    desc: "Delivery zone mapping per location with dynamic shipping calculations, free shipping thresholds, and real-time delivery tracking.",
  },
];

const stats = [
  { value: "6+", label: "Product Categories", icon: Package },
  { value: "3x", label: "Faster Order Processing", icon: TrendingUp },
  { value: "100%", label: "Location Coverage", icon: MapPin },
  { value: "2K+", label: "Monthly Orders", icon: ShoppingCart },
];

const problems = [
  "Manual order processing across multiple bakery locations caused delays and errors",
  "No system for customers to schedule orders in advance for special occasions",
  "Inventory not synced between locations — overselling and stock confusion",
  "Single website couldn't handle location-specific menus and delivery zones",
  "No automated notifications for order status — customers constantly calling",
];

const solutions = [
  "Built centralized WooCommerce dashboard managing all locations from one admin panel",
  "Implemented advance order scheduling with date/time slot picker per location",
  "Created automated inventory sync across all branches with real-time stock updates",
  "Developed dynamic location pages with unique menus, hours, and delivery zones",
  "Set up automated SMS/email notifications for order confirmation, prep, and delivery",
];

const challenges = [
  "Syncing product availability across locations with different operating hours",
  "Building a scheduling system that accounts for bakery prep time and capacity limits",
  "Implementing zone-based delivery with different rates per location",
  "Handling seasonal product variations and limited-edition items across branches",
  "Optimizing page load with high-quality food photography across 200+ products",
];

const successPoints = [
  "3x faster order processing with automated workflow and status management",
  "40% increase in advance orders through the scheduling system",
  "Zero inventory conflicts since automated cross-location sync went live",
  "95% customer satisfaction with real-time order tracking and notifications",
  "Expanded delivery coverage to 3 new zones with dynamic delivery mapping",
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const ProjectWoocommerce = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <motion.header {...fadeUp} className="fixed top-0 w-full z-50 glass border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/#projects" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back to Portfolio</span>
          </Link>
          <div className="flex items-center gap-3">
            {techStack.map((tech) => (
              <div key={tech.name} className={`${tech.color} opacity-70 hover:opacity-100 transition-opacity`} title={tech.name}>
                {tech.icon}
              </div>
            ))}
          </div>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="pt-28 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-10">
            <span className="text-neon-purple text-sm font-mono tracking-widest uppercase">E-Commerce Case Study</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mt-4 mb-4">
              WooCommerce <span className="gradient-text">Bakery Shop</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Customized multi-location bakery e-commerce with scheduled ordering, location-based menus, and WooCommerce automation.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="rounded-2xl overflow-hidden border border-border/30 glow-purple">
            <img src={woocommercePreview} alt="WooCommerce Bakery Shop" className="w-full" />
          </motion.div>
        </div>
      </section>

      {/* Tech & Stats */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((s, i) => (
              <motion.div key={s.label} {...fadeUp} transition={{ delay: i * 0.1, duration: 0.5 }} className="glass rounded-xl p-5 text-center">
                <s.icon className="mx-auto mb-2 text-neon-purple" size={22} />
                <div className="text-2xl font-heading font-bold gradient-text">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 px-6 border-t border-border/20">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 {...fadeUp} className="text-3xl font-heading font-bold mb-10 text-center">
            Core <span className="gradient-text">Features</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} {...fadeUp} transition={{ delay: i * 0.08, duration: 0.5 }} className="glass rounded-xl p-6 hover:glow-purple transition-all duration-500">
                <f.icon className="text-neon-purple mb-3" size={24} />
                <h3 className="font-heading font-semibold mb-1">{f.title}</h3>
                <p className="text-xs text-neon-purple font-mono mb-2">{f.subtitle}</p>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems & Solutions */}
      <section className="py-16 px-6 border-t border-border/20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-heading font-bold mb-6">
                🔴 Problems <span className="gradient-text">Identified</span>
              </h2>
              <div className="space-y-3">
                {problems.map((p, i) => (
                  <div key={i} className="glass rounded-lg p-4 flex gap-3 items-start">
                    <span className="text-red-400 font-bold text-sm mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-sm text-muted-foreground">{p}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-heading font-bold mb-6">
                🟢 Solutions <span className="gradient-text">Delivered</span>
              </h2>
              <div className="space-y-3">
                {solutions.map((s, i) => (
                  <div key={i} className="glass rounded-lg p-4 flex gap-3 items-start">
                    <span className="text-green-400 font-bold text-sm mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-sm text-muted-foreground">{s}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 px-6 border-t border-border/20">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 {...fadeUp} className="text-2xl font-heading font-bold mb-6 text-center">
            ⚡ Key <span className="gradient-text">Challenges</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            {challenges.map((c, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08 }} className="glass rounded-lg p-4 flex gap-3 items-start">
                <span className="text-yellow-400 font-bold text-sm mt-0.5">⚡</span>
                <p className="text-sm text-muted-foreground">{c}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success */}
      <section className="py-16 px-6 border-t border-border/20">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 {...fadeUp} className="text-2xl font-heading font-bold mb-6 text-center">
            🏆 Success <span className="gradient-text">Metrics</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            {successPoints.map((s, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08 }} className="glass rounded-lg p-4 flex gap-3 items-start">
                <span className="text-neon-purple font-bold text-sm mt-0.5">✓</span>
                <p className="text-sm text-muted-foreground">{s}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6 border-t border-border/20 text-center">
        <motion.div {...fadeUp}>
          <Link to="/#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:glow-purple transition-all">
            <ArrowLeft size={16} />
            Back to All Projects
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectWoocommerce;
