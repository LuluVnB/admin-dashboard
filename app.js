const projectContainer = document.querySelector(".projects");

for(let i = 0; i < 6; i++){
    const projectBox = document.createElement("div");
    projectBox.className = "project-box"
    projectContainer.appendChild(projectBox);
    projectBox.style.backgroundColor = "white"

    const yellowSideBox = document.createElement("div");
    projectBox.appendChild(yellowSideBox);
    yellowSideBox.style.backgroundColor = "orange";
    yellowSideBox.style.borderRadius = "30px"

    const projectBoxContent = document.createElement("div");
    projectBox.appendChild(projectBoxContent);
    
}

