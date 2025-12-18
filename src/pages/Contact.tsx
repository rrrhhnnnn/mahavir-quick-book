import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import Layout from '@/components/Layout';

const Contact = () => {
  return (
    <Layout>
      <Helmet>
        <title>Contact Us - Mahavir Tours and Travels</title>
        <meta
          name="description"
          content="Get in touch with Mahavir Tours and Travels. Call us, email us, or reach out via WhatsApp for quick bookings and inquiries."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary-foreground mb-4">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
            We're here to help with all your travel needs
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                Get in Touch
              </h2>

              <a
                href="tel:+919876543210"
                className="card-elevated flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="font-semibold text-foreground">+91 98765 43210</p>
                </div>
              </a>

              <a
                href="https://wa.me/919876543210?text=Hi%20Mahavir%20Tours%20and%20Travels"
                target="_blank"
                rel="noopener noreferrer"
                className="card-elevated flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="font-semibold text-foreground">Quick Chat</p>
                </div>
              </a>

              <a
                href="mailto:info@mahavirtravels.com"
                className="card-elevated flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Us</p>
                  <p className="font-semibold text-foreground">info@mahavirtravels.com</p>
                </div>
              </a>

              <div className="card-elevated flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Visit Us</p>
                  <p className="font-semibold text-foreground">
                    123 Travel Lane, Mumbai,
                    <br />
                    Maharashtra 400001
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                Office Hours
              </h2>
              <div className="card-elevated">
                <div className="space-y-4">
                  <div className="flex justify-between pb-4 border-b border-border">
                    <span className="text-muted-foreground">Monday - Saturday</span>
                    <span className="font-semibold text-foreground">9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between pb-4 border-b border-border">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-semibold text-foreground">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Booking Hotline</span>
                    <span className="font-semibold text-primary">24/7 Available</span>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-foreground">
                    <strong>Quick Tip:</strong> For fastest response, message us
                    on WhatsApp! We typically respond within 5 minutes during
                    business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-foreground mb-6 text-center">
              Find Us
            </h2>
            <div className="aspect-video bg-card rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1703000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mahavir Tours and Travels Location"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
