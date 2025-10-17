"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "./contactForm";



export default function CountdownSection() {
  // Set default end date to October 22nd, 2025 to avoid hydration issues
  const [endDate, setEndDate] = useState<Date | null>(new Date('2025-10-22T23:59:59'));
  const [showForm, setShowForm] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [mounted, setMounted] = useState(false);

  // Set mounted state
  useEffect(() => {
    setMounted(true);
  }, []);

  // Fetch active banner from backend
  useEffect(() => {
    async function fetchBanner() {
      try {
        const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://raam-group-all-websites.onrender.com';
        const res = await fetch(
          `${API_BASE}/admin/epic-toyota/campaign-banners/active`
        );
        const data = await res.json();
        if (data.ok && data.data && data.data.end_date) {
          setEndDate(new Date(data.data.end_date));
        } else {
          // Keep fallback to October 22nd, 2025 if backend is down
          setEndDate(new Date('2025-10-22T23:59:59'));
        }
      } catch (err) {
        console.error("Failed to fetch banner:", err);
        // Keep fallback to October 22nd, 2025 if backend is down
        setEndDate(new Date('2025-10-22T23:59:59'));
      }
    }
    fetchBanner();
  }, []);

  // Countdown logic
  useEffect(() => {
    if (!endDate || !mounted) return;

    // Calculate initial time immediately
    const calculateTime = () => {
      const now = new Date().getTime();
      const diff = endDate.getTime() - now;

      if (diff <= 0) {
        return null;
      }

      const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0");
      const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0");
      const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
      const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

      return { days, hours, minutes, seconds };
    };

    // Set initial time
    const initialTime = calculateTime();
    if (initialTime) {
      setTimeLeft(initialTime);
    }

    // Update every second
    const interval = setInterval(() => {
      const newTime = calculateTime();
      if (newTime) {
        setTimeLeft(newTime);
      } else {
        clearInterval(interval);
        setEndDate(null);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate, mounted]);

  // Don't render countdown on server to avoid hydration issues
  if (!mounted) {
    return (
      <section className="w-full bg-black text-white py-16 text-center relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 h-96 flex items-center justify-center">
          <div className="text-2xl text-gray-400">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="w-full bg-black text-white py-16 text-center relative overflow-hidden">
        {/* Left Diya */}
        <motion.div
          className="absolute left-8 md:left-16 top-1/2 transform -translate-y-1/2 hidden lg:block"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative">
            {/* Flame */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-5 h-8 bg-gradient-to-t from-orange-600 via-yellow-400 to-yellow-200 rounded-full"
              style={{
                filter: 'blur(1px)',
                boxShadow: '0 0 30px rgba(255, 165, 0, 0.8), 0 0 60px rgba(255, 140, 0, 0.5)',
              }}
            />
            {/* Diya bowl */}
            <div className="w-16 h-8 bg-gradient-to-b from-orange-700 to-orange-900 rounded-b-full border-2 border-orange-500 relative">
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full shadow-lg" />
            </div>
          </div>
        </motion.div>

        {/* Right Diya */}
        <motion.div
          className="absolute right-8 md:right-16 top-1/2 transform -translate-y-1/2 hidden lg:block"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          <div className="relative">
            {/* Flame */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.75,
              }}
              className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-5 h-8 bg-gradient-to-t from-orange-600 via-yellow-400 to-yellow-200 rounded-full"
              style={{
                filter: 'blur(1px)',
                boxShadow: '0 0 30px rgba(255, 165, 0, 0.8), 0 0 60px rgba(255, 140, 0, 0.5)',
              }}
            />
            {/* Diya bowl */}
            <div className="w-16 h-8 bg-gradient-to-b from-orange-700 to-orange-900 rounded-b-full border-2 border-orange-500 relative">
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full shadow-lg" />
            </div>
          </div>
        </motion.div>

        {/* Subtle Fireworks */}
        {mounted && [...Array(3)].map((_, i) => (
          <motion.div
            key={`firework-${i}`}
            className="absolute pointer-events-none"
            style={{
              left: `${25 + i * 25}%`,
              top: '15%',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.4, 0],
              scale: [0, 1.5, 2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeOut",
            }}
          >
            {[...Array(12)].map((_, j) => {
              const colors = ['#FFD700', '#FF6B35', '#FF1493', '#00FFFF', '#32CD32', '#FF69B4'];
              const color = colors[j % colors.length];
              return (
                <div
                  key={j}
                  className="absolute w-0.5 h-12 rounded-full"
                  style={{
                    transform: `rotate(${j * 30}deg)`,
                    transformOrigin: 'center',
                    left: '50%',
                    top: '50%',
                    marginLeft: '-1px',
                    marginTop: '-24px',
                    background: `linear-gradient(to top, transparent, ${color})`,
                    boxShadow: `0 0 8px ${color}`,
                  }}
                />
              );
            })}
          </motion.div>
        ))}

        {endDate ? (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto px-6"
          >
            {/* Alert Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-flex items-center gap-2 bg-red-900/30 border border-red-500/50 rounded-full px-4 py-2 mb-6 backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ boxShadow: '0 0 10px rgba(239, 68, 68, 0.8)' }}></div>
              <span className="text-sm font-medium text-red-300 uppercase tracking-wider">
                EXCLUSIVE OFFER ENDS SOON
              </span>
            </motion.div>


            {/* Countdown Timer */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                  className="bg-gradient-to-b from-gray-900 to-black border border-gray-700 backdrop-blur-sm px-6 py-8 rounded-xl shadow-2xl min-w-[120px]"
                  style={{
                    boxShadow: '0 0 20px rgba(255, 255, 255, 0.05), inset 0 0 20px rgba(255, 255, 255, 0.02)',
                  }}
                >
                  <div className="text-5xl md:text-6xl font-mono font-black text-white mb-2">
                    {item.value}
                  </div>
                  <div className="text-sm uppercase tracking-widest text-gray-400 font-medium">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>

           

            {/* Book Now Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowForm(true)}
              className="bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-4 px-12 rounded-lg uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl border border-red-500 cursor-pointer relative z-10"
            >
              Book Now
            </motion.button>

            <p className="mt-4 text-sm text-gray-400">
              Secure your spot • No hidden charges • Instant confirmation
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto px-6"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight uppercase text-white mb-4">
              EXCITING OFFERS
            </h2>
            <h3 className="text-2xl md:text-3xl font-light text-red-400 mb-6">
              Coming Soon
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Be the first to know about our exclusive Toyota deals and premium offers
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowForm(true)}
              className="bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-4 px-12 rounded-lg uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl border border-red-500 cursor-pointer relative z-10"
            >
              Get Notified
            </motion.button>
          </motion.div>
        )}
      </section>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-lg w-full"
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center z-10 transition-colors"
            >
              ✕
            </button>
            <ContactForm buttonLabel="Book Now" />
          </motion.div>
        </div>
      )}
    </>
  );
}
