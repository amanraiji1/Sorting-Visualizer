const container = document.querySelector("#data-container");
const dropMenu = document.querySelector("#navbarDropdownMenuLink");

var delay;
function myFunction() {
  var x = document.getElementById("mySlider");
  delay = x.value;
}

// function to generate bars
function generatebars(num = 30) {
  for (let i = 0; i < num; i += 1) {
    const value = Math.floor(Math.random() * 100) + 1;

    // To create element "div"
    const bar = document.createElement("div");

    // To add class "bar" to "div"
    bar.classList.add("bar");

    // Provide height to the bar
    bar.style.height = `${value * 3}px`;

    // Translate the bar towards positive X axis
    bar.style.transform = `translateX(${i * 30}px)`;

    // To create element "label"
    const barLabel = document.createElement("label");

    // To add class "bar_id" to "label"
    barLabel.classList.add("bar_id");

    // Assign value to "label"
    barLabel.innerHTML = value;

    // Append "Label" to "div"
    bar.appendChild(barLabel);

    // Append "div" to "data-container div"
    container.appendChild(bar);
  }
}

// -------------------------------- Selection Sort ----------------------------------------------------------------------

// asynchronous function to perform "Selection Sort"
async function SelectionSort() {
  dropMenu.innerText = "Selection Sort";

  let bars = document.querySelectorAll(".bar");
  // Assign 0 to min_idx
  var min_idx = 0;
  for (var i = 0; i < bars.length; i += 1) {
    // Assign i to min_idx
    min_idx = i;

    // Provide darkblue color to the ith bar
    bars[i].style.backgroundColor = "darkblue";
    for (var j = i + 1; j < bars.length; j += 1) {
      // Provide red color to the jth bar
      bars[j].style.backgroundColor = "red";

      // To pause the execution of code for 300 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );

      // To store the integer value of jth bar to var1
      var val1 = Number(bars[j].childNodes[0].innerHTML);

      // To store the integer value of (min_idx)th bar to var2
      var val2 = Number(bars[min_idx].childNodes[0].innerHTML);

      // Compare val1 & val2
      if (val1 < val2) {
        if (min_idx !== i) {
          // Provide skyblue color to the (min-idx)th bar
          bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";
        }
        min_idx = j;
      } else {
        // Provide skyblue color to the jth bar
        bars[j].style.backgroundColor = " rgb(24, 190, 255)";
      }
    }

    // To swap ith and (min_idx)th bar
    var temp1 = bars[min_idx].style.height;
    var temp2 = bars[min_idx].childNodes[0].innerText;
    bars[min_idx].style.height = bars[i].style.height;
    bars[i].style.height = temp1;
    bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
    bars[i].childNodes[0].innerText = temp2;

    // To pause the execution of code for 300 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );

    // Provide skyblue color to the (min-idx)th bar
    bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";

    // Provide lightgreen color to the ith bar
    bars[i].style.backgroundColor = "rgb(49, 226, 13)";
  }

  disable("#fff");
}

// -------------------------------- Bubble Sort --------------------------------------------------------------------------------------

// Promise to swap two blocks
function swap(el1, el2) {
  return new Promise((resolve) => {
    // For exchanging styles of two blocks
    var temp = el1.style.transform;
    el1.style.transform = el2.style.transform;
    el2.style.transform = temp;

    window.requestAnimationFrame(function () {
      // For waiting for .25 sec
      setTimeout(() => {
        container.insertBefore(el2, el1);
        resolve();
      }, delay);
    });
  });
}

async function BubbleSort() {
  dropMenu.innerText = "Bubble Sort";
  let bars = document.querySelectorAll(".bar");

  for (var i = 0; i < bars.length; i += 1) {
    for (var j = 0; j < bars.length - i - 1; j += 1) {
      bars[j].style.backgroundColor = "red";
      bars[j + 1].style.backgroundColor = "red";

      // To pause the execution of code for delay
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );

      // To store the integer value of jth bar to var1
      var val1 = Number(bars[j].childNodes[0].innerHTML);

      var val2 = Number(bars[j + 1].childNodes[0].innerHTML);

      // Compare val1 & val2
      if (val1 > val2) {
        await swap(bars[j], bars[j + 1]);
        bars = document.querySelectorAll(".bar");
      }
      bars[j].style.backgroundColor = "darkblue";
      bars[j + 1].style.backgroundColor = "darkblue";
    }

    bars[bars.length - i - 1].style.backgroundColor = "rgb(49, 226, 13)";
  }

  disable("#fff");
}

// -------------------------------- Insertion Sort --------------------------------------------------------------------------------------

async function InsertionSort() {
  dropMenu.innerText = "Insertion Sort";
  let bars = document.querySelectorAll(".bar");

  // Provide lightgreen colour to 0th bar
  bars[0].style.backgroundColor = " rgb(49, 226, 13)";
  for (var i = 1; i < bars.length; i += 1) {
    // Assign i-1 to j
    var j = i - 1;

    // To store the integer value of ith bar to key
    var key = Number(bars[i].childNodes[0].innerHTML);

    // To store the ith bar height to height
    var height = bars[i].style.height;

    //Provide darkblue color to the ith bar
    bars[i].style.backgroundColor = "darkblue";

    // To pause the execution of code for 600 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );

    // For placing selected element at its correct position
    while (j >= 0 && Number(bars[j].childNodes[0].innerHTML) > key) {
      // Provide darkblue color to the jth bar
      bars[j].style.backgroundColor = "darkblue";

      // For placing jth element over (j+1)th element
      bars[j + 1].style.height = bars[j].style.height;
      bars[j + 1].childNodes[0].innerText = bars[j].childNodes[0].innerText;

      // Assign j-1 to j
      j = j - 1;

      // To pause the execution of code for 600 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );

      // Provide lightgreen color to the sorted part
      for (var k = i; k >= 0; k--) {
        bars[k].style.backgroundColor = " rgb(49, 226, 13)";
      }
    }

    // Placing the selected element to its correct position
    bars[j + 1].style.height = height;
    bars[j + 1].childNodes[0].innerHTML = key;

    // To pause the execution of code for 600 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );

    // Provide light green color to the ith bar
    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }

  disable("#fff");
}

// Call "generatebars" function
generatebars();

// function to generate new random array
function generate() {
  window.location.reload();
}

// function to disable the button
function disable(colour = "#808080") {
  // To disable the button "Generate New Array"
  document.getElementById("Button1").classList.toggle("disabled");
  document.getElementById("Button1").style.color = colour;

  // To disable the button "Selection Sort"
  document.getElementById("Button2").classList.toggle("disabled");
  document.getElementById("Button2").style.color = colour;

  // To disable the button "Bubble Sort"
  document.getElementById("Button3").classList.toggle("disabled");
  document.getElementById("Button3").style.color = colour;

  // To disable the button "Insertion Sort" after final(sorted)
  document.getElementById("Button4").classList.toggle("disabled");
  document.getElementById("Button4").style.color = colour;
}
