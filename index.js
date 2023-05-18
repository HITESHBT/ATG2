const dot=document.querySelectorAll('.dots-nav');
const Itemheight=document.querySelector('.carousel-div-item').offsetHeight;
console.log("Itemheight"+Itemheight+" "+dot.length);
var currentIndex=0;
var currentDot=dot[currentIndex];
const path=document.querySelectorAll('.dotsst');

dot[0].addEventListener('click',function(){
  var position=0*Itemheight;
  document.querySelector('svg').style.backgroundColor=document.querySelectorAll('.clr')[0].style.backgroundColor;
  window.scrollTo({
    top:position,
    behavior:"smooth"})
    for( var i=1;i<=6;i++)
    path[i].style.fill="grey";})


dot[1].addEventListener('click',function(){
      var position=1*Itemheight;
      document.querySelector('svg').style.backgroundColor=document.querySelectorAll('.clr')[1].style.backgroundColor;
      window.scrollTo({
        top:position,
        behavior:"smooth"})
        for( var i=0;i<=1;i++)
        path[i].style.fill="rgb(0, 146, 255)";
        for( var i=2;i<=6;i++)
        path[i].style.fill="grey";})

dot[2].addEventListener('click',function(){
          var position=2*Itemheight;
          document.querySelector('svg').style.backgroundColor=document.querySelectorAll('.clr')[2].style.backgroundColor;
          window.scrollTo({
            top:position,
            behavior:"smooth"})
            for( var i=0;i<=2;i++)
        path[i].style.fill="rgb(0, 146, 255)";
            for( var i=3;i<=6;i++)
            path[i].style.fill="grey";})

dot[3].addEventListener('click',function(){
              var position=3*Itemheight;
              document.querySelector('svg').style.backgroundColor=document.querySelectorAll('.clr')[3].style.backgroundColor;
              window.scrollTo({
                top:position,
                behavior:"smooth"})
                for( var i=0;i<=3;i++)
        path[i].style.fill="rgb(0, 146, 255)";
                for( var i=4;i<=6;i++)
                path[i].style.fill="grey";})

dot[4].addEventListener('click',function(){
                  var position=4*Itemheight;
                  document.querySelector('svg').style.backgroundColor=document.querySelectorAll('.clr')[4].style.backgroundColor;
                  window.scrollTo({
                    top:position,
                    behavior:"smooth"})
                    for( var i=0;i<=4;i++)
        path[i].style.fill="rgb(0, 146, 255)";
                    for( var i=5;i<=6;i++)
                    path[i].style.fill="grey";})

dot[5].addEventListener('click',function(){
                      var position=5*Itemheight;
                      document.querySelector('svg').style.backgroundColor=document.querySelectorAll('.clr')[5].style.backgroundColor;
                      window.scrollTo({
                        top:position,
                        behavior:"smooth"})
                        for( var i=0;i<=5;i++)
        path[i].style.fill="rgb(0, 146, 255)";
                        for( var i=6;i<=6;i++)
                        path[i].style.fill="grey";})

dot[6].addEventListener('click',function(){
                          var position=6*Itemheight;
                          document.querySelector('svg').style.backgroundColor=document.querySelectorAll('.clr')[6].style.backgroundColor;
                          window.scrollTo({
                            top:position,
                            behavior:"smooth"})
                            for( var i=0;i<=6;i++)
        path[i].style.fill="rgb(0, 146, 255)";
                          })
window.addEventListener('scroll',()=>{
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  var i=Math.trunc (currentScrollPosition/Itemheight);
  console.log(window.pageYOffset+" "+i);
  
  document.querySelector('svg').style.backgroundColor=document.querySelectorAll('.clr')[i].style.backgroundColor;
  for( var j=0;j<=i;j++)
        path[j].style.fill="rgb(0, 146, 255)";
  for( var j=i+1;j<=6;j++)
        path[j].style.fill="grey";
})
//})
// let lastScrollPosition = 0;
// window.addEventListener('scroll', () => {
// const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

// var newindex=0;
                          
// if (currentScrollPosition > lastScrollPosition) {
//                               // Scrolling down
//       if(newindex<=5)
//       {
//         newindex+=1;
//         dot[newindex].click();
//       }
//       else
//       {
//         dot[0].click();
//         newindex=0;
//       }
//   } else {
//   // Scrolling up
//   console.log(currentScrollPosition);
//   if(newindex==0)
//   {
//     dot[6].click();
//     newindex=6;
//   }
//   else
//   {
//     newindex-=1;
//     dot[newindex].click();
//   }
// }
                          
// lastScrollPosition = currentScrollPosition;
// });                                                        
                          

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