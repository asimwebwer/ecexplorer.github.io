function srch()
{
    let nm=document.getElementById("txt").value
if(nm=="Manohar" || nm=="D8")
{ let d8=document.createElement("img")
 d8.src="ij.jpg";
 d8.style.width="100px";
 d8.style.height="50px";
 document.body.appendChild(d8)
    document.write("Name : Manohar")
    document.write("<br>")
    document.write("Age : 18 ")
    document.write("<br>")
    document.write("DOB : 24 Nov 2003 ")
    
} else 
{
    alert("results not found")
}
}
function sub()
{
    let name=document.getElementById("name").value
    alert("Thank you " + name + " for your feedback")
}