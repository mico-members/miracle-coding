interface IHTMLElement extends HTMLElement {
  checked: boolean;
  value?: string;
}

const _ = {
  createEl: function (tag: keyof HTMLElementTagNameMap, base = document) {
    return base.createElement(tag);
  },

  $: function (selector: string, base: HTMLElement = document as unknown as HTMLElement): IHTMLElement | null {
    return base.querySelector(selector);
  },
};

class Model {
  addText(targetNode: HTMLElement, input: string | Node) {
    const textBox = _.createEl("div");
    textBox.classList.add("text");
    textBox.append(input);
    targetNode.append(textBox);
  }

  isEmpty(input: string) {
    return input.replace(/ /g, "").length === 0;
  }

  deleteEvent(event: Event) {
    const parent = (event.target as HTMLElement)?.parentNode;
    parent?.parentNode?.removeChild(parent);
  }

  deleteCheckedEvent() {
    const list: NodeListOf<HTMLElement> = document.querySelectorAll(".toDo");
    list.forEach((element) => {
      if (_.$("input", element)?.checked) element.remove();
    });

    const checkBox = _.$("#allCheck");
    if (checkBox) checkBox.checked = false;
  }

  editBtnEvent({ target }: Event) {
    const parent = (target as HTMLElement).parentNode;
    parent?.lastChild?.remove();
    this.addEditTable(parent as HTMLElement);
    _.$("input", parent?.lastChild as HTMLElement)?.focus();
  }

  addEditTable(targetNode: HTMLElement) {
    const inputText = _.createEl("input");
    inputText.setAttribute("placeholder", "Press enter to confirm");
    inputText.addEventListener("keypress", this.editTableEvent.bind(this));
    inputText.setAttribute("style", "border-radius: 5px; border: 1px solid;");
    this.addText(targetNode, inputText);
  }

  editTableEvent(event: Event) {
    const { target, keyCode } = event as KeyboardEvent;
    const { value, parentNode } = target as HTMLInputElement;
    if (keyCode === 13 && !this.isEmpty(value)) {
      parentNode?.append(value);
      (target as HTMLElement).remove();
    }
  }
}
class View {
  addBox(targetNode: HTMLElement, type: string) {
    const checkbox = _.createEl("input");
    checkbox.setAttribute("type", type);
    targetNode.append(checkbox);
  }

  addButton(targetNode: HTMLElement, eventHandler: EventListener, content: string) {
    const button = _.createEl("button");
    button.innerHTML = content;
    button.addEventListener("click", eventHandler);
    targetNode.append(button);
  }

  checkAllEvent({ target }: Event) {
    const checkBoxList = document.querySelectorAll("input");
    if ((target as HTMLInputElement)?.checked) checkBoxList.forEach((element) => (element.checked = true));
    else checkBoxList.forEach((element) => (element.checked = false));
  }

  alertOn({ style }: HTMLElement) {
    style.display = "inline";
  }

  alertOFF({ style }: HTMLElement) {
    style.display = "none";
  }
}

class Controller {
  model: Model;
  view: View;
  constructor(model: Model, view: View) {
    this.model = model;
    this.view = view;
    this.init();
  }

  input = _.$("#inputbox");
  addBtn = _.$("#addbtn");
  list = _.$("#list");
  alert = _.$("#alertbox");
  allCheck = _.$("#allCheck");
  delBtn = _.$("#delbtn");

  delBtnIcon =
    '<img src="https://github.com/GleamingStar/code-squad-cocoa/blob/main/Day13/trashbin.png?raw=true" width="100%"></img>';
  editBtnIcon = "✎";

  init() {
    this.allCheck?.addEventListener("change", this.view.checkAllEvent);
    this.delBtn?.addEventListener("click", this.model.deleteCheckedEvent);
    this.addBtn?.addEventListener("click", this.addToDo.bind(this));
    this.input?.addEventListener("keypress", (e) => {
      if (e.keyCode === 13) this.addBtn?.click();
    });
  }

  addToDo() {
    if (this.model.isEmpty(this.input?.value as string)) return this.view.alertOn(this.alert as HTMLElement);
    this.view.alertOFF(this.alert as HTMLElement);

    this.list?.append(this.createToDo());

    if (this.input) this.input.value = "";
    this.input?.focus();
  }

  createToDo() {
    const toDo = _.createEl("li");
    toDo.classList.add("toDo");

    this.view.addBox(toDo, "checkbox");

    this.view.addButton(toDo, this.model.deleteEvent, this.delBtnIcon);

    this.view.addButton(toDo, this.model.editBtnEvent.bind(this.model), this.editBtnIcon);

    this.model.addText(toDo, this.input?.value as string);
    return toDo;
  }
}

const model = new Model();
const view = new View();
new Controller(model, view);
