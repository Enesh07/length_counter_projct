
const calculateCharacter = () =>{
 
let tweet = prompt("write your tweet?");
let tweetCount = tweet.length;//that explain this code
let tweetLeft = 150-tweetCount ;
console.log(`You have written ${tweetCount} characters , you have ${tweetLeft} characters remaining . `);
alert("your tweet total");
}

// Invoke the function when button is clicked
btn.addEventListener('click', calculateCharacter);






