import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

export default function PDFLoaderJesus({fileName}) {



    return(
        <>
        {fileName === "Lista 12.6" && <iframe src="https://drive.google.com/file/d/1cWyaDIlPP32MWgTaUgM99Th506SpL1Sw/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        {fileName === "13.2" && <iframe src="https://drive.google.com/file/d/16UzPgp9srrHXqIKXHbgZ60BEwVbFEtxV/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        {fileName === "14.1" && <iframe src="https://drive.google.com/file/d/11Oz6npGv7wHaRc0LlzrL2OqVjSlZVDA2/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        {fileName === "14.2" && <iframe src="https://drive.google.com/file/d/1whZfe782yNy4cvOIhnAgWt8T8vg9Njdn/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        {fileName === "14.3" && <iframe src="https://drive.google.com/file/d/1k6iVbIpotVCOwOVH9sFty_2lCvOKCOxo/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        {fileName === "17.1" && <iframe src="https://drive.google.com/file/d/12DglmWBxkRMiFp2uvcq0SoJV-LjRn0Sj/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        {fileName === "17.2" && <iframe src="https://drive.google.com/file/d/1kcp8UD77uuFk0Z9gMOFWzNXQimcFBbSA/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        {fileName === "18.2" && <iframe src="https://drive.google.com/file/d/1VrjSZ0tEdeH0IH4bQ2jPQiINTgt8PIe6/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        {fileName === "18.3" && <iframe src="https://drive.google.com/file/d/1WydKuH2L7A1oYQ5tmbjjAuLU_JUa7AYt/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        {fileName === "Simpson" && <iframe src="https://drive.google.com/file/d/1zcHtUtjnehv22aovADHFSPa7I-X1blnz/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        {fileName === "Impropias" && <iframe src="https://drive.google.com/file/d/1K5DFAqOjuiNvxr9e98CGPG4Lv3SbCQA_/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        </>
    )
}