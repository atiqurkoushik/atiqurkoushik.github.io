import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Clock, AlertTriangle, DollarSign, Activity, ShoppingCart, Megaphone, Truck, BarChart3, Mail, Flame, Inbox, ListOrdered, CalendarClock, MapPin, Cog, Target, Code, Server, Zap, Globe, MessageCircle, Layout, Smartphone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import hrmPreview from "@/assets/hrm-preview.png";
import ecommercePreview from "@/assets/ecommerce-preview.png";
import emailAutomationPreview from "@/assets/email-automation-preview.png";
import woocommercePreview from "@/assets/woocommerce-preview.png";
import metaAdsPreview from "@/assets/meta-ads-preview.png";
import marketingWebsitePreview from "@/assets/marketing-website-preview.png";

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
    title: "WooCommerce Shop",
    subtitle: "Multi-Location Bakery E-Commerce",
    desc: "Customized e-commerce website for a multi-location bakery with scheduled ordering, location-based menus, and WooCommerce automation.",
    tags: ["WordPress", "WooCommerce", "PHP"],
    category: "E-Commerce",
    link: "/project/woocommerce",
    image: woocommercePreview,
    features: [
      { icon: ShoppingCart, label: "Order Management" },
      { icon: CalendarClock, label: "Schedule Orders" },
      { icon: MapPin, label: "Location Pages" },
      { icon: Cog, label: "WooCommerce Automation" },
    ],
  },
  {
    title: "Meta Ads",
    subtitle: "Hiring Ads — Special Ads Category",
    desc: "Meta Ads campaign for hiring employees under Special Ads Category. Reduced cost per form submission with Pixel, Conversions API, server-side tracking, and custom event setup.",
    tags: ["Meta Ads", "CAPI", "Pixel"],
    category: "Marketing",
    link: "/project/meta-ads",
    image: metaAdsPreview,
    features: [
      { icon: Target, label: "Pixel Setup" },
      { icon: Server, label: "Conversions API" },
      { icon: Code, label: "Server-Side Tracking" },
      { icon: Zap, label: "Custom & Offline Events" },
    ],
  },
  {
    title: "Marketing Website",
    subtitle: "Custom Website for Marketing Agency",
    desc: "Customized website for a marketing company with WhatsApp integration, service showcases, portfolio, and responsive static pages built with React & Node.js.",
    tags: ["React", "Node.js"],
    category: "Web App",
    link: "/project/marketing-website",
    image: marketingWebsitePreview,
    features: [
      { icon: Globe, label: "Static Website" },
      { icon: MessageCircle, label: "WhatsApp Integration" },
      { icon: Layout, label: "Service Showcase" },
      { icon: Smartphone, label: "Fully Responsive" },
    ],
  },
];

const AllProjects = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 relative">
        <div className="container mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Portfolio</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
              All <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              A complete showcase of my work — from SaaS platforms to e-commerce solutions, marketing campaigns, and custom web development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects List */}
      <section className="pb-24">
        <div className="container mx-auto px-6 space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link to={project.link} className="block group">
                <div className="glass rounded-2xl p-6 md:p-8 hover:glow-purple transition-all duration-500 hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    {/* Image */}
                    <div className="w-full md:w-80 h-48 md:h-52 rounded-xl overflow-hidden shrink-0 bg-gradient-to-br from-primary/20 via-secondary to-accent/20">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary font-medium">
                            {project.category}
                          </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-1 group-hover:text-primary transition-colors">
                          {project.title}
                        </h2>
                        {project.subtitle && (
                          <p className="text-sm text-neon-purple font-mono mb-3">{project.subtitle}</p>
                        )}
                        <p className="text-muted-foreground mb-4">{project.desc}</p>

                        {/* Features */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                          {project.features.map((f) => (
                            <div key={f.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <f.icon size={14} className="text-neon-purple shrink-0" />
                              <span>{f.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tags & Action */}
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="flex items-center gap-2 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                          View Details <ExternalLink size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllProjects;
