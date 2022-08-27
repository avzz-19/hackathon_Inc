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
          borderColor: "white",
          marginBottom: "150px",
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
        paddingLeft: "150px",
        paddingRight: "150px",
        paddingTop: "10px",
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
  console.log(props.options[0])
  return (
    <div>
      <select style={{display:"flex",
flexDirection: "row",
justifycontent: "center",
alignitems: "center",
padding: "10px 50px",
gap: "16px",
borderRadius:"5px",
border:"1px solid #E8E8EA"
}}>
        {props.options[0].map((m) => (
          <option value={m} >{m}</option>
        ))}
      </select>
    </div>
  );
};

export const Picker = (props) => {
  return (
    <input
      type="number"
      id="date"
      name="date"
      min={props.min}
      max={props.max}
      style={{margin:"15px", padding:"2px"}}
    ></input>
  );
};

export const InputComponent = (props) => {
    return (
      <div
      style={{
        display: "flex",
        flexDirection: (props.yolo === "yolo")? "column" : "row",
      }}
    >
      <TextComponent CustomTag="div"
        label={props.label}
      />
      <span><input {...props}></input></span>
    </div>
    );
  };

export const DatePick=()=>
{   return <div><label>{<TextComponent label="Date:" isMandatory="true" styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: 700 ,paddingTop:"10px"}}/>}</label>
            <input type="date" name="DOB"/>
            </div>
}

export const Box=()=>
{
    return <div style={{border:"1px solid blue" ,display:"flex",width:"392px",height:"252px",borderRadius:"10px"}}>

    </div>
}