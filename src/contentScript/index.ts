import "./style.css";
import { getOrCreatePopUpContainer } from './getOrCreatePopUpContainer';

document.body.addEventListener("dblclick", async ({ clientX, clientY }) => {
  const poUpContainer = getOrCreatePopUpContainer();

  poUpContainer.style.setProperty("left", `${clientX}px`);
  poUpContainer.style.setProperty("top", `${clientY - 5}px`);
});
