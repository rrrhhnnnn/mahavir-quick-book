import { Star } from 'lucide-react';

interface VehicleCardProps {
  name: string;
  description: string;
  rating: number;
  image: string;
}

const VehicleCard = ({ name, description, rating, image }: VehicleCardProps) => {
  return (
    <div className="card-elevated group">
      <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <h3 className="text-lg font-display font-bold text-foreground mb-1">
        {name}
      </h3>
      
      <p className="text-sm text-muted-foreground mb-3">
        {description}
      </p>
      
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? 'text-primary fill-primary'
                : 'text-muted-foreground/30'
            }`}
          />
        ))}
        <span className="text-sm text-muted-foreground ml-2">
          {rating.toFixed(1)}
        </span>
      </div>
    </div>
  );
};

export default VehicleCard;
