import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [phase, setPhase] = useState<"enter" | "show" | "exit">("enter");

  useEffect(() => {
    // Phase 1: Enter animation (0-500ms)
    const enterTimer = setTimeout(() => {
      setPhase("show");
    }, 100);

    // Phase 2: Show and hold (500-2500ms)
    const showTimer = setTimeout(() => {
      setPhase("exit");
    }, 2500);

    // Phase 3: Exit and complete (2500-3500ms)
    const exitTimer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(showTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-all duration-1000 ${
        phase === "exit" ? "opacity-0" : "opacity-100"
      }`}
      style={{
        background: "linear-gradient(135deg, #042a2b 0%, #053538 50%, #042a2b 100%)",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div
          className={`absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl transition-all duration-2000 ${
            phase === "enter" ? "opacity-0 scale-50" : "opacity-30 scale-100"
          }`}
          style={{
            background: "radial-gradient(circle, #5eb1bf 0%, transparent 70%)",
            transform: phase === "show" ? "translate(-20%, -20%)" : "translate(-50%, -50%)",
          }}
        />
        <div
          className={`absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl transition-all duration-2000 ${
            phase === "enter" ? "opacity-0 scale-50" : "opacity-20 scale-100"
          }`}
          style={{
            background: "radial-gradient(circle, #5eb1bf 0%, transparent 70%)",
            transform: phase === "show" ? "translate(20%, 20%)" : "translate(50%, 50%)",
          }}
        />
        
        {/* Animated Lines */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-1000`}
              style={{
                top: `${20 + i * 15}%`,
                left: phase === "enter" ? "-100%" : phase === "exit" ? "100%" : "0%",
                width: "100%",
                transitionDelay: `${i * 100}ms`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-8 px-4">
        {/* BELDI Text with Dramatic Animation */}
        <div className="relative">
          <h1
            className={`text-6xl sm:text-8xl md:text-9xl font-bold text-primary tracking-wider transition-all duration-1000 ${
              phase === "enter"
                ? "opacity-0 scale-50 blur-lg"
                : phase === "exit"
                ? "opacity-0 scale-150 blur-md"
                : "opacity-100 scale-100 blur-0"
            }`}
            style={{
              fontFamily: '"Inter", system-ui, sans-serif',
              fontWeight: 900,
              letterSpacing: '0.2em',
              textShadow: '0 0 40px rgba(94, 177, 191, 0.5), 0 0 80px rgba(94, 177, 191, 0.3)',
            }}
          >
            BELDI
          </h1>
          
          {/* Glow Effect Behind Text */}
          <div
            className={`absolute inset-0 transition-opacity duration-1000 ${
              phase === "show" ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background: "radial-gradient(ellipse at center, rgba(94, 177, 191, 0.3) 0%, transparent 70%)",
              filter: "blur(30px)",
              transform: "scale(1.5)",
            }}
          />
        </div>

        {/* Subtitle with Delayed Animation */}
        <p
          className={`text-base sm:text-lg md:text-xl text-secondary-foreground/90 transition-all duration-1000 ${
            phase === "enter"
              ? "opacity-0 translate-y-8"
              : phase === "exit"
              ? "opacity-0 -translate-y-8"
              : "opacity-100 translate-y-0"
          }`}
          style={{
            transitionDelay: "300ms",
            letterSpacing: "0.05em",
          }}
        >
          Morocco's Premier Marketplace
        </p>

        {/* Elegant Loading Indicator */}
        <div
          className={`flex justify-center items-center gap-3 mt-8 transition-all duration-1000 ${
            phase === "enter" || phase === "exit" ? "opacity-0" : "opacity-100"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="relative"
            >
              <div
                className="w-2.5 h-2.5 bg-primary rounded-full"
                style={{
                  animation: `pulse 1.5s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
              <div
                className="absolute inset-0 w-2.5 h-2.5 bg-primary rounded-full"
                style={{
                  animation: `ping 1.5s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.8);
          }
        }
        
        @keyframes ping {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;

