import arinspection from './projects/arinspection.js';
import archviz from './projects/archviz.js';
import archvizproj from './projects/archviz-proj.js';
import metaverse from './projects/metaverse.js';
import webxr from './projects/webxr.js';
import downhillbike from './projects/downhillbike.js';
import findthedifference from './projects/findthedifference.js';
import heterotopia from './projects/heterotopia.js';
import holoffice from './projects/holoffice.js';
import ludikid from './projects/ludikid.js';
import processing from './projects/processing.js';
import roboko from './projects/roboko.js';
import sketchrecognition from './projects/sketchrecognition.js';
import tunnels from './projects/tunnels.js';
import virtualmuseum from './projects/virtualmuseum.js';
import visualisationreview from './projects/visualisationreview.js';
import wretched from './projects/wretched.js';
import lowpolyassets from './projects/lowpoly-assets.js';

export const projects = [
  arinspection,
  archviz,
  archvizproj,
  metaverse,
  webxr,
  downhillbike,
  findthedifference,
  heterotopia,
  holoffice,
  ludikid,
  processing,
  roboko,
  sketchrecognition,
  tunnels,
  virtualmuseum,
  visualisationreview,
  wretched,
  lowpolyassets
].filter(p => p.show !== false);

// Debug: Print all project IDs and titles
projects.forEach((p, index) => {
  console.log(`Index ${index}: ID=${p.id}, Title=${p.title}`);
});

// Extra: Find duplicate IDs
const seen = new Set();
projects.forEach((p) => {
  if (seen.has(p.id)) {
    console.warn(`⚠️ Duplicate ID found: ${p.id} (${p.title})`);
  } else {
    seen.add(p.id);
  }
});
