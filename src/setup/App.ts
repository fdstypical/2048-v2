import "./App.styl";

export const setup = () => {
  const root = document.getElementById("root");
  const container = document.createElement("div");

  container.classList.add("container");
  root?.append(container);
};
