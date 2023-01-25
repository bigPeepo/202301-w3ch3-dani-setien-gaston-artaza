import Component from "./components/Component/Component";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";

const appContainer = new Component(document.body, "container");
appContainer.render();

const app = document.querySelector(".container")!;

const header = new HeaderComponent(app, "header", "header");
header.render();
