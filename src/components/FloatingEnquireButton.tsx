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
      className="md:hidden fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md shadow-lg z-40 transition-colors"
      aria-label="Enquire Now"
    >
      Enquire Now
    </button>
  );
}
