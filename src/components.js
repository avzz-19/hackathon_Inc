import React from "react";
export const TextComponent = ({
  label,
  styleProps,
  children,
  CustomTag = "div",
}) => (
  <CustomTag style={styleProps}>
    {label}
    {children}
  </CustomTag>
);
export const Button = (props) => {
  return (
    <>
      <button
        label={props.buttonText}
        style={{
          backgroundColor: "#5375E2",
          borderRadius: "5px",
          color: "white",
          width: "192px",
          height: "39.96px",
          fontWeight: "400",
          fontSize: "20px",
          borderColor:"white",
          marginBottom:"150px"
        }}
      >
        {props.buttonText}
      </button>
    </>
  );
};

export const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#FBFBFB",
        display: "flex",
        justifyContent: "space-between",
        paddingLeft:"150px",
        paddingRight:"150px",
        paddingTop:"10px"
      }}
    >
      <TextComponent
        style={{
          fontWeight: "200",
          fontSize: "12px",
          lineHeight: "130%",
          width: "1440px",
          height: "42px",
        }}
        label="Conditions of use & sale"
      />

      <TextComponent
        style={{
          fontWeight: "200",
          fontSize: "12px",
          lineHeight: "130%",
          width: "1440px",
          height: "42px",
        }}
        label="Privacy notice"
      />
      <TextComponent
        style={{
          fontWeight: "200",
          fontSize: "12px",
          lineHeight: "130%",
          width: "1440px",
          height: "42px",
        }}
        label="Powered By Incresco"
      />
    </footer>
  );
};
export const Dropdown = (props) => {
    return (
      <div>
        <select>
          {props.options?.map((m) => (
            <option value={m}>{m}</option>
          ))}
        </select>
      </div>
    );
  };
