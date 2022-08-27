import React from "react";
import { Header } from "../src/app";
import GlobalStyle from "../src/globalStyles";
import { FaArrowLeft } from "react-icons/fa";
import {
  TextComponent,
  Dropdown,
  Picker,
  InputComponent,
  DatePick,
  Button,
} from "../src/components";
import Popupsave from "../src/popup";

import Link from "next/link";
export async function getServerSideProps() {
  const res0 = await fetch(
    `https://ws3wn6n4qi.execute-api.ap-south-1.amazonaws.com/branch`
  );
  let data0 = await res0.json();
  const res1 = await fetch(
    `https://ws3wn6n4qi.execute-api.ap-south-1.amazonaws.com/department?branch=BE`
  );
  let data1 = await res1.json();
  const data = [data0,data1];
  console.log(data.branchNames);
  return { props: { data } };
}

const Main2 = ({ data }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "15px",
        }}
      >
        <div style={{ display: "flex",flexDirection:"column" }}>
          <TextComponent
            label="Branch"
            styleProps={{
              fontSize: "16px",
              textAlign: "left",
              fontWeight: 700,
              paddingTop: "10px",
            }}
          />
          <Dropdown options={[data[0].branchNames]} />
        </div>
        <div style={{ display: "flex" ,flexDirection:"column" }}>
          <TextComponent
            label="Department"
            styleProps={{
              fontSize: "16px",
              textAlign: "left",
              fontWeight: 700,
              paddingTop: "10px",
            }}
          />
          <Dropdown
            options={[data[1].departmentNames]}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "8px 16px",
              gap: "8px",
              marginTop: "10px",
            }}
          />
          <TextComponent
            label="Exam Type"
            styleProps={{
              fontSize: "16px",
              textAlign: "left",
              fontWeight: 700,
              paddingTop: "10px",
            }}
          />
           <Dropdown options={[["Sem","model","internal"]]} />
        </div>
        <div style={{ display: "flex" ,flexDirection:"column" }}>
        <InputComponent
            yolo="yolo"
          type="text"
          label={
            <TextComponent
              label="Semester"
              CustomTag="div"
              styleProps={{
                fontSize: "16px",
                textAlign: "left",
                fontWeight: 700,
                paddingTop: "10px",
                paddingBottom: 0,
              }}
            ></TextComponent>
          }
          placeholder="3"
          style={{ padding: "5px" }}
        /></div>
      </div>
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
      <div style={{ display: "flex", padding: "10px" }}>
        <InputComponent
          yolo="yolo"
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
          style={{ padding: "10px", marginRight: "30px" }}
        />
        <InputComponent
          type="text"
          yolo="yolo"
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
      
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextComponent
            label="Subject1"
            styleProps={{ fontWeight: "700", paddingTop: "10px" }}
          />
          <Dropdown options={[["19QSA011", "19QA022", "19QA033"]]} />
        </div>
        <InputComponent
          placeholder="Measurement and Instrumentation"
          disabled
          style={{ marginTop: "25px", marginLeft: "20px", width: "150%" }}
        />
        <DatePick />
        <span>
          <button>FN</button>
          <button>AN</button>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextComponent
            label="Subject2"
            styleProps={{ fontWeight: "700", paddingTop: "10px" }}
          />
          <Dropdown options={[["19QSA011", "19QA022", "19QA033"]]} />
        </div>
        <InputComponent
          placeholder="Electrical Machines"
          disabled
          style={{ marginTop: "25px", marginLeft: "20px", width: "150%" }}
        />
        <DatePick />
        <span>
          <button>FN</button>
          <button>AN</button>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextComponent
            label="Subject3"
            styleProps={{ fontWeight: "700", paddingTop: "10px" }}
          />
          <Dropdown options={[["19QSA011", "19QA022", "19QA033"]]} />
        </div>
        <InputComponent
          placeholder="Power Systems"
          disabled
          style={{ marginTop: "25px", marginLeft: "20px", width: "150%" }}
        />
        <DatePick />
        <span>
          <button>FN</button>
          <button>AN</button>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextComponent
            label="Subject4"
            styleProps={{ fontWeight: "700", paddingTop: "10px" }}
          />
          <Dropdown options={[["19QSA011", "19QA022", "19QA033"]]} />
        </div>
        <InputComponent
          placeholder="Microcontrollers"
          disabled
          style={{ marginTop: "25px", marginLeft: "20px", width: "150%" }}
        />
        <DatePick />
        <span>
          <button>FN</button>
          <button>AN</button>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextComponent
            label="Subject5"
            styleProps={{ fontWeight: "700", paddingTop: "10px" }}
          />
          <Dropdown options={[["19QSA011", "19QA022", "19QA033"]]} />
        </div>
        <InputComponent
          placeholder="Control Systems"
          disabled
          style={{ marginTop: "25px", marginLeft: "20px", width: "150%" }}
        />
        <DatePick />
        <span>
          <button>FN</button>
          <button>AN</button>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextComponent
            label="Subject6"
            styleProps={{ fontWeight: "700", paddingTop: "10px" }}
          />
          <Dropdown options={[["19QSA011", "19QA022", "19QA033"]]} />
        </div>
        <InputComponent
          placeholder="Measurement and Instrumentation"
          disabled
          style={{ marginTop: "25px", marginLeft: "20px", width: "150%" }}
        />
        <DatePick />
        <span>
          <button>FN</button>
          <button>AN</button>
        </span>
      </div>
      <TextComponent
      label="Lab"
      styleProps={{fontWeight: "700", paddingTop: "10px",fontSize:"20px"}}
        
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
      
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextComponent
            label="Lab1"
            styleProps={{ fontWeight: "700", paddingTop: "10px" }}
          />
          <Dropdown options={[["19QSA011", "19QA022", "19QA033"]]} />
        </div>
        <InputComponent
          placeholder="Measurement and Instrumentation"
          disabled
          style={{ marginTop: "25px", marginLeft: "20px", width: "150%" }}
        />
        <DatePick />
        <span>
          <button>FN</button>
          <button>AN</button>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextComponent
            label="lab2"
            styleProps={{ fontWeight: "700", paddingTop: "10px" }}
          />
          <Dropdown options={[["19QSA011", "19QA022", "19QA033"]]} />
        </div>
        <InputComponent
          placeholder="Electrical Machine"
          disabled
          style={{ marginTop: "25px", marginLeft: "20px", width: "150%" }}
        />
        <DatePick />
        <span>
          <button>FN</button>
          <button>AN</button>
        </span>
      </div>

    </>

  );
};

const page2 = ({ data }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div style={{ display: "flex", paddingLeft: "100px", fontWeight: 600 }}>
        <div style={{ marginTop: "150px", display: "flex" }}>
          <Link href="/">
            <a>
              <FaArrowLeft size="40px" />
            </a>
          </Link>
          <TextComponent
            label="Create new schedule"
            styleProps={{
              paddingTop: "10px",
              fontSize: "24px",
              marginTop: "0px",
            }}
          />
        </div>
      </div>
      <div
        style={{
          marginBottom: "126px",
          width: "1196px",
          height: "1400px",
          marginLeft: "122px",
          marginTop: "20px",
          background: "#FBFBFB",
        }}
      >
        <Main2 data={data} />
       
       <Popupsave/>
      </div>
      
    </>
  );
};
export default page2;
