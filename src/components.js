import React from "react";
export const TextComponent = ({
    label,
    children,
    CustomTag = "div",
}) => (
  <CustomTag>
    {label}
    {children}
  </CustomTag>
);