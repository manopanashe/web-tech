var tweetinput;
var tweets = [''];
var maxTweetLenght = 20;
function main(){
    tweetinput = document.getElementById("tweetInput");
    tweetinput.addEventListener('input',HandleInput);
    document.addEventListener('keydown',HandleBodyKeyDown);

}
function HandleBodyKeyDown(e){
    console.log(e.code)
    
    if(e.code == 'enter' && (tweetinput.value.length > 1 && tweetinput.value.length <= maxTweetLenght)){
        tweeets.push(tweetinput.value);
        console.log('tweets')
    }
    var tweetTXTlist = "";
     var i=0;
    for(i=0; i < tweets.length; i++){
        tweetTXTlist += "<p>" + tweets[i] + "</p>";
    }
    document.getElementById('tweetsTxt').innerHTML = tweetTXTlist;

}
function HandleInput(){
    var length = tweetinput.value.length;
    var TweetLengthTXT =  document.getElementById('TweetLengthTxt');
   TweetLengthTXT.innerHTML = length;
   if(length >= maxTweetLenght ){
     TweetLengthTXT.style.color = 'red';
   }
   else{
       TweetLengthTXT.style.color = 'black';
   }
   
}

