const promise = new Promise((resolve, reject) =>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.npoint.io/de5b79b7fe6d7fcb9b15', true);
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
        testimonialHTML += `<div class="col-6 col-md-3" >
                                <div class="card p-3 border-0 shadow">
                                    <img src="${item.image}">  
                                    <p class="mt-3"> ${item.quotes}</p> 
                                    <p class="text-end"> - ${item.author}</p> 
                                    <p class="text-end"> ${fireMaker(item.rating)}</i></p>
                                </div>
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
        testimonialHTML += '<h2 class="text-center text-white">404 Data Not Found</h2>';
    } else {
        testiFiltered.forEach((item) => {
            testimonialHTML += `<div class="col-6 col-md-3" >
                                    <div class="card p-3 border-0 shadow">
                                        <img src="${item.image}">  
                                        <p class="mt-3"> ${item.quotes}</p> 
                                        <p class="text-end"> - ${item.author}</p> 
                                        <p class="text-end"> ${fireMaker(item.rating)}</i></p>
                                    </div>
                                </div>`;
        });
    };

    document.getElementById("container-testi").innerHTML = testimonialHTML;
};