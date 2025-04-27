import React from 'react'
import Image from './Image'
import Postinfo from './Postinfo'
import PostInteractions from './PostInteractions'

export default function Post() {
  return (
    <div className='p-4 border-y-[1px] border-borderGray '>
      <div className='flex items-center gap-2 text-sm text-textGray mb-2 font-bold '>
        <span>alireza باز پست کرد</span>
      </div>
      <div className='flex gap-4'>
        <div className='relative w-10 h-10 rounded-full overflow-hidden'>
            <Image className='' path={"general/avatar.png"} alt="devWithAlireza" w={100} h={100}  />
        </div>
        <div className='flex-1 flex flex-col gap-2'>
            <div className='flex items-center justify-between gap-2'>
                <div className='flex items-center gap-2 flex-wrap'>
                    <h2>Alireza Azadi</h2>
                    <span>@devWithAlireza</span>
                    <span>2 روز پیش</span>

                </div>
                <Postinfo/>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis harum fuga adipisci dolores in omnis ab consectetur modi impedit sapiente maiores placeat atque, delectus labore quae deleniti temporibus maxime alias.
            </p>
            <Image className='' alt='sdm' path='general/post.jpg' w={600} h={600} />
            <PostInteractions/>
        </div>
      </div>
    </div>
  )
}