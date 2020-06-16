function displayClock(){
  var time = new Date();
  var hrs = time.getHours();//0-23
  var mins = time.getMinutes();//0-59
  var secs = time.getSeconds();//0-59
  var session = 'AM';
  if(hrs>12){
    hrs=hrs-12;
    session = 'PM';
  }
  if(hrs==0){
    hrs=12;
  }
  mins = mins<10?'0'+mins:mins;
  secs = secs<10?'0'+secs:secs;
  hrs = hrs<10?'0'+hrs:hrs;
  var time = hrs + ":" + mins + ":" + secs + " "+ session;
  document.getElementById('clock').innerHTML = time;
  setInterval(displayClock,1000);
}
displayClock();
