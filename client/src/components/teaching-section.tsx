import { Book, Laptop, Users, User } from "lucide-react";
import { coursesData } from "@/data/academic-data";

export default function TeachingSection() {
  const currentCourses = coursesData.filter(course => course.current);
  const previousCourses = coursesData.filter(course => !course.current);

  return (
    <section id="teaching" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-12" data-testid="teaching-title">Teaching</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Current Courses */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6" data-testid="current-courses-title">Current Courses</h3>
            <div className="space-y-6">
              {currentCourses.map((course, index) => (
                <div key={index} className="bg-card rounded-lg p-6 shadow-sm border border-border" data-testid={`current-course-${index}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground" data-testid={`current-course-title-${index}`}>
                        {course.courseCode}: {course.title}
                      </h4>
                      <p className="text-muted-foreground" data-testid={`current-course-info-${index}`}>
                        {course.semester} {course.year} • {course.level} Level
                      </p>
                    </div>
                    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                      course.level === 'graduate' 
                        ? 'bg-accent/10 text-accent' 
                        : 'bg-primary/10 text-primary'
                    }`} data-testid={`current-course-students-${index}`}>
                      {course.studentCount} students
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4" data-testid={`current-course-description-${index}`}>
                    {course.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {course.syllabusUrl && (
                      <a 
                        href={course.syllabusUrl}
                        className="inline-flex items-center px-3 py-2 bg-secondary text-secondary-foreground rounded text-sm font-medium hover:bg-secondary/80"
                        data-testid={`current-course-syllabus-${index}`}
                      >
                        <Book className="mr-2 h-4 w-4" />
                        Syllabus
                      </a>
                    )}
                    {course.assignmentsUrl && (
                      <a 
                        href={course.assignmentsUrl}
                        className="inline-flex items-center px-3 py-2 bg-secondary text-secondary-foreground rounded text-sm font-medium hover:bg-secondary/80"
                        data-testid={`current-course-assignments-${index}`}
                      >
                        <Laptop className="mr-2 h-4 w-4" />
                        {course.level === 'graduate' ? 'Projects' : 'Assignments'}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Previous Courses */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6" data-testid="previous-courses-title">Previous Courses</h3>
            <div className="space-y-4">
              {previousCourses.map((course, index) => (
                <div key={index} className="bg-card rounded-lg p-4 shadow-sm border border-border" data-testid={`previous-course-${index}`}>
                  <h4 className="font-medium text-foreground" data-testid={`previous-course-title-${index}`}>
                    {course.courseCode}: {course.title}
                  </h4>
                  <p className="text-sm text-muted-foreground" data-testid={`previous-course-info-${index}`}>
                    {course.semester} {course.year} • {course.level} • Rating: {course.rating}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4" data-testid="teaching-philosophy-title">Teaching Philosophy</h4>
              <p className="text-muted-foreground text-sm leading-relaxed" data-testid="teaching-philosophy-text">
                I believe in fostering a collaborative learning environment where students are encouraged 
                to think critically, ask questions, and apply theoretical concepts to real-world problems. 
                My teaching approach emphasizes hands-on experience with practical projects and research opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
