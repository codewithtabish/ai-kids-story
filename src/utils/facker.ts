// src/utils/generateTestimonials.js
import { faker } from "@faker-js/faker";

export const generateTestimonials = (count = 10) => {
  const testimonials = [];

  for (let i = 0; i < count; i++) {
    const isMale = faker.datatype.boolean(); // Randomly determines if the testimonial is male or female
    const avatarUrl = isMale
      ? "https://avatar.iran.liara.run/public/boy"
      : "https://avatar.iran.liara.run/public/girl";

    const testimonial = {
      id: Math.random() * 100,
      name: faker.person.fullName(),
      title: faker.person.jobTitle(),
      company: faker.company.name(),
      testimonial: faker.lorem.sentences(3), // Generates exactly 3 sentences
      avatarUrl: avatarUrl,
      location: faker.location.city() + ", " + faker.location.country(),
      date: faker.date.past().toLocaleDateString("en-CA"), // Format date to 'YYYY-MM-DD'
    };

    testimonials.push(testimonial);
  }

  return testimonials;
};

export const generateBlogComments = (count = 10) => {
  const comments = [];
  let postId;

  for (let i = 0; i < count; i++) {
    const isMale = faker.datatype.boolean(); // Randomly determines if the testimonial is male or female
    const avatarUrl = isMale
      ? "https://avatar.iran.liara.run/public/boy"
      : "https://avatar.iran.liara.run/public/girl";

    const comment = {
      id: Math.random() * 100, // assuming id is serial and starts from 1
      postId: postId || Math.random(), // Generate a postId if not provided
      commenterName: faker.name.fullName(),
      comment: faker.lorem.sentences(2), // Generates exactly 2 sentences for the comment
      commentedOn: faker.date.recent().toISOString(), // ISO formatted date string,
      avatarUrl: avatarUrl,
    };

    comments.push(comment);
  }

  return comments;
};
