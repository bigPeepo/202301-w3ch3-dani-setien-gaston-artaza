import CardListComponent from "./components/CardListComponent/CardListComponent";
import Component from "./components/Component/Component";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import MainContentComponent from "./components/MainContentComponent/MainContentComponent";

const appContainer = new Component(document.body, "container");

appContainer.render();

const app = document.querySelector(".container")!;

const header = new HeaderComponent(app, "header", "header");
header.render();

const mainContent = new MainContentComponent(
  app,
  "Series List",
  "main",
  "main-content"
);
mainContent.render();

const sectionComponent = new CardListComponent(
  mainContent.element,
  "list",
  "section"
);
sectionComponent.render();
