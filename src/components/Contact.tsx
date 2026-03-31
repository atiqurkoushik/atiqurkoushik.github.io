import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Github, Linkedin, Mail, MapPin, ChevronRight, ChevronLeft, Check, User, Building2, AtSign, Phone, Briefcase, MessageSquare, Users, MessageCircle } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/atiqurkoushik", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/koushik-atiqu", label: "LinkedIn" },
  { icon: Users, href: "https://teams.live.com/l/invite/FEA1rp_aqVp9Du8hQg?v=g1", label: "Teams" },
  { icon: Mail, href: "mailto:fkoushik2@gmail.com", label: "Email" },
  { icon: MessageCircle, href: "https://wa.me/8801886130929", label: "WhatsApp" },
];

const services = [
  "Web Development",
  "Sales Strategy",
  "Digital Marketing",
  "Tech Consulting",
  "Product Launch",
  "E-Commerce Automation",
  "Others",
];

const steps = [
  { id: 1, title: "Personal Info", icon: User },
  { id: 2, title: "Contact Details", icon: AtSign },
  { id: 3, title: "Project Info", icon: Briefcase },
];

const Contact = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    email: "",
    phone: "",
    service: "",
    note: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};
    if (step === 1) {
      if (!form.firstName.trim()) newErrors.firstName = "First name is required";
      if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
      if (!form.businessName.trim()) newErrors.businessName = "Business name is required";
    } else if (step === 2) {
      if (!form.email.trim()) newErrors.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Invalid email";
      if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    } else if (step === 3) {
      if (!form.service) newErrors.service = "Please select a service";
      if (!form.note.trim()) newErrors.note = "Please add a note";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < 3) {
      setDirection(1);
      setCurrentStep((s) => s + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep((s) => s - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;
    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_cfpioev",
        "template_x7lsplb",
        {
          firstName: form.firstName,
          lastName: form.lastName,
          businessName: form.businessName,
          email: form.email,
          phone: form.phone,
          service: form.service,
          note: form.note,
        },
        "G22_YhLTCKu8Xx9Jq"
      );
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setForm({ firstName: "", lastName: "", businessName: "", email: "", phone: "", service: "", note: "" });
        setCurrentStep(1);
      }, 3000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setIsSubmitting(false);
      alert("Failed to send message. Please try again.");
    }
  };

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => { const n = { ...e }; delete n[field]; return n; });
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3.5 rounded-xl bg-secondary/30 border ${errors[field] ? "border-destructive" : "border-border/50"} text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-300 backdrop-blur-sm`;

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Your problem = my next <span className="gradient-text">win</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Got a project in mind? A broken system? Or just want to chat? Drop me a line.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Multi-Step Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 relative overflow-hidden"
          >
            {/* Step Indicator */}
            <div className="flex items-center justify-between mb-8">
              {steps.map((step, i) => (
                <div key={step.id} className="flex items-center flex-1">
                  <div className="flex flex-col items-center relative z-10">
                    <motion.div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-500 ${
                        currentStep > step.id
                          ? "bg-primary text-primary-foreground"
                          : currentStep === step.id
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                          : "bg-secondary/50 text-muted-foreground border border-border/50"
                      }`}
                      animate={currentStep === step.id ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {currentStep > step.id ? <Check size={16} /> : <step.icon size={16} />}
                    </motion.div>
                    <span className={`text-[11px] mt-1.5 font-medium transition-colors ${
                      currentStep >= step.id ? "text-primary" : "text-muted-foreground/60"
                    }`}>
                      {step.title}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex-1 h-[2px] mx-2 mb-5 rounded-full overflow-hidden bg-border/30">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: currentStep > step.id ? "100%" : "0%" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait" custom={direction}>
                {/* Step 1: Personal Info */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium mb-2 text-foreground/80">
                          <User size={14} className="text-primary" /> First Name
                        </label>
                        <input
                          type="text"
                          placeholder="John"
                          value={form.firstName}
                          onChange={(e) => update("firstName", e.target.value)}
                          className={inputClass("firstName")}
                        />
                        {errors.firstName && <p className="text-destructive text-xs mt-1">{errors.firstName}</p>}
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium mb-2 text-foreground/80">
                          <User size={14} className="text-primary" /> Last Name
                        </label>
                        <input
                          type="text"
                          placeholder="Doe"
                          value={form.lastName}
                          onChange={(e) => update("lastName", e.target.value)}
                          className={inputClass("lastName")}
                        />
                        {errors.lastName && <p className="text-destructive text-xs mt-1">{errors.lastName}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium mb-2 text-foreground/80">
                        <Building2 size={14} className="text-primary" /> Business Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your company"
                        value={form.businessName}
                        onChange={(e) => update("businessName", e.target.value)}
                        className={inputClass("businessName")}
                      />
                      {errors.businessName && <p className="text-destructive text-xs mt-1">{errors.businessName}</p>}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Contact Details */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="space-y-5"
                  >
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium mb-2 text-foreground/80">
                        <AtSign size={14} className="text-primary" /> What is your best email?
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className={inputClass("email")}
                      />
                      {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium mb-2 text-foreground/80">
                        <Phone size={14} className="text-primary" /> What is your best contact number?
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className={inputClass("phone")}
                      />
                      {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Project Info */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="space-y-5"
                  >
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium mb-2 text-foreground/80">
                        <Briefcase size={14} className="text-primary" /> What service are you interested in?
                      </label>
                      <div className="relative">
                        <select
                          value={form.service}
                          onChange={(e) => update("service", e.target.value)}
                          className={`${inputClass("service")} appearance-none cursor-pointer pr-10`}
                        >
                          <option value="" disabled>Select a service...</option>
                          {services.map((s) => (
                            <option key={s} value={s} className="bg-background text-foreground">{s}</option>
                          ))}
                        </select>
                        <ChevronRight size={16} className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-muted-foreground pointer-events-none" />
                      </div>
                      {errors.service && <p className="text-destructive text-xs mt-1">{errors.service}</p>}
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium mb-2 text-foreground/80">
                        <MessageSquare size={14} className="text-primary" /> Note
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell me about your project, goals, timeline..."
                        value={form.note}
                        onChange={(e) => update("note", e.target.value)}
                        className={`${inputClass("note")} resize-none`}
                      />
                      {errors.note && <p className="text-destructive text-xs mt-1">{errors.note}</p>}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 gap-4">
                {currentStep > 1 ? (
                  <motion.button
                    type="button"
                    onClick={prevStep}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border/50 text-muted-foreground hover:text-foreground hover:border-border transition-all duration-300 font-medium"
                  >
                    <ChevronLeft size={16} /> Back
                  </motion.button>
                ) : (
                  <div />
                )}

                {currentStep < 3 ? (
                  <motion.button
                    type="button"
                    onClick={nextStep}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                  >
                    Continue <ChevronRight size={16} />
                  </motion.button>
                ) : (
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
                    className={`relative flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all duration-500 overflow-hidden ${
                      isSubmitted
                        ? "bg-green-500 text-white"
                        : "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25"
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <motion.div
                            className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </motion.div>
                      ) : isSubmitted ? (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="flex items-center gap-2"
                        >
                          <Check size={18} /> Sent!
                        </motion.div>
                      ) : (
                        <motion.div
                          key="submit"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <Send size={16} /> Send Message
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                )}
              </div>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div className="glass rounded-2xl p-8 mb-6">
              <h3 className="text-xl font-heading font-semibold mb-4">Let's build something great</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm always open to interesting projects and collaborations. Whether you need a full build,
                strategy consultation, or just someone to bounce ideas off — I'm your guy.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail size={16} className="text-primary" />
                  fkoushik2@gmail.com
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin size={16} className="text-primary" />
                  Available Worldwide · Remote
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-lg font-heading font-semibold mb-4">Connect with me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="p-3 rounded-xl glass hover:glow-purple transition-all duration-300 hover:scale-110"
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
