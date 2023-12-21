import { NextResponse } from "next/server";
import Ticket from "../../(models)/Ticket";

export async function POST(req) {
  console.log("post");
  try {
    const body = await req.json();
    const TicketData = body.formData;
    await Ticket.create(TicketData);
    return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
  } catch (error) {
    console.error("Error creating ticket:", error);
    return NextResponse.json({ message: "Error creating ticket", error }, { status: 500 });
  }
  
}