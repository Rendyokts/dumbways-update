function formAlert() {
    let projectName = document.getElementById("inputProject").value;
    let startdate = document.getElementById("startdate").value;
    let enddate = document.getElementById("enddate").value;
    let desc = document.getElementById("desc").value;
    let image = document.getElementById("inputImg").files;

    if (projectName == "") {
        return alert("Please input project name");
    } else if (startdate == "") {
        return alert("Please input start date");
    } else if (enddate == "") {
        return alert("Please input end date");
    } else if (desc == "") {
        return alert("Please describe the project details");
    } else if (image == "") {
        return alert("Please attach an image project");
    } 
};

let dataProject = [];

function addProject(event) {
        event.preventDefault();
        let projectName = document.getElementById("inputProject").value;
        let desc = document.getElementById("desc").value;
        let images = document.getElementById("inputImg").files;
        
        function timeDistance() {
            let startdate = new Date(document.getElementById("startdate").value);
            let enddate = new Date(document.getElementById("enddate").value); 
            let diff = new Date(enddate) - new Date(startdate);
            let days = Math.floor(diff / (1000 * 3600 * 24));
            let weeks = Math.floor(diff / (1000 * 3600 * 24 * 7))
            let months = Math.floor(diff / (1000 * 3600 * 24 * 30)); 
            let years = Math.floor(diff / (1000 * 3600 * 24 * 30 * 12));  

            if (years == 1) {
                return `${years} year`
            } else if (years > 0) {
                return `${years} years`  
            } else if ( months == 1) {
                return `${months} month`
            } else if (months > 0) {
                return `${months} months`
            } else if (weeks == 1) {
                return `${weeks} week`
            } else if (weeks > 0) {
                return `${weeks} weeks`
            } else if (days == 1) {
                return `${days} day` 
            } else if (days > 0) { 
                return `${days} days`
            }
        };

        let difference = timeDistance()

        const jsIcon = `<i class="fa-brands fa-js"></i>`;
        const pythonIcon = `<i class="fa-brands fa-python"></i>`;
        const linuxIcon = `<i class="fa-brands fa-linux"></i>`;
        const javaIcon = `<i class="fa-brands fa-java"></i>`; 

        let jsDet = document.getElementById("javaScript").checked ? jsIcon : "";
        let pythonDet = document.getElementById("python").checked ? pythonIcon : "";
        let linuxDet = document.getElementById("linux").checked ? linuxIcon : "";
        let javaDet = document.getElementById("java").checked ? javaIcon : ""; 

        images = URL.createObjectURL(images[0]);
        console.log(images);

        let projectPreview = { 
            projectName,
            difference,
            desc, 
            jsDet,
            pythonDet,
            linuxDet,
            javaDet,
            images,
        };

        dataProject.push(projectPreview);
        pushProject();
    
}

function pushProject() {
    document.getElementById("contents").innerHTML = "";

    for (let i = 0; i < dataProject.length; i++) { 
        document.getElementById("contents").innerHTML += `
        
        <div class="item-grid">
            <img src="${dataProject[i].images}">
            <h3 style="cursor:pointer">${dataProject[i].projectName}</h3>
            <h5>Duration: ${dataProject[i].difference} </h5>
                <div class="previewInfo">
                <p>${dataProject[i].desc}</p>
                <div class="previewTech">
                    ${dataProject[i].jsDet} 
                    ${dataProject[i].pythonDet} 
                    ${dataProject[i].linuxDet}
                    ${dataProject[i].javaDet}
                </div>
                    <div class="itemBtn">
                        <button>edit</button>
                        <button>delete</button>
                    </div>
                </div>
        </div>
        `
    };
};
