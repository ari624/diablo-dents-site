'use client';

export default function FloatingCallButton() {
  return (
    <div className="fixed bottom-6 right-6 md:hidden z-40">
      <a
        href="tel:925-462-1200"
        className="flex items-center justify-center w-16 h-16 bg-teal text-dark-bg rounded-full shadow-lg font-bold text-xl hover:bg-teal-light transition-all active:scale-95"
        title="Call Diablo Dents"
      >
        ☎
      </a>
    </div>
  );
}
