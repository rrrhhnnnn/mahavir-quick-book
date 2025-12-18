import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import VehicleCard from '@/components/VehicleCard';
import swiftImg from '@/assets/swift.jpg';
import ertigaImg from '@/assets/ertiga.jpg';
import innovaImg from '@/assets/innova.jpg';
import busImg from '@/assets/bus.jpg';
import tempoImg from '@/assets/tempo.jpg';

const vehicles = [
  {
    name: 'Swift',
    description: '4 Seater Compact',
    rating: 4.8,
    image: swiftImg,
  },
  {
    name: 'Ertiga',
    description: '7 Seater Family MPV',
    rating: 4.9,
    image: ertigaImg,
  },
  {
    name: 'Innova Crysta',
    description: '7 Seater Luxury MPV',
    rating: 5.0,
    image: innovaImg,
  },
  {
    name: 'Luxury Bus',
    description: '40+ Seater Coach',
    rating: 4.7,
    image: busImg,
  },
  {
    name: 'Tempo Traveller',
    description: 'Cargo & Utility',
    rating: 4.6,
    image: tempoImg,
  },
];

const Services = () => {
  return (
    <Layout>
      <Helmet>
        <title>Our Fleet - Mahavir Tours and Travels</title>
        <meta
          name="description"
          content="Explore our premium fleet including Swift, Ertiga, Innova Crysta, Luxury Bus, and Tempo Traveller for all your travel needs."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary-foreground mb-4">
            Our <span className="text-gradient">Fleet</span>
          </h1>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
            Choose from our wide range of well-maintained vehicles perfect for
            every occasion - from city commutes to long-distance journeys.
          </p>
        </div>
      </section>

      {/* Vehicle Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {vehicles.map((vehicle, index) => (
              <div
                key={vehicle.name}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <VehicleCard {...vehicle} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
            Need a Custom Quote?
          </h2>
          <p className="text-muted-foreground mb-6">
            Contact us for special packages and group bookings.
          </p>
          <a
            href="https://wa.me/919876543210?text=Hi%20Mahavir%20Tours%20and%20Travels%2C%20I%20need%20a%20custom%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Get Custom Quote
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
