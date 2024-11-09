// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
const h1 = document.createElement("h1"); //this is how to create a h1
h1.innerHTML = "DOM Manipulation";
mainEl.appendChild(h1);
mainEl.classList.add("flex-ctr");
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");
for (let i = 0; i < menuLinks.length; i++) {
  const a = document.createElement("a"); //this is how to create a element
  a.setAttribute("href", menuLinks[i].href); //for each a element, set an attribute of href and it is equal to href value of menuLinks
  a.textContent = menuLinks[i].text; //for each menuLink object, taking the text key value and setting to text content of the a tag
  topMenuEl.append(a); //adding the tag to the top menu element, adds to parent's child list
}
// 1.  Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.getElementById("sub-menu");

// 2.  Set the height subMenuEl element to be "100%".
subMenuEl.style.height = "100%";

// 3.  Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom
// property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// 4.  Add the class of flex-around to the subMenuEl element
subMenuEl.classList.add("flex-around");

// 1.  Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";

// 2.  Set the CSS top property of subMenuEl to the value of 0
subMenuEl.style.top = "0";

// 1.  Select and cache the all of the <a> elements inside of topMenuEl in a variable
// named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll("a");
console.log(topMenuLinks);

// 2.  Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener("click", aHandler);

// The first line of code of the event listener function should call the event
// object's preventDefault() method.
function aHandler(event) {
  if (event.target.localName !== "a") {
    return; // The second line of code of the function should immediately return if the element clicked was not an <a> element.
  } else {
    event.preventDefault();
    console.log(event.target.textContent); // Log the content of the <a> to verify the handler is working.
  }
}
// All events load in refresh
document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < topMenuLinks.length; i++) {
    const clicked = topMenuLinks[i];
    console.log(clicked);

    clicked.addEventListener("click", function (e) {
      if (!e.target.matches("a")) return;
      //e.target targets a tag
      console.log(e.target);
      // 1.  The event listener should add the active class to the <a> element that was clicked, unless it was
      // already active, in which case it should remove it.
      e.target.classList.toggle("active"); //Toggle
      topMenuLinks.forEach((link) => {
        console.log(link.subLinks);
        if (link !== e.target) {
          link.classList.remove("active"); // 2.  The event listener should remove the active class from each other <a> element
          // in topMenuLinks - whether the active class exists or not.
        }
        //1. Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
        // a. If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for
        // ABOUT), set the CSS top property of subMenuEl to 100%.
        // b.Otherwise, set the CSS top property of subMenuEl to 0.
        const clickedLink = menuLinks.find(
          (link) => link.text == e.target.textContent
        );
        console.log(clickedLink.subLinks);
        if (
          e.target.classList.contains("active") &&
          e.target.innerHTML !== "about"
        ) {
          subMenuEl.style.top = "100%";
          buildSubMenu(clickedLink.subLinks);
        } else {
          subMenuEl.style.top = "0%";
        }
      });

      function buildSubMenu(subLinks) {
        console.log(subLinks);
        // const subMenuEl = document.querySelectorAll("sub-menu")
        console.log(subMenuEl);
        // 1. Clear the current contents of subMenuEl.
        subMenuEl.innerHTML = "";
        // 2. Iterate over the subLinks array, passed as an argument, and for each "link" object:
        subLinks.forEach((link) => {
          // a. Create an <a> element.
          const a = document.createElement("a");
          // b. Add an href attribute to the <a>, with the value set by the href property of the "link" object.
          a.setAttribute("href", link.href);
          // c. Set the element's content to the value of the text property of the "link" object.
          a.textContent = link.text;
          // d. Append the new element to the subMenuEl.
          subMenuEl.appendChild(a);
        });
      }
      subMenuEl.addEventListener("click", function (e) {
        e.preventDefault();
        if (!e.target.matches("a")) {
          return;
        }
        console.log(e.target);
        subMenuEl.style.top = "0%";
        topMenuLinks.forEach((link) => {
          link.classList.remove("active");
        });
        h1.textContent = `${e.target.textContent}`;
      });
    });
  }
});
