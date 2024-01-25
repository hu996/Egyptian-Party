
var textcounter=document.querySelector('textarea');
var counter=document.querySelector('.counter');



textcounter.addEventListener('keyup',function(){
    var x=textcounter.value;

   if(x.length <= 0){
    counter.innerHTML="your available character finished "
   }
   else{
    counter.innerHTML=100-x.length;
   }
    

})

import { hidesidebar,showsidebar } from "./hideandshownav.module.js";
import{menuehideandshow} from "./menue.module.js"


hidesidebar();
showsidebar();
menuehideandshow();







var countDownDate = new Date("Feb 29, 2024 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.querySelector('.days').innerHTML=days<10 ? "0"+ days +" " +"D"   :   days + " "+"D";
  document.querySelector('.hours').innerHTML=hours<10 ? "0"+hours +  " " +"h"  :  hours + " " +"h";
  document.querySelector('.mintus').innerHTML=minutes <10 ? "0"+ minutes:   minutes + " " +"m";
  document.querySelector('.seconeds').innerHTML=seconds <10 ? "0"+ seconds : seconds+ " "+"S";

},1000)





