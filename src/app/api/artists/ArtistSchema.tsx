import z from "zod";

export const ArtistSchema = z.object({
    name: z.string(),
    gender: z.enum(['MALE','FEMALE','OTHER']),
    dob: z.string({ required_error: "string is must required!"}),
    first_release_year: z.string({ required_error: "Date is must required!"}),
    total_albums: z.string(),
    address: z.string()
});