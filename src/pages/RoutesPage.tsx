import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Plane, MapPin, Star } from 'lucide-react';
import Layout from '@/components/Layout';

const airportRoutes = [
  { title: 'Hirasar Airport to Rajkot Taxi Service', desc: 'Quick, fixed-fare transfers from Rajkot International Airport (Hirasar) to any address in Rajkot city, available round the clock.' },
  { title: 'Rajkot to Hirasar Airport Taxi Service', desc: 'On-time airport pickup and drop from anywhere in Rajkot, with flight tracking and free waiting time.' },
  { title: 'Hirasar Airport to Dwarka Taxi Service', desc: 'Direct one-way or round-trip cabs from Hirasar Airport to Dwarka for pilgrims and families.' },
  { title: 'Hirasar Airport to Somnath Taxi Service', desc: 'Comfortable Ertiga and Innova Crysta cabs from Hirasar Airport to Somnath temple.' },
  { title: 'Hirasar Airport to Jamnagar Taxi Service', desc: 'Premium airport pickup drop between Hirasar Airport and Jamnagar city or Reliance township.' },
  { title: 'Jamnagar to Hirasar Rajkot International Airport Taxi Service', desc: 'Early morning and late night departures covered for Jamnagar travellers.' },
  { title: 'Hirasar Airport to All Gujarat Taxi Service', desc: 'Best cab services at Hirasar Rajkot International Airport to every city in Gujarat, at premium comfort and transparent rates.' },
];

const cityRoutes = [
  { title: 'Rajkot to Ahmedabad Taxi', desc: 'Highway-ready sedans and MPVs for the Rajkot to Ahmedabad run, including airport drops.' },
  { title: 'Ahmedabad to Rajkot Taxi', desc: 'One-way and return cabs from Ahmedabad city or airport to Rajkot.' },
  { title: 'Rajkot to Dwarka Taxi Service', desc: 'Same-day darshan trips or multi-day packages with an experienced local driver.' },
  { title: 'Somnath to Rajkot Taxi Service', desc: 'Return journeys from Somnath to Rajkot at fair, all-inclusive pricing.' },
  { title: 'Dwarka to Somnath Taxi Service', desc: 'The popular Dwarka-Somnath pilgrimage leg with stops at Porbandar on request.' },
  { title: 'Somnath to Dwarka Taxi Service', desc: 'Reverse pilgrimage route with flexible pickup timing.' },
  { title: 'Rajkot to All Gujarat Taxi Service', desc: 'Rajkot to all Gujarat taxi service available for Vadodara, Surat, Bhuj, Diu, Junagadh, Statue of Unity and more.' },
];

const faqs = [
  {
    q: 'Which is the best taxi service in Rajkot for airport pickup and drop?',
    a: 'Mahavir Tours and Travels offers premium taxi service for Hirasar Rajkot International Airport pickup and drop, with 24/7 availability, verified drivers and fixed fares. Call +91 91737 89788 to book.',
  },
  {
    q: 'Do you provide Hirasar Airport to all Gujarat taxi service?',
    a: 'Yes. We run all Gujarat taxi service from Hirasar Airport, including Dwarka, Somnath, Jamnagar, Ahmedabad, Vadodara, Bhuj and Diu.',
  },
  {
    q: 'Which vehicles are available for outstation trips?',
    a: 'Swift (4 seater), Ertiga (7 seater), Innova Crysta (7 seater luxury), Urbania and 40+ seater luxury buses for group travel.',
  },
  {
    q: 'How do I book a cab from Rajkot to Ahmedabad?',
    a: 'Use the booking form on our home page or message us on WhatsApp at +91 91737 89788 with your pickup date, time and destination.',
  },
];

const RoutesPage = () => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <Layout>
      <Helmet>
        <title>Hirasar Airport Taxi & All Gujarat Taxi Service | Rajkot Cabs</title>
        <meta
          name="description"
          content="Best taxi services from Hirasar Rajkot International Airport to Dwarka, Somnath, Jamnagar & Ahmedabad. Premium airport pickup drop and Rajkot to all Gujarat taxi service. Call +91 91737 89788."
        />
        <link rel="canonical" href="https://mahavirtravels.in/routes" />
        <meta property="og:title" content="Hirasar Airport Taxi & All Gujarat Taxi Service | Rajkot Cabs" />
        <meta property="og:description" content="Premium taxi service from Hirasar Rajkot International Airport to all Gujarat. Airport pickup drop, Dwarka, Somnath, Jamnagar and Ahmedabad routes." />
        <meta property="og:url" content="/routes" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-secondary-foreground mb-4">
            Hirasar Airport & <span className="text-gradient">All Gujarat</span> Taxi Service
          </h1>
          <p className="text-secondary-foreground/80 max-w-3xl mx-auto">
            Mahavir Tours and Travels is among the best taxi services in Rajkot for airport pickup
            drop and outstation travel. We offer premium taxi service from Hirasar Rajkot
            International Airport to Dwarka, Somnath, Jamnagar, Ahmedabad and every city in Gujarat.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="https://wa.me/919173789788?text=Hi%20Mahavir%20Tours%20and%20Travels%2C%20I%20need%20a%20taxi%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Get a Fare Quote
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:+919173789788" className="btn-secondary inline-flex items-center gap-2">
              Call +91 91737 89788
            </a>
          </div>
        </div>
      </section>

      {/* Airport routes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Plane className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Hirasar Rajkot International Airport Taxi Routes
            </h2>
          </div>
          <p className="text-muted-foreground max-w-3xl mb-8">
            Best cab services at Hirasar Rajkot International Airport — meet and greet pickups,
            clean vehicles and drivers who know every highway in Saurashtra.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {airportRoutes.map((r) => (
              <article key={r.title} className="card-elevated">
                <h3 className="text-lg font-display font-bold text-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* City routes */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Popular Outstation Taxi Routes from Rajkot
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityRoutes.map((r) => (
              <article key={r.title} className="card-elevated">
                <h3 className="text-lg font-display font-bold text-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
            Why We Are a Premium Taxi Service
          </h2>
          <ul className="grid gap-4 md:grid-cols-2 text-muted-foreground">
            {[
              '24/7 airport pickup drop at Hirasar Rajkot International Airport',
              'Fixed, transparent fares with no hidden charges',
              'Swift, Ertiga, Innova Crysta, Urbania and luxury buses',
              'Experienced drivers for all Gujarat taxi service routes',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Star className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="card-elevated">
                <h3 className="font-display font-bold text-foreground mb-2">{f.q}</h3>
                <p className="text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary inline-flex items-center gap-2">
              View Our Fleet
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RoutesPage;
