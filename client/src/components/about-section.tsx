import { GraduationCap, MapPin, Microscope, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-12" data-testid="about-title">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6" data-testid="about-paragraph-1">
                  I am an Assistant Professor in the Department of Computer Science at the University of Technology, 
                  where I lead research in machine learning, artificial intelligence, and their applications to real-world problems. 
                  My work focuses on developing novel algorithms for deep learning, computer vision, and natural language processing.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6" data-testid="about-paragraph-2">
                  Before joining UT, I completed my Ph.D. in Computer Science at Stanford University, where I worked on 
                  developing robust machine learning models under the supervision of Prof. John Smith. I also hold a 
                  Master's degree in Electrical Engineering from MIT and a Bachelor's degree in Computer Science from UC Berkeley.
                </p>
                <p className="text-muted-foreground leading-relaxed" data-testid="about-paragraph-3">
                  My research has been published in top-tier conferences including NeurIPS, ICML, ICLR, and CVPR. 
                  I am particularly interested in bridging the gap between theoretical advances and practical applications 
                  in machine learning.
                </p>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4" data-testid="quick-facts-title">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex items-center" data-testid="fact-education">
                    <GraduationCap className="text-primary mr-3 h-5 w-5" />
                    <span className="text-muted-foreground">Ph.D. Stanford University</span>
                  </div>
                  <div className="flex items-center" data-testid="fact-location">
                    <MapPin className="text-primary mr-3 h-5 w-5" />
                    <span className="text-muted-foreground">San Francisco, CA</span>
                  </div>
                  <div className="flex items-center" data-testid="fact-research">
                    <Microscope className="text-primary mr-3 h-5 w-5" />
                    <span className="text-muted-foreground">ML & AI Research</span>
                  </div>
                  <div className="flex items-center" data-testid="fact-publications">
                    <Award className="text-primary mr-3 h-5 w-5" />
                    <span className="text-muted-foreground">25+ Publications</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
