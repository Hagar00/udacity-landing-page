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
/******************* end navbar ************************/

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


