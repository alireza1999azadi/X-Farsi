"use client";

import React from 'react'
import { IKImage } from "imagekitio-next";

interface ImageProps{
    path:string,
    w?:number,
    h?:number,
    alt:string,
    className:string,
    tr?:boolean
}

export default function Images(props:ImageProps) {
    const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

    const{
        path,
        alt,
        className,
        h,
        w,
        tr

    }=props;
  return (
    <IKImage 
    {
      ...(tr?{
        transformation:[
          {
            width:`${w}`,
            height:`${h}`,
          }
        ]
      }:{
        width:w,
        height:h
      })}

    urlEndpoint={urlEndpoint} className={className} path={path} alt={alt} />  
  )
}
