const _ = {
  $: (selector: string, base = document) => base.querySelector(selector),
};

const ul = _.$("ul");
const list = _.$("#list");
const topList = _.$("#top_list");
const fruits = _.$("#fruits_box");

interface ISmartDropDown {
  timer: TimerHandler;
  isDelayed: boolean;
  box: { [key: string]: number };
  init: () => void;
}

const SmartDropDown = function (this: ISmartDropDown) {
  this.timer;
  this.isDelayed = true;
  this.box = {};
  this.init();
};

SmartDropDown.prototype.init = function () {
  ul?.addEventListener("mouseleave", () => {
    clearTimeout(this.timer);
    list?.setAttribute("style", "dipslay: none");
  });

  topList?.addEventListener("mouseover", this.onEvent.bind(this));

  list?.addEventListener("mousemove", this.overEvent.bind(this));
};

SmartDropDown.prototype.refreshList = function () {
  const template = [];
  for (let key in this.box) template.push(key + " : " + this.box[key]);
  if (fruits) fruits.innerHTML = template.join("<br>");
};

SmartDropDown.prototype.onEvent = function () {
  this.timer = setTimeout(() => {
    list?.setAttribute("style", "display: block");
  }, 1000);
};

SmartDropDown.prototype.overEvent = function ({ target }: MouseEvent) {
  const text = (target as HTMLElement)?.innerHTML;
  if (this.isDelayed && (target as HTMLElement).tagName === "LI") {
    if (this.box[text]) this.box[text]++;
    else this.box[text] = 1;
    this.refreshList();
    this.isDelayed = false;
    setTimeout(() => (this.isDelayed = true), 500);
  }
};
new SmartDropDown();
