function addNewWEField(){
   let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("weField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows",3);
   newNode.setAttribute("placeholder","Enter here");
   let weOb=document.getElementById("we");
   let weAddButtonOb=document.getElementById("weAddButton");
 
   weOb.insertBefore(newNode,weAddButtonOb);

}
function addNewAQField(){
   let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("eqField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows",3);
   newNode.setAttribute("placeholder","Enter here");
   let aqOb=document.getElementById("aq");
   let aqAddButtonOb=document.getElementById("aqAddButton");
 
   aqOb.insertBefore(newNode,aqAddButtonOb);

}
function addNewCTField(){
   let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("ctField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows",1);
   newNode.setAttribute("placeholder","Enter here");
   let ctOb=document.getElementById("ct");
   let ctAddButtonOb=document.getElementById("ctAddButton");
 
   ctOb.insertBefore(newNode,ctAddButtonOb);

}
function addNewHBField(){
   let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("hbField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows",1);
   newNode.setAttribute("placeholder","Enter here");
   let hbOb=document.getElementById("hb");
   let hbAddButtonOb=document.getElementById("hbAddButton");
 
   hbOb.insertBefore(newNode,hbAddButtonOb);
}
function addNewLKField(){
   let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("lkField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows",1);
   newNode.setAttribute("placeholder","Enter here");
   let lkOb=document.getElementById("lk");
   let lkAddButtonOb=document.getElementById("lkAddButton");
 
   lkOb.insertBefore(newNode,lkAddButtonOb);
}

function addNewTLKField(){
   let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("tlkField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows",1);
   newNode.setAttribute("placeholder","Enter here");
   let tlkOb=document.getElementById("tlk");
   let tlkAddButtonOb=document.getElementById("tlkAddButton");
 
   tlkOb.insertBefore(newNode,tlkAddButtonOb);
}
function generateRESUME()
{
   
   document.getElementById("nameT1").innerHTML=document.getElementById("nameField").value;

   document.getElementById("nameT2").innerHTML=document.getElementById("nameField").value;
   
   document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
    
   document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
   
   document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;

   document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;

   document.getElementById("linkT").innerHTML=document.getElementById("linkField").value;

   let hbs=document.getElementsByClassName("hbField");
   let str2=" ";
   for (let e of hbs)
   {
      str2 = str2 + `<li>${e.value}</li>`;
   }
   document.getElementById("hbT").innerHTML=str2;

   let lks=document.getElementsByClassName("lkField");
   let str3=" ";
   for (let e of lks)
   {
      str3 = str3 + `<li>${e.value}</li>`;
   }
   document.getElementById("lkT").innerHTML=str3;
   
   // Image upload handling
   const imageField = document.getElementById("imageField");
   const uploadedImage = imageField.files[0]; // Get the uploaded image file

   if (uploadedImage) {
       // Display the uploaded image in the CV template
       const imgElement = document.createElement("img");
       imgElement.src = URL.createObjectURL(uploadedImage);
       imgElement.alt = "Candidate Photo";
       imgElement.classList.add("img-fluid", "myimg");
       const imageContainer = document.querySelector(".image-container");
       imageContainer.innerHTML = ""; // Clear existing image
       imageContainer.appendChild(imgElement);
   }
  


   //objectives 
   document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;
  
  
   //work Experience
   let wes=document.getElementsByClassName("weField");
   let str=" ";
   for (let e of wes)
   {
      str = str + `<li>${e.value}</li>`;
   }
   document.getElementById("weT").innerHTML=str;

   let aqs=document.getElementsByClassName("eqField");
   let str1=" ";
   for (let e of aqs)
   {
      str1 = str1 + `<li>${e.value}</li>`;
   }
   document.getElementById("aqT").innerHTML=str1;

   let tlks=document.getElementsByClassName("tlkField");
   let str4=" ";
   for (let e of tlks)
   {
      str4 = str4 + `<li>${e.value}</li>`;
   }
   document.getElementById("tlkT").innerHTML=str4;
   
   let cts=document.getElementsByClassName("ctField");
   let str5=" ";
   for (let e of cts)
   {
      str5 = str5 + `<li>${e.value}</li>`;
   }
   document.getElementById("ctT").innerHTML=str5;
   

   document.getElementById("cv-form").style.display="none";
   document.getElementById("cv-template").style.display="block";
     
  
}

function PrintRESUME()
   {
      window.print();
   }