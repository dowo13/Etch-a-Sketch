//create parent container for etch-a-sketch project
const parentContainer = document.getElementById('parent-container');


// create a grid of divs and append to parent container
const container = document.querySelector('#container');
parentContainer.appendChild(container);

//append button to parent conatiner
let btn = document.getElementById('btn');
parentContainer.appendChild(btn);


const p = prompt('choose your grid size', 'i.e. 20 will make a 20x20 grid');

//using a template literal edxpression/tagged template to  dynamically generate rows and columns for the grid 
container.style.gridTemplateColumns = `repeat(${p},1fr)`;

//create a reset button 
//let btn = document.getElementById('btn');
let btn1 = document.createElement('button');
btn1.classList.add('btn-1');
let t = document.createTextNode('click to reset grid');
btn1.appendChild(t);
btn.appendChild(btn1);

//create a button for random colour sketch
let tName = document.getElementsByTagName('div')[0];
let buttonDiv = document.createElement('div');
buttonDiv.classList.add('ran-col');
let newButton = document.createElement('button');
newButton.classList.add('new-button');
let btex = document.createTextNode('click for random colour pad');
newButton.appendChild(btex);
buttonDiv.appendChild(newButton);
tName.appendChild(buttonDiv);

//create button to switch back to normal color
let buttonDiv1 = document.createElement('div');
buttonDiv1.classList.add('grey-scale');
let newButton1 = document.createElement('button');
newButton1.classList.add('new-but1');
let tnode1 = document.createTextNode('click to use grey-scale ink');
newButton1.appendChild(tnode1);
buttonDiv1.appendChild(newButton1);
tName.appendChild(buttonDiv1);

//nested for loop to make rows and columns for grid

for (let i = 0; i < p; i++) {
   for (let j = 0; j < p; j++) {
      makeDivs();
      let area = p * p;
      //  p = 600/p;
      console.log(p);
      console.log(area);
   }
}

function makeDivs() {

 
   let newDivs = document.createElement('div');
   newDivs.classList.add('grid-item');
   newDivs.style.width =  650/p + 'px';
   newDivs.style.height = 650/p + 'px';


   container.appendChild(newDivs);
   newDivs.addEventListener('mouseover', () => {
      newDivs.style.backgroundColor = 'black';
})

//random color button event
   newButton.addEventListener('click', ()=>{

      newDivs.addEventListener('mouseover', () => {
         newDivs.style.backgroundColor = getCol();
   })
 })

 //grey-scale button event
   newButton1.addEventListener('click', ()=>{

      newDivs.addEventListener('mouseover', () => {
         newDivs.style.backgroundColor = 'black';
   })
})

   
   //darken shade on each mouse pass.
         newDivs.addEventListener('mouseover', ()=>{
            
            
      var opacity = newDivs.style.opacity;
      newDivs.style.opacity = opacity ? (parseFloat(opacity) + 0.1) : 0.2; 
})
}

//grid reset function
function clearGrid(){

   return location.reload();
}

btn1.addEventListener('click', clearGrid);


console.log(screen.width, screen.height);

//create random colour generator with hex colours
function getCol(){

    return '#' + Math.random().toString(16).slice(2,8);
    
   }


