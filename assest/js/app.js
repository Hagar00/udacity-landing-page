// define global variable 

/* **************** start define navbar variable ***************/ 
var liList;
var aLi;
var itemListDiv;
var ulList;
// create div have ul 
itemListDiv = document.createElement("div");
itemListDiv.setAttribute("id","navbarNav");
// create ul element
ulList = document.createElement("ul");
ulList.classList.add("ulClass");
// create array to store links have key and values 
var liArray = [
    "Home", "gallery","about","contact"
];
var section = document.getElementById("section");

/*********************** end define navbar variable**********************************/


/*
 * Start Helper Functions
 * 
*/
//  function to add hover in li 




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

/**********************  build the nav ********************** */

// append div hav ul into nav in header 
document.getElementById("navbar").appendChild(itemListDiv);
// to create list of li we have need create for loop 
for( let i = 0 ; i < liArray.length; i++ ){
    liList = document.createElement("li"); // create li list 
    liList.classList.add("liClass");
   
    aLi = document.createElement("a"); // create link element 
    aLi.classList.add("linkClass");
    aLi.setAttribute("href","#"+ liArray[i]); // add attribute href to link of section 
    aLi.innerHTML= liArray[i]; // add array to html 
    liList.appendChild(aLi); 
    ulList.appendChild(liList);
    console.log(liList);

    //  function to add hover in li 
    aLi.addEventListener("mouseover", onHover);
    function onHover(e){
        e.target.classList.add("linkHover");
    };

    // function remove hover on li 
    aLi.addEventListener("mouseout", outHover);
    function outHover(e){
        e.target.classList.remove("linkHover");
    };
}
itemListDiv.appendChild(ulList); // append ul to div in nav 

/*************************** end navbar ***********************************/

/* ******************build sections of page *********************************/
// add dynamic sections 
 
for (var j = 0 ; j < liArray.length ; j++){
    var sectionDiv = document.createElement("div");
    sectionDiv.classList.add("landing__container");
    var title = document.createElement("h2");
    title.innerHTML = liArray[j];
    var content = document.createElement("p");
    content.innerHTML= ` this is content of section ${liArray[j]} consectetur adipiscing elit. Morbi fermentum metus faucibus lectus 
                         pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. 
                         Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, 
                         nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus 
                         imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. 
                         Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie
                          semper in tellus. Sed congue et odio sed euismod.
                         Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit,
                          vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor.
                           Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non`;

    sectionDiv.appendChild(title);
    sectionDiv.appendChild(content);
   
    section.appendChild(sectionDiv);
    if(j % 2 != 0){
        // liArray[j].classList.add("oddSec");
        console.log(sectionDiv);
        sectionDiv.classList.add("oddSec");
    }
    // console.log(section);
}
/*************************************** end sections *********************************/


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


