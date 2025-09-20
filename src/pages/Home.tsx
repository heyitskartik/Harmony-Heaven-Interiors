import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Award, Users, Palette, Heart, Lightbulb, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import kitchenImage from "@/assets/kitchen-design.jpg";
import stylingImage from "@/assets/styling-sourcing.jpg";
import project1 from "@/assets/project1.jpg";

export default function Home() {
  const services = [
    {
      title: "Full Home Design",
      description: "Complete interior design solutions for your entire home with luxury and comfort.",
      image: project1,
    },
    {
      title: "Kitchen Design",
      description: "Modern and functional kitchen designs that blend style with practicality.",
      image: kitchenImage,
    },
    {
      title: "Styling & Sourcing",
      description: "Curated furniture and decor pieces to complete your perfect space.",
      image: stylingImage,
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: "Expertise",
      description: "Years of experience in creating luxury interiors that stand the test of time.",
    },
    {
      icon: Heart,
      title: "Luxury & Comfort",
      description: "Perfect balance of elegance and functionality in every design.",
    },
    {
      icon: Palette,
      title: "Personalized Design",
      description: "Each project is tailored to reflect your unique style and preferences.",
    },
  ];

  const testimonials = [
    {
      name: "Ananya Sharma",
      text: "Rajan transformed our home into a luxury haven. The attention to detail is incredible!",
      rating: 5,
    },
    {
      name: "Rohit Sharma",
      text: "Professional service and beautiful designs. Highly recommend Harmony Heaven Interiors.",
      rating: 5,
    },
    {
      name: "Priya Kapoor",
      text: "The kitchen design exceeded our expectations. Perfect blend of style and functionality.",
      rating: 5,
    },
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "Initial meeting to understand your vision and requirements.",
    },
    {
      step: "02",
      title: "Design",
      description: "Create detailed plans and 3D visualizations of your space.",
    },
    {
      step: "03",
      title: "Implementation",
      description: "Professional execution with quality materials and skilled craftsmen.",
    },
    {
      step: "04",
      title: "Final Reveal",
      description: "Walkthrough your transformed space and enjoy your new interior.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-white">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 slide-up">
            Crafting Timeless Interiors
          </h1>
          <p className="font-body text-xl md:text-2xl mb-8 fade-in">
            Luxury • Warmth • Function — Designed by Rajan Charaya
          </p>
          <Link to="/portfolio">
            <Button size="lg" variant="secondary" className="scale-in hover-lift">
              View Our Work
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Featured Services</h2>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforming spaces with luxury, comfort, and timeless design
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover-lift">
                <div className="relative h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">{service.title}</CardTitle>
                  <CardDescription className="font-body text-lg">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of working with seasoned professionals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="font-heading text-2xl">{benefit.title}</CardTitle>
                  <CardDescription className="font-body text-lg">{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="font-body text-xl text-muted-foreground">
              Trusted by families across Chandigarh, Mohali, and Sri Ganganagar
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <CardDescription className="font-body text-lg italic">
                    "{testimonial.text}"
                  </CardDescription>
                  <CardTitle className="font-heading text-xl">{testimonial.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              From initial consultation to final reveal, we guide you through every step
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-heading text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="font-heading text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="font-body text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}