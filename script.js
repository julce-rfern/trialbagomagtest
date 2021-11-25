function cancel()
{
    alert("Event creation cancelled.");
}

function log()
{
    let et=document.getElementById("evtype").value;
    let en=document.getElementById("evname").value;
    if(et==="placeholder")  alert("Please select event type.");
    else alert("Event "+en+" successfully created.");
}