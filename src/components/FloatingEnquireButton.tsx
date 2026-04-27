"use client";

export function FloatingEnquireButton() {
  const handleClick = () => {
    const quoteSection = document.getElementById("quote");
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="md:hidden fixed bottom-0 left-0 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] transition-colors"
      aria-label="Enquire Now"
    >
      Enquire Now
    </button>
  );
}
