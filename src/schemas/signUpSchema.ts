import { z } from 'zod'


export const usernameValidation = z
    .string()
    .min(2,"Username must be atleast two characters long")
    .max(50,"Username must be less than 50 characters")

export const signUpSchema = z.object({
    username:usernameValidation,
    email:z.string().email({message:"Inavlid email address"}),
    password:z.string().min(6,{message:"Password must be greater than 6 letters"})

})