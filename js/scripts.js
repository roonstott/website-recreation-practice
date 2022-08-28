window.addEventListener("load", function() {
  //remove the existing h1
  let h1 = document.querySelector("h1");
  h1.remove();
  //create a new h1 and assign it to a variable
  const h1Element = document.createElement("h1");
  //give a string value to the new h1
  h1Element.append("Webpage Recreation Practice");
  //define a body variable where we can put the new h1
  const bod = document.querySelector("body");
  //put the new h1 
  bod.append(h1Element);
  //do the same thing over again, create new elements with variable names and then append them into the bod element
  const pOne = document.createElement("p");
  pOne.append("The HTML of this webpage was created with JavaScript.");
  bod.append(pOne);
  //next one: we had to set attributes for "src" "alt" and "style" to make the image work. Just putting in a string does not make the attributes work. 
  const img = document.createElement("img");
  img.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900")
  img.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
  img.setAttribute("style", "width:50%");
  bod.append(img);

  //birdH1.innerText("Facts about the Multicolored Tanager");
  const birdH1 = document.createElement("h1")
  birdH1.append("Facts about the Multicolored Tanager");
  bod.append(birdH1);

  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const ul = document.createElement("ul");
  li1.append("It is endemic to the mountains of Colombia.");
  li2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
  ul.prepend(li1);
  ul.append(li2)
  bod.append(ul);

  const h2 = document.createElement("h2");
  h2.append("Source");
  bod.append(h2);

  const anchor = document.createElement("anchor");
  anchor.setAttribute("href", "https://en.wikipedia.org/wiki/Multicoloured_tanager");
  anchor.innerText = "Wikipedia";
  bod.append(anchor)

});


//const h1Element = document.querySelector("h1");
//h1Element.remove();


//const h1Element = document.createElement("h1");