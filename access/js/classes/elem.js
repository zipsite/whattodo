export default class Elem {
    constructor (nameElem) {
        this.fragm = new DocumentFragment();
        this.box = document.createElement("div");
        this.fragm.append(this.box);
        this.box.insertAdjacentHTML('beforeend', this.loadElemSinc(nameElem));
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