import React from "react";
const columns = [
  {name: "ATTRIB", uid: "attrib"},
  {name: "VALUE", uid: "val"},
  {name: "ACTIONS", uid: "actions"},
];

const vals = [
  {
    id: 1,
    attrib: "Stall Name",
    val: "Sample Stall Name",
  },
  {
    id: 2,
    attrib: "Stall Description",
    val: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nulla hic officiis iusto voluptates ut excepturi totam ipsum corrupti? Nostrum, numquam? Obcaecati natus nostrum incidunt voluptatibus est esse hic minima.",
  },
  {
    id: 3,
    attrib: "Photo URI",
    val: "./directory/filename",
  },
  {
    id: 4,
    attrib: "Video URI",
    val: "./directory/filename",
  },
  {
    id: 5,
    attrib: "Brochure URI",
    val: "./directory/filename",
  },
];

export {columns, vals};
