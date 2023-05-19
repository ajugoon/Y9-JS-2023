// Create button functionality to manipulate text being displayed
  
const header123 = document.getElementById("myHeader");
const info123 = document.getElementById("myInfo");
const pic123 = document.getElementById("myPic");
            
document.getElementById("button1").onclick = function() {
   
    header123.innerHTML = "Information has been cleared";
    info123.innerHTML = "Information has been cleared...";
    pic123.style.display ='none';

}//end onclick     

document.getElementById("button2").onclick = function() {
 
    header123.innerHTML = "This is the title I want to display";
    info123.innerHTML = "This is the information I want to display...";

    // The name of the image would need to be changed here. You can also reference a local file by doing "file1.jpeg"
    pic123.src = "https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-icon.png?v=c78bd457575a";
    pic123.style.height = '200px';
    pic123.style.width = '200px';
    pic123.style.display ='block';

}// end onclick
