import z from "zod";

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required.")
    .max(32, "Name must be at most 32 characters."),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Invalid email address.")
    .max(32, "Email must be at most 32 characters."),
  subject: z
    .string()
    .trim()
    .min(1, "Subject is required.")
    .max(32, "Subject must be at most 32 characters."),
  message: z
    .string()
    .trim()
    .min(20, "Message must be at least 20 characters.")
    .max(100, "Message must be at most 100 characters."),
});

export default formSchema;
