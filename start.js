
// icon js
let btn = document.querySelector('.btnt');
      btn.addEventListener('click', function(){
          document.querySelector('.input').classList.toggle('inc');
          btn.classList.toggle('close');
      });

// icon js

// bg image bg color
let body = document.querySelector('body');
function colorOne(){
  document.getElementById('colorOne').onclick = function (){
    body.style.backgroundColor = '#0cbaba';
    body.style.backgroundImage = `linear-gradient(315deg, #0cbaba 0%, #380036 74%)`;
  };
}
function colorTwo(){
  document.getElementById('colorTwo').onclick = function (){
    body.style.backgroundColor = '#6b0f1a';
    body.style.backgroundImage = `linear-gradient(315deg, #6b0f1a 0%, #b91372 74%)`;
  };
}
function colorThree(){
  document.getElementById('colorThree').onclick = function (){
    body.style.backgroundColor = '#63d471';
    body.style.backgroundImage = `linear-gradient(315deg, #63d471 0%, #233329 74%)`;
  };
}

function colorFour(){
  document.getElementById('colorFour').onclick = function (){
    body.style.backgroundColor = '#2a2a72';
    body.style.backgroundImage = ` linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)`;
  };
}

function colorFive(){
  document.getElementById('colorFive').onclick = function (){
    body.style.backgroundColor = '#3bb78f';
    body.style.backgroundImage = ` linear-gradient(315deg, #3bb78f 0%, #0bab64 74%)`;
  };
}

function colorSix(){
  document.getElementById('colorSix').onclick = function (){
    body.style.backgroundColor = '#42378f';
    body.style.backgroundImage = `linear-gradient(315deg, #42378f 0%, #f53844 74%)`;
  };
}


// bg image bg color

const inputText = document.getElementById('inputText');

const addBtn = document.getElementById('addBtn');
const ulList = document.getElementById('ulList');

addBtn.addEventListener('click', addList);

function addList(){
  let textInput = document.querySelector('#inputText').value;
  let list = document.createElement('li');
  list.textContent = textInput;
  // let btnLi = document.createElement('button');
  // btnLi.className = 'libtn';
  // btnLi.classList.add('delete')
  
  let delLi = document.createElement('i');
  delLi.className = 'la la-trash';
  delLi.classList.add('delete');
  // btnLi.appendChild(delLi);
  list.appendChild(delLi);
  // list.appendChild(btnLi)
 
  // console.log(list);
  if(textInput !== ""){
 
     ulList.appendChild(list);
    inputText.value = "";
    
  } 
   else{
      alert('input bosh');
  }
}
ulList.addEventListener('click', removeItem);
function removeItem(e){
  if(e.target.classList.contains('delete')){
   if(confirm('Rostanmi')){
    let li = e.target.parentElement;
    li.classList.add('active');
    ulList.removeChild(li);
    console.log(li);
   }
     
  }
}
let filter = document.querySelector('.input');
filter.addEventListener('keyup',filterItem);
function filterItem(e){
  let texxt = e.target.value.toLowerCase();
  let itemms = ulList.getElementsByTagName('li');
  Array.from(itemms).forEach(function (itm){
    let itemName = itm.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(texxt) != -1 ){
        itm.style.display = 'flex';
    }
    else{
        itm.style.display = 'none';
    }
  });
}