import { Link } from "react-router-dom"; // Import the Link component
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, ChefHat, Building, Palette } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import kitchenImage from "@/assets/kitchen-design.jpg";
import commercialImage from "@/assets/commercial-office.jpg";
import stylingImage from "@/assets/styling-sourcing.jpg";

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Full Home Design",
      description: "Complete interior design solutions for your entire home. From concept to completion, we handle every aspect of your home's transformation with luxury finishes, custom furniture, and thoughtful layouts.",
      image: project1,
      features: [
        "Space planning and layout design",
        "Custom furniture selection",
        "Lighting design and installation",
        "Color coordination and material selection",
        "Project management and coordination"
      ]
    },
    {
      icon: ChefHat,
      title: "Kitchen Design",
      description: "Modern and functional kitchen designs that blend style with practicality. We create kitchens that are not just beautiful but also highly functional for your daily cooking needs.",
      image: kitchenImage,
      features: [
        "Custom cabinetry design",
        "Countertop selection and installation",
        "Appliance integration",
        "Storage solutions",
        "Backsplash and finishing touches"
      ]
    },
    {
      icon: Building,
      title: "Commercial & Office",
      description: "Professional workspace design that enhances productivity and reflects your brand. From corporate offices to retail spaces, we create environments that work for your business.",
      image: commercialImage,
      features: [
        "Workspace planning and design",
        "Brand integration and identity",
        "Ergonomic furniture selection",
        "Meeting room and collaboration spaces",
        "Reception and common area design"
      ]
    },
    {
      icon: Palette,
      title: "Styling & Sourcing",
      description: "Curated furniture and decor pieces to complete your perfect space. We source high-quality pieces that complement your design and bring your vision to life.",
      image: stylingImage,
      features: [
        "Furniture sourcing and selection",
        "Decorative accessories",
        "Artwork and wall treatments",
        "Window treatments and textiles",
        "Final styling and arrangement"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Our Interior Services</h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive interior design solutions tailored to your unique style and needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative overflow-hidden rounded-lg shadow-elegant">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <Card className="border-none shadow-none bg-transparent">
                    <CardHeader className="px-0">
                      <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                        <service.icon className="h-8 w-8 text-secondary-foreground" />
                      </div>
                      <CardTitle className="font-heading text-3xl md:text-4xl font-bold">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="font-body text-lg text-muted-foreground">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-0">
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="font-body flex items-center space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to="/contact">
                        <Button size="lg" className="hover-lift">
                          Get Quote for {service.title}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="font-body text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your project and create something beautiful together.
            Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919784037296">
              <Button size="lg" variant="secondary" className="hover-lift">
                Call Now: +91 97840 37296
              </Button>
            </a>
            <a href="https://wa.me/919784037296" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="hover-lift border-primary-foreground text-primary hover:!bg-primary-foreground hover:!text-primary"
              >
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}