import React from "react";
import { createContext } from "react";

const PhotoContext = createContext();

const ImageProvider = ({ children }) => {
  const photoInfo = {};
  return (
    <PhotoContext.Provider value={photoInfo}>{children}</PhotoContext.Provider>
  );
};

export default ImageProvider;
