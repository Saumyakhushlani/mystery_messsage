import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User.model";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";



export async function POST(request: Request) {
    await dbConnect();

    try {
        const { username, email, password } = await request.json()

        const existingUserVerifiedByUsername = await UserModel.findOne({
            username,
            isVerified: true
        })
        if (existingUserVerifiedByUsername) {
            return Response.json(
                { success: false, message: "Username is already taken" },
                { status: 400 }
            )
        }

        const existingUserByEmail = await UserModel.findOne({ email })
        if(existingUserByEmail){
            //Later
        }
        else{
            const HasshedPassword = await bcrypt.hash(password,10)
        }

    } catch (error) {
        console.error("Error registering user ", error);
        return Response.json(
            {
                success: false,
                message: "Error registering user"
            },
            {
                status: 500
            }
        )
    }
}