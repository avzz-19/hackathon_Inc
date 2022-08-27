import React from "react";
import { Header } from "../src/app";
import GlobalStyle from '../src/globalStyles'
import { Box } from "../src/components";

const Cards = () => {
  return (
    <>
    <GlobalStyle/>
    <Header/>
    <div style={{paddingTop:'150px' ,paddingLeft:'30px'}}>
    <Box style={{border:'1px dashed black'}}/>
    </div>
    </>
  )
}

export default Cards