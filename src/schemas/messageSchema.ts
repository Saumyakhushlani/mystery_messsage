import {z} from 'zod'

export const MessageSchema =z.object({
    content:z.string().max(300, {message:"Content must be less than 300 characters"})
})