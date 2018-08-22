var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'Images/MyStinks2.png') {
      myImage.setAttribute ('src','Images/MyStinks3.png');
    } else {
      myImage.setAttribute ('src','Images/MyStinks2.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = ' Welcome to Stinks webpage, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome Back, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}