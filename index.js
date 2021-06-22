(function() {
  'use strict';

  // YOUR CODE HERE

})();

(function() {
  'use strict';
// Retrieve Stoplight Elements //
//place all of the elements into a variable
  let stop = document.getElementById("stopButton");
  let stopBulb = document.getElementById("stopLight");
  let slow = document.getElementById("slowButton");
  let slowBulb = document.getElementById("slowLight");
  let go = document.getElementById("goButton");
  let goBulb = document.getElementById("goLight");

  // Event Listener Toggle For When Stop Button Is Clicked //
  stop.addEventListener("click", function() {
    // Grabs Red Light In CSS//
    stopBulb.classList.toggle('stop')
  })

  // Event Listener Toggle For When Slow Button Is Clicked //
  slow.addEventListener("click", function() {
    // Orange Light //
    slowBulb.classList.toggle('slow')
  })

  // Event Listener Toggle For When Go Button Is Clicked //
  go.addEventListener("click", function() {
    // Green Light //
    goBulb.classList.toggle('go')
  });

// - When a user's mouse enters a button, log `"Entered <textContent> button"` to the console.
//With the arrow function: 
// const buttonMouseLeave = (event) => {
//   console.log(`Left ${event.target.textContent} button`);
// };
  const buttonMouseEnter = function(event){
    console.log(`Entered ${event.target.textContent} button`);
  };

// - When a user's mouse leaves a button, log `"Left <textContent> button"` to the console.
  const buttonMouseLeave = function(event){
    console.log(`Left ${event.target.textContent} button`);
  };

// Adding EventListener To Buttons //
  stopButton.addEventListener('mouseenter', buttonMouseEnter);
  slowButton.addEventListener('mouseenter', buttonMouseEnter);
  goButton.addEventListener('mouseenter', buttonMouseEnter);

  stopButton.addEventListener('mouseleave', buttonMouseLeave);
  slowButton.addEventListener('mouseleave', buttonMouseLeave);
  goButton.addEventListener('mouseleave', buttonMouseLeave);

// Retrieving Control ID For Bulbs //
  const controls = document.getElementById('controls');

  controls.addEventListener('click', (event) => {
    if (event.target === controls) {
      return;
    }

    let status;

    if (event.target === stopButton) {
      

      if (stopLight.classList.contains('stop')) {
        status = 'on';
      }
      else {
        status = 'off';
      }
    }
    // Conditional Ternary Operators For Bulb On/Off Status //
    else if (event.target === slowButton) {
      status = slowLight.classList.contains('slow') ? 'on' : 'off';
    }
    else {
      status = goLight.classList.contains('go') ? 'on' : 'off';
    }
    // Console Logging Bulb Status //
    console.log(`${event.target.textContent} bulb ${status}`);
  });
})();
