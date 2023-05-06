const dot=document.querySelectorAll('.dots-nav');
const Itemheight=document.querySelector('.carousel-div-item').offsetHeight;
console.log("Itemheight"+Itemheight+" "+dot.length);
var currentIndex=0;
var currentDot=dot[currentIndex];

dot[0].addEventListener('click',function(){
  var position=0*Itemheight;
  document.querySelector('svg').style.backgroundColor=document.querySelectorAll('.clr')[0].style.backgroundColor;
  window.scrollTo({
    top:position,
    behavior:"smooth"})})

dot[1].addEventListener('click',function(){
      var position=1*Itemheight;
      document.querySelector('svg').style.backgroundColor=document.querySelectorAll('.clr')[1].style.backgroundColor;
      window.scrollTo({
        top:position,
        behavior:"smooth"})})

dot[2].addEventListener('click',function(){
          var position=2*Itemheight;
          document.querySelector('svg').style.backgroundColor=document.querySelectorAll('.clr')[2].style.backgroundColor;
          window.scrollTo({
            top:position,
            behavior:"smooth"})})

dot[3].addEventListener('click',function(){
              var position=3*Itemheight;
              document.querySelector('svg').style.backgroundColor=document.querySelectorAll('.clr')[3].style.backgroundColor;
              window.scrollTo({
                top:position,
                behavior:"smooth"})})

dot[4].addEventListener('click',function(){
                  var position=4*Itemheight;
                  document.querySelector('svg').style.backgroundColor=document.querySelectorAll('.clr')[4].style.backgroundColor;
                  window.scrollTo({
                    top:position,
                    behavior:"smooth"})})

dot[5].addEventListener('click',function(){
                      var position=5*Itemheight;
                      document.querySelector('svg').style.backgroundColor=document.querySelectorAll('.clr')[5].style.backgroundColor;
                      window.scrollTo({
                        top:position,
                        behavior:"smooth"})})

dot[6].addEventListener('click',function(){
                          var position=6*Itemheight;
                          document.querySelector('svg').style.backgroundColor=document.querySelectorAll('.clr')[6].style.backgroundColor;
                          window.scrollTo({
                            top:position,
                            behavior:"smooth"})})

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
                            
//   // Now you can use the ScrollTrigger plugin in your animations
// gsap.to(".img1", {
// y: 300,
//   scrollTrigger: {
//   trigger: ".img1",
// start: "top center"
// }
//  });
//  gsap.to(".img2", {
//  y: 300,
//  scrollTrigger: {
//  trigger: ".img2",
//   start: "top center"
//    }
//   });
//   https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js