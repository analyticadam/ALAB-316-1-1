// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor="var(--main-bg)"
const h1 = document.createElement("h1")//this is how to create a h1
h1.innerHTML="DOM Manipulation"
mainEl.appendChild(h1)
mainEl.classList.add("flex-ctr")
const topMenuEl = document.getElementById("top-menu")
topMenuEl.style.height="100%"
topMenuEl.style.backgroundColor="var(--top-menu-bg)"
topMenuEl.classList.add("flex-around")
for (let i = 0; i < menuLinks.length; i++) {
    const a = document.createElement("a")//this is how to create a element
    a.setAttribute("href",menuLinks[i].href)//for each a element, set an attribute of href and it is equal to href value of menuLinks
    a.textContent=menuLinks[i].text //for each menuLink object, taking the text key value and setting to text content of the a tag
    topMenuEl.append(a)//adding the tag to the top menu element, adds to parent's child list
}
