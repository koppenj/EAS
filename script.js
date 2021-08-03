const container = document.querySelector('.grid');

function drawGrid(size) {

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
drawGrid(16);

const cells = document.querySelectorAll('.gridCell');
	cells.forEach((cell => {
		cell.addEventListener('mouseover', () => {		
			cell.classList.add('hover');
		})
		
	}));

    


