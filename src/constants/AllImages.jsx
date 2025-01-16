import React from "react";
import Logo from "../assets/images/gcsmal.svg";


const iconMap = {
  "guitar": Logo,
  
};

const AllImages = ({ iconName ,children}) => {
  // Если iconName существует в iconMap, используем его, иначе — дефолтное значение (Logo)
  const SelectedIcon = iconMap[iconName] || Logo;

  return<SelectedIcon  width ="100%" >{children}</SelectedIcon>
};

export default AllImages;