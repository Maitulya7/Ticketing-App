import { NextResponse } from "next/server";
import Ticket from "../(models)/Ticket";

export async function POST(req) {
  try {
    const body = await req.json();
    const TicketData = body.formData;
    await Ticket.create(TicketData);

    return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
