// Write your code here!

//Old code from phase 1:
//const main = document.getElementById('main');
//main.remove();
//const newHeader = document.createElement('h1');
//newHeader.setAttribute('id','victory');
//newHeader.innerHTML = "KIMMI is the champion";
//document.head.appendChild(element);



const main = document.querySelector('main');
main.remove();

const newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerHTML = "KIMMI is the champion";
document.body.appendChild(newHeader);