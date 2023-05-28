let hamburgerIsOpen = false;

function openHam() {
    let hamContainer = document.getElementById('hamburger-container');

    if (!hamburgerIsOpen) {
        console.log("hamburger container")
        hamContainer.style.display = 'block';
        hamburgerIsOpen = true; 
    } else {
        hamContainer.style.display = 'none';
        hamburgerIsOpen = false;
    }
}  