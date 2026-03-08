import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Flower2, Sparkles } from 'lucide-react';

function Envelope() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-[400px]">
      <div className="relative w-[280px] h-[180px] sm:w-[300px] sm:h-[200px] bg-pink-400 rounded-md shadow-2xl mt-10">
        {/* Letter */}
        <motion.div 
          className="absolute left-2 right-2 bottom-2 bg-[#fffbf0] p-6 rounded shadow-inner flex flex-col items-center justify-center text-center border border-amber-100"
          initial={{ height: '160px', y: 0, zIndex: 10 }}
          animate={{ y: isOpen ? -140 : 0, zIndex: isOpen ? 10 : 10 }}
          transition={{ duration: 0.8, delay: isOpen ? 0.4 : 0, ease: "easeOut" }}
        >
          <p className="font-serif text-lg sm:text-xl text-pink-900 leading-relaxed">
            Wszystkiego najlepszego z okazji dnia kobiet dla najlepszej siostry <Heart className="inline w-5 h-5 text-red-500 fill-red-500 ml-1" />
          </p>
        </motion.div>

        {/* Front Flaps */}
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-md">
          {/* Left */}
          <div className="absolute top-0 left-0 w-0 h-0 border-t-[90px] sm:border-t-[100px] border-t-transparent border-l-[140px] sm:border-l-[150px] border-l-pink-300 border-b-[90px] sm:border-b-[100px] border-b-transparent drop-shadow-md"></div>
          {/* Right */}
          <div className="absolute top-0 right-0 w-0 h-0 border-t-[90px] sm:border-t-[100px] border-t-transparent border-r-[140px] sm:border-r-[150px] border-r-pink-300 border-b-[90px] sm:border-b-[100px] border-b-transparent drop-shadow-md"></div>
          {/* Bottom */}
          <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[140px] sm:border-l-[150px] border-l-transparent border-r-[140px] sm:border-r-[150px] border-r-transparent border-b-[90px] sm:border-b-[100px] border-b-pink-200 drop-shadow-lg"></div>
        </div>

        {/* Top Flap */}
        <motion.div 
          className="absolute top-0 left-0 w-0 h-0 border-l-[140px] sm:border-l-[150px] border-l-transparent border-r-[140px] sm:border-r-[150px] border-r-transparent border-t-[90px] sm:border-t-[100px] border-t-pink-500 origin-top drop-shadow-xl"
          initial={{ rotateX: 0, zIndex: 30 }}
          animate={{ rotateX: isOpen ? 180 : 0, zIndex: isOpen ? 0 : 30 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        ></motion.div>

        {/* Wax Seal */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div 
              className="absolute top-[90px] sm:top-[100px] left-[140px] sm:left-[150px] w-14 h-14 bg-red-700 rounded-full -translate-x-1/2 -translate-y-1/2 z-40 flex items-center justify-center shadow-lg border border-red-900 cursor-pointer"
              onClick={() => setIsOpen(true)}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 rounded-full border border-red-800 flex items-center justify-center">
                <Heart className="w-6 h-6 text-red-300 fill-red-300" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="h-12 mt-8 flex items-center justify-center">
        <AnimatePresence>
          {!isOpen && (
            <motion.p 
              className="text-pink-600 font-medium"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              exit={{ opacity: 0 }}
            >
              Kliknij pieczęć, aby otworzyć
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Decorations() {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background large icon */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <Flower2 className="w-80 h-80 text-pink-400" />
      </motion.div>
      
      {/* Floating items */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <motion.div 
          className="absolute top-[10%] left-[15%]"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <Flower2 className="w-16 h-16 text-rose-400" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-[15%] left-[20%]"
          animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }} 
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        >
          <Heart className="w-12 h-12 text-red-400 fill-red-400" />
        </motion.div>
        
        <motion.div 
          className="absolute top-[20%] right-[15%]"
          animate={{ y: [0, -15, 0], rotate: [0, -15, 0] }} 
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
        >
          <Sparkles className="w-14 h-14 text-amber-400" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-[20%] right-[15%]"
          animate={{ y: [0, 15, 0], rotate: [0, 20, 0] }} 
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1.5 }}
        >
          <Flower2 className="w-20 h-20 text-pink-500" />
        </motion.div>

        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.1, 1] }} 
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 2 }}
        >
          <Heart className="w-32 h-32 text-pink-300 fill-pink-300 opacity-80" />
        </motion.div>
      </div>
    </div>
  );
}

function Countdown() {
  const targetDate = new Date('2026-04-17T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-[400px] py-8">
      <h2 className="text-2xl md:text-3xl font-serif text-pink-800 mb-12 text-center leading-tight">
        Urodziny Laury
      </h2>
      
      <div className="grid grid-cols-2 gap-4 w-full max-w-[280px]">
        <TimeUnit value={timeLeft.days} label="Dni" />
        <TimeUnit value={timeLeft.hours} label="Godzin" />
        <TimeUnit value={timeLeft.minutes} label="Minut" />
        <TimeUnit value={timeLeft.seconds} label="Sekund" />
      </div>
    </div>
  );
}

function TimeUnit({ value, label }: { value: number, label: string }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-pink-100">
      <span className="text-4xl font-bold text-pink-600 font-mono">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-xs text-pink-400 uppercase tracking-wider mt-1 font-medium">
        {label}
      </span>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden font-sans text-slate-800">
      <div className="max-w-[1400px] mx-auto px-4 py-8 md:py-12 min-h-screen flex flex-col justify-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch min-h-[600px] w-full">
          {/* Section 1: Letter */}
          <section className="bg-white/60 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white flex flex-col items-center justify-center relative overflow-visible">
            <Envelope />
          </section>

          {/* Section 2: Decorations */}
          <section className="bg-white/60 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white flex flex-col items-center justify-center relative overflow-hidden">
            <Decorations />
          </section>

          {/* Section 3: Countdown */}
          <section className="bg-white/60 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white flex flex-col items-center justify-center relative">
            <Countdown />
          </section>
        </div>
      </div>
    </div>
  );
}
