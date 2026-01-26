import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery1.png";
import gallery2 from "@/assets/gallery2.png";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Gallery photos (first two) - enlargeable
  const galleryPhotos = [
    { src: gallery1, alt: "Team meeting in classroom" },
    { src: gallery2, alt: "Team group photo" },
  ];

  return (
    <div className="min-h-screen py-20 bg-colorful-intense relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-6 text-center">Gallery</h1>
          <p className="text-xl text-muted-foreground mb-12 text-center">
            Moments from our journey
          </p>

          {/* Gallery Photos Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Team Photos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {galleryPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer overflow-hidden rounded-lg border-2 border-border/60 hover:border-primary/40 transition-all"
                  onClick={() => setSelectedImage(photo.src)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-lg font-semibold">
                      Click to enlarge
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Image Enlargement Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-0">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
