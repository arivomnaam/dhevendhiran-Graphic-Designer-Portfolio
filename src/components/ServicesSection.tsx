
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    title: "Graphic Design",
    description: "Create stunning visual assets including logos, posters, brochures, and social media graphics that capture attention and communicate your message effectively.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pen-tool">
        <path d="m12 19 7-7 3 3-7 7-3-3z"/>
        <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
        <path d="m2 2 7.586 7.586"/>
        <circle cx="11" cy="11" r="2"/>
      </svg>
    )
  },
  {
    id: 2,
    title: "UI Design",
    description: "Design intuitive, user-friendly interfaces for websites and applications that enhance user experience while maintaining aesthetic appeal and functionality.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-dashboard">
        <rect width="7" height="9" x="3" y="3" rx="1"/>
        <rect width="7" height="5" x="14" y="3" rx="1"/>
        <rect width="7" height="9" x="14" y="12" rx="1"/>
        <rect width="7" height="5" x="3" y="16" rx="1"/>
      </svg>
    )
  },
  {
    id: 3,
    title: "Web Design",
    description: "Create visually engaging website designs that not only look great but are also optimized for user experience, performance, and conversion.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
        <path d="M2 12h20"/>
      </svg>
    )
  },
  {
    id: 4,
    title: "Brand Identity",
    description: "Develop comprehensive brand identities that establish a strong, recognizable presence for your business across all touchpoints and marketing materials.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-stamp">
        <path d="M5 22h14"/>
        <path d="M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z"/>
        <path d="M14 13V8.5C14 7.12 12.88 6 11.5 6S9 7.12 9 8.5V13"/>
      </svg>
    )
  },
  {
    id: 5,
    title: "Social Media Graphics",
    description: "Design eye-catching graphics for social media campaigns that boost engagement and help build your brand's online presence.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share-2">
        <circle cx="18" cy="5" r="3"/>
        <circle cx="6" cy="12" r="3"/>
        <circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    )
  },
  {
    id: 6,
    title: "Print Design",
    description: "Create print-ready designs for business cards, flyers, brochures, and other marketing materials that make a lasting impression.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-printer">
        <polyline points="6 9 6 2 18 2 18 9"/>
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
        <rect width="12" height="8" x="6" y="14"/>
      </svg>
    )
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">My Services</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I offer a range of design services to help businesses and individuals create
            compelling visual identities and user experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="bg-secondary/50 border-white/5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 p-8 glass-card rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">Ready to bring your ideas to life?</h3>
              <p className="text-muted-foreground mb-6">
                Let's collaborate to create designs that perfectly capture your vision and connect with your audience.
                My approach combines creativity, strategy, and attention to detail to deliver results that exceed expectations.
              </p>
              <div className="flex">
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                >
                  Get in Touch
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full h-64 rounded-xl overflow-hidden">
                  <img 
                    src="/handshake.png" 
                    alt="Design Process" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute -top-4 -right-4 p-4 glass-card rounded-lg rotate-3">
                  <p className="text-sm font-medium text-primary">Creative Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
