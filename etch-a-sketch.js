const container = document.querySelector(".container");

const totalSize = 16 * 16;

for (let i = 0; i < totalSize; i++)
{
    const newTile = document.createElement("div");
    newTile.classList.add("tile");
    container.appendChild(newTile);
}

const tiles = document.querySelectorAll(".tile");

function draw(e)
{
    this.style.backgroundColor = "blue";
}

tiles.forEach(tile => tile.addEventListener('mouseover', draw));

const button = document.querySelector("button");

function createNewGrid (e)
{
    let newSize = prompt("How many boxes per side?");
    if (newSize <= 100)
    {
        while (container.firstChild)
        {
            container.removeChild(container.lastChild);
        }
        let proportion = 100 / newSize;

        for (let i = 0; i < newSize * newSize; i++)
        {
            const newTile = document.createElement("div");
            newTile.classList.add("tile");
            newTile.style.width = `${proportion}%`;
            newTile.style.height = `${proportion}%`;
            container.appendChild(newTile);
        }  

        const newTiles = document.querySelectorAll(".tile");

        newTiles.forEach(tile => tile.addEventListener('mouseover', draw));
    }
    
    
    
    // tiles.forEach(tile => tile.style.backgroundColor = "grey");

}

button.addEventListener('click', createNewGrid);

