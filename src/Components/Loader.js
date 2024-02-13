import React from "react";
import { Spinner } from "@material-tailwind/react";

const Loader = ({ isSearching = false }) => {
  if (isSearching) {
    return <img src="/images/Animation - Loader.gif" alt="loader" width={"100px"} />;
  }
  return <Spinner className=" w-10 h-10" />;
};

export default Loader;
