const testimonialData = [
    {
        author : "A Bagas",
        quotes : '"Boleehhhh"',
        image  : "img/bolehhh.jpg",
        rating : 5,
    },
    {
        author : "Teteh",
        quotes : '"aja aja ada"',
        image  : "img/ajaajaada.jpg",
        rating : 4,
    },
    {
        author : "A Arkan",
        quotes : '"Jumatan Pak Bagas?"',
        image  : "img/panjang2orangbaik.jpg",
        rating : 3,
    },
    {
        author : "A Rofi",
        quotes : '"panjang panjang orang baik"',
        image  : "img/yaudahh.jpg",
        rating : 2,
    },
    {
        author : "A Bagas",
        quotes : '"LAH AING"',
        image  : "img/bolehhh.jpg",
        rating : 2,
    }
]

function fireMaker(rating){

    if(rating=== 1){
        return `<i class="fa-solid fa-fire"></i>`;
    } else if (rating === 2){
        return `<i class="fa-solid fa-fire"><i class="fa-solid fa-fire"></i></i>`;
    } else if(rating === 3){
        return `<i class="fa-solid fa-fire"><i class="fa-solid fa-fire"></i><i class="fa-solid fa-fire"></i>`;
    } else if(rating === 4){
        return `<i class="fa-solid fa-fire"><i class="fa-solid fa-fire"></i><i class="fa-solid fa-fire"></i><i class="fa-solid fa-fire"></i></i>`;
    } else if(rating === 5){
        return `<i class="fa-solid fa-fire"><i class="fa-solid fa-fire"></i><i class="fa-solid fa-fire"></i><i class="fa-solid fa-fire"></i><i class="fa-solid fa-fire"></i>`;
    }
}

function allTesti() {
    let testimonialHTML = "";

    testimonialData.forEach(function(item) {
        testimonialHTML += `<div class="testi-item" > 
        <img class="testi-img" src="${item.image}" alt="person">  
        <p class="quote"> ${item.quotes}</p> 
        <p class="author"> - ${item.author}</p> 
        <p class="rating"> ${fireMaker(item.rating)}</i></p>
        </div>`; 
    });

    document.getElementById("container-testi").innerHTML = testimonialHTML
}

allTesti();

function filterTesti(rating){
    let testimonialHTML = "";

    let testiFiltered = testimonialData.filter(function (item){
        return item.rating === rating;
    });

    if (testiFiltered.length === 0) {
        testimonialHTML += `<h2 style="text-allign:center">404 Data Not Found</h2>`
    } else { testiFiltered.forEach(function(item) {
        testimonialHTML += `<div class="testi-item" > 
                                    <img class="testi-img" src="${item.image}" alt="person">  
                                    <p class="quote"> ${item.quotes}</p> 
                                    <p class="author"> - ${item.author}</p> 
                                    <p class="rating"> ${fireMaker(item.rating)}</i></p>
                            </div>`;
        });
    }; 

    document.getElementById("container-testi").innerHTML = testimonialHTML;
};