console.log("This if for set timeOut and setInterval");

// setTimeout --> Allows us to run the function once after the interval of time

// clearTimeout --> Allows us to run the function repeatedly after the interval of time
/*         let i = 0;
                function greet(name, byeText) {
                    console.log("Hello Good Morning " + (i += 1) + " " + name+ " " + byeText)     // Note: i +=1  ==> i = i + 1
                } */

/*         let timeOut = setInterval(greet, 100, "Mohd Saif");
                console.log(timeOut);
        
                clearTimeout(timeOut);
         */
// let intervalId = setInterval(greet, 1000, "Mohd Saif", "Good Night!");
// clearInterval(intervalId);

function displayTime() {
  let time = new Date();
  console.log(time);
  // document.getElementById("time").innerHTML = time;
}

setInterval(displayTime, 1000);

function helloMessage() {
  // document.getElementById("helloText").innerHTML = "You have waited for 5 seconds";
}

setTimeout(helloMessage, 5000);
