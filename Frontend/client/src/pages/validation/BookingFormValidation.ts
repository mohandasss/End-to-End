import { z } from "zod";
export const Bookingform = z.object({
    email : z.string(),
    name : z.string(),
    age : z.string(),
    phoneNumber : z.string().regex(/^\d{10}$/, "Must be 10 digits")
})

export type BookingFormType = z.infer <typeof Bookingform>