/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Replace the n/a with the following:

Tay-Tay*/
document.getElementById("name1").innerHTML = "Tay-Tay";
// document.body.appendChild(name);

/*2. Replace the n/a with the following: 

Project Manager*/
/*var projm= document.getElementById("position2");
projm.innerHTML = "Project Manager";*/

document.getElementById("position2").innerHTML = "Project Manager";


/*3. Replace the n/a with the following:

Concatenation
*/
var ppap= document.getElementById("alias3");
ppap.innerHTML = "Pen"+"Pineapple"+"Apple"+"Pen";


/*4. Replace the n/a for Snoop with the gangsta lorem ipsum*/
var doggy = document.getElementsByClassName("profile")[0];
doggy.innerHTML = "Loremi ipsum dolor sit amet, consectetur adipisicing elit. Dicta nihil voluptatum magnam laborum dolores quas quasi suscipit deserunt assumenda dolorum minus molestiae iusto placeat dolore libero, dignissimos aut, corporis necessitatibus?";




/*5. Relace the n/a for Samuel L Jackson with his lorem ipsum*/
var sammy = document.getElementsByClassName("profile")[2];
sammy.innerHTML = "Loremi ipsum dolor sit amet, consectetur adipisicing elit. Dicta nihil voluptatum magnam laborum dolores quas quasi suscipit deserunt assumenda dolorum minus molestiae iusto placeat dolore libero, dignissimos aut, corporis necessitatibus?";



/*6. Create a div element for Chuck Norris and give it an id of "name7". Inside this div element, give it the contents of "Chuck Norris".

Append this div element to the nameBox div*/
var divElement = document.createElement("div");
divElement.id = "name7";
divElement.innerHTML = "Chuck Norris";
nameBox.appendChild(divElement);
 

/*7. Create a div element for Grimmace and give it an id of "alias8". Inside this div element, give it the contents of "The Purple Monster".

Append this div element to the aliasBox div.*/

var divElementg = document.createElement("div");
divElementg.id = "alias8";
divElementg.innerHTML = "The Purple Monster";
aliasBox.appendChild(divElementg);


//Final Boss"word_wrap": trueH
var meName = document.createElement("div");
meName.id= "name9";
meName.innerHTML="Ernest Tsang";
var mePos = document.createElement("div");
mePos.id= "position9";
mePos.innerHTML="GM/DM/CEO";
var meAlias = document.createElement("div");
meAlias.id= "alias9";
meAlias.innerHTML="InternErn";
var meBio = document.createElement("div");
meBio.id= "bio9";
meBio.innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non enim velit sunt, corporis hic fugiat, totam deleniti, reprehenderit debitis consequuntur ipsum, ut nihil officiis. Laborum repudiandae earum est. Alias, perspiciatis.";
document.getElementsByClassName("block3 col-sm-4")[2].appendChild(meName,mePos);
document.getElementsByClassName("block3 col-sm-4")[2].appendChild(mePos);
document.getElementsByClassName("block3 col-sm-4")[2].appendChild(meAlias);
document.getElementsByClassName("block3 col-sm-4")[2].appendChild(meBio);



