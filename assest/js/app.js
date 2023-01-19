// In this function, I relied on Osama Al-Zero in making the scroll and w3school in linking the li with his section 

let navbar = document.getElementById("nav");
// function to create navbar 
function navbarCreate(){
    // array of li items in navbar 
    let links = ["home", "gallery", "contact","about"];
    // create contaner div of navbar item 
    let navbarDiv = document.createElement("div");
    navbarDiv.setAttribute("id","navbar");

    // create ul 
    let navUl = document.createElement("ul");
    navUl.classList.add("ulClass");

    // create for loop to create li and links 
    for(let i = 0; i < links.length; i++){
        let navLi = document.createElement("li");
        navLi.classList.add("liClass");

        let navA = document.createElement("a");
        navA.setAttribute("href","#"+links[i].toLowerCase());
        navA.innerHTML = links[i];
        navA.classList.add("linkClass");

        navLi.appendChild(navA);
        navUl.appendChild(navLi);

        //  function to add hover in li 
        navA.addEventListener("mouseover", onHover);
        function onHover(e){
        e.target.classList.add("linkHover");
        };

        // function remove hover on li 
        navA.addEventListener("mouseout", outHover);
        function outHover(e){
        e.target.classList.remove("linkHover");
        };

    }
    navbarDiv.appendChild(navUl);
 

    // create for loop to create sections 
    for(let k = 0; k <links.length; k++){
        let section = document.createElement("section");
        section.id = links[k].toLowerCase();
        // section.setAttribute("data-nav",  )
        let sectionDiv = document.createElement("div");
            sectionDiv.classList.add("landing__container");
            sectionDiv.id = links[k].toLowerCase();
            let title = document.createElement("h2");
            title.innerHTML = links[k];
            let content = document.createElement("p");
            content.innerHTML= ` this is content of section ${links[k]} consectetur adipiscing elit. Morbi fermentum metus faucibus lectus 
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
            document.getElementById("main").appendChild(section);
            if(k % 2 != 0){
                // liArray[k].classList.add("oddSec");
                console.log(sectionDiv);
                section.classList.add("oddSec");
            }
    }

    // add click event on links in li 
    let navLinks = document.querySelectorAll("div a");
    for(let j= 0; j < navLinks.length ; j++){
        navLinks[j].addEventListener("click", function(e){
            e.preventDefault();
            let secId = e.target.getAttribute("href");
            document.querySelector(secId).scrollIntoview({
                behavior : "smooth"
            });
        });
    }
   navbar.appendChild(navbarDiv);
};

navbarCreate();

/*********************************************************************** */

// function add active class using observing in MDN dec
const observingSec =()=>{
    const observe = new IntersectionObserver(
        function (elements){
            elements.forEach((element)=> {
                console.log(element);
                let activeLink = navbar.querySelector(`[href="#${element.target.id}"]`);
                console.log(activeLink);
                if(element.isIntersecting){
                    element.target.classList.add("your-active-class");
                    activeLink.classList.add("linkActive");
                    location.hash= `${element.target.id}`;
                } else{
                    element.target.classList.remove("your-active-class");
                    activeLink.classList.remove("linkActive");
                }
                
            });
        },
        {
            threshold: 0.7
        }
    );
    return document.querySelectorAll("section").forEach((section)=>{
        observe.observe(section);
    });
   
};

observingSec();

/**********************************************************************************/

// i learned this function in js course in maharatech by eng:neven 
// function to button to top 
let btn = document.getElementById("btn");
window.onscroll = function() {funScroll()};

function funScroll()
{
    if(window.scrollY > 20 ){
        btn.style.display = "block";
    }else{
        btn.style.display = "none";
    };
};

 function funTop (){
    window.scrollTo({
        top :0 ,
        behavior:"smooth"
    });
};
/*********************************************************************************** */