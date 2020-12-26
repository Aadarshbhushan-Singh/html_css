compass_image=document.getElementById("compass_image");
needle_image=document.getElementById("needle_image");

var degree=prompt("Enter degree: ");
needle_image.style.transform = "rotate("+(degree)+"deg)";   
console.log("value is: "+(degree)+" this is value.");
