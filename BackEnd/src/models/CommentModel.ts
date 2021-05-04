import mongoose from "mongoose";
import { createSchema, Type } from 'ts-mongoose';

const CommentSchema = createSchema({
  //Add UUID generated by firebase here
  UserId: Type.objectId({ ref: "Users", required: true }),
  PostId: Type.objectId({ ref: "Users", required: true }),
  Comment: Type.string({ required: true }),
  PostedAt: Type.date({ default: Date.now }),
  UserProfileUrl: Type.mixed({ required: true }),
});

export default mongoose.model("Comment", CommentSchema);
