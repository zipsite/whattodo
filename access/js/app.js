import {ScreenManager} from "./classes/screen-manager.js";

// let woot = document.getElementById("body");
// 
// let xhr = new webRequest();
// xhr.SendRequest("GET", "/access/layouts/onewindow.html","",handler);
// function handler(Request) {
//     woot.innerHTML = Request.responseText;
// }


let manager = new ScreenManager(document.getElementById("body"));
manager.insert("login-activity");