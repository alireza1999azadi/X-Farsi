"use client";
import React from 'react'
import { IKVideo } from 'imagekitio-next';

interface VideoPropsType{
    path:string,
    className?:string,
}

const urlEndpoint=process.env.Next_PUBLIC_URL_ENDPOINT;

function Video(props:VideoPropsType) {
    const{
        path,
        className
    }=props
  return (
    <IKVideo urlEndpoint={urlEndpoint} path={path} className={className} controls />
  )
}

export default Video
