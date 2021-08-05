const container = document.querySelector('.grid');


function buildGrid(size) {

    for(let i =1; i <= size; i ++) {

        for(let j = 1; j <=size; j++) {

        const cell = document.createElement('div');
        cell.classList.add('gridCell');

        container.style.gridTemplateColumns = `repeat(${size}, 3rem)`;
        container.style.gridTemplateRows = `repeat(${size}, 3rem)`;

        container.appendChild(cell);      
        
        }
    }    
}

buildGrid(16);

function getRandomColor() {
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

(function drawOnGrid() {

    

    const cells = document.querySelectorAll('.gridCell');
	    cells.forEach((cell => {
		    cell.addEventListener('mouseover', () => {		
			    cell.style.backgroundColor = getRandomColor();         
		    })
		
	    }));

})();

(function clearBoard() {

    const resetBoard = document.querySelector('#reset');
    const cells = document.querySelectorAll('.gridCell');
    
    resetBoard.addEventListener('click', () => {
        cells.forEach((cell => {
		    	
			    cell.style.backgroundColor = '';         
		    
		
	    }));
        
        
    })
})();
    


