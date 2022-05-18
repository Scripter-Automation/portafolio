import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

export default function PDFLoaderAlonso({fileName}) {



    return(
        <>
        {fileName === "Lista 12.6" && <iframe src="https://drive.google.com/file/d/1qxuL7jebeTYlJ7NEui7LVh5SSJeqwfbs/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        {fileName === "13.2" && <iframe src="https://drive.google.com/file/d/1qYbO5FxcxX7ORRt10RCSyL5MAsxJonzE/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        {fileName === "14.1" && <iframe src="https://drive.google.com/file/d/1af5ToHFtmwf8HSCvz0TAnhs3IXDex2PH/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        {fileName === "14.2" && <iframe src="https://drive.google.com/file/d/1uYPmHt1IaA4DUF9f8HMfNowNg8ZngnLI/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        {fileName === "14.3" && <iframe src="https://drive.google.com/file/d/1wy17bBgdMOCqLbMi-xxDPWsUjzRTtXle/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        {fileName === "17.1" && <iframe src="https://drive.google.com/file/d/1pPV8I-MERiYCkyz4f3c3oXzHTRNwZwqP/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        {fileName === "17.2" && <iframe src="https://drive.google.com/file/d/1ftnmpwwUXaKMG8-U-VXcsTCVwmo-Gi1A/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        {fileName === "18.2" && <iframe src="https://drive.google.com/file/d/16K63jq_Va8n-UaOXXaArbNjjdDDmomUD/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        {fileName === "18.3" && <iframe src="https://drive.google.com/file/d/1SP6cjaKuYtQGjX_v55IFhRPFeH5-rOWW/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        {fileName === "Simpson" && <iframe src="https://drive.google.com/file/d/1ckKqS2AJ1SFUReRYHl7ZzDnYjXWwn3e9/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        {fileName === "Discos" && <iframe src="https://drive.google.com/file/d/1BIwOIGM2ft02jfNRBWPLAbjM1FBr_D3g/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        </>
    )
}