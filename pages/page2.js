import React from "react";
import { Header } from "../src/app";
import GlobalStyle from "../src/globalStyles";
import { FaArrowLeft } from "react-icons/fa";
import {
  TextComponent,
  Dropdown,
  Picker,
  InputComponent,
} from "../src/components";

import Link from "next/link";

const Main2 = () => {
  return (
    <>
      <TextComponent
        label="Branch"
        styleProps={{
          fontSize: "16px",
          textAlign: "left",
          fontWeight: 700,
          paddingTop: "10px",
        }}
      />
      <Dropdown options={["BE", "BTech"]} />
      <TextComponent
        CustomTag="span"
        label="FN"
        styleProps={{
          fontSize: "15px",
          fontWeight: 700,
          padding: "5px",
          paddingLeft: "20px",
        }}
      />
      <Picker min={1} max={12} />
      <Picker min={1} max={59} />
      <TextComponent CustomTag="span" label="to" />
      <Picker min={1} max={12} />
      <Picker min={1} max={59} />
      <TextComponent
        CustomTag="span"
        label="3 hours"
        styleProps={{ paddingRight: "10em" }}
      />
      <input type="checkbox" />
      <TextComponent CustomTag="span" label="Set for all FN" />
      <br></br>
      <TextComponent
        CustomTag="span"
        label="AN"
        styleProps={{
          fontSize: "15px",
          fontWeight: 700,
          padding: "5px",
          paddingLeft: "20px",
        }}
      />
      <Picker min={1} max={12} />
      <Picker min={1} max={59} />
      <TextComponent CustomTag="span" label="to" />
      <Picker min={1} max={12} />
      <Picker min={1} max={59} />
      <TextComponent
        CustomTag="span"
        label="3 hours"
        styleProps={{ paddingRight: "10em" }}
      />
      <input type="checkbox" />
      <TextComponent CustomTag="span" label="Set for all AN" />
      <div style={{display:"flex"}}>
        <InputComponent
          type="text"
          label={
            <TextComponent
              label="Subjects"
              styleProps={{
                fontWeight: "700",
                fontSize: "15px",
                lineHeight: "17px",
              }}
            ></TextComponent>
          }
          placeholder="5"
          style={{ padding: "10px" ,marginRight:"30px"}}
        />
        <InputComponent
          type="text"
          label={
            <TextComponent
              label="Labs"
              styleProps={{
                fontWeight: "700",
                fontSize: "15px",
                lineHeight: "17px",
               
              }}
            ></TextComponent>
          }
          placeholder="2"
          style={{ padding: "10px" }}
        />
      </div>
    </>
  );
};

const page2 = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div style={{ display: "flex", paddingLeft: "100px", fontWeight: 600 }}>
        <Link href="/">
          <a>
            <FaArrowLeft size="30px" style={{ padding: "10px" }} />
          </a>
        </Link>
        <TextComponent
          label="Create new schedule"
          styleProps={{ paddingTop: "10px", fontSize: "24px" }}
        />
      </div>
      <div
        style={{
          marginBottom: "126px",
          width: "1196px",
          height: "1400px",
          marginLeft: "122px",
          marginTop: "30px",
          background: "#FBFBFB",
        }}
      >
        <Main2 />
      </div>
    </>
  );
};
export default page2;
