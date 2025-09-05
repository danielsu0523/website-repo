import { Brain, Eye, MessageSquare, Shield, TrendingUp, Heart } from "lucide-react";
import { researchAreasData } from "@/data/academic-data";

const iconMap = {
  "brain": Brain,
  "eye": Eye,
  "message-square": MessageSquare,
  "shield": Shield,
  "trending-up": TrendingUp,
  "heart": Heart,
};

export default function ResearchSection() {
  return (
    <section id="research" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-12" data-testid="research-title">Research Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreasData.map((area, index) => {
            const IconComponent = iconMap[area.icon as keyof typeof iconMap] || Brain;
            const colorClass = area.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent';
            
            return (
              <div 
                key={index}
                className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow duration-200"
                data-testid={`research-card-${index}`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${colorClass} rounded-lg flex items-center justify-center`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground ml-4" data-testid={`research-title-${index}`}>
                    {area.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed" data-testid={`research-description-${index}`}>
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
