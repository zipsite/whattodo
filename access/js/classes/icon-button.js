export default class Button {
    constructor (nameElem) {
        this.fragm = new DocumentFragment();
        this.elem = document.createElement("div");
        this.fragm.append(this.elem);
        this.elem.insertAdjacentHTML('beforeend', this.loadElemSinc(nameElem));
        this.placeholder = this.fragm.getElementById("placeholder-btn");
    }

    setDisplayText (text) {
        this.placeholder.innerText = text;
    }

    loadElemSinc (layoutName) {
        var request = new XMLHttpRequest();
        request.open('GET', `/access/layouts/${layoutName}.html`, false);  // `false` makes the request synchronous
        request.send(null);
        if (request.status === 200) {
            return request.responseText;
        }
    }

}