"use client"
import { useRouter } from "next/navigation"
import React, {useState} from "react";

const TicketForm = () => {

    const startingTicketData = {
        title:"",
        description: "",
        priority: 1,
        progress:0,
        status:"Not Started",
        category:"Software Development"
    };
 
  return (
    <div>TicketForm</div>
  )
}

export default TicketForm