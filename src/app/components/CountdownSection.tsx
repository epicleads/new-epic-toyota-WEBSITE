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
        {/* New Year Confetti Bombs */}
        {mounted && [...Array(5)].map((_, i) => {
          const positions = [
            { left: '10%', top: '20%' },
            { left: '30%', top: '15%' },
            { left: '50%', top: '25%' },
            { left: '70%', top: '18%' },
            { left: '90%', top: '22%' },
          ];
          const colors = ['#FFD700', '#FF1493', '#00FFFF', '#FF6B35', '#32CD32', '#FF69B4', '#FF4500', '#00CED1'];
          return (
            <motion.div
              key={`bomb-${i}`}
              className="absolute pointer-events-none"
              style={positions[i]}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0.8, 0],
                scale: [0, 1.2, 1.5, 2],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeOut",
              }}
            >
              {/* Explosion Center */}
              <motion.div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
                animate={{
                  scale: [0, 1.5, 0],
                  opacity: [1, 0.8, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.8,
                }}
                style={{
                  background: `radial-gradient(circle, ${colors[i % colors.length]}, transparent)`,
                  boxShadow: `0 0 30px ${colors[i % colors.length]}`,
                }}
              />
              {/* Confetti Particles */}
              {[...Array(20)].map((_, j) => {
                const angle = (j * 360) / 20;
                const distance = 60 + Math.random() * 40;
                const particleColor = colors[j % colors.length];
                return (
                  <motion.div
                    key={j}
                    className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full"
                    initial={{ x: 0, y: 0, opacity: 1 }}
                    animate={{
                      x: Math.cos((angle * Math.PI) / 180) * distance,
                      y: Math.sin((angle * Math.PI) / 180) * distance,
                      opacity: [1, 1, 0],
                      scale: [1, 0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.8,
                      ease: "easeOut",
                    }}
                    style={{
                      background: particleColor,
                      boxShadow: `0 0 8px ${particleColor}`,
                    }}
                  />
                );
              })}
            </motion.div>
          );
        })}

        {/* Glitter Particles */}
        {mounted && [...Array(30)].map((_, i) => {
          const colors = ['#FFD700', '#FF1493', '#00FFFF', '#FF6B35', '#32CD32', '#FF69B4', '#FFFFFF'];
          const left = `${Math.random() * 100}%`;
          const top = `${Math.random() * 100}%`;
          const delay = Math.random() * 3;
          const duration = 2 + Math.random() * 2;
          const color = colors[Math.floor(Math.random() * colors.length)];
          const size = 3 + Math.random() * 4;
          
          return (
            <motion.div
              key={`glitter-${i}`}
              className="absolute pointer-events-none rounded-full"
              style={{
                left,
                top,
                width: `${size}px`,
                height: `${size}px`,
                background: color,
                boxShadow: `0 0 ${size * 2}px ${color}`,
              }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0, 1, 1, 0],
                y: [0, -20],
                x: [0, (Math.random() - 0.5) * 40],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Sparkle Bursts */}
        {mounted && [...Array(8)].map((_, i) => {
          const positions = [
            { left: '15%', top: '30%' },
            { left: '25%', top: '60%' },
            { left: '40%', top: '45%' },
            { left: '55%', top: '70%' },
            { left: '75%', top: '50%' },
            { left: '85%', top: '35%' },
            { left: '20%', top: '80%' },
            { left: '80%', top: '75%' },
          ];
          const colors = ['#FFD700', '#FF1493', '#00FFFF', '#FF6B35', '#32CD32'];
          return (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute pointer-events-none"
              style={positions[i]}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            >
              {[...Array(8)].map((_, j) => (
                <motion.div
                  key={j}
                  className="absolute w-1 h-6 rounded-full"
                  style={{
                    transform: `rotate(${j * 45}deg)`,
                    transformOrigin: 'center bottom',
                    left: '50%',
                    top: '50%',
                    marginLeft: '-1px',
                    marginTop: '-12px',
                    background: `linear-gradient(to top, ${colors[i % colors.length]}, transparent)`,
                    boxShadow: `0 0 6px ${colors[i % colors.length]}`,
                  }}
                />
              ))}
            </motion.div>
          );
        })}

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
            <h2 className="text-4xl md:text-4xl font-bold tracking-tight uppercase text-white mb-4">
              YEAR END DHAMAKA SALE OFFERS
            </h2>
            <motion.h3 
              className="text-2xl md:text-3xl font-light text-red-400 mb-6"
              animate={{
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Live Now
            </motion.h3>
            <p className="text-xl text-gray-300 mb-8">
              Be the first to know about our exclusive Toyota deals and premium offers
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowForm(true)}
              className="bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-4 px-12 rounded-lg uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl border border-red-500 cursor-pointer relative z-10"
            >
              Unlock Offers
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
