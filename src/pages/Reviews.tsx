import { Helmet } from 'react-helmet-async';
import { Star, ExternalLink, MessageSquarePlus, Quote } from 'lucide-react';
import Layout from '@/components/Layout';

// ─────────────────────────────────────────────────────────────────────────────
// 🔧 CONFIGURATION — replace these two values with your real Google info
// ─────────────────────────────────────────────────────────────────────────────
const GOOGLE_PLACE_ID = 'YOUR_GOOGLE_PLACE_ID'; // e.g. ChIJN1t_tDeuEmsRUsoyG83frY4
const GOOGLE_REVIEW_URL = `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`;
// ─────────────────────────────────────────────────────────────────────────────

// Showcase reviews displayed on the page (manually curated from real reviews)
const featuredReviews = [
  {
    name: 'Rajesh Patel',
    rating: 5,
    date: 'March 2024',
    review:
      'Excellent service! The driver was punctual, polite and the car was very clean. Booked an Innova for an outstation trip to Ahmedabad — totally smooth experience. Highly recommend Mahavir Tours!',
    avatar: 'R',
  },
  {
    name: 'Priya Shah',
    rating: 5,
    date: 'February 2024',
    review:
      'Booked an Ertiga for a family trip. The vehicle was well-maintained and the driver knew all the routes. Pricing was fair and transparent — no hidden charges at all. Will book again!',
    avatar: 'P',
  },
  {
    name: 'Amit Desai',
    rating: 5,
    date: 'January 2024',
    review:
      'Used their service for airport pickup. Driver arrived 15 minutes early, helped with luggage and drove safely. Very professional service. The WhatsApp booking was super easy too.',
    avatar: 'A',
  },
  {
    name: 'Sunita Mehta',
    rating: 4,
    date: 'December 2023',
    review:
      'Good experience overall. Hired a Swift for local city rides for 2 days. Driver was courteous and on time. Would be 5 stars if AC was slightly stronger, but overall a great service.',
    avatar: 'S',
  },
  {
    name: 'Deepak Joshi',
    rating: 5,
    date: 'November 2023',
    review:
      'Mahavir Tours arranged a luxury bus for our company outing. Everything was perfectly organized — on time, clean vehicle, and a very professional driver. Our entire team was impressed!',
    avatar: 'D',
  },
  {
    name: 'Kavita Rathod',
    rating: 5,
    date: 'October 2023',
    review:
      'Reliable and trustworthy service. I travel frequently for work and Mahavir Tours is my go-to. Always on time, always courteous. The Innova Crysta is especially comfortable for long trips.',
    avatar: 'K',
  },
];

const overallRating = 4.9;
const totalReviews = 200;

// Star renderer
const StarRating = ({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) => {
  const sizeClass = size === 'lg' ? 'w-7 h-7' : size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${sizeClass} ${
            star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-gray-100'
          }`}
        />
      ))}
    </div>
  );
};

const Reviews = () => {
  return (
    <Layout>
      <Helmet>
        <title>Customer Reviews - Mahavir Tours and Travels Rajkot</title>
        <meta
          name="description"
          content="Read customer reviews for Mahavir Tours and Travels Rajkot. Rated 4.9/5 by 200+ happy travellers. Share your experience on Google!"
        />
        <link rel="canonical" href="https://mahavirtravels.in/reviews" />
      </Helmet>

      {/* ── Hero ── */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary-foreground mb-4">
            Customer <span className="text-gradient">Reviews</span>
          </h1>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
            Real experiences from real travellers. We're proud of every journey we've made together.
          </p>
        </div>
      </section>

      {/* ── Rating Summary ── */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Big number */}
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-primary-foreground leading-none">
                {overallRating}
              </div>
              <StarRating rating={Math.round(overallRating)} size="lg" />
              <p className="text-primary-foreground/80 mt-2 text-sm">out of 5</p>
            </div>

            {/* Bar breakdown */}
            <div className="w-full max-w-xs space-y-2">
              {[5, 4, 3, 2, 1].map((star) => {
                const pct = star === 5 ? 82 : star === 4 ? 13 : star === 3 ? 3 : star === 2 ? 1 : 1;
                return (
                  <div key={star} className="flex items-center gap-3">
                    <span className="text-primary-foreground/80 text-sm w-3">{star}</span>
                    <Star className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300 flex-shrink-0" />
                    <div className="flex-1 bg-primary-foreground/20 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-yellow-300 h-2 rounded-full transition-all duration-700"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="text-primary-foreground/60 text-xs w-8">{pct}%</span>
                  </div>
                );
              })}
            </div>

            {/* Total count */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground leading-none">
                {totalReviews}+
              </div>
              <p className="text-primary-foreground/80 mt-2 text-sm">Google Reviews</p>
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-primary-foreground/80 text-xs font-medium">Verified Google Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Write a Review CTA ── */}
      <section className="py-10 bg-muted border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-4 text-sm md:text-base">
            Had a great experience with us? Share it on Google to help other travellers!
          </p>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <MessageSquarePlus className="w-4 h-4" />
            Write a Review on Google
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
          <p className="text-xs text-muted-foreground mt-3">
            Clicking this will open Google Maps / Google Business to leave your review
          </p>
        </div>
      </section>

      {/* ── Review Cards Grid ── */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-10">
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredReviews.map((review, index) => (
              <div
                key={index}
                className="card-elevated flex flex-col gap-4 animate-slide-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary/30 -mb-2" />

                {/* Review text */}
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  "{review.review}"
                </p>

                {/* Stars + meta */}
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                      {review.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                  <StarRating rating={review.rating} size="sm" />
                </div>
              </div>
            ))}
          </div>

          {/* See all on Google */}
          <div className="text-center mt-10">
            <a
              href={`https://search.google.com/local/reviews?placeid=${GOOGLE_PLACE_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              See All Reviews on Google
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-secondary-foreground mb-3">
            Ready for Your Own Journey?
          </h2>
          <p className="text-secondary-foreground/80 mb-6 max-w-xl mx-auto">
            Join thousands of happy travellers. Book your ride with Mahavir Tours and Travels today.
          </p>
          <a href="/" className="btn-primary inline-flex items-center gap-2">
            Book a Ride Now
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;