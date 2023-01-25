import Component from "../Component/Component";

class HeaderComponent extends Component {
  title = "My series";

  constructor(parentElement: Element, tagName: string, className = "") {
    super(parentElement, className, tagName);
    this.parentElement = parentElement;
  }

  public render() {
    super.render();
    this.element.innerHTML = `<h1 class="main-title">${this.title}</h1>`;
  }
}

export default HeaderComponent;
