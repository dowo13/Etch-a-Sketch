// create a grid of divs
const container = document.querySelector('#container');

let p = prompt('choose your grid size', 'i.e. 20 will make a 20x20 grid');

//using a template literal to  dynamically generate rows and columns for the grid 

container.style.gridTemplateColumns = `repeat(${p},1fr)`;

//create a reset button 
let btn = document.getElementById('btn');
let btn1 = document.createElement('button');
btn1.classList.add('btn-1');
let t = document.createTextNode('click to reset grid');
btn1.appendChild(t);
btn.appendChild(btn1);

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
   newDivs.style.width =  800/p + 'px';
   newDivs.style.height = 800/p + 'px';


   container.appendChild(newDivs);
   newDivs.addEventListener('mouseover', () => {
      newDivs.style.backgroundColor = getCol();
   })

   
   
   //darken shade on each mouse pass.
         newDivs.addEventListener('mouseover', ()=>{
            
            
      var opacity = newDivs.style.opacity;
      newDivs.style.opacity = opacity ? (parseFloat(opacity) + 0.1) : 0.2; 
})
}


function clearGrid(){

   location.reload();
}

btn1.addEventListener('click', clearGrid);


console.log(screen.width, screen.height);

//create random colour generator with hex colours
function getCol(){

    return '#' + Math.random().toString(16).slice(2,8);
    
   }


