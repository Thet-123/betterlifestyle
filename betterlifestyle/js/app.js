//UI

//UI
const btns = document.querySelector('.btns');
const btnprimary = document.getElementById('btnprimary');
 

 btnprimary.addEventListener('click',()=>{
 	console.log('hay');

 	btns.classList.toggle('show');
 	
 });

 // UI


const container = document.querySelector('.conn');


// console.log(empties);
//DRAG START
btnprimary.addEventListener('dragstart',dragstart);

//DRAG START
btnprimary.addEventListener('dragend',dragend);

//DRAG START
function dragstart() {
	console.log('drag start is working');

		// var style = window.getComputedStyle(event.target, null);
		// var str = (parseInt(style.getPropertyValue("left")) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top")) - event.clientY) + event.target.id;

	// this.className += " hold";

	// setTimeout(()=>{
	// 	this.className = "invisible";
	// },0);

	// this.classList.add('hold');
}

// empties.forEach(empty=>{
// 	// console.log(empty);

// 	empty.addEventListener('dragover',dragover);
// 	empty.addEventListener('dragenter',dragenter);
// 	empty.addEventListener('dragleave',dragleave);
// 	empty.addEventListener('drop',dragdrop);

// });

for(const con of container){
	con.addEventListener('dragover',dragover);
	con.addEventListener('dragenter',dragenter);
	con.addEventListener('dragleave',dragleave);
	con.addEventListener('drop',dragdrop);
}







//DRAG END
function dragend() {
	console.log('drag end is working');

	// this.className = "fill";
}

function dragover(e){
	console.log('drag over');
	e.preventDefault();

}

function dragenter(e){
	// console.log('drag enter');
	e.preventDefault();

	// this.className += " hovered"; 
}
function dragleave(){
	// console.log('drag leave');
	// e.preventDefault();


	// this.className = "empty";
}
function dragdrop(){
	// console.log('drag drop');



	// this.className = "empty";
	// this.append(picdiv);
}





