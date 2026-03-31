import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  AlertTriangle,
  DollarSign,
  Activity,
  CheckCircle2,
  Target,
  Lightbulb,
  Shield,
  Users,
  TrendingUp,
  Zap,
  BarChart3,
} from "lucide-react";
import hrmPreview from "@/assets/hrm-preview.png";

const techStack = [
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          d="M12 8.5c3.5 0 6.5.7 8.5 2s2.5 2.8 1.5 4.2c-1 1.4-3.5 2-6.5 1.5M12 8.5C8.5 8.5 5.5 9.2 3.5 10.5S1 13.3 2 14.7c1 1.4 3.5 2 6.5 1.5M12 8.5c1.8-3 2.5-5.8 2-7.5-.5-1.5-1.5-2-2-2s-1.5.5-2 2c-.5 1.7.2 4.5 2 7.5ZM12 15.5c-1.8 3-2.5 5.8-2 7.5.5 1.5 1.5 2 2 2s1.5-.5 2-2c.5-1.7-.2-4.5-2-7.5Z"
        />
      </svg>
    ),
    color: "text-cyan-400",
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 1.85c-.27 0-.55.07-.78.2L3.78 6.35c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.23.13.5.2.78.2s.55-.07.78-.2l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3a1.56 1.56 0 0 0-.78-.2Z" />
      </svg>
    ),
    color: "text-green-400",
  },
  {
    name: "Supabase",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M13.7 21.8c-.4.5-1.3.2-1.3-.5V14h8.3c.8 0 1.3 1 .7 1.6l-7.7 6.2ZM10.3 2.2c.4-.5 1.3-.2 1.3.5V10H3.3c-.8 0-1.3-1-.7-1.6l7.7-6.2Z" />
      </svg>
    ),
    color: "text-emerald-400",
  },
];

const features = [
  {
    icon: Clock,
    title: "Night Shift Support",
    subtitle: "8PM — 5AM",
    desc: "Smart clock-in windows optimized for night shift workers with automatic day boundary detection.",
  },
  {
    icon: AlertTriangle,
    title: "1:3 Late Penalty Ratio",
    subtitle: "Fair Deductions",
    desc: "Automated late deduction calculation with a transparent 1:3 penalty ratio system.",
  },
  {
    icon: DollarSign,
    title: "Auto Payroll",
    subtitle: "Zero Manual Work",
    desc: "Fully automated salary calculation with attendance-based adjustments, overtime, and bonuses.",
  },
  {
    icon: Activity,
    title: "Real-time Attendance",
    subtitle: "Live Tracking",
    desc: "Track employee attendance with live clock-in/out status, GPS verification, and instant notifications.",
  },
  {
    icon: Users,
    title: "Hiring Process",
    subtitle: "End-to-End Pipeline",
    desc: "Streamlined recruitment workflow from job posting to onboarding — track candidates, schedule interviews, and manage offers.",
  },
  {
    icon: TrendingUp,
    title: "Sales CRM",
    subtitle: "Pipeline Management",
    desc: "Built-in CRM to track leads, manage client relationships, monitor sales pipelines, and forecast revenue.",
  },
];

const stats = [
  { value: "95%", label: "Payroll Automation", icon: Zap },
  { value: "80%", label: "Time Saved on HR Tasks", icon: TrendingUp },
  { value: "60%", label: "Fewer Attendance Disputes", icon: Shield },
  { value: "3x", label: "Faster Report Generation", icon: BarChart3 },
];

const problems = [
  "Manual attendance tracking led to frequent errors and disputes between employees and management.",
  "Night shift workers had no proper system — clock-ins spanning midnight caused miscalculations.",
  "Payroll processing took 3+ days each month with spreadsheet-based calculations.",
  "No real-time visibility into who was present, late, or absent on any given day.",
];

const solutions = [
  "Built a real-time digital clock-in/out system with GPS verification and anti-fraud measures.",
  "Implemented smart day-boundary logic that correctly handles 8PM-5AM shifts across midnight.",
  "Automated the entire payroll pipeline — attendance → deductions → salary → payslips in minutes.",
  "Created a live dashboard showing real-time attendance status, late arrivals, and trend analytics.",
];

const challenges = [
  "Handling timezone edge cases and daylight saving transitions for accurate shift tracking.",
  "Designing a penalty system (1:3 ratio) that employees perceived as fair and transparent.",
  "Ensuring real-time sync across multiple locations without latency or data conflicts.",
  "Building an audit trail that satisfies both HR compliance and management reporting needs.",
];

const successPoints = [
  "Reduced monthly payroll processing from 3 days to under 30 minutes.",
  "Eliminated 95% of manual attendance errors and disputes.",
  "Night shift employees reported higher satisfaction with accurate, automated tracking.",
  "HR team reallocated 80% of administrative time to strategic initiatives.",
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const ProjectHRM = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back to Portfolio</span>
          </Link>
          <div className="flex items-center gap-3">
            {techStack.map((t) => (
              <span key={t.name} className={`${t.color} opacity-70`} title={t.name}>
                {t.icon}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-neon-purple text-sm font-mono tracking-widest uppercase mb-3">
              Case Study
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
              <span className="gradient-text">HRM</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Human Resource Management System — Employee Attendance & Payroll Management
            </p>
          </motion.div>

          {/* Preview Image */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-4xl mx-auto rounded-2xl overflow-hidden glass border border-border/50 glow-purple"
          >
            <img
              src={hrmPreview}
              alt="HRM Dashboard Preview"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Tech & Stats */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Tech Stack */}
          <motion.div {...fadeUp} className="flex flex-wrap justify-center gap-4 mb-16">
            {techStack.map((t) => (
              <div
                key={t.name}
                className="glass rounded-xl px-6 py-3 flex items-center gap-3 border border-border/30"
              >
                <span className={t.color}>{t.icon}</span>
                <span className="font-medium text-sm">{t.name}</span>
              </div>
            ))}
          </motion.div>

          {/* Automation Stats */}
          <motion.div {...fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="glass rounded-2xl p-6 text-center border border-neon-purple/20 hover:border-neon-purple/50 transition-all group"
              >
                <s.icon
                  size={24}
                  className="mx-auto mb-3 text-neon-purple group-hover:scale-110 transition-transform"
                />
                <p className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-1">
                  {s.value}
                </p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            {...fadeUp}
            className="text-3xl md:text-4xl font-heading font-bold text-center mb-12"
          >
            Core <span className="gradient-text">Features</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass rounded-2xl p-6 border border-border/30 hover:border-neon-purple/40 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-neon-purple/10 group-hover:bg-neon-purple/20 transition-colors shrink-0">
                    <f.icon size={24} className="text-neon-purple" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg">{f.title}</h3>
                    <p className="text-neon-purple text-xs font-mono mb-2">{f.subtitle}</p>
                    <p className="text-muted-foreground text-sm">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems & Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Problems */}
            <motion.div {...fadeUp}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-destructive/10">
                  <Target size={22} className="text-destructive" />
                </div>
                <h2 className="text-2xl font-heading font-bold">
                  The <span className="text-destructive">Problems</span>
                </h2>
              </div>
              <div className="space-y-4">
                {problems.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass rounded-xl p-4 border-l-4 border-destructive/50"
                  >
                    <p className="text-sm text-muted-foreground">{p}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Solutions */}
            <motion.div {...fadeUp}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-neon-purple/10">
                  <Lightbulb size={22} className="text-neon-purple" />
                </div>
                <h2 className="text-2xl font-heading font-bold">
                  The <span className="gradient-text">Solutions</span>
                </h2>
              </div>
              <div className="space-y-4">
                {solutions.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass rounded-xl p-4 border-l-4 border-neon-purple/50"
                  >
                    <p className="text-sm text-muted-foreground">{s}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <div className="p-2 rounded-lg bg-neon-orange/10">
                <Shield size={22} className="text-neon-orange" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold">
                Key <span className="text-neon-orange">Challenges</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {challenges.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-5 border border-neon-orange/20 hover:border-neon-orange/40 transition-all"
                >
                  <div className="flex gap-3 items-start">
                    <span className="text-neon-orange font-heading font-bold text-lg shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-muted-foreground">{c}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success */}
      <section className="py-16 pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <div className="p-2 rounded-lg bg-green-500/10">
                <CheckCircle2 size={22} className="text-green-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold">
                The <span className="text-green-400">Success</span>
              </h2>
            </div>
            <div className="space-y-4">
              {successPoints.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-5 flex items-start gap-4 border border-green-500/20 hover:border-green-500/40 transition-all"
                >
                  <CheckCircle2 size={20} className="text-green-400 shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{s}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back CTA */}
      <section className="py-12 border-t border-border/30">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:glow-purple transition-all text-sm font-medium"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectHRM;
