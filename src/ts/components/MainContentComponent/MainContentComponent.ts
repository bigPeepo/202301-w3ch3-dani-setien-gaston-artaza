import Component from "../Component/Component";

class MainContentComponent extends Component {
  text: string;

  constructor(
    parentElement: Element,
    text: string,
    tagName = "div",
    classname = ""
  ) {
    super(parentElement, classname, tagName);
    this.parentElement = parentElement;
    this.text = text;
  }

  public render() {
    super.render();
    this.element.innerHTML = `<h2 class="main-content__title">${this.text}</h2> `;
  }
}

export default MainContentComponent;
