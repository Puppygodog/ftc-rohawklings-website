import thinkAcademyLogo from "@/assets/think-academy.png";
import rsmLogo from "@/assets/rsm.png";
import rocketClubLogo from "@/assets/rocket-club.png";
import hunterPtaLogo from "@/assets/hunter-pta.png";

interface Sponsor {
  type: "logo" | "family";
  name?: string;
  logo?: string;
  alt?: string;
  color?: "gold" | "blue";
}

const SponsorRow = () => {
  // Mixed order: companies and families interleaved
  const sponsors: Sponsor[] = [
    { type: "family", name: "Yeh Family", color: "gold" },
    { type: "logo", logo: thinkAcademyLogo, alt: "Think Academy" },
    { type: "family", name: "Bikel Family", color: "blue" },
    { type: "logo", logo: rsmLogo, alt: "Russian School of Mathematics" },
    { type: "logo", logo: rocketClubLogo, alt: "Rocket Club" },
    { type: "family", name: "Zhang Family", color: "gold" },
    { type: "logo", logo: hunterPtaLogo, alt: "Hunter College High School PTA" },
  ];

  // Duplicate for seamless infinite scroll (need at least 2 copies)
  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <div className="relative w-full bg-colorful py-20">
      {/* Container with max-width to create purple side margins */}
      <div className="relative max-w-[90%] mx-auto overflow-hidden">
        <div className="px-8 md:px-12 relative">
          {/* Left opacity fade overlay - covers images to make them fade */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-40 md:w-48 z-20 pointer-events-none"
            style={{
              background: "linear-gradient(to right, hsl(262 85% 96%) 0%, hsl(262 85% 96% / 0.8) 30%, transparent 100%)"
            }}
          />
          {/* Right opacity fade overlay - covers images to make them fade */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-40 md:w-48 z-20 pointer-events-none"
            style={{
              background: "linear-gradient(to left, hsl(262 85% 96%) 0%, hsl(262 85% 96% / 0.8) 30%, transparent 100%)"
            }}
          />
          
          <div
            className="flex gap-12 md:gap-16 items-center relative z-10"
            style={{
              animation: "scroll 45s linear infinite",
              width: "fit-content",
            }}
          >
        {duplicatedSponsors.map((sponsor, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center"
            style={{ width: "180px", height: "180px" }}
          >
            {sponsor.type === "logo" && sponsor.logo ? (
              <div className="flex items-center justify-center h-full w-full">
                <img
                  src={sponsor.logo}
                  alt={sponsor.alt || "Sponsor logo"}
                  className="max-h-36 max-w-full object-contain hover:scale-105 transition-transform duration-300"
                  style={{
                    filter: "contrast(1.05) brightness(0.98)"
                  }}
                />
              </div>
            ) : (
              <div
                className={`flex items-center justify-center rounded-full h-32 w-32 ${
                  sponsor.color === "gold"
                    ? "bg-gold/20 border-2 border-gold text-gold-dark"
                    : "bg-primary/20 border-2 border-primary text-primary"
                } font-semibold text-sm text-center px-4 shadow-lg hover:scale-110 transition-transform duration-300`}
              >
                <span className="text-xs md:text-sm">{sponsor.name}</span>
              </div>
            )}
          </div>
        ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorRow;
