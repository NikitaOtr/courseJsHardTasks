'use strict';
function DomElement(selector = '.block', height = 100, width = 100, bg = 'white', fontSize = '16px') {
    this.selector = selector; 
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}
DomElement.prototype.bildElement = function() {
    const block = document.createElement('div');
    block.textContent = 'Hello world!!!';
    if (this.selector.startsWith('.')) {block.classList.add(this.selector.slice(1));}
    if (this.selector.startsWith('#')) {block.id = this.selector.slice(1);}
    block.style.cssText = 'background: ' + this.bg;
    block.style.cssText += 'height: ' + this.height + 'px';
    block.style.cssText += 'width: ' + this.width + 'px';
    block.style.cssText += 'font-size: ' + this.fontSize + 'px';
    return block;
};

const div1 = new DomElement('#selc', 500, 600, 'red', 70);
document.body.append(div1.bildElement());

const div2 = new DomElement('.div', 60, 60, 'green', 15);
document.body.append( div2.bildElement());