console.log('hello!!!!!!!')
//  var startPosition = 126; 
//             var tID; //we will use this variable to clear the setInterval()
//             function stopAnimate() {
//                 clearInterval(tID);
//             } //end of stopAnimate()
            
//             function animateScript() {
//                 var position = 126; //start position for the image slicer
//                 const interval = 200; //100 ms of interval for the setInterval()
//                 const diff = 126;
//                 tID = setInterval (() => {
//                     document.getElementById("image").style.backgroundPosition = `-${position}px 0px`; //we use the ES6 template literal to insert the variable "position"
//                     if (position < 252)  { //ammount of animations multiplied by size
//                         position = position + diff;
//                     } else { //we increment the position by 256 each time
//                         position = 126; 
//                     } //reset the position to 256px, once position exceeds 1536px
//                 }, interval); //end of setInterval
//             } //end of animateScript()
        
//     // ============================================================= //
//     // ============================================================= //
//     // ============================================================= //
        
//     var h1 = document.getElementsByTagName('h1')[0],
//         start = document.getElementById('start'),
//         stop = document.getElementById('stop'),
//         clear = document.getElementById('clear'),
//         milliseconds = 0, seconds = 0, minutes = 0, hours = 0,
//         t,
//         Lap = document.getElementById('lap'),
//         Laps = document.getElementById('laps'),
//         lastLap = {   hours: 0, minutes: 0, seconds: 0, milliseconds: 0 };
    
//     function add() {
//         milliseconds++
//         if(milliseconds >= 100) {
//             milliseconds = 0;
//             seconds++;
//             if (seconds >= 60) {
//                 seconds = 0;
//                 minutes++;
//                 if (minutes >= 60) {
//                     minutes = 0;
//                     hours++;
//                 }
//             } 
//         }

//         h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + 
//                          (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + 
//                          (seconds > 9 ? seconds : "0" + seconds) + "." + 
//                          (milliseconds > 9 ? milliseconds : "0" + milliseconds);
    
//         timer();
//     }
    
//     function timer() {
//         t = setTimeout(add, 9) ;
//     }
    
//     /* Start button */
//     start.onclick = function() {
//         console.log('TIMER START!!!');
//         timer();
//         animateScript();
     
//     }
    
//     /* Stop button */
//     stop.onclick = function() {
//         console.log('TIMER STOP!');
//         clearTimeout(t);
//         stopAnimate();
        
//     }
    
//     /* Clear button */
//     clear.onclick = function() {
//         console.log('TIMER RESET!');
//         Laps.innerHTML = '';
//         h1.textContent = "00:00:00.00";
        
//         milliseconds = 0; seconds = 0; minutes = 0; hours = 0;
//     }
//     /* Lap Button*/ 
    

//     Lap.onclick = function() {
      
//       var lapMilliseconds = milliseconds - lastLap.milliseconds,
//           lapSeconds = seconds - lastLap.seconds,
//           lapMinutes = minutes - lastLap.minutes,
//           lapHours = hours - lastLap.hours;
      
//       lastLap = {
//         hours: hours,
//         minutes: minutes,
//         seconds: seconds,
//         milliseconds: milliseconds
//       };
        
//     Laps.innerHTML += "<li>" + 
//       leftPad(lapHours) + ":" + 
//       leftPad(lapMinutes) + ":" + 
//       leftPad(lapSeconds) + "." + 
//       leftPad(lapMilliseconds) + "</li>" 
//     }
    
//     function leftPad(value) {
        
//       return value < 10 ? ('0' + value) : value;
//     }
  