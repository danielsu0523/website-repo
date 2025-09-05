import { useState } from "react";
import { FileText, Code, ExternalLink, Calendar, University, BookOpen, Users } from "lucide-react";
import { publicationsData } from "@/data/academic-data";

export default function PublicationsSection() {
  const [filter, setFilter] = useState<string>('all');

  const filteredPublications = filter === 'all' 
    ? publicationsData 
    : publicationsData.filter(pub => pub.type === filter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'conference':
        return <University className="mr-1 h-3 w-3" />;
      case 'journal':
        return <BookOpen className="mr-1 h-3 w-3" />;
      case 'workshop':
        return <Users className="mr-1 h-3 w-3" />;
      default:
        return <University className="mr-1 h-3 w-3" />;
    }
  };

  return (
    <section id="publications" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6 lg:mb-0" data-testid="publications-title">Publications</h2>
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'all' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
              data-testid="filter-all"
            >
              All
            </button>
            <button 
              onClick={() => setFilter('conference')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'conference' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
              data-testid="filter-conference"
            >
              Conference
            </button>
            <button 
              onClick={() => setFilter('journal')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'journal' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
              data-testid="filter-journal"
            >
              Journal
            </button>
            <button 
              onClick={() => setFilter('workshop')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'workshop' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
              data-testid="filter-workshop"
            >
              Workshop
            </button>
          </div>
        </div>
        
        <div className="space-y-6">
          {filteredPublications.map((publication, index) => (
            <article 
              key={index}
              className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow duration-200"
              data-testid={`publication-${index}`}
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`publication-title-${index}`}>
                    "{publication.title}"
                  </h3>
                  <p className="text-muted-foreground mb-3" data-testid={`publication-authors-${index}`}>
                    {publication.authors}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium mr-2">
                      <Calendar className="mr-1 h-3 w-3" />
                      {publication.year}
                    </span>
                    <span className="inline-flex items-center px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">
                      {getTypeIcon(publication.type)}
                      {publication.venue}
                    </span>
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`publication-abstract-${index}`}>
                    {publication.abstract}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 mt-4 lg:mt-0 lg:ml-6">
                  {publication.pdfUrl && (
                    <a 
                      href={publication.pdfUrl}
                      className="inline-flex items-center px-3 py-2 bg-primary text-primary-foreground rounded text-sm font-medium hover:bg-primary/90"
                      data-testid={`publication-pdf-${index}`}
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      PDF
                    </a>
                  )}
                  {publication.codeUrl && (
                    <a 
                      href={publication.codeUrl}
                      className="inline-flex items-center px-3 py-2 bg-secondary text-secondary-foreground rounded text-sm font-medium hover:bg-secondary/80"
                      data-testid={`publication-code-${index}`}
                    >
                      <Code className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  )}
                  {publication.doiUrl && (
                    <a 
                      href={publication.doiUrl}
                      className="inline-flex items-center px-3 py-2 bg-secondary text-secondary-foreground rounded text-sm font-medium hover:bg-secondary/80"
                      data-testid={`publication-doi-${index}`}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      DOI
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://scholar.google.com" 
            className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors duration-200 font-medium"
            data-testid="link-google-scholar"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View Full Publication List on Google Scholar
          </a>
        </div>
      </div>
    </section>
  );
}
