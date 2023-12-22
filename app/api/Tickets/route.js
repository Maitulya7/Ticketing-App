import { NextResponse } from "next/server";
import Ticket from "@/app/(models)/Ticket";

export async function POST(req) {
  console.log("post");
  try {
    const body = await req.json();
    const ticketData = body.formData;
    await Ticket.create(ticketData);

    return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
  } catch (error) {
    console.error("Error creating ticket:", error);
    return NextResponse.json({ message: "Error creating ticket", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const tickets = await Ticket.find();
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    console.error("Error fetching tickets:", error);
    return NextResponse.json({ message: "Error fetching tickets", error }, { status: 500 });
  }
}
