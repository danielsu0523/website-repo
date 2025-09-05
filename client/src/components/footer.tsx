export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4" data-testid="footer-name">Dr. Sarah Chen</h3>
            <p className="text-muted-foreground text-sm leading-relaxed" data-testid="footer-description">
              Assistant Professor of Computer Science specializing in Machine Learning, 
              AI, and their applications to real-world problems.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-4" data-testid="footer-links-title">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  data-testid="footer-link-about"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('research')} 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  data-testid="footer-link-research"
                >
                  Research
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('publications')} 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  data-testid="footer-link-publications"
                >
                  Publications
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('teaching')} 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  data-testid="footer-link-teaching"
                >
                  Teaching
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-4" data-testid="footer-university-title">University</h4>
            <p className="text-muted-foreground text-sm leading-relaxed" data-testid="footer-university-info">
              Department of Computer Science<br />
              University of Technology<br />
              San Francisco, CA 94158
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm" data-testid="footer-copyright">
            © 2024 Dr. Sarah Chen. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-4 sm:mt-0" data-testid="footer-updated">
            Last updated: November 2024
          </p>
        </div>
      </div>
    </footer>
  );
}
