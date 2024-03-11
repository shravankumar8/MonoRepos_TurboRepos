let alreadydone = false;
import mongoose from "mongoose";
export async function ensuredbconnected() {
  if (alreadydone) {
    return;
  } else {

   await mongoose.connect(
      "mongodb+srv://kumashravan5:8Piz3bZ9jNpMkAJq@cluster0.t8zf1dw.mongodb.net/nextcource"
    );
  }
  alreadydone = true;
}
