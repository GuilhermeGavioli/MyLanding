//animations on load
window.onload =() =>{
    const main = document.querySelector('.title-and-text-main-container')
    const borderDivEffect = document.querySelector('.div-border-effect-on-load')

    
    borderDivEffect.style.width = '100%';
    borderDivEffect.style.opacity = '100%';
    
    const main2form = document.querySelector('.main2-content')
    main.style.opacity = '100%'
    main.style.marginRight = '0'

    main2form.style.marginLeft = '0';
    main2form.style.opacity = '100%';
}






// G SPINNIN' ANIMATION
const secondLogoLetter = document.getElementById('second-g-logo-letter');
setInterval(() => {
    runGAnimation();
    console.log('run')
    setTimeout(() => {
        stopGAnimation();
        console.log('stop')
    }, 550);
}, 8600);

function runGAnimation(){
    secondLogoLetter.style.animation = "0.55s letterSpin ease-in-out";
}

function stopGAnimation(){
    secondLogoLetter.style.animation = "none";
}




let isContactButtonClickable = true;
let contactButton = document.getElementById("contact-btn2");
contactButton.addEventListener("click", e => {
    e.preventDefault();
    const RANDOMNUMBERGENERATED = generateRandomNumber(1600,2100);


    const nameField = document.getElementById('name-field');
    const messageField = document.getElementById('message-field');
    console.log(nameField.value)
    if (nameField.value == "")  return nameField.setAttribute("placeholder","Empty Field");
    if (messageField.value == "")  return messageField.setAttribute("placeholder","Empty Field");
 
    

    if (isContactButtonClickable == false) return;
    isContactButtonClickable = false;
    e.target.innerText = "";
    const loadingDiv = document.createElement('div');
    loadingDiv.className = "rounded-loading";
    e.target.append(loadingDiv);

    setTimeout(()=>{
        isContactButtonClickable = true;
        e.target.lastChild.remove();
        e.target.innerText = "Send"; 
    },RANDOMNUMBERGENERATED) // generate random number between 1200 & 2000

    setTimeout(()=>{
        showAlert();
    }, RANDOMNUMBERGENERATED)
})

function generateRandomNumber(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function showAlert(){
    const alertDiv = document.getElementById("alert-container")
    alertDiv.style.top = "25px"
    setTimeout(()=>{
        alertDiv.style.top = "-250px"
    },2100)
}

let downloadButton = document.querySelector(".download-btn");
let isDownloadButtonClickable = true;
downloadButton.addEventListener('click', (e) => {
    e.preventDefault();
    const RANDOMNUMBERGENERATED = generateRandomNumber(1600,2100);
    if (isDownloadButtonClickable == false) return;

    isDownloadButtonClickable = false;
    const loadingDiv = document.createElement('div');
    loadingDiv.className = "rounded-loading";
    e.target.append(loadingDiv);

    setTimeout(()=>{
        isDownloadButtonClickable = true;
        e.target.lastChild.remove();
        // e.target.innerText = "Download cv"; 
    },RANDOMNUMBERGENERATED) // generate random number between 1200 & 2000

})


//update header state
window.onscroll = (e) => {
    if (window.scrollY >= 0 && window.scrollY < 80){
        clearHeaderItemsStylingProperties();
        document.querySelector('.fa-sharp').style.backgroundColor = 'rgb(55,55,55)';
        document.querySelector('.fa-sharp').style.color = 'white';
    } else if (window.scrollY >= 80){
        clearHeaderItemsStylingProperties();
        document.querySelector('.fa-sharp').style.backgroundColor = 'white';
        document.querySelector('.fa-sharp').style.color = 'rgb(50,50,50)';
    }
    if (window.scrollY >= 80 && window.scrollY < 840){
        clearHeaderItemsStylingProperties();
        document.getElementById('about-header-link').style.backgroundColor = 'rgb(55,55,55)';
        document.getElementById('about-header-link').style.color = 'white';
        const about = document.querySelector('.about')
        about.style.opacity = '100%'
        about.style.marginRight = '0';
        const aboutTextsAndButton = document.querySelector('.about-me-text-and-btn-container')
        aboutTextsAndButton.style.opacity = '100%';
      
    }
    if (window.scrollY >= 841  && window.scrollY < 1600){
        clearHeaderItemsStylingProperties();
        document.getElementById('skills-header-link').style.backgroundColor = 'rgb(55,55,55)';
        document.getElementById('skills-header-link').style.color = 'white';
    }
    if (window.scrollY >= 1601 && window.scrollY < 2150){
        clearHeaderItemsStylingProperties();
        document.getElementById('projects-header-link').style.backgroundColor = 'rgb(55,55,55)';
        document.getElementById('projects-header-link').style.color = 'white';
    }
    if (window.scrollY >= 2150) {
        clearHeaderItemsStylingProperties();
        document.getElementById('contact-header-link').style.backgroundColor = 'rgb(55,55,55)';
        document.getElementById('contact-header-link').style.color = 'white';
    }
    
    
    console.log(window.scrollY); 
}
function clearHeaderItemsStylingProperties(){
    let headerSectionsContainer = Array.from(document.querySelector('.header-sections-container').children);
    for (let i = 0; i < headerSectionsContainer.length; i++){
        headerSectionsContainer[i].style.backgroundColor = 'unset';
        headerSectionsContainer[i].style.color = 'black';
    }
}