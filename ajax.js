const promise = new Promise((resolve, reject) =>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.npoint.io/d5fb8390ff47fa08f5af', true);
    // console.log(xhr);

    xhr.onload = () =>{
        if (xhr.status === 200){
            resolve(JSON.parse(xhr.response));
        } else{
            reject("Error loading data.")
        };
    };

    xhr.onerror = () =>{
        reject("Network error");
    };

    xhr.send();
});

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

async function allTesti(){
    const response = await promise;

    let testimonialHTML = "";
    response.forEach(function(item){
        testimonialHTML += `<div class="testi-item" > 
                                <img class="testi-img" src="${item.image}">  
                                <p class="quote"> ${item.quotes}</p> 
                                <p class="author"> - ${item.author}</p> 
                                <p class="rating"> ${fireMaker(item.rating)}</i></p>
                            </div>`;
    });

    document.getElementById("container-testi").innerHTML = testimonialHTML;
} 

allTesti();

async function filterTesti(rating) {
    const response = await promise;

    const testiFiltered = response.filter((item)=>{
        return item.rating === rating;
    });

    let testimonialHTML = "";

    if (testiFiltered.length === 0) {
        testimonialHTML += '<h2>404 Data Not Found</h2>';
    } else {
        testiFiltered.forEach((item) => {
            testimonialHTML += `<div class="testi-item" > 
                                    <img class="testi-img" src="${item.image}">  
                                    <p class="quote"> ${item.quotes}</p> 
                                    <p class="author"> - ${item.author}</p> 
                                    <p class="rating"> ${fireMaker(item.rating)}</i></p>
                                </div>`;
        });
    };

    document.getElementById("container-testi").innerHTML = testimonialHTML;
};