import React from "react";
export const TextComponent = ({
    label,
    children,
    CustomTag = "div",
}) => (
  <CustomTag style={styleProps}>
    {label}
    {children}
  </CustomTag>
);