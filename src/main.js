import "./style.css";

import { inView, animate } from "motion";

inView(".viewinsection6", () => {
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
