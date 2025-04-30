import React from 'react';
import Image from './Image';
import Postinfo from './Postinfo';
import PostInteractions from './PostInteractions';
import Video from './Video';
import { imagekit } from '@/utils';

interface FileDetailsResponse {
  width: number,
  height: number,
  filePath: string,
  url: string,
  fileType: string,
  customMetadata?: {
    sensitive: boolean
  }
}
export default async function Post() {
  const getFileDetails = (faileId: string): Promise<FileDetailsResponse> => {
    return new Promise((resolve, reject) => {
      imagekit.getFileDetails("fileId", function (error, result) {
        if (error) console.log(error);
        else resolve(result as FileDetailsResponse)
      })
    })
  }

  
  const fileDetails = await getFileDetails("67c06b5f432c4764164fc3f7");

  console.log(fileDetails, "fileDetails-")

  return (
    <div className='p-4 border-y-[1px] border-borderGray '>
      <div className='flex items-center gap-2 text-sm text-textGray mb-2 font-bold '>
        <span>alireza باز پست کرد</span>
      </div>
      <div className='flex gap-4'>
        <div className='relative w-10 h-10 rounded-full overflow-hidden'>
          <Image className='' path={"general/avatar.png"} alt="devWithAlireza" w={100} h={100} />
        </div>
        <div className='flex-1 flex flex-col gap-2'>
          <div className='flex items-center justify-between gap-2'>
            <div className='flex items-center gap-2 flex-wrap'>
              <h2>Alireza Azadi</h2>
              <span>@devWithAlireza</span>
              <span>2 روز پیش</span>

            </div>
            <Postinfo />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis harum fuga adipisci dolores in omnis ab consectetur modi impedit sapiente maiores placeat atque, delectus labore quae deleniti temporibus maxime alias.
          </p>
          {
            fileDetails && fileDetails.fileType === "image" ? (
              (
                <Image path={fileDetails.filePath} w={fileDetails.width} h={fileDetails.height} alt="" className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""} />
              )
            ) : <Video path={fileDetails.filePath} className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""} />
          }
          <PostInteractions />
        </div>
      </div>
    </div>
  )

}