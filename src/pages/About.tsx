import { Helmet } from 'react-helmet-async';
import { Users, Award, MapPin, Clock } from 'lucide-react';
import Layout from '@/components/Layout';

const stats = [
  { icon: Users, value: '10,000+', label: 'Happy Customers' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: MapPin, value: '500+', label: 'Cities Covered' },
  { icon: Clock, value: '24/7', label: 'Support Available' },
];

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Us - Mahavir Tours and Travels</title>
        <meta
          name="description"
          content="Learn about Mahavir Tours and Travels - 15+ years of trusted travel services across India with a fleet of premium vehicles."
        />
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

      {/* Stats */}
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

      {/* Story */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2009, Mahavir Tours and Travels began with a simple
                mission: to provide safe, reliable, and comfortable travel
                experiences across India. What started as a small family
                business with just two vehicles has now grown into one of the
                most trusted names in the travel industry.
              </p>
              <p>
                Over the years, we've expanded our fleet to include everything
                from compact city cars to luxury coaches, ensuring we have the
                perfect vehicle for every journey. Our commitment to excellence
                has earned us the trust of over 10,000 satisfied customers.
              </p>
              <p>
                Today, we continue to uphold the values that have made us
                successful: integrity, reliability, and a genuine care for our
                customers' comfort and safety. Whether you need a quick city
                ride or a cross-country adventure, Mahavir Tours and Travels is
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
                  All our vehicles undergo regular maintenance and safety
                  checks. Our drivers are trained professionals with years of
                  experience.
                </p>
              </div>
              <div className="card-elevated">
                <h3 className="font-semibold text-foreground mb-2">Customer Satisfaction</h3>
                <p className="text-sm text-muted-foreground">
                  Your comfort is our priority. We go above and beyond to ensure
                  every journey exceeds your expectations.
                </p>
              </div>
              <div className="card-elevated">
                <h3 className="font-semibold text-foreground mb-2">Transparent Pricing</h3>
                <p className="text-sm text-muted-foreground">
                  No hidden charges, no surprises. We believe in honest,
                  upfront pricing for all our services.
                </p>
              </div>
              <div className="card-elevated">
                <h3 className="font-semibold text-foreground mb-2">24/7 Availability</h3>
                <p className="text-sm text-muted-foreground">
                  Travel doesn't wait, and neither do we. Our team is available
                  round the clock to assist you.
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
