import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Users } from "lucide-react";
import rajanImage from "@/assets/rajan.jpg";

export default function About() {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "100+" },
    { icon: Clock, label: "Years Experience", value: "5+" },
    { icon: MapPin, label: "Cities Served", value: "3" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">About Rajan Charaya</h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Creating luxury interiors that blend timeless elegance with modern functionality
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block">
                <img
                  src={rajanImage}
                  alt="Rajan Charaya"
                  className="w-80 h-80 rounded-full object-cover shadow-elegant mx-auto lg:mx-0"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent to-brown/20"></div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Crafting Spaces with Passion & Expertise
              </h2>
              <div className="space-y-6 font-body text-lg text-muted-foreground">
                <p>
                  With a passion for creating beautiful, functional spaces, Rajan Charaya has established 
                  Harmony Heaven Interiors as a premier interior design firm. His mission is to transform 
                  homes into personal sanctuaries that reflect each client's unique style and needs.
                </p>
                <p>
                  Rajan's design philosophy centers on the perfect balance of luxury, warmth, and 
                  functionality. He believes that great design should not only look beautiful but also 
                  enhance the way people live and feel in their spaces.
                </p>
                <p>
                  With years of experience and a deep understanding of modern design trends, Rajan 
                  specializes in creating timeless interiors that stand the test of time. His attention 
                  to detail and commitment to quality has earned him the trust of clients across 
                  <strong className="text-primary"> Chandigarh, Mohali, and Sri Ganganagar</strong>.
                </p>
              </div>

              <div className="mt-8">
                <a href="tel:+919784037296">
                  <Button size="lg" className="hover-lift">
                    <Phone className="mr-2 h-5 w-5" />
                    Call +91 97840 37296
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-secondary-foreground" />
                </div>
                <div className="font-heading text-4xl font-bold mb-2">{stat.value}</div>
                <div className="font-body text-xl opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
            <Card className="hover-lift">
              <CardContent className="p-8">
                <p className="font-body text-xl text-muted-foreground leading-relaxed">
                  "To create beautiful, functional spaces that enhance the lives of our clients. 
                  We believe that good design has the power to transform not just spaces, but the 
                  way people feel and interact within them. Every project is an opportunity to 
                  create something unique, personal, and lasting."
                </p>
                <div className="mt-6 text-right">
                  <p className="font-heading text-lg font-semibold text-primary">
                    - Rajan Charaya, Founder
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}