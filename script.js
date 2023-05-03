var imgAddress=['./assets/p1.jpg','./assets/p2.jpg','./assets/p3.jpg',
                './assets/p4.jpg','./assets/p5.jpg','./assets/p6.jpg','./assets/p7.jpg',
                './assets/p8.jpg','./assets/p9.jpg','./assets/p10.jpg','./assets/p11.jpg',
               ];
let img1= document.querySelector('.img-1 img');
let img2= document.querySelector('.img-2 img');
img2.src=imgAddress[0];
var i=0;

function handleClick(whichOne) {
    //next
    if (whichOne==='next') {
      if (i===10) {
          i=0;
        }else{
          i++;
        }
      img1.src=imgAddress[i];
      img1.style.transform='rotateY(0)';
      img1.style.transition='all 2s linear';
      img2.style.transform='rotateY(90deg)';
      img2.style.transition='all 1s linear';
      setTimeout(function () {
        img1.style.transform='rotateY(-180deg)';
        img1.style.transition='all 0s linear';
        img2.style.transform='rotateY(0)';
        img2.style.transition='all 0s linear';
        img2.src=img1.src;
      },2000);
     }
    //previous
    if (whichOne==='previous') {
     
    }
}