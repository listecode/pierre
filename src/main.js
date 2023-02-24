import "./style.css";

import { inView, animate } from "motion";

const inviewDesktop = () => {
  return inView(".viewinsection6", () => {
    animate(".section6-element1", { x: [-2000, -200] }, { duration: 2 });
    animate(".section6-element2", { x: [-1500, -150] }, { duration: 2 });
    animate(".section6-element3", { x: [-1000, -100] }, { duration: 2 });
    animate(".section6-element4", { x: [-500, -50] }, { duration: 2 });
    animate(".section6-element5", { x: [-2000, -0] }, { duration: 2 });
    animate(".section6-element6", { x: [2000, 50] }, { duration: 2 });
    animate(".section6-element7", { x: [1500, 100] }, { duration: 2 });
    animate(".section6-element8", { x: [1000, 150] }, { duration: 2 });
    animate(".section6-element9", { x: [500, 200] }, { duration: 2 });
    animate(".section6-element10", { x: [2000, 250] }, { duration: 2 });
    return () => {
      animate(".section6-element1", { x: [-2000, -200] }, { duration: 2 });
      animate(".section6-element2", { x: [-1500, -150] }, { duration: 2 });
      animate(".section6-element3", { x: [-1000, -100] }, { duration: 2 });
      animate(".section6-element4", { x: [-500, -50] }, { duration: 2 });
      animate(".section6-element5", { x: [-2000, -0] }, { duration: 2 });
      animate(".section6-element6", { x: [2000, 50] }, { duration: 2 });
      animate(".section6-element7", { x: [1500, 100] }, { duration: 2 });
      animate(".section6-element8", { x: [1000, 150] }, { duration: 2 });
      animate(".section6-element9", { x: [500, 200] }, { duration: 2 });
      animate(".section6-element10", { x: [2000, 250] }, { duration: 2 });
    };
  });
};
const inviewMobile = () => {
  return inView(".viewinsection6", () => {
    animate(".section6-element1", { x: [-2000, 0] }, { duration: 2 });
    animate(".section6-element2", { x: [-1500, 0] }, { duration: 2 });
    animate(".section6-element3", { x: [-1000, 0] }, { duration: 2 });
    animate(".section6-element4", { x: [-500, 0] }, { duration: 2 });
    animate(".section6-element5", { x: [-2000, 0] }, { duration: 2 });
    animate(".section6-element6", { x: [2000, 0] }, { duration: 2 });
    animate(".section6-element7", { x: [1500, 0] }, { duration: 2 });
    animate(".section6-element8", { x: [1000, 0] }, { duration: 2 });
    animate(".section6-element9", { x: [500, 0] }, { duration: 2 });
    animate(".section6-element10", { x: [2000, 0] }, { duration: 2 });
    return () => {
      animate(".section6-element1", { x: [-2000, 0] }, { duration: 2 });
      animate(".section6-element2", { x: [-1500, 0] }, { duration: 2 });
      animate(".section6-element3", { x: [-1000, 0] }, { duration: 2 });
      animate(".section6-element4", { x: [-500, 0] }, { duration: 2 });
      animate(".section6-element5", { x: [-2000, 0] }, { duration: 2 });
      animate(".section6-element6", { x: [2000, 0] }, { duration: 2 });
      animate(".section6-element7", { x: [1500, 0] }, { duration: 2 });
      animate(".section6-element8", { x: [1000, 0] }, { duration: 2 });
      animate(".section6-element9", { x: [500, 0] }, { duration: 2 });
      animate(".section6-element10", { x: [2000, 0] }, { duration: 2 });
    };
  });
};
const mediaQueryList = window.matchMedia("(min-width: 1000px)");

// Define a callback function for the event listener.
function handleOrientationChange(evt) {
  if (evt.matches) {
    inviewDesktop();
  } else {
    requestAnimationFrame(() => {
      inviewMobile();
    });
  }
}

// Run the orientation change handler once.
handleOrientationChange(mediaQueryList);

// Add the callback function as a listener to the query list.
mediaQueryList.addEventListener("change", handleOrientationChange);
