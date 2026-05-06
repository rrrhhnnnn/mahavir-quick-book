import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ClockTimePickerProps {
  value: string; // "HH:mm" 24h
  onChange: (val: string) => void;
  onClose?: () => void;
}

const parseValue = (v: string) => {
  if (!v) return { h12: 12, m: 0, period: 'AM' as 'AM' | 'PM' };
  const [hStr, mStr] = v.split(':');
  const h = parseInt(hStr, 10);
  const m = parseInt(mStr, 10);
  const period: 'AM' | 'PM' = h >= 12 ? 'PM' : 'AM';
  let h12 = h % 12;
  if (h12 === 0) h12 = 12;
  return { h12, m, period };
};

const ClockTimePicker = ({ value, onChange, onClose }: ClockTimePickerProps) => {
  const init = parseValue(value);
  const [hour, setHour] = useState<number>(init.h12);
  const [minute, setMinute] = useState<number>(init.m);
  const [period, setPeriod] = useState<'AM' | 'PM'>(init.period);
  const [mode, setMode] = useState<'hour' | 'minute'>('hour');

  useEffect(() => {
    const p = parseValue(value);
    setHour(p.h12);
    setMinute(p.m);
    setPeriod(p.period);
  }, []);

  const formatHH = (h12: number, per: 'AM' | 'PM') => {
    let h24 = h12 % 12;
    if (per === 'PM') h24 += 12;
    return h24.toString().padStart(2, '0');
  };

  const commit = (h12: number, m: number, per: 'AM' | 'PM') => {
    onChange(`${formatHH(h12, per)}:${m.toString().padStart(2, '0')}`);
  };

  const radius = 90;
  const center = 110;

  const hourPositions = Array.from({ length: 12 }, (_, i) => {
    const num = i + 1;
    const angle = (num * 30 - 90) * (Math.PI / 180);
    return {
      num,
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    };
  });

  const minutePositions = Array.from({ length: 12 }, (_, i) => {
    const num = i * 5;
    const angle = (num * 6 - 90) * (Math.PI / 180);
    return {
      num,
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    };
  });

  const activeAngle =
    mode === 'hour'
      ? (hour % 12) * 30 - 90
      : minute * 6 - 90;
  const handX = center + radius * Math.cos(activeAngle * (Math.PI / 180));
  const handY = center + radius * Math.sin(activeAngle * (Math.PI / 180));

  return (
    <div className="p-4 select-none">
      <div className="text-xs text-muted-foreground mb-2">Select time</div>

      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center gap-1 text-3xl font-display">
          <button
            onClick={() => setMode('hour')}
            className={cn(
              'px-3 py-1 rounded-md transition-colors',
              mode === 'hour' ? 'bg-primary/20 text-primary' : 'bg-muted text-foreground'
            )}
          >
            {hour.toString().padStart(2, '0')}
          </button>
          <span>:</span>
          <button
            onClick={() => setMode('minute')}
            className={cn(
              'px-3 py-1 rounded-md transition-colors',
              mode === 'minute' ? 'bg-primary/20 text-primary' : 'bg-muted text-foreground'
            )}
          >
            {minute.toString().padStart(2, '0')}
          </button>
        </div>
        <div className="flex flex-col gap-1 ml-auto">
          <button
            onClick={() => {
              setPeriod('AM');
              commit(hour, minute, 'AM');
            }}
            className={cn(
              'text-xs px-3 py-1 rounded-full border border-border transition-colors',
              period === 'AM' ? 'bg-primary/20 text-primary border-primary' : 'text-muted-foreground'
            )}
          >
            a.m.
          </button>
          <button
            onClick={() => {
              setPeriod('PM');
              commit(hour, minute, 'PM');
            }}
            className={cn(
              'text-xs px-3 py-1 rounded-full border border-border transition-colors',
              period === 'PM' ? 'bg-primary/20 text-primary border-primary' : 'text-muted-foreground'
            )}
          >
            p.m.
          </button>
        </div>
      </div>

      <div className="relative mx-auto" style={{ width: 220, height: 220 }}>
        <div className="absolute inset-0 rounded-full bg-muted" />
        <svg width={220} height={220} className="absolute inset-0">
          <line
            x1={center}
            y1={center}
            x2={handX}
            y2={handY}
            stroke="hsl(var(--primary))"
            strokeWidth={2}
          />
          <circle cx={center} cy={center} r={3} fill="hsl(var(--primary))" />
          <circle cx={handX} cy={handY} r={16} fill="hsl(var(--primary))" fillOpacity={0.85} />
        </svg>

        {(mode === 'hour' ? hourPositions : minutePositions).map(({ num, x, y }) => {
          const isActive = mode === 'hour' ? num === hour : num === minute;
          return (
            <button
              key={num}
              onClick={() => {
                if (mode === 'hour') {
                  setHour(num);
                  commit(num, minute, period);
                  setMode('minute');
                } else {
                  setMinute(num);
                  commit(hour, num, period);
                }
              }}
              className={cn(
                'absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full text-sm flex items-center justify-center transition-colors z-10',
                isActive ? 'text-primary-foreground font-semibold' : 'text-foreground hover:bg-accent/50'
              )}
              style={{ left: x, top: y }}
            >
              {mode === 'minute' ? num.toString().padStart(2, '0') : num}
            </button>
          );
        })}
      </div>

      <div className="flex justify-end gap-2 mt-4">
        <Button variant="ghost" size="sm" onClick={onClose}>
          Done
        </Button>
      </div>
    </div>
  );
};

export default ClockTimePicker;
