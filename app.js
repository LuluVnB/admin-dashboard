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
    projectBoxContent.className = "project-box-content";

    const projectContentText = document.createElement("div");
    projectBoxContent.appendChild(projectContentText);
    projectContentText.className = "project-content-text"

    const projectContentIcons = document.createElement("div");
    projectBoxContent.appendChild(projectContentIcons);
    projectContentIcons.className = "project-content-icons"

    const starIcon = document.createElement("img");
    projectContentIcons.appendChild(starIcon);
    starIcon.src = "./icons/star-plus-icon.svg";
    starIcon.style.width = "1.7rem";
    starIcon.style.marginRight = "15px"

    const eyeIcon = document.createElement("img");
    projectContentIcons.appendChild(eyeIcon);
    eyeIcon.src = "./icons/eye-plus-icon.svg";
    eyeIcon.style.width = "1.7rem";
    eyeIcon.style.marginRight = "15px";

    const linkIcon = document.createElement("img");
    projectContentIcons.appendChild(linkIcon);
    linkIcon.src = "./icons/link-icon.svg";
    linkIcon.style.width = "1.7rem";
    linkIcon.style.marginRight = "15px";
}

