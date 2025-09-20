import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Instagram, Play } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project6 from "@/assets/project6.jpg";
import reel4image from "@/assets/reel4image.png";
import reel1image from "@/assets/reel1image.png";
import reel1 from "@/assets/reel1.mp4";
import reel2 from "@/assets/reel2.mp4";
import reel3 from "@/assets/reel3.mp4";
import reel4 from "@/assets/reel4.mp4";


export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: project1,
      title: "Modern Bedroom Design",
      description: "Elegant bedroom with warm wood tones and luxurious finishes"
    },
    {
      src: project2,
      title: "Luxury Bedroom Suite",
      description: "Contemporary design with classic elements and perfect lighting"
    },
    {
      src: project3,
      title: "Spa-Like Bathroom",
      description: "Modern bathroom with marble finishes and premium fixtures"
    },
    {
      src: project6,
      title: "Luxury Bathroom Design",
      description: "Premium bathroom with marble walls and modern fixtures"
    }
  ];

  const videoReels = [
    {
      src: reel1,
      title: "Home Transformation",
      thumbnail: reel1image
    },
    {
      src: reel2,
      title: "Bedroom Design Process",
      thumbnail: project1
    },
    {
      src: reel4,
      title: "Modern Interior Design",
      thumbnail: reel4image
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Our Portfolio</h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our latest projects and see how we transform spaces into beautiful, functional homes
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="font-body text-lg text-muted-foreground">
              Click on any image to view in full size
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-elegant hover-lift">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/20 transition-colors duration-300 flex items-end">
                        <div className="p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="font-heading text-xl font-semibold mb-2">{image.title}</h3>
                          <p className="font-body text-sm opacity-90">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="text-center mt-4">
                      <h3 className="font-heading text-2xl font-semibold mb-2">{image.title}</h3>
                      <p className="font-body text-muted-foreground">{image.description}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Reels */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Design Process Reels</h2>
            <p className="font-body text-lg text-muted-foreground">
              Watch our design process and transformations in action
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {videoReels.map((video, index) => (
              <div key={index} className="relative group rounded-lg overflow-hidden shadow-elegant hover-lift">
                <video
                  className="w-full aspect-[9/16] object-cover"
                  controls
                  poster={video.thumbnail}
                  preload="metadata"
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute top-4 left-4 bg-brown/80 text-white px-3 py-1 rounded-full">
                  <span className="font-body text-sm font-medium">{video.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Want to See More?
          </h2>
          <p className="font-body text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Follow us on Instagram for daily inspiration and behind-the-scenes content of our latest projects
          </p>
          <a
            href="https://www.instagram.com/harmonyheaveninteriors/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="hover-lift hover-glow">
              <Instagram className="mr-2 h-5 w-5" />
              Follow on Instagram
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}