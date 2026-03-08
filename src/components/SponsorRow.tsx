import thinkAcademyLogo from "@/assets/think-academy.png";
import rsmLogo from "@/assets/rsm.png";
import rocketClubLogo from "@/assets/rocket-club.png";
import hunterPtaLogo from "@/assets/hunter-pta.png";
import crimsonLogo from "../../crimson.png";

interface Sponsor {
  type: "logo" | "family";
  name?: string;
  logo?: string;
  alt?: string;
  color?: "gold" | "blue";
}

const SponsorRow = () => {
  // Companies and families, roughly alternating
  const sponsors: Sponsor[] = [
    { type: "logo", logo: thinkAcademyLogo, alt: "Think Academy" },
    { type: "family", name: "Yeh Family", color: "gold" },
    { type: "logo", logo: crimsonLogo, alt: "Crimson Education" },
    { type: "family", name: "Bikel Family", color: "blue" },
    { type: "logo", logo: rsmLogo, alt: "Russian School of Mathematics" },
    { type: "logo", logo: rocketClubLogo, alt: "Rocket Club" },
  ];

  // Duplicate for seamless infinite scroll (need at least 2 copies)
  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <div className="relative w-full bg-colorful py-20">
      {/* Container with max-width to create purple side margins */}
      <div className="relative max-w-[90%] mx-auto overflow-hidden">
        <div className="px-8 md:px-12 relative">
          <div
            className="flex gap-16 md:gap-20 items-center relative z-10"
            style={{
              animation: "scroll 45s linear infinite",
              width: "fit-content",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
            }}
          >
            {duplicatedSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ width: "200px", height: "200px" }}
              >
                {sponsor.type === "logo" && sponsor.logo ? (
                  <div className="flex items-center justify-center h-full w-full">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.alt || "Sponsor logo"}
                      className="max-h-40 max-w-full object-contain hover:scale-105 transition-transform duration-300"
                      style={{
                        filter: "contrast(1.05) brightness(0.98)",
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
