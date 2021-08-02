const container = document.getElementById('grid');
const fragment = document.createDocumentFragment();

let rows = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P" ];
let columns = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p" ];

for(let i = 0; i < rows.length; i ++ ) {
    
    let row = document.createElement('div');
    row.innerText = rows[i];
    row.className = "row";
    
    

    container.appendChild(row);
    
}




