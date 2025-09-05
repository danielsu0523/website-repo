import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const publications = pgTable("publications", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  authors: text("authors").notNull(),
  venue: text("venue").notNull(),
  year: integer("year").notNull(),
  type: varchar("type", { length: 50 }).notNull(), // 'conference', 'journal', 'workshop'
  abstract: text("abstract"),
  pdfUrl: text("pdf_url"),
  codeUrl: text("code_url"),
  doiUrl: text("doi_url"),
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const courses = pgTable("courses", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  courseCode: varchar("course_code", { length: 20 }).notNull(),
  title: text("title").notNull(),
  description: text("description"),
  level: varchar("level", { length: 20 }).notNull(), // 'undergraduate', 'graduate'
  semester: varchar("semester", { length: 20 }).notNull(), // 'fall', 'spring', 'summer'
  year: integer("year").notNull(),
  studentCount: integer("student_count"),
  rating: text("rating"),
  syllabusUrl: text("syllabus_url"),
  assignmentsUrl: text("assignments_url"),
  current: boolean("current").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const researchAreas = pgTable("research_areas", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  icon: varchar("icon", { length: 50 }).notNull(),
  color: varchar("color", { length: 20 }).notNull(), // 'primary' or 'accent'
  createdAt: timestamp("created_at").defaultNow(),
});

export const contactMessages = pgTable("contact_messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  subject: varchar("subject", { length: 100 }).notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertPublicationSchema = createInsertSchema(publications).omit({
  id: true,
  createdAt: true,
});

export const insertCourseSchema = createInsertSchema(courses).omit({
  id: true,
  createdAt: true,
});

export const insertResearchAreaSchema = createInsertSchema(researchAreas).omit({
  id: true,
  createdAt: true,
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true,
});

export type InsertPublication = z.infer<typeof insertPublicationSchema>;
export type Publication = typeof publications.$inferSelect;

export type InsertCourse = z.infer<typeof insertCourseSchema>;
export type Course = typeof courses.$inferSelect;

export type InsertResearchArea = z.infer<typeof insertResearchAreaSchema>;
export type ResearchArea = typeof researchAreas.$inferSelect;

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;
