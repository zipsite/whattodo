import ScreenManager from "./classes/screen-manager.js";

// let woot = document.getElementById("body");
// 
// let xhr = new webRequest();
// xhr.SendRequest("GET", "/access/layouts/onewindow.html","",handler);
// function handler(Request) {
//     woot.innerHTML = Request.responseText;
// }


window.Manager = new ScreenManager(document.getElementById("body"));
Manager.insert("btn-bar-activity");
Manager.parentnode.prepend(Manager.elem);