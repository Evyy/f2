let currentQuestion = 0;
let score = 0;
function timedRefresh(timeoutPeriod) {
	setTimeout("location.reload(true);",timeoutPeriod);
}
window.onload = timedRefresh(90000); 
  let timeleft = 90;
  let downloadTimer = setInterval(function(){
  document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  }
}, 1000);
let questions = [
   {
	"question": "What Is BitCoin?",
	"a": "A Coin That Makes Everyone Rich!",
	"b": "A Way For Miners To Get Identified By The Government To Work In Their Organizations",
	"c": "A Virtual Coin That Acts In The Same Way As All Other Coins, but Has No Physical Qualities",
	"d": "Bitcoin Is A CryptoCurrency And Worldwide Payment System. It Is The First Decentralized Digital Currency, As The System Works Without A Central Bank Or Single Administrator",
	"image":"1.jpeg",
	"answer": "d"
   },
   {
	"question": "When Was BitCoins First Post On Facebook?",
	"a": "Yesterday",
	"b": "January 3rd, 2009",
	"c": "July 24th, 2010",
	"d": "Augest 5th, 2009",
	"image":"2.jpeg",
	"answer": "c"
   },
   {
	"question": "When Was BitCoin Created?",
	"a": "2010-01-04 T00:00:00R",
	"b": "2009-01-03 T00:00:00R",
	"c": "2010-01-04 T00:00:00Z",
	"d": "2009-01-03 T00:00:00Z",
	"image":"3.jpeg",
	"answer": "d"
   },
   {
	"question": "Who Finds New BitCoin?",
	"a": "Miners",
	"b": "The Government",
	"c": "Companies Like Amazon",
	"d": "Collecters",
	"image":"4.jpeg",
	"answer": "a"
   },
    {
	"question": "How Many BitCoin Can There Ever Exist?",
	"a": "100,000",
	"b": "50,000,000",
	"c": "100,000,000",
	"d": "21,000,000",
	"image":"5.jpeg",
	"answer": "d"
   },
   {
	"question": "How Is The Price Of BitCoin Determined",
	"a": "Through Supply And Demand Across Many BitCoin Exchange Sources",
	"b": "The Government ",
	"c": "The Scarceity Of BitCoin",
	"d": "The Price Is Tied To That Of USD",
	"image":"6.jpeg",
	"answer": "a"
   },
   {
	"question": "What Is BitCoin The Pioneer Of?",
	"a": "The First Decentralized Digital Currency",
	"b": "The First Crypto Currency",
	"c": "The First Currency To Start With 'b'",
	"d": "The First Currency You Can Track Online",
	"image":"7.jpg",
	"answer": "a"
   },
   {
	"question": "How Are BitCoins Transfered?",
	"a": "Through Banks",
	"b": "Directly Via Person To Person",
	"c": "Through The Government",
	"d": "Exchange Sites",
	"image":"8.png",
	"answer": "b"
   },
    {
	"question": "What Happened To The Fees of Transfering BitCoins?",
	"a": "Increased Drastically",
	"b": "Decreased A Little",
	"c": "Decreased Drasically",
	"d": "Increased A Little",
	"image":"9.jpeg",
	"answer": "c"
   },
    {
	"question": "Where Are Your BitCoins Kept?",
	"a": "Bank Account",
	"b": "The Internet!",
	"c": "In The BitCoin Stock",
	"d": "In A Digital Wallet",
	"image":"10.jpeg",
	"answer": "d"
   },
   {
	"question": "What Can You Purchase With BitCoin?",
	"a": "Only Some Cars",
	"b": "Only Coffee",
	"c": "A and B",
	"d": "Anything",
	"image":"11.jpeg",
	"answer": "d"
   },
	{
	"question": "Who Can Keep Track Of The Transactions?",
	"a": "Only The Inventor Of BitCoin",
	"b": "The Greater Public",
	"c": "The Government ",
	"d": "Only Those Involved",
	"image":"12.jpeg",
	"answer": "b"
   },
{
	"question": "What Type Of Code Does BitCoin Have?",
	"a": "Super Secure(SS)",
	"b": "Key Acess",
	"c": "Open Source",
	"d": "Subscription (You Have To Buy Some BitCoin First)",
	"image":"13.jpeg",
	"answer": "c"
   },
{"question": "How Many BitCoins Are Currently Active?",
	"a": "79%",
	"b": "53%",
	"c": "All Of Them",
	"d": "36%",
	"image":"14.jpeg",
	"answer": "d"
   },
{"question": "By How Much Has The Value Of BitCoin Increased Since 2014?",
	"a": "Over 800%",
	"b": "About 400%",
	"c": "About 600%",
	"d": "Just Shy of 2100%",
	"image":"15.jpeg",
	"answer": "a"
   }

 ];//take off comma at the last one
 
 function loadQuestion() {
	 
	 if (currentQuestion == 0 ){
		 closeLightBox();
	 }
	 
	 //load the image
	 let img = document.getElementById("image");
	 let preLoadImg = new Image();
	 preLoadImg.src = questions[currentQuestion].image;
	  
	 preLoadImg.onload = function (){
		 img.width = this.width;
	 }
	 img.style.maxWidth = "80%";
	 img.src = preLoadImg.src;
	 
    // load the question and answers
  document.getElementById("question").innerHTML = questions[currentQuestion].question;
  document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
	document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
	document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
	document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
 } // loadQuestion
 
 
 function markIt(ans) {
	let message = ""
	let message1 = ""
	
	
	//if the answer is correct
	if (ans == questions[currentQuestion].answer) {
		// add 1 if correct
		score = score + 1;

		document.getElementById("message").style.backgroundColor = "green";
		
		//display score on webpage
		document.getElementById("score").innerHTML = score + " / " + questions.length;
		
		message = "Good Job :) !!! Your score is  " + score + " / " + questions.length;
		
	}//if end
	else{
		//make light box red when wrong
		document.getElementById("message").style.backgroundColor = "red";
		message = "Oh no! You got that wrong, here's your score " + score + " / " + questions.length;
	}//else end
	
	// show the light box
	//move to the next question
	currentQuestion = currentQuestion + 1; 
	if (currentQuestion >= questions.length){
		if (score >= 5 ){
		message = "You have done great! Your final score is "+ score + " / " + questions.length + "! If you want to try again click the link at the top!";
    document.getElementById("message").style.backgroundColor = "green";
    }
    else {
      message = "Ur bad! Your final score is " + score + " / " + questions.length + "! If you want to try again click the link in the top left corner!";
      document.getElementById("message").style.backgroundColor = "red";
      }
	} 
  else {
	   loadQuestion();
	}
   
	// show the light box
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
 }  // markIt

 function closeLightBox(){
	 document.getElementById("lightbox").style.display = "none";
 }

 if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}            
 
 
 
 
 
 
 
 
