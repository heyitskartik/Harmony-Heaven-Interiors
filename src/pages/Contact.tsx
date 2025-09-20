import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Phone, Mail, Instagram, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 97840 37296",
      action: "tel:+919784037296"
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@harmonyheaveninteriors.com",
      action: "mailto:hello@harmonyheaveninteriors.com"
    },
    {
      icon: Instagram,
      title: "Instagram",
      details: "@harmonyheaveninteriors",
      action: "https://www.instagram.com/harmonyheaveninteriors/"
    },
    {
      icon: MapPin,
      title: "Service Areas",
      details: "Chandigarh, Mohali, Sri Ganganagar",
      action: null
    }
  ];

  const faqs = [
    {
      question: "What is your design process?",
      answer: "Our process includes four main stages: Initial consultation to understand your needs, detailed design planning with 3D visualizations, professional implementation with quality materials, and final reveal of your transformed space."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. A single room can take 2-4 weeks, while full home designs typically require 6-12 weeks. We provide detailed timelines during the consultation phase."
    },
    {
      question: "Do you provide 3D visualizations?",
      answer: "Yes, we create detailed 3D renderings and visualizations for all major projects so you can see exactly how your space will look before implementation begins."
    },
    {
      question: "What areas do you serve?",
      answer: "We primarily serve Chandigarh, Mohali, and Sri Ganganagar. For projects outside these areas, please contact us to discuss feasibility and any additional travel considerations."
    },
    {
      question: "Do you handle project management?",
      answer: "Absolutely! We manage the entire project from start to finish, coordinating with contractors, suppliers, and craftsmen to ensure everything is completed on time and to our high standards."
    },
    {
      question: "What is included in your design fee?",
      answer: "Our design fee includes initial consultation, space planning, design concepts, 3D visualizations, material selection, and project coordination. Implementation costs are separate and discussed during planning."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Contact Harmony Heaven Interiors</h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your space? Let's discuss your vision and bring it to life
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="font-heading text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold mb-1">{info.title}</h3>
                      {info.action ? (
                        <a
                          href={info.action}
                          target={info.action.startsWith('http') ? '_blank' : undefined}
                          rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="font-body text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="font-body text-muted-foreground">{info.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-2 text-muted-foreground mb-8">
                <Clock className="h-5 w-5" />
                <span className="font-body">Response time: Within 24 hours</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+919784037296">
                  <Button size="lg" className="w-full sm:w-auto hover-lift">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                </a>
                <a href="https://wa.me/919784037296" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto hover-lift">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us about your project, budget, timeline, and any specific requirements..."
                      rows={6}
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full hover-lift">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold mb-4">Our Location</h2>
            <p className="font-body text-muted-foreground">Visit our design studio in Chandigarh</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-elegant">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.5678841467407!2d76.71432477537299!3d30.730546174585296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef1872e9fb13%3A0x6aaaa767caa1e697!2sHB%20226!5e0!3m2!1sen!2sin!4v1758269563544!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Harmony Heaven Interiors Location"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="font-body text-lg text-muted-foreground">
              Get answers to common questions about our design process and services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg px-6">
                  <AccordionTrigger className="font-heading text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}