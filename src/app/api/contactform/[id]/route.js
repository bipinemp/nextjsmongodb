import dbConn from "@/utils/dbConn";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function DELETE(req, { params }) {
  const id = params.id;
  await dbConn();

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return new Response({
      message: "No such message exists",
      status: 404,
    });
  }
  try {
    const message = await Contact.findByIdAndDelete({ _id: id });
    return NextResponse.json({
      data: message,
      msg: "Message deleted successfully",
      status: 200,
    });
  } catch (e) {
    return NextResponse.json({
      msg: "Error while deleteing a message",
      status: 500,
    });
  }
}
