import mongoose ,{Schema,Document} from "mongoose";

export interface Message extends Document{
    content:string;
    createdAt:Date
}

const MessageSchema: Schema<Message> = new Schema({
    content:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    }
})

export interface User extends Document{
    username:string;
    email:string;
    password:string;
    verifyCode:string;
    isVerified:boolean;
    verifyCodeExpiry:Date;
    isAcceptingMessage:boolean;
    message:Message[]
}

const UserSchema: Schema<User> = new Schema({
    username:{
        type:String,
        required :[true, "username is Required"],
        trim:true,
        unique:true
    },
    email:{
        type:String,
        required :[true, "Email is Required"],
        unique:true,
        match:[/.+\@.+\..+/ , "Please use a valid email"]
    },
    password:{
        type:String,
        required :[true, "password is Required"],
    },
    verifyCode:{
        type:String,
        required:[true ,"Verify Code is required"]
    },
    verifyCodeExpiry:{
        type:Date,
        required:[true ,"Verify Code Expiry is required"]
    },
    isVerified:{
        type:Boolean,
        defsault:false
    },
    isAcceptingMessage:{
        type:Boolean,
        default:true
    },
    message:[MessageSchema]
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema)

export default UserModel;