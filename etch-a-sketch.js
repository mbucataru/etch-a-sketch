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

