import { useState } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import { Send, Loader2, Car, CalendarIcon, Clock } from 'lucide-react';
import { format } from 'date-fns';
import LocationInput from './LocationInput';
import { toast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import ClockTimePicker from './ClockTimePicker';
import { cn } from '@/lib/utils';

const libraries: ("places")[] = ["places"];

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

const vehicles = [
  { value: 'swift', label: 'Swift', description: '4 Seater Hatchback' },
  { value: 'ertiga', label: 'Ertiga', description: '7 Seater MPV' },
  { value: 'innova', label: 'Innova', description: '7 Seater Premium' },
  { value: 'urbania', label: 'Urbania', description: '17 Seater Luxury' },
  { value: 'bus', label: 'Bus', description: '40+ Seater Coach' },
];

const BookingForm = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState('');

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const handleBookNow = () => {
    if (!source.trim()) {
      toast({ title: "Source Required", description: "Please enter your pickup location", variant: "destructive" });
      return;
    }
    if (!destination.trim()) {
      toast({ title: "Destination Required", description: "Please enter your drop-off location", variant: "destructive" });
      return;
    }
    if (!vehicle) {
      toast({ title: "Vehicle Required", description: "Please select a vehicle type", variant: "destructive" });
      return;
    }
    if (!date) {
      toast({ title: "Date Required", description: "Please select a pickup date", variant: "destructive" });
      return;
    }
    if (!time) {
      toast({ title: "Time Required", description: "Please select a pickup time", variant: "destructive" });
      return;
    }

    const selectedVehicle = vehicles.find(v => v.value === vehicle);
    const phoneNumber = '+919173789788';
    const message = `Hi Mahavir Tours and Travels, I want to book a ${selectedVehicle?.label} ride from ${source} to ${destination} on ${format(date, 'PPP')} at ${time}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  if (loadError) {
    return (
      <div className="bg-card rounded-2xl p-6 md:p-8 shadow-xl">
        <p className="text-destructive text-center">
          Error loading Google Maps. Please check your API key.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 shadow-xl animate-scale-in">
      <h3 className="text-xl font-display font-bold text-foreground mb-6">
        Book Your Ride
      </h3>
      
      <div className="space-y-4">
        {isLoaded ? (
          <>
            <LocationInput
              value={source}
              onChange={setSource}
              placeholder="Enter pickup location"
              label="Pickup Location"
              icon="source"
            />
            <LocationInput
              value={destination}
              onChange={setDestination}
              placeholder="Enter drop-off location"
              label="Drop-off Location"
              icon="destination"
            />
            
            {/* Vehicle Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Car className="w-4 h-4 text-primary" />
                Select Vehicle
              </label>
              <Select value={vehicle} onValueChange={setVehicle}>
                <SelectTrigger className="w-full h-12 bg-background border-border">
                  <SelectValue placeholder="Choose your vehicle" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border z-50">
                  {vehicles.map((v) => (
                    <SelectItem key={v.value} value={v.value} className="cursor-pointer">
                      <span className="font-medium">{v.label}</span>
                      <span className="text-muted-foreground ml-2 text-sm">({v.description})</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-primary" />
                  Pickup Date
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full h-12 justify-start text-left font-normal bg-background border-border",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, 'PPP') : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-card border-border z-50" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  Pickup Time
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full h-12 justify-start text-left font-normal bg-background border-border",
                        !time && "text-muted-foreground"
                      )}
                    >
                      <Clock className="mr-2 h-4 w-4" />
                      {time ? time : <span>Pick a time</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-48 p-2 bg-card border-border z-50" align="start">
                    <div className="max-h-64 overflow-y-auto grid grid-cols-2 gap-1">
                      {Array.from({ length: 48 }, (_, i) => {
                        const h = Math.floor(i / 2).toString().padStart(2, '0');
                        const m = i % 2 === 0 ? '00' : '30';
                        const t = `${h}:${m}`;
                        return (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setTime(t)}
                            className={cn(
                              "text-sm py-1.5 px-2 rounded hover:bg-accent hover:text-accent-foreground transition-colors",
                              time === t && "bg-primary text-primary-foreground hover:bg-primary"
                            )}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        )}

        <button
          onClick={handleBookNow}
          disabled={!isLoaded}
          className="btn-primary w-full flex items-center justify-center gap-2 mt-6"
        >
          <Send className="w-4 h-4" />
          Book on WhatsApp
        </button>

        <p className="text-xs text-muted-foreground text-center mt-4">
          You'll be redirected to WhatsApp to confirm your booking
        </p>
      </div>
    </div>
  );
};

export default BookingForm;
