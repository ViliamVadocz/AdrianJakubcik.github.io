/** This is a debug message that tells me wether or not my javascript was loaded, this debug message can be checked in developer tools in chrome under the tab named console
 * 
 * Difficulty: Easy
 */
console.log("Javascript Loaded!");

/** Here I'm trying to select a specific element (in this case it is the navigation button) from my html file using its id(identifier) which is unique through-out the document 
 * 
 * Difficulty: Easy
 */
const menuBtn = document.getElementById("nav-btn");
const menuBtnImg = document.getElementById('menu-btn-img');

var original_attribute_src = menuBtnImg.getAttribute('src');
var parsed_dir = Parse_Url(window.location.pathname, 2);

if (parsed_dir == "sk")
    var exit_img_src = "../images/icons/close.png";
else
    var exit_img_src = "images/icons/close.png";

/**
 * 
 * @param {*} url Url that should be parsed
 * @param {*} index Part to be returned
 */
function Parse_Url(url, index) {
    return url.substring(url.lastIndexOf("/") - index, url.lastIndexOf("/"));
}

/** The same as above only now I'm trying to select a different element (in this case it's the menu itself) 
 * 
 * Difficulty: Easy
 */
const NavMenuDesk = document.getElementById('nav-desk');
const NavMenu = document.getElementById('Navigation');

/** Adding an Event Listener for an action (in my case it's the click on a button) done on my object, and passing a function that should be carried out when the event occurs.
 * 
 * Difficulty: Medium
 */
menuBtn.addEventListener("click", toggle_menu, false);

/** The same as above but this time I'm actually listening when a browser is being resized. So whenever you extend or shrink your Internet Browser this event will fire up, again completing a function that I've passed into the event.
 * 
 * Difficulty: Medium
 */
window.addEventListener("resize", check_resize, false);

/** Function that shows and hides our menu on mobile devices
 * 
 * Difficulty: Harder
 * @description What this function does to achieve the effect of hiding and showing our menu after clicking a button on a mobile device, 
 * is that it toggles (either adds or removes depends on wether or not the object already has the class) class that shows or hides our element.
 * Yeah, blur effect is also added using JavaScript and it's powerful events. 
 */
function toggle_menu() {
    if (menuBtnImg.getAttribute('src') == original_attribute_src)
        menuBtnImg.setAttribute('src', exit_img_src);
    else
        menuBtnImg.setAttribute('src', original_attribute_src);
    document.querySelector('.content').classList.toggle('blur'); /** Here I add blur effect to background when menu is visible, thus making human eye more focused on the menu rather than on the content in the background */
}

/** Function that checks the browser size whenever it is resized and evaluates the following statements
 * 
 * Difficulty: Harder
 * @description This function is crucial to get rid of annoying bugs that can occur when transitioning from mobile viewport to desktop viewport. 
 * Such as when you leave your menu open on a mobile viewport and you extend your browser to desktop viewport the blur effect will still be active, and that's a big NO NO!
 */
function check_resize() {
    if (window.innerWidth >= 670) {
        if (document.querySelector('.content').classList.contains('blur')) {
            document.querySelector('.content').classList.remove('blur');
        }
        if (menuBtnImg.getAttribute('src') == exit_img_src) {
            menuBtnImg.setAttribute('src', original_attribute_src);
        }
        if (window.getComputedStyle(NavMenu).display == "none" || window.getComputedStyle(NavMenu).display == "block") {
            NavMenu.style.display = "flex";
            resetMenu();
        } else {
            return;
        }
    } else if (window.innerWidth < 670) {
        if (window.getComputedStyle(NavMenu).display == "flex") {
            NavMenu.style.display = "none";
        }
    }
}

function resetMenu() {
    const left = document.querySelector('.left');
    const language_drop = document.querySelector('.language-dropdown');
    const search = document.querySelector('.search-drop');
    const title_cont = document.querySelector('.title');
    const logo_cont = document.querySelector('.logo');
    const logo = document.getElementById('logo');
    const title = document.getElementById('title');

    console.log("Resetting the menu now!");
    left.classList.remove('amber');
    search.classList.remove('hidden');
    language_drop.classList.remove('no-display');
    title.classList.remove('title-open-nav');
    logo.classList.remove('logo-img-open-nav');
    logo_cont.classList.remove('logo-open-nav');
    title_cont.classList.remove('title-cont-open-nav');
    menuBtn.classList.remove('active-nav-btn');
}