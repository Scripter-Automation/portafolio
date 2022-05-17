import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

export default function PDFLoader({fileName}) {



    return(
        <>
        {fileName === "Lista 12.6" && <iframe src="https://drive.google.com/file/d/1GY2Wn_BxSIHDuXbW1osm2JskyRk-YSNl/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        {fileName === "13.2" && <iframe src="https://drive.google.com/file/d/1F_zzmRU6wbG4XDkYalZNf-loh-FX-lLg/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        {fileName === "14.1" && <iframe src="https://drive.google.com/file/d/1QER4jrERAA8R8fS2tbs07wZfwdgj6t5S/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        {fileName === "14.2" && <iframe src="https://drive.google.com/file/d/1OOiAkWWH0yTFPOCkNToopSrgnGQeYRyk/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        {fileName === "14.3" && <iframe src="https://drive.google.com/file/d/1MdAR1mXnRdqUljVWHP0hiMVGS_lSLzVu/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        {fileName === "17.1" && <iframe src="https://drive.google.com/file/d/1uCtrrknm-YcpdJZLTI9nERGya2mu_phg/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        {fileName === "17.2" && <iframe src="https://drive.google.com/file/d/1VdvOgrAU1OCfn6y9rr_1sWwVn0EhcLwE/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        {fileName === "18.2" && <iframe src="https://drive.google.com/file/d/1qVpBoY8kNgUvK-DmmxSr6LkFC2Zb8dlc/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        {fileName === "18.3" && <iframe src="https://drive.google.com/file/d/1W60QdcIjSRP6IWbJsHrlaBcd8nCkapR9/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        {fileName === "Simpson" && <iframe src="https://drive.google.com/file/d/1UNBv8B0MhVLxxiKet_dYSiGUpysHK65x/preview" style={{width:"100%", height:"100vh"}} allow="autoplay"></iframe>}
        </>
    )
}