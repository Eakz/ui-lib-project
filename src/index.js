import Tooltip from "./eakzit-ui/tooltip";
import Dropdown from "./eakzit-ui/dropdown";
import Tabs from "./eakzit-ui/tabs";
import Snackbar from "./eakzit-ui/snackbar";
import TypeWriter from "./eakzit-ui/typewriter";

// create a tooltip
const tooltip = new Tooltip(document.querySelector(".tooltip"));
tooltip.init();
//create dropdowns
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
    const instance = new Dropdown(dropdown);
    instance.init();
});
//create tabs
const tabs = new Tabs(document.querySelector(".tabs"));
tabs.init();

// create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector("button");
button.addEventListener("click", () => {
    snackbar.show("you clicked me :)");
});
// Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init typewriter app
function init() {
    const txtElement = document.querySelector(".txt-type");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}