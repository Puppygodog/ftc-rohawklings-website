import { Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
// Import Instagram post images - using simple numbered filenames (1.png through 7.png)
import instagram1 from "@/assets/1.png";
import instagram2 from "@/assets/2.png";
import instagram3 from "@/assets/3.png";
import instagram4 from "@/assets/4.png";
import instagram5 from "@/assets/5.png";
import instagram6 from "@/assets/6.png";
import instagram7 from "@/assets/7.png";

const InstagramEmbed = () => {

  // Instagram posts with images and links
  // TODO: Update these URLs with the actual Instagram post URLs from https://www.instagram.com/rohawklings
  // To find the post URL: Click on a post on Instagram, then copy the URL from the browser address bar
  // Format: https://www.instagram.com/p/[POST_ID]/
  const instagramPosts = [
    { 
      image: instagram1, 
      alt: "Meet the Board post",
      url: "https://www.instagram.com/rohawklings" // TODO: Replace with actual post URL
    },
    { 
      image: instagram2, 
      alt: "Competition scoreboard",
      url: "https://www.instagram.com/rohawklings" // TODO: Replace with actual post URL
    },
    { 
      image: instagram3, 
      alt: "Matcha Market event",
      url: "https://www.instagram.com/rohawklings" // TODO: Replace with actual post URL
    },
    { 
      image: instagram4, 
      alt: "Smiski Raffle",
      url: "https://www.instagram.com/rohawklings" // TODO: Replace with actual post URL
    },
    { 
      image: instagram5, 
      alt: "Qualifiers 6 + 8 achievements",
      url: "https://www.instagram.com/rohawklings" // TODO: Replace with actual post URL
    },
    { 
      image: instagram6, 
      alt: "Hunter FTC Robotics signup",
      url: "https://www.instagram.com/rohawklings" // TODO: Replace with actual post URL
    },
    { 
      image: instagram7, 
      alt: "Team celebration",
      url: "https://www.instagram.com/rohawklings" // TODO: Replace with actual post URL
    },
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl bg-pink-500/10 flex items-center justify-center">
            <Instagram className="text-pink-500" size={24} />
          </div>
          <div>
            <h3 className="font-bold text-foreground">@rohawklings</h3>
            <p className="text-sm text-muted-foreground">Follow us on Instagram</p>
          </div>
        </div>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="gap-2 border-pink-500/30 text-pink-500 hover:bg-pink-500/10 hover:text-pink-600"
        >
          <a
            href="https://www.instagram.com/rohawklings/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} />
            View Profile
          </a>
        </Button>
      </div>

      {/* Instagram Posts Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        {instagramPosts.map((post, index) => (
          <a
            key={index}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group cursor-pointer overflow-hidden rounded-lg border-2 border-border/60 hover:border-pink-500/40 transition-all aspect-square"
          >
            <img
              src={post.image}
              alt={post.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white flex items-center gap-2">
                <ExternalLink size={18} />
                <span className="text-sm font-semibold">View Post</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center pt-4 border-t border-border/40">
        <p className="text-sm text-muted-foreground mb-4">
          Stay updated with our latest activities, competitions, and team moments
        </p>
        <Button
          asChild
          className="bg-pink-500 hover:bg-pink-600 text-white gap-2"
        >
          <a
            href="https://www.instagram.com/rohawklings/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={18} />
            Follow @rohawklings
          </a>
        </Button>
      </div>
    </div>
  );
};

export default InstagramEmbed;
