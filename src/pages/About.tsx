import { Helmet } from 'react-helmet-async';
import { Users, Award, MapPin, Clock, Eye, TrendingUp } from 'lucide-react';
import Layout from '@/components/Layout';
import { useEffect, useState, useRef } from 'react';

// ─── Animated number counter hook ────────────────────────────────────────────
function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (target === 0 || started.current) return;
    started.current = true;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration]);

  return count;
}

// ─── Visitor Counter using localStorage ──────────────────────────────────────
const VisitorCounter = () => {
  const [totalVisitors, setTotalVisitors] = useState(0);
  const animatedCount = useCountUp(totalVisitors, 2200);

  useEffect(() => {
    try {
      const STORAGE_KEY = 'mahavir_visitor_count';
      const VISITED_KEY = 'mahavir_has_visited';

      const stored = localStorage.getItem(STORAGE_KEY);
      let count = stored ? parseInt(stored, 10) : 0;

      // Only increment once per browser/device
      const hasVisited = localStorage.getItem(VISITED_KEY);
      if (!hasVisited) {
        count += 1;
        localStorage.setItem(VISITED_KEY, 'true');
        localStorage.setItem(STORAGE_KEY, count.toString());
      }

      setTotalVisitors(count);
    } catch {
      setTotalVisitors(0);
    }
  }, []);

  const formatNumber = (n: number) =>
    n >= 1000 ? n.toLocaleString('en-IN') : n.toString();

  return (
    <section className="py-12 bg-muted border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="card-elevated flex flex-col sm:flex-row items-center gap-6 p-6 md:p-8">
            {/* Icon */}
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Eye className="w-8 h-8 text-primary" />
            </div>

            {/* Count */}
            <div className="flex-1 text-center sm:text-left">
              <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider font-medium">
                Website Visitors
              </p>
              <div className="text-4xl md:text-5xl font-display font-bold text-foreground leading-none">
                {formatNumber(animatedCount)}
              </div>
              <p className="text-muted-foreground text-sm mt-2">
                People have explored our website 🎉
              </p>
            </div>

            {/* Badge */}
            <div className="flex-shrink-0 text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                <TrendingUp className="w-3.5 h-3.5" />
                Live Counter
              </span>
            </div>
          </div>

          {/* Google Analytics tip for admin */}
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl text-sm text-blue-800">
            <strong>📊 Admin Tip:</strong> For accurate tracking across all devices, connect{' '}
            <a
              href="https://analytics.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold hover:text-blue-600"
            >
              Google Analytics 4
            </a>{' '}
            (free). Add your <code className="bg-blue-100 px-1 rounded">GA_MEASUREMENT_ID</code>{' '}
            to <code className="bg-blue-100 px-1 rounded">index.html</code> and remove this tip.
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Static stats ─────────────────────────────────────────────────────────────
const stats = [
  { icon: Users, value: '10,000+', label: 'Happy Customers' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: MapPin, value: '500+', label: 'Cities Covered' },
  { icon: Clock, value: '24/7', label: 'Support Available' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Mahavir Tours and Travels - 15+ Years Trusted Taxi Service Rajkot</title>
        <meta
          name="description"
          content="Mahavir Tours and Travels - 15+ years of trusted taxi & travel services in Rajkot, Gujarat. 10,000+ happy customers, 500+ cities covered."
        />
        <link rel="canonical" href="https://mahavirtravels.in/about" />
      </Helmet>

      {/* Hero */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary-foreground mb-4">
            About <span className="text-gradient">Us</span>
          </h1>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
            Your trusted travel partner since 2009
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary-foreground" />
                <div className="text-2xl md:text-3xl font-bold text-primary-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visitor Counter */}
      <VisitorCounter />

      {/* Story */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2009, Mahavir Tours and Travels began with a simple mission: to provide
                safe, reliable, and comfortable travel experiences across India. What started as a
                small family business with just two vehicles has now grown into one of the most
                trusted names in the travel industry.
              </p>
              <p>
                Over the years, we've expanded our fleet to include everything from compact city
                cars to luxury coaches, ensuring we have the perfect vehicle for every journey. Our
                commitment to excellence has earned us the trust of over 10,000 satisfied customers.
              </p>
              <p>
                Today, we continue to uphold the values that have made us successful: integrity,
                reliability, and a genuine care for our customers' comfort and safety. Whether you
                need a quick city ride or a cross-country adventure, Mahavir Tours and Travels is
                here to make your journey memorable.
              </p>
            </div>

            <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-elevated">
                <h3 className="font-semibold text-foreground mb-2">Safety First</h3>
                <p className="text-sm text-muted-foreground">
                  All our vehicles undergo regular maintenance and safety checks. Our drivers are
                  trained professionals with years of experience.
                </p>
              </div>
              <div className="card-elevated">
                <h3 className="font-semibold text-foreground mb-2">Customer Satisfaction</h3>
                <p className="text-sm text-muted-foreground">
                  Your comfort is our priority. We go above and beyond to ensure every journey
                  exceeds your expectations.
                </p>
              </div>
              <div className="card-elevated">
                <h3 className="font-semibold text-foreground mb-2">Transparent Pricing</h3>
                <p className="text-sm text-muted-foreground">
                  No hidden charges, no surprises. We believe in honest, upfront pricing for all
                  our services.
                </p>
              </div>
              <div className="card-elevated">
                <h3 className="font-semibold text-foreground mb-2">24/7 Availability</h3>
                <p className="text-sm text-muted-foreground">
                  Travel doesn't wait, and neither do we. Our team is available round the clock to
                  assist you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;