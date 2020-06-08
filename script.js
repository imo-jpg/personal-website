fontSelector();  
let headerFlag = true;
let elmnt;
let thisId;
let currentId;
startIndex = 1;

function fontSelector() {
  let fonts = ["Germania One", "Abril Fatface", "Astloch", "Ranga", "Righteous", "Shrikhand", "Rubik"];
  let shuffledArray = shuffle(fonts);
  assignFont(shuffledArray);
}

function assignFont(array) {
  links = document.getElementsByClassName("link");
  for(let i = 0; i < links.length; i++) {
    links[i].style.fontFamily = array[i];
  }
};

function shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
};


function showHeader(event) {
  headerFlag =! headerFlag;
  
  if (headerFlag == false) {
    event.currentTarget.parentNode.parentNode.style.height = "100vh";
    event.currentTarget.parentNode.parentNode.classList.add("transition");
  } else {
    event.currentTarget.parentNode.parentNode.style.height = "30px";
    event.currentTarget.parentNode.parentNode.classList.add("transition");
  }
};

function showSection(event) {
  thisClass = event.currentTarget.className.split(' ')[0];
  section = document.getElementById(`${thisClass}`);
  section.style.display="block";
  // siblings = document.querySelectorAll(".project");
  // siblings.forEach(sibling => sibling.style.zIndex="0");
  // section.parentNode.childNodes[0].style.zIndex="0";
  section.style.zIndex="1";
};

function bringToFront(event) {
  nowIndex = ++startIndex;
  event.currentTarget.style.zIndex= `${nowIndex}`;
};

function closeSection(event) {
  event.currentTarget.parentNode.style.display="none";
};

function getId(event) {
  thisId = event.target.id;
  console.log(thisId);
  return thisId;
};

let draggableElements = document.getElementsByClassName("project");

for(let i = 0; i < draggableElements.length; i++){
    dragElement(draggableElements[i]);
};

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {

    // bring the div to the front when dragging
    nowIndex = ++startIndex;
    elmnt.style.zIndex= `${nowIndex}`;

    e = e || window.event;
    e.preventDefault();

    // get the initial cursor position
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;

    // move the element when you move the cursor
    document.onmousemove = elementDrag;
  };

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    // figure out the new cursor position
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    // set the element's new position based on where the cursor is now:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  };

  function closeDragElement() {

    // stop moving the element when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  };

};


