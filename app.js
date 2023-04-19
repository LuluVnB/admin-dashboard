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

const text1 = document.querySelector("body > div.main > div.article > div.projects > div:nth-child(1) > div.project-box-content > div.project-content-text");
text1.className = "text1";
text1Contentdiv = document.createElement("div");
text1Contentp = document.createElement("p");
text1Contentdiv.textContent = "Super Cool Project";
text1Contentp.textContent = "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet";
text1Contentp.style.fontWeight = "100";
text1.appendChild(text1Contentdiv);
text1.appendChild(text1Contentp);

const text2 = document.querySelector("body > div.main > div.article > div.projects > div:nth-child(2) > div.project-box-content > div.project-content-text");
text2.className = "text2";
text2Contentdiv = document.createElement("div");
text2Contentp = document.createElement("p");
text2Contentdiv.textContent = "Less Cool Project";
text2Contentp.textContent = "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet";
text2Contentp.style.fontWeight = "100";
text2.appendChild(text2Contentdiv);
text2.appendChild(text2Contentp);

const text3 = document.querySelector("body > div.main > div.article > div.projects > div:nth-child(3) > div.project-box-content > div.project-content-text");
text3.className = "text3";
text3Contentdiv = document.createElement("div");
text3Contentp = document.createElement("p");
text3Contentdiv.textContent = "Impossible App";
text3Contentp.textContent = "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet";
text3Contentp.style.fontWeight = "100";
text3.appendChild(text3Contentdiv);
text3.appendChild(text3Contentp);

const text4 = document.querySelector("body > div.main > div.article > div.projects > div:nth-child(4) > div.project-box-content > div.project-content-text");
text4.className = "text4";
text4Contentdiv = document.createElement("div");
text4Contentp = document.createElement("p");
text4Contentdiv.textContent = "Easy Peasy App";
text4Contentp.textContent = "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet";
text4Contentp.style.fontWeight = "100";
text4.appendChild(text4Contentdiv);
text4.appendChild(text4Contentp);

const text5 = document.querySelector("body > div.main > div.article > div.projects > div:nth-child(5) > div.project-box-content > div.project-content-text");
text5.className = "text5";
text5Contentdiv = document.createElement("div");
text5Contentp = document.createElement("p");
text5Contentdiv.textContent = "Ad Blocker";
text5Contentp.textContent = "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet";
text5Contentp.style.fontWeight = "100";
text5.appendChild(text5Contentdiv);
text5.appendChild(text5Contentp);

const text6 = document.querySelector("body > div.main > div.article > div.projects > div:nth-child(6) > div.project-box-content > div.project-content-text");
text6.className = "text6";
text6Contentdiv = document.createElement("div");
text6Contentp = document.createElement("p");
text6Contentdiv.textContent = "Money Maker";
text6Contentp.textContent = "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet";
text6Contentp.style.fontWeight = "100";
text6.appendChild(text6Contentdiv);
text6.appendChild(text6Contentp);



