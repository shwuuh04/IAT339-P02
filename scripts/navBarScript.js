"use strict";

// SOURCES:
// https://www.w3schools.com/jsref/met_element_addeventlistener.asp
// https://www.w3schools.com/jsref/prop_node_attributes.asp
// https://www.w3schools.com/jsref/met_element_removeattribute.asp

// get ref to the navbar list
const navList = document.getElementById("scrollToNav");

// updating the active link by adding/removing the aria-current attribute
navList.addEventListener("click", (event) => {

    // set target to the navbar element being clicked on, ignoring non-navbar elements
    const link = event.target.closest("a.navBarButtons");
    if (!link || !navList.contains(link)) {
    return;
    }
    // prevent site from jumping to the top of the page (basically cancels out the empty a href="")
    event.preventDefault();

    // get element that is currently active
    const currentLink = navList.querySelector('[aria-current="page"]');

    // if element is the logo, set home to active
    if (link.id === "logo") {
        currentLink.removeAttribute("aria-current");
        const homeLink = navList.querySelector('[id="home"]');
        homeLink.setAttribute("aria-current", "page");
        return;
    }

    // if element is not logo, set the currentLink to inactive and the new element to active
    if (currentLink) {
    currentLink.removeAttribute("aria-current");
    }
    link.setAttribute("aria-current", "page");
});