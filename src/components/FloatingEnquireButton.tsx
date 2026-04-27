"use client";

export function FloatingEnquireButton() {
  const handleClick = () => {
    const quoteSection = document.getElementById("quote");
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-6 pt-16 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none">
      <button
        onClick={handleClick}
        className="w-full pointer-events-auto bg-[#ff3131] hover:bg-red-700 text-white font-bold py-4 px-6 rounded-full shadow-[0_8px_30px_rgb(255,49,49,0.4)] transition-transform active:scale-95 flex items-center justify-center text-lg"
        aria-label="Enquire Now"
      >
        Enquire Now
      </button>
    </div>
  );
}
