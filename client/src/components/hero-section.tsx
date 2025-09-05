import { Mail, FileText } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight" data-testid="hero-title">
              Dr. Sarah Chen
            </h1>
            <p className="text-xl text-muted-foreground mb-4 font-medium" data-testid="hero-position">
              Assistant Professor of Computer Science
            </p>
            <p className="text-lg text-muted-foreground mb-8" data-testid="hero-affiliation">
              University of Technology • Machine Learning & AI Research Lab
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
                data-testid="button-contact"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </button>
              <button 
                onClick={() => scrollToSection('publications')}
                className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors duration-200 font-medium"
                data-testid="button-publications"
              >
                <FileText className="mr-2 h-4 w-4" />
                View Publications
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b372?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" 
              alt="Dr. Sarah Chen" 
              className="w-64 h-64 rounded-full object-cover shadow-xl border-4 border-card"
              data-testid="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
