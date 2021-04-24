let speechRec;
var speak;
var gameState;
var userName;
var x = document.getElementById("demo");

function setup() {
  createCanvas(windowWidth,windowHeight);
    speak = new p5.Speech();
    start = createButton("Start Chatting").position(width/2,height/2)
    start.mousePressed(function (){
    speak.setVoice("Google UK English Male");
    speak.speak("Password please user!");
      gameState = "Password";
  let lang = navigator.language;
  speechRec = new p5.SpeechRec(lang,gotSpeech);
  
  let continuous = true;
  let interim = false;
  speechRec.start(continuous,interim);
  });
}


function gotSpeech(){
  speak.setVoice("Google UK English Male");
  if(speechRec.resultString==="just a rather very intelligent system" && gameState === "Password"){
    speak.speak("You are right Anonymous Sir! Initialized Request")
    console.log(speechRec.resultString);
    gameState = "Initialized";
  }
  else if(speechRec.resultString!="just a rather very intelligent system" && gameState === "Password"){
    speak.speak("No Sir! This isn't it! Sorry!");
  }
  if(gameState === "Initialized"){
    if(speechRec.resultString.includes("I am")===true && speechRec.resultString.includes("good")===false){
      speak.speak(speechRec.resultString.replace("I am","Hello"));
      userName = speechRec.resultString.replace("I am","");
    }

    if(speechRec.resultString.includes("hello")===true){
      speak.speak("Hello User! How do you do");
    }

    if(speechRec.resultString.includes("how are you") || speechRec.resultString.includes("how do you do")){
      speak.speak("I am very fine sir! Thankyou")
    }

    if(speechRec.resultString.includes("good")===true || speechRec.resultString.includes("I am fine")===true || speechRec.resultString.includes("great")===true){
      speak.speak("Happy to see you jolly sir");
    }
   
    else if(speechRec.resultString.includes("my name is")===true){
      speak.speak(speechRec.resultString.replace("my name is","Hi"))
      userName = speechRec.resultString.replace("my name is","");
    }
   
    else if(speechRec.resultString.includes("date")===true){
      let date = new Date();
      speak.speak(date.toDateString().slice(4));
    }

    else if(speechRec.resultString.includes("thankyou")===true){
      speak.speak("You're welcome");
    }

    else if(speechRec.resultString.includes("thank you")===true){
      speak.speak("You're welcome");
    }

    else if(speechRec.resultString.includes("time")===true){
      
      speak.speak("The time is " + hour() + "hours" + minute() + "minutes");
    }

    else if(speechRec.resultString.includes("live")===true && speechRec.resultString.includes("you")===true){
      speak.speak("I live in here, in your device you see. I am always present in my attendance list");
      console.log("I live in here, in your device you see. I am always present in my attendance list");
    }

    else if(speechRec.resultString.includes("live")===true && speechRec.resultString.includes("I")===true){
      speak.speak("I will visit you virtually someday as I am infected by covid 19 and am not allowed to get out of my house that is this device and visit you physically");
      console.log("I will visit you virtually someday as I am infected by covid 19 and am not allowed to get out of my house that is this device and visit you physically");
    }

    else if(speechRec.resultString.includes("joke")){
      var r = Math.round(random(1,9));
      if(r === 1){
        speak.speak("Why did the nurse need a red pen at work?The answer is in case she had to draw blood");
      }
      if(r === 2){
        speak.speak("Why do bees have sticky hair? The answer is because they use honeycombs");
      }
      if(r === 3){
        speak.speak("What did the big flower say to the little one? Hey Bud!");
      }
      if(r === 4){
        speak.speak("What's the best thing about Switzerland? I've no idea but the flag is a big plus");
      }
      if(r === 5){
        speak.speak("Did you hear about the new restaurant named Karma? There isn't any menu but we get what we deserve");
      }
      if(r === 6){
        speak.speak("Did you hear about the actor who fell through the floorboards? He was just going through a stage");
      }
      if(r===7){
        speak.speak("Did you know about the claustrophobic astronaut? He just needed a little space.");
      }
      if(r===8){
        speak.speak("How did the barber win the race? By a short cut");
      }
      if(r===9){
        speak.speak("A man tells the doctor about him being addicted to twitter. The doctor says that he can't help cause he doesn't follow him.");
      }
    }
    else if(speechRec.resultString.includes("who am I") || speechRec.resultString.includes("what is my name")){
      speak.speak("You are" + userName + " right")
    }
    else if(speechRec.resultString.includes("where am I") || speechRec.resultString.includes("coordinates")){
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
      speak.speak("You are at: " + "Latitude " + position.coords.latitude + "and Longitude "+ position.coords.longitude)
    }

    else if(speechRec.resultString.includes("search")){
      speak.speak("Ok Sir! Searching for " + speechRec.resultString.replace("search for",""));

      window.open("http://google.com/search?q="+ speechRec.resultString.replace("search for",""), '_blank')
    }

    else if(speechRec.resultString.includes("birthday")){
      speak.speak("Happy Birthday Sir")
    }

    else if(speechRec.resultString.includes("new project"))

    function showPosition(position) {
      x.innerHTML = "Latitude: " + position.coords.latitude + 
      "<br>Longitude: " + position.coords.longitude;
    }
  }
  }