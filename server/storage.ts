import { type Publication, type Course, type ResearchArea, type ContactMessage, type InsertPublication, type InsertCourse, type InsertResearchArea, type InsertContactMessage } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Publications
  getPublications(): Promise<Publication[]>;
  createPublication(publication: InsertPublication): Promise<Publication>;
  
  // Courses
  getCourses(): Promise<Course[]>;
  createCourse(course: InsertCourse): Promise<Course>;
  
  // Research Areas
  getResearchAreas(): Promise<ResearchArea[]>;
  createResearchArea(area: InsertResearchArea): Promise<ResearchArea>;
  
  // Contact Messages
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private publications: Map<string, Publication>;
  private courses: Map<string, Course>;
  private researchAreas: Map<string, ResearchArea>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.publications = new Map();
    this.courses = new Map();
    this.researchAreas = new Map();
    this.contactMessages = new Map();
  }

  // Publications
  async getPublications(): Promise<Publication[]> {
    return Array.from(this.publications.values()).sort((a, b) => b.year - a.year);
  }

  async createPublication(insertPublication: InsertPublication): Promise<Publication> {
    const id = randomUUID();
    const publication: Publication = { 
      ...insertPublication, 
      id, 
      createdAt: new Date() 
    };
    this.publications.set(id, publication);
    return publication;
  }

  // Courses
  async getCourses(): Promise<Course[]> {
    return Array.from(this.courses.values()).sort((a, b) => b.year - a.year);
  }

  async createCourse(insertCourse: InsertCourse): Promise<Course> {
    const id = randomUUID();
    const course: Course = { 
      ...insertCourse, 
      id, 
      createdAt: new Date() 
    };
    this.courses.set(id, course);
    return course;
  }

  // Research Areas
  async getResearchAreas(): Promise<ResearchArea[]> {
    return Array.from(this.researchAreas.values());
  }

  async createResearchArea(insertArea: InsertResearchArea): Promise<ResearchArea> {
    const id = randomUUID();
    const area: ResearchArea = { 
      ...insertArea, 
      id, 
      createdAt: new Date() 
    };
    this.researchAreas.set(id, area);
    return area;
  }

  // Contact Messages
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = { 
      ...insertMessage, 
      id, 
      createdAt: new Date() 
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values()).sort((a, b) => 
      new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );
  }
}

export const storage = new MemStorage();
