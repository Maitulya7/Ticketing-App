import TicketForm from "@/app/(components)/TicketForm"

const getTicketById = async (id) =>{
  const res = await fetch(`https://ticketing-app-lake.vercel.app/api/Tickets/${id}`,{
    cache:"no-store",
  })

  if(!res.ok){
    throw new Error("Could not find ticket.")
  }

  return res.json();
};

const  TicketPage = async ({params})=> {

  const EDITMODE = params.id === "new" ? false : true;
  let updateTicketData = {};

  if(EDITMODE){
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
    console.log(updateTicketData);

  } else{
    updateTicketData ={
      _id:"new",
    }
  }
  return (
    <>
        <TicketForm ticket={updateTicketData}/>    
    </>
  )
}

export default TicketPage