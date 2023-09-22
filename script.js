// alert("loading");
function addskillfield(){
    // console.log("adding ")
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skillsfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let skillsOb = document.getElementById("skills");
    let skillbuttonOb = document.getElementById("skillbutton");

    skillsOb.insertBefore(newNode,skillbuttonOb);

}

function addprojectsfield(){
    // console.log("adding ")
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("projectsfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    // let newNode1 = document.createElement("textarea");
    // newNode1.classList.add("form-control");
    // newNode1.classList.add("projectlinkfield");
    // newNode1.classList.add("mt-2");
    // newNode1.setAttribute("rows",1);
    // newNode1.setAttribute("placeholder","project link");

    let projectsOb = document.getElementById("projects")
    let projectsbuttonOb = document.getElementById("projectsbutton");

    projectsOb.insertBefore(newNode ,projectsbuttonOb);
    // projectsOb.insertBefore(newNode1 ,projectsbuttonOb);

}

function addworkfield(){
    // console.log("adding ")
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("workfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let workOb = document.getElementById("work");
    let workbuttonOb = document.getElementById("workbutton");

    workOb.insertBefore(newNode, workbuttonOb);

}
// function darkmode(){
    
// }

function generatecv(){
    let namefield = document.getElementById("namefield").value;
    let nameresume = document.getElementById('nameresume');
    nameresume.innerHTML = namefield ;

    //contact
    document.getElementById('phoneresume').innerHTML = document.getElementById("contactfield").value;

    //address
    document.getElementById('addressresume').innerHTML = document.getElementById("addressfield").value;

    //gmail
    document.getElementById('gmailresume').innerHTML = document.getElementById("gmailfield").value;
    //github
    document.getElementById('githubresume').innerHTML = document.getElementById("githubfield").value;
    //linkedin
    document.getElementById('linkedinresume').innerHTML = document.getElementById("LinkedInfield").value;
    //website
    document.getElementById('websiteresume').innerHTML = document.getElementById("websitefield").value;
    //education
    document.getElementById('educationresume').innerHTML = document.getElementById("educationfield").value;
    document.getElementById('educationresume1').innerHTML = document.getElementById("educationfield1").value;



     // skills

     let wes = document.getElementsByClassName("skillsfield");
     let str = "";

     for(let e of wes){
        str = str + `<li> <h4> ${e.value} </h4></li> <br>`;
     }
     document.getElementById('skillsresume').innerHTML = str;

     // projects
     let wes1 = document.getElementsByClassName("projectsfield");
     let str1 = "";
     for(let a of wes1){
        str1 = str1 + `<li> <h4> ${a.value} </h4></li>  <br>`;
     }
     document.getElementById('projectsresume').innerHTML = str1;

     // internship
     let wes2 = document.getElementsByClassName("workfield");
     let str2 = "";
     for(let b of wes2){
        str2 = str2 + `<li> <h4> ${b.value} </h4></li>  <br>`;
     }
     document.getElementById('internshipsresume').innerHTML = str2;

     
    //  hide
    document.getElementById("cv-form").style.display="none";
    document.getElementById("navbar1").style.display="none";
    document.getElementById("Resume").style.display="block";
    document.getElementById("printbutton").style.display="block";
  
    
}
function printcv(){
    window.print();
}

