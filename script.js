// Modal stuff
const contactBtn = document.getElementById("contactBtn");
const modal = document.getElementById("contactModal");
contactBtn.addEventListener("click", () => {
    modal.showModal();
})
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.close();
    }
});

// For random project button
const projLinks = [
    'https://github.com/jzhou077/Brainwave-Reader',
    'https://github.com/jzhou077/MASLAB-Team3-2026',
    'https://github.com/jzhou077/Soundboard',
    'https://github.com/jzhou077/FtcRobotController22279-2024-25',
    'https://github.com/jzhou077/CSFinalProject',
    'https://jzhou077.github.io/Sign-ify/'
];
const randProjBtn = document.getElementById("randProj");
randProjBtn.addEventListener("click", (e) => {
    const randIndex = Math.floor(Math.random() * projLinks.length);
    window.open(projLinks[randIndex], '_blank').focus();
});

// For project carousel
// Didn't include all projects from project links
const projInfo = [
    {
        title: "Brainwave Reader",
        desc: "A .NET application that reads and processes streamed bluetooth data from a Neurosky chip.",
        link: projLinks[0],
        img: "images/neurosky.webp"
    },
    {
        title: "Autonomous Drive",
        desc: "Autonomous movement software using pure pursuit algorithm for differential drive.",
        link: projLinks[1],
        img: "images/diffdrive.jpg"
    },
    {
        title: "Soundboard",
        desc: "Java Swing soundboard application that can record and play sounds.",
        link: projLinks[2],
        img: "images/soundboard.png"
    },
    {
        title: "FTC Robot Software",
        desc: "Software for autonomous scoring, computer vision, and control systems of FTC robot.",
        link: projLinks[3],
        img: "images/ftc.png"
    }
];

getWindow = (arr, startIndex, size) => {
    const res = [];
    for (let i = 0; i < size; i++) {
        const currIndex = (startIndex + i) % arr.length;
        res.push(arr[currIndex])
    }

    return res
}

let currStart = 0
let carouselIndices = [0, 1, 2, 3]
let carouselWindow = [0, 1, 2]

const carousel = document.getElementById("carousel");
const projCards = carousel.querySelectorAll(".card")
const prevProjBtn = document.getElementById("prevProjBtn");

prevProjBtn.addEventListener("click", (e) => {
    currStart = (((currStart - 1) % carouselIndices.length) + carouselIndices.length) % carouselIndices.length
    carouselWindow = getWindow(carouselIndices, currStart, 3)
    for (let i = 0; i < carouselWindow.length; i++) {
        let title = projCards[i].querySelector(".cardTitle");
        let desc = projCards[i].querySelector(".cardDesc");
        let img = projCards[i].querySelector(".cardImg");

        title.textContent = projInfo[carouselWindow[i]].title;
        desc.textContent = projInfo[carouselWindow[i]].desc;
        img.src = projInfo[carouselWindow[i]].img;
    }
});

const nextProjBtn = document.getElementById("nextProjBtn");
nextProjBtn.addEventListener("click", (e) => {
    currStart = (currStart + 1) % carouselIndices.length
    carouselWindow = getWindow(carouselIndices, currStart, 3)
    for (let i = 0; i < carouselWindow.length; i++) {
        let title = projCards[i].querySelector(".cardTitle");
        let desc = projCards[i].querySelector(".cardDesc");
        let img = projCards[i].querySelector(".cardImg");

        title.textContent = projInfo[carouselWindow[i]].title;
        desc.textContent = projInfo[carouselWindow[i]].desc;
        img.src = projInfo[carouselWindow[i]].img;
    }
});

// Scroll animations
const createObserver = (ele, translateProperty, targetPosition, step) => {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            
        })
    });
};