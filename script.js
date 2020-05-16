var wakeuptime = 6;
var noon = 12;
var lunchtime = 1;
var naptime = lunchtime + 1;
var partytime;
var evening = 16;
var night=21;

// Getting it to show the current time on the page
var showCurrentTime = function(){
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "https://i.ytimg.com/vi/Rh8fI5uIxYs/maxresdefault.jpg";

  var timeEventJS = document.getElementById("timeEvent");
  var lolcatImageJS = document.getElementById('lolcatImage');
  
  if (time == partytime)
  {
    image = "https://www.keepinspiring.me/wp-content/uploads/2019/10/inspirational-quotes-8-min-1024x770.jpg";
    messageText = "Inspire yourself !";
  }
  else if (time == wakeuptime)
  {
    image = "https://www.irishtimes.com/polopoly_fs/1.3679604.1540825440!/image/image.jpg_gen/derivatives/box_620_330/image.jpg";
    messageText = "Wake up!";
  }
  else if (time == lunchtime)
  {
    image = "https://www.watscooking.com/images/dish/large/16.jpg";
    messageText = "Let's have some lunch!";
  }
  else if (time == naptime)
  {
    image = "https://www.wakefit.co/blog/wp-content/uploads/2019/11/Nap-Time-752x440.jpg";
    messageText = "Sleep tight!";
  }
  else if (time < noon)
  {
    image = "https://c4.wallpaperflare.com/wallpaper/891/658/492/coffee-morning-sunrise-dawn-wallpaper-preview.jpg";
    messageText = "Good morning!";
  }
  else if (time == evening)
  {
    image="https://live.staticflickr.com/65535/48140304231_fc60ba1525_b.jpg";
    messageText = "Good evening!";
  }
  else if(time==night){
      image="https://usercontent1.hubstatic.com/14557668.jpg";
      messageText="Good night !";
  }
    
  else {
    image = "https://blog.mass.gov/wp-content/uploads/legacy-images/conversations/6a010536512758970b0192ab449395970d-pi.jpg";
    messageText = "Good afternoon!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  lolcatImage.src = image;
  
  showCurrentTime();
};

updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Inspired..!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Inspire !";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 


// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);