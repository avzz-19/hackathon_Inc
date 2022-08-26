import Image from "next/image";
import main1 from "../img/main1.png";
import logo from "../img/logo.png";
import { TextComponent ,Button, Footer} from "./components";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#5375E2", 
          color: "white",
          fontFamily: "Helvetica",
          fontWeight: "700",
          margin: "0",
          display: "flex",
          padding: "10px",
        }}
      >
        <div
          style={{
            paddingLeft: "27px",
            paddingTop: "21px",
            paddingRight: "41px",
          }}
        >
          <Image src={logo} alt="logo" width={53} height={52} />
        </div>
        <div style={{ flexDirection: "column" }}>
          <TextComponent
            label="SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY"
            styleProps={{
              fontSize: "16px",
              textAlign: "center",
              lineHeight: "21.82px",
              paddingTop: "15px",
              paddingLeft: "10px",
            }}
          />
          <br></br>
          <TextComponent
            label="Exam Scheduler"
            styleProps={{
              fontSize: "32px",
              paddingBottom: "15px",
              textAlign: "left",
              paddingLeft: "10px",
            }}
          />
        </div>
        <div>
          <FaUserCircle size="35px" style={{paddingLeft:"600px",paddingTop:"30px",justifyContent:"center",alignItems:"center"}}/>
          
          <TextComponent label="Waseem" CustomTag="span" styleProps={{padding:"10px",fontSize:"20px",justifyContent:"center",alignItems:"center"}}/>
        </div>
      </div>
    </>
  );
};
export const MainImage = () => {
  return <Image src={main1} alt="Picture main" width={400} height={400} />;
};

export const App = () => {
  return (
    <>
      <Header />
      <div style={{alignItems:"center",justifyContent:"center",display:"flex",flexDirection:"column",marginTop:"50px"}}>
      <MainImage/>
      <TextComponent label="There are no schedules get started by creating schedules" styleProps={{fontWeight:"600px",paddingBottom:"20px"}}/>
      <Button  buttonText={<TextComponent label="+   Create New"/>}/>
      </div>
      <Footer/>
    </>
  );
};
