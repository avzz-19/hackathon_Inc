import React from "react";
import { Header } from "../src/app";
import GlobalStyle from "../src/globalStyles";
import { FaArrowLeft } from "react-icons/fa";
import { TextComponent } from "../src/components";
import Link from "next/link";
export const page2 = () => {
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
      />
    </>
  );
};
export default page2;
