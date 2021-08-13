const container = document.getElementById('grid');
const resetButton = document.getElementById('reset');

function buildGrid(size) {
    /**
     * These nested loops will work fine for small numbers, because computers are good
     * at executing these simple calculations quickly, but generally speaking, try to
     * avoid more loops than are needed
     *
     * Talk it out in English as to what's happening here:
     * 1. We have a size param, that defaults to 16 or whatever
     * 2. Start our first for loop, and increment until we're less than / equal to our size (16)
     * 3. Ok I'm on my first iteration (1) of my outer i loop - now what?
     *      a.) We'll start another for loop, and increment until we're less than / equal to our size (16)
     *      b.) Ok I'm on my first iteration (1) of my inner j loop - now what?
     *          i.) Well, let's create a div and give it some CSS, and then append it to our grid!
     *      c.) Cool now what? Well I've finished everything in this first j iteration (1), so let's go back up
     *      d.) Ok now I'm on my second iteration (2) of my inner j loop - now what?
     *          i.) I'm going to repeat the same steps of creating a div, giving it some CSS, and appending it
     *              to my grid container
     *      e.) Cool now what? I'm done, so let's go on to the third iteration (3) of my inner j loop
     *      f.) Repeat 16 times until we meet our size condition (j <= size). Then, once that is done, I'm done
     *          with my inner loop - now what? Well, we gotta go back up to the inner loop, Step 3
     * 4. Ok I've completed the first iteration (1) of my outer i loop - now what?
     * 5. Well, let's start on the second iteration (2) of my outer i loop, which will...
     *    a.) Repeat the inner j loop all over again!
     *
     * Can you think of a way we might achieve this in a single loop?
     */
    for (let i =1; i <= size; i ++) {
        for (let j = 1; j <= size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('gridCell');

            // Can you think of why this may be an unsafe operation?
            container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
            container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
            container.appendChild(cell);
        }
    }

    drawOnGrid();
}

buildGrid(16);

//
/**
 * Nice! You can do this in a one-liner if you want to be fancy and use more modern JS
 *
 * Becomes this: const getRandomColor = () => `#{Math.floor(Math.random() * 16777215).toString(16)}`;
 *
 * But that's kind of hard to read when you're first learning the language
 */
function getRandomColor() {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}


function drawOnGrid() {
    let cells = document.querySelectorAll('.gridCell');

    // Can you thihnk of why this may be an unsafe operation?
    cells.forEach((cell => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = getRandomColor();
        })
    }));
}

// good type checking in here!
function drawNewGrid() {
    let newSize = prompt('How big of a canvas do you want?', '16');

    if (Number.isNaN(newSize) ) {
        alert( " A real, positive number is required.");
        drawNewGrid();
    }

    if (newSize > 100 ) {
        alert( " Try and keep it at 100 maximum. ");
        drawNewGrid();
    }

    return buildGrid(newSize);
}

/**
 * a.) can you think of why this might be an unsafe operation?
 * b.) it would be cool to also reset your background colors on your tiles when you did this
 */
resetButton.onclick = () => {
    /**
     * Any reason why you went with a while loop here instead of
     * an if statement?
     */
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    drawNewGrid();
}
