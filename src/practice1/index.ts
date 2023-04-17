import { findIndex } from "lodash";

const items = [
  {
    id: 1,
    name: "one",
    active: false
  },
  {
    id: 2,
    name: "two",
    active: true
  }
];

let index = findIndex(items, "active");
index = findIndex(items, (item) => item.id === 1);
index = findIndex(items, { id: 1 });

// let joined = _.join(items, "~");

// let concatenated = _.concat(items, 1, 2);
