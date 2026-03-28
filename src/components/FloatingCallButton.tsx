'use client';

export default function FloatingCallButton() {
  const PhoneIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  return (
    <div className="fixed bottom-6 right-6 lg:hidden z-40">
      <a
        href="tel:925-462-1200"
        className="flex items-center justify-center w-16 h-16 bg-teal text-white rounded-full shadow-2xl hover:shadow-teal-glow transition-all duration-300 active:scale-95 hover:scale-110 animate-pulse-glow"
        title="Call Diablo Dents - 925-462-1200"
        aria-label="Call Diablo Dents"
      >
        <PhoneIcon />
      </a>
    </div>
  );
}
