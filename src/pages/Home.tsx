import { Helmet } from 'react-helmet-async';
import { ArrowRight, Shield, Clock, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import BookingForm from '@/components/BookingForm';
import heroBg from '@/assets/hero-bg.jpg';

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Safe & Reliable',
      description: 'Verified drivers and well-maintained vehicles for your peace of mind.',
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round the clock service for all your travel needs.',
    },
    {
      icon: ThumbsUp,
      title: 'Best Prices',
      description: 'Competitive rates with no hidden charges. Transparent billing.',
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Mahavir Tours and Travels - Premium Taxi Service in India</title>
        <meta
          name="description"
          content="Book reliable and comfortable taxi services with Mahavir Tours and Travels. Swift, Ertiga, Innova, Bus & Tempo available 24/7."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-dark/95 via-slate-dark/80 to-slate-dark/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
                Trusted by 10,000+ Travelers
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
                Your Journey,{' '}
                <span className="text-gradient">Our Priority</span>
              </h1>
              <p className="text-lg text-white/80 max-w-lg mb-8">
                Experience premium travel services across India. From city rides
                to long-distance trips, we've got you covered with comfort and safety.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/services" className="btn-primary inline-flex items-center gap-2">
                  View Our Fleet
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="btn-secondary inline-flex items-center gap-2">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="lg:pl-8" style={{ animationDelay: '0.2s' }}>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Why Choose Us?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the best travel experience with our
              professional services and dedicated team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card-elevated text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground mb-4">
            Ready to Travel?
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
            Book your ride now and experience hassle-free travel with Mahavir
            Tours and Travels. We're just a WhatsApp message away!
          </p>
          <Link to="/services" className="btn-primary inline-flex items-center gap-2">
            Explore Our Fleet
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
