import {
  json,
  pgTable,
  PgVarchar,
  serial,
  text,
  varchar,
} from "drizzle-orm/pg-core";

export const StoryData = pgTable("storyData", {
  id: serial("id").primaryKey(),
  storySubject: text("storySubject"),
  storyTitle: varchar("storyTitle"),
  storyID: varchar("storyID"),
  storyAgeGroup: varchar("storyAgeGroup"),
  storyImageStyle: varchar("storyImageStyle"),
  storyCoverImage: varchar("storyCoverImage"),
  userName: varchar("userName"),
  userEmail: varchar("userEmail"),
  userImage: varchar("userImage"),
  output: json("output"),
});

// create kids story on description for 5-8 years kids,Educational story,and all images in paper cut style:
// story of programmer and a magical laptop ,give me 5 chapters, with detailed image text promt for each of
// chapter and image promt for story cover book with story name,all in json format
