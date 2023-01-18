// In this function, I relied on Osama Al-Zero in making the scroll and w3school in linking the li with his section 

// function to create navbar 
function navbarCreate(){
    // array of li items in navbar 
    var links = ["home", "gallery", "contact","about"];
    // create contaner div of navbar item 
    var navbarDiv = document.createElement("div");
    navbarDiv.setAttribute("id","navbar");

    // create ul 
    var navUl = document.createElement("ul");
    navUl.classList.add("ulClass");

    // create for loop to create li and links 
    for(var i = 0; i < links.length; i++){
        var navLi = document.createElement("li");
        navLi.classList.add("liClass");

        var navA = document.createElement("a");
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
    for(var k = 0; k <links.length; k++){
        var sectionDiv = document.createElement("div");
            sectionDiv.classList.add("landing__container");
            sectionDiv.id = links[k].toLowerCase();
            var title = document.createElement("h2");
            title.innerHTML = links[k];
            var content = document.createElement("p");
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
            document.getElementById("sections").appendChild(sectionDiv);
            if(k % 2 != 0){
                // liArray[k].classList.add("oddSec");
                console.log(sectionDiv);
                sectionDiv.classList.add("oddSec");
            }
    }

    // add click event on links in li 
    var navLinks = document.querySelectorAll("div a");
    for(var j= 0; j < navLinks.length ; j++){
        navLinks[j].addEventListener("click", function(e){
            e.preventDefault();
            var secId = e.target.getAttribute("href");
            document.querySelector(secId).scrollIntoview({
                behavior : "smooth"
            });
        });
    }
   document.getElementById("nav").appendChild(navbarDiv);
};

navbarCreate();

