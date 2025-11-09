import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Portfolio data (same as in PortfolioSection)
const portfolioItems = [
  {
    id: 1,
    title: "Construction Shop Brand Identity",
    description: "Complete branding package including logo, business cards, and promotional banners for a local construction business.",
    category: "Branding",
    imageSrc: "/lovable-uploads/9f7c2bb6-2238-4b7e-8463-6a89fbbeef35.png",
    detailedDescription: "Developed a cohesive brand identity for a friend's construction shop that conveys reliability and professionalism. The design focuses on bold typography paired with industrial elements to communicate strength and expertise in the construction field.",
    tools: ["Adobe Illustrator", "Photoshop"],
    cards: [
      {
        title: "Brand Identity Design",
        description: "Created a comprehensive brand identity including logo design, color palette, and typography system that reflects the strength and reliability of the construction industry.",
        image: "/lovable-uploads/9f7c2bb6-2238-4b7e-8463-6a89fbbeef35.png"
      },
      {
        title: "Marketing Materials",
        description: "Designed business cards, promotional banners, and various marketing collateral to establish a professional presence in the market.",
        image: "/lovable-uploads/9f7c2bb6-2238-4b7e-8463-6a89fbbeef35.png"
      },
      {
        title: "Brand Guidelines",
        description: "Developed detailed brand guidelines to ensure consistent application of the brand identity across all touchpoints and materials.",
        image: "/lovable-uploads/9f7c2bb6-2238-4b7e-8463-6a89fbbeef35.png"
      }
    ]
  },
  {
    id: 2,
    title: "College Tech Fest Poster",
    description: "Eye-catching poster design for the annual technology festival at IFET College of Engineering.",
    category: "Event",
    imageSrc: "/lovable-uploads/8b747a22-8243-4d37-8644-453f7aade384.png",
    detailedDescription: "Created a vibrant poster that captures the innovative spirit of the college's tech fest. The design uses dynamic geometric shapes and a bold color scheme to attract attention and communicate the event's tech-forward focus.",
    tools: ["Adobe Illustrator", "Photoshop"],
    cards: [
      {
        title: "Visual Concept",
        description: "Developed the core visual concept using geometric shapes and vibrant colors to represent technology and innovation at the college tech fest.",
        image: "/lovable-uploads/8b747a22-8243-4d37-8644-453f7aade384.png"
      },
      {
        title: "Typography & Layout",
        description: "Designed bold typography and dynamic layout that ensures readability while maintaining visual excitement and energy throughout the poster.",
        image: "/lovable-uploads/8b747a22-8243-4d37-8644-453f7aade384.png"
      },
      {
        title: "Print & Digital Versions",
        description: "Created optimized versions for both print and digital distribution, ensuring the design works effectively across all platforms and mediums.",
        image: "/lovable-uploads/8b747a22-8243-4d37-8644-453f7aade384.png"
      }
    ]
  },
  {
    id: 3,
    title: "Movie Poster Design",
    description: "Cinematic poster design for an independent film with emphasis on visual storytelling and emotion.",
    category: "UI Design",
    imageSrc: "/lovable-uploads/c43df5d5-1ad7-4f88-8de7-a4e6fca53969.png",
    detailedDescription: "Created a compelling movie poster that captures the film's central themes and mood through careful composition, typography, and color grading. The design aims to intrigue viewers and convey the emotional tone of the narrative while maintaining professional industry standards.",
    tools: ["Photoshop", "Adobe Illustrator"],
    cards: [
      {
        title: "Visual Storytelling",
        description: "Crafted a composition that tells the story at a glance, using imagery and visual metaphors to communicate the film's themes and emotional journey.",
        image: "/lovable-uploads/c43df5d5-1ad7-4f88-8de7-a4e6fca53969.png"
      },
      {
        title: "Color Grading",
        description: "Applied professional color grading techniques to establish mood and atmosphere, creating a cinematic feel that matches the film's tone.",
        image: "/lovable-uploads/c43df5d5-1ad7-4f88-8de7-a4e6fca53969.png"
      },
      {
        title: "Typography Design",
        description: "Designed custom typography and title treatment that complements the visual style while maintaining industry standards for movie poster design.",
        image: "/lovable-uploads/c43df5d5-1ad7-4f88-8de7-a4e6fca53969.png"
      }
    ]
  },
  {
    id: 4,
    title: "Vehicle Pool Management System",
    description: "Visual identity and UI design for a fleet management application focused on usability and information hierarchy.",
    category: "Event",
    imageSrc: "/lovable-uploads/518af080-d2ca-47e0-88ba-c99fa66e0d43.png",
    detailedDescription: "Designed a comprehensive visual system for a vehicle fleet management application. The project included creating an intuitive dashboard, streamlined booking interfaces, and clear reporting visualizations. The design prioritizes user efficiency with color-coded status indicators and simplified navigation paths.",
    tools: ["Figma", "Adobe Illustrator", "Photoshop"],
    cards: [
      {
        title: "Dashboard Design",
        description: "Created an intuitive dashboard that provides real-time fleet overview with key metrics, status indicators, and quick access to important functions.",
        image: "/lovable-uploads/518af080-d2ca-47e0-88ba-c99fa66e0d43.png"
      },
      {
        title: "Booking Interface",
        description: "Designed a streamlined booking system that simplifies the vehicle reservation process with clear calendar views and availability indicators.",
        image: "/lovable-uploads/518af080-d2ca-47e0-88ba-c99fa66e0d43.png"
      },
      {
        title: "Reporting & Analytics",
        description: "Developed comprehensive reporting visualizations that transform complex fleet data into clear, actionable insights for managers.",
        image: "/lovable-uploads/518af080-d2ca-47e0-88ba-c99fa66e0d43.png"
      }
    ]
  },
  {
    id: 5,
    title: "[ADD YOUR PROJECT TITLE HERE]",
    description: "[ADD SHORT DESCRIPTION HERE - 1-2 sentences]",
    category: "Branding",
    imageSrc: "/lovable-uploads/[ADD-YOUR-IMAGE-FILENAME].png",
    detailedDescription: "[ADD DETAILED DESCRIPTION HERE - 3-4 sentences describing the project in detail, challenges solved, and approach taken]",
    tools: ["[TOOL 1]", "[TOOL 2]", "[TOOL 3]"],
    cards: [
      {
        title: "[CARD 1 TITLE]",
        description: "[CARD 1 DESCRIPTION - Describe this aspect of the project]",
        image: "/lovable-uploads/[ADD-YOUR-IMAGE-FILENAME].png"
      },
      {
        title: "[CARD 2 TITLE]",
        description: "[CARD 2 DESCRIPTION - Describe this aspect of the project]",
        image: "/lovable-uploads/[ADD-YOUR-IMAGE-FILENAME].png"
      },
      {
        title: "[CARD 3 TITLE]",
        description: "[CARD 3 DESCRIPTION - Describe this aspect of the project]",
        image: "/lovable-uploads/[ADD-YOUR-IMAGE-FILENAME].png"
      }
    ]
  },
  {
    id: 6,
    title: "[ADD YOUR PROJECT TITLE HERE]",
    description: "[ADD SHORT DESCRIPTION HERE - 1-2 sentences]",
    category: "UI Design",
    imageSrc: "/lovable-uploads/[ADD-YOUR-IMAGE-FILENAME].png",
    detailedDescription: "[ADD DETAILED DESCRIPTION HERE - 3-4 sentences describing the project in detail, challenges solved, and approach taken]",
    tools: ["[TOOL 1]", "[TOOL 2]", "[TOOL 3]"],
    cards: [
      {
        title: "[CARD 1 TITLE]",
        description: "[CARD 1 DESCRIPTION - Describe this aspect of the project]",
        image: "/lovable-uploads/[ADD-YOUR-IMAGE-FILENAME].png"
      },
      {
        title: "[CARD 2 TITLE]",
        description: "[CARD 2 DESCRIPTION - Describe this aspect of the project]",
        image: "/lovable-uploads/[ADD-YOUR-IMAGE-FILENAME].png"
      },
      {
        title: "[CARD 3 TITLE]",
        description: "[CARD 3 DESCRIPTION - Describe this aspect of the project]",
        image: "/lovable-uploads/[ADD-YOUR-IMAGE-FILENAME].png"
      }
    ]
  }
];

const PortfolioDetail = () => {
  const { id } = useParams();
  const project = portfolioItems.find(item => item.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link to="/#portfolio">
            <Button variant="ghost" className="mb-8 hover-scale">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <span className="text-sm font-medium bg-primary/20 text-primary rounded-full px-4 py-2 mb-4 inline-block">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                {project.title}
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                {project.detailedDescription}
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-3">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span key={tool} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="gap-2 hover-scale"
                  onClick={() => window.open('#', '_blank')}
                >
                  <ExternalLink className="h-4 w-4" />
                  View Live Project
                </Button>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <div className="rounded-2xl overflow-hidden shadow-2xl hover-scale">
                <img 
                  src={project.imageSrc} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Cards */}
      <section className="py-16 px-6 md:px-12 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">Project Breakdown</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {project.cards.map((card, index) => (
              <Card 
                key={index}
                className="group bg-card border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Interested in Working Together?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Let's create something amazing for your next project.
          </p>
          <Link to="/#contact">
            <Button size="lg" className="hover-scale">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioDetail;
