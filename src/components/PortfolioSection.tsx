
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ExternalLink } from "lucide-react";

// Define portfolio items
const portfolioItems = [
  {
    id: 1,
    title: "Construction Shop Brand Identity",
    description: "Complete branding package including logo, business cards, and promotional banners for a local construction business.",
    category: "Branding",
    imageSrc: "/lovable-uploads/9f7c2bb6-2238-4b7e-8463-6a89fbbeef35.png",
    detailedDescription: "Developed a cohesive brand identity for a friend's construction shop that conveys reliability and professionalism. The design focuses on bold typography paired with industrial elements to communicate strength and expertise in the construction field.",
    tools: ["Adobe Illustrator", "Photoshop"]
  },
  {
    id: 2,
    title: "College Tech Fest Poster",
    description: "Eye-catching poster design for the annual technology festival at IFET College of Engineering.",
    category: "Event",
    imageSrc: "/lovable-uploads/8b747a22-8243-4d37-8644-453f7aade384.png",
    detailedDescription: "Created a vibrant poster that captures the innovative spirit of the college's tech fest. The design uses dynamic geometric shapes and a bold color scheme to attract attention and communicate the event's tech-forward focus.",
    tools: ["Adobe Illustrator", "Photoshop"]
  },
  {
    id: 3,
    title: "Movie Poster Design",
    description: "Cinematic poster design for an independent film with emphasis on visual storytelling and emotion.",
    category: "UI Design",
    imageSrc: "/lovable-uploads/c43df5d5-1ad7-4f88-8de7-a4e6fca53969.png",
    detailedDescription: "Created a compelling movie poster that captures the film's central themes and mood through careful composition, typography, and color grading. The design aims to intrigue viewers and convey the emotional tone of the narrative while maintaining professional industry standards.",
    tools: ["Photoshop", "Adobe Illustrator"]
  },
  {
    id: 4,
    title: "Vehicle Pool Management System",
    description: "Visual identity and UI design for a fleet management application focused on usability and information hierarchy.",
    category: "Event",
    imageSrc: "/lovable-uploads/518af080-d2ca-47e0-88ba-c99fa66e0d43.png",
    detailedDescription: "Designed a comprehensive visual system for a vehicle fleet management application. The project included creating an intuitive dashboard, streamlined booking interfaces, and clear reporting visualizations. The design prioritizes user efficiency with color-coded status indicators and simplified navigation paths.",
    tools: ["Figma", "Adobe Illustrator", "Photoshop"]
  },
  // ============================================
  // TEMPLATE ITEM 5 - EDIT BELOW
  // ============================================
  {
    id: 5,
    title: "[ADD YOUR PROJECT TITLE HERE]", // Edit: Add your project title
    description: "[ADD SHORT DESCRIPTION HERE - 1-2 sentences]", // Edit: Add brief description
    category: "Branding", // Edit: Choose from: "Branding", "Event", "UI Design", or add new category
    imageSrc: "/lovable-uploads/[ADD-YOUR-IMAGE-FILENAME].png", // Edit: Add your image path (upload to public/lovable-uploads/ first)
    detailedDescription: "[ADD DETAILED DESCRIPTION HERE - 3-4 sentences describing the project in detail, challenges solved, and approach taken]", // Edit: Add detailed description
    tools: ["[TOOL 1]", "[TOOL 2]", "[TOOL 3]"] // Edit: Add your tools/technologies used
  },
  // ============================================
  // TEMPLATE ITEM 6 - EDIT BELOW
  // ============================================
  {
    id: 6,
    title: "[ADD YOUR PROJECT TITLE HERE]", // Edit: Add your project title
    description: "[ADD SHORT DESCRIPTION HERE - 1-2 sentences]", // Edit: Add brief description
    category: "UI Design", // Edit: Choose from: "Branding", "Event", "UI Design", or add new category
    imageSrc: "/lovable-uploads/[ADD-YOUR-IMAGE-FILENAME].png", // Edit: Add your image path (upload to public/lovable-uploads/ first)
    detailedDescription: "[ADD DETAILED DESCRIPTION HERE - 3-4 sentences describing the project in detail, challenges solved, and approach taken]", // Edit: Add detailed description
    tools: ["[TOOL 1]", "[TOOL 2]", "[TOOL 3]"] // Edit: Add your tools/technologies used
  }
];

const PortfolioSection = () => {
  // State for filter and expanded items
  const [filter, setFilter] = useState("All");
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  
  // Get unique categories
  const categories = ["All", ...Array.from(new Set(portfolioItems.map(item => item.category)))];
  
  // Filter items
  const filteredItems = filter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  const toggleItem = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  return (
    <section id="portfolio" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">My Portfolio</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my selected projects showcasing my design skills and creative problem-solving.
          </p>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className={filter === category ? "bg-primary hover:bg-primary/90" : ""}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Collapsible
              key={item.id}
              open={expandedItems.includes(item.id)}
              onOpenChange={() => toggleItem(item.id)}
            >
              <Card className="bg-secondary/50 border-white/5 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-[16/10] overflow-hidden">
                  <AspectRatio ratio={16/10}>
                    <img 
                      src={item.imageSrc} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </AspectRatio>
                </div>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <span className="text-xs font-medium bg-primary/20 text-primary rounded-full px-2 py-1">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
                <CardFooter>
                  <CollapsibleTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="w-full text-primary hover:text-primary hover:bg-primary/10 justify-between"
                    >
                      View Details
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${expandedItems.includes(item.id) ? 'rotate-180' : ''}`} />
                    </Button>
                  </CollapsibleTrigger>
                </CardFooter>
                
                <CollapsibleContent>
                  <div className="px-6 pb-6 space-y-6 border-t border-white/5 pt-6">
                    {/* Image Section */}
                    <div>
                      <h4 className="text-sm font-medium mb-3">Project Gallery</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="aspect-video bg-secondary rounded-md overflow-hidden">
                          <img 
                            src={item.imageSrc} 
                            alt={`${item.title} preview 1`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="aspect-video bg-secondary rounded-md flex items-center justify-center text-muted-foreground text-xs">
                          Add image 2
                        </div>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div>
                      <h4 className="text-sm font-medium mb-2">Description</h4>
                      <p className="text-muted-foreground text-sm">
                        {item.detailedDescription}
                      </p>
                    </div>

                    {/* Tools Section */}
                    <div>
                      <h4 className="text-sm font-medium mb-2">Tools & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.tools.map((tool) => (
                          <span key={tool} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Link Section */}
                    {/* EDIT: Change the URL in onClick to your actual project link */}
                    <div>
                      <h4 className="text-sm font-medium mb-2">Project Link</h4>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="gap-2"
                        onClick={() => window.open('#', '_blank')} // EDIT: Replace '#' with your project URL
                      >
                        <ExternalLink className="h-3 w-3" />
                        View Live Project
                      </Button>
                    </div>

                    {/* ============================================ */}
                    {/* TEMPLATE SECTION 1 - ADD YOUR CONTENT BELOW */}
                    {/* EDIT: Customize title, description, and content */}
                    {/* ============================================ */}
                    <div>
                      <h4 className="text-sm font-medium mb-2">[ADD SECTION TITLE HERE]</h4>
                      <p className="text-muted-foreground text-sm">
                        [ADD YOUR CONTENT HERE - This could be project challenges, client feedback, results achieved, or any other relevant information]
                      </p>
                    </div>

                    {/* ============================================ */}
                    {/* TEMPLATE SECTION 2 - ADD YOUR CONTENT BELOW */}
                    {/* EDIT: Customize title, description, and content */}
                    {/* ============================================ */}
                    <div>
                      <h4 className="text-sm font-medium mb-2">[ADD SECTION TITLE HERE]</h4>
                      <div className="space-y-2">
                        <p className="text-muted-foreground text-sm">
                          [ADD YOUR CONTENT HERE - You can add multiple paragraphs, lists, or any other formatted content]
                        </p>
                        {/* OPTIONAL: Add images, badges, or other components here */}
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
