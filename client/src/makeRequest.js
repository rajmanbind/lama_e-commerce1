import axios from "axios";
export const makeRequest = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization:
      "bearer " +
      "746ee262681a9ed95733489e40fc61b1bd012c71ed5dddbd0e529acb539ec75fb3b901902291a4c4845606dc65753587a0645e771e81630ebf41e555af5a3f341f62bfd4ad39c8ef660006c8e7b818f2803e80a171d9262bcafd966417262b56dbf009504e08365275a7b1a3ee647bea1eeb9288e195b61d8d8af54349128d57",
  },
});
