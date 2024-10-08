import z from "zod";

export const UserSchema = z.object({
    name: z.string({ required_error: "Name is requied!"}).min(3, "Minimum 3 characters is requird"),
    email: z.string({ required_error: "Email is requied!"}).email("Invalid Email Type!"),
    password: z.string({ required_error: "Password is requied!"}).min(3, "Minimum 3 characters is requird")
})