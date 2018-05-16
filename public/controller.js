// let getScroll = () => {
//   return window.scrollY;
// }
// let down = true;
// let scrollCount;
//
// let handleColor = () => {
//   if(down) {
//     for(let i = 1; i<4; i++) {
//       let id = 'e' + i;
//       console.log(id);
//       document.getElementById(id).style.color = 'black';
//           document.getElementById('head').style.background = 'transparent';
//     }
//     // down = false;
//   }
//   else {
//     for(let i = 1; i<4; i++) {
//       let id = 'e' + i;
//       console.log(id);
//       document.getElementById(id).style.color = 'white';
//           document.getElementById('head').style.background = 'transparent';
//     }
//   }
// }
//
//
// window.onscroll = () => {
//   if(getScroll() > scrollCount) {
//     handleColor();
//     // document.getElementById('e1').style.color = 'black';
//     // document.getElementById('e2').style.color = 'black';
//     // document.getElementById('e3').style.color = 'black';
//   }
//   if(getScroll() < scrollCount) {
//     document.getElementById('head').style.background = '#5f27cd';
//   }
//   scrollCount = getScroll();
//   // console.log(scrollCount);
// }
