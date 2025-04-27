import Image from '@/components/Image'
import Link from 'next/link'
import React from 'react'

const menuList = [
    {
      id: 1,
      name: "خانه",
      link: "/",
      icon: "home.svg",
    },
    {
      id: 2,
      name: "کاوش",
      link: "/",
      icon: "explore.svg",
    },
    {
      id: 3,
      name: "آگاه‌سازی‌ها",
      link: "/",
      icon: "notification.svg",
    },
    {
      id: 4,
      name: "پیام‌ها",
      link: "/",
      icon: "message.svg",
    },
    {
      id: 5,
      name: "نشانک‌ها",
      link: "/",
      icon: "bookmark.svg",
    },
    {
      id: 6,
      name: "شغل‌ها",
      link: "/",
      icon: "job.svg",
    },
    {
      id: 7,
      name: "انجمن‌ها",
      link: "/",
      icon: "community.svg",
    },
    {
      id: 8,
      name: "نمایه",
      link: "/",
      icon: "profile.svg",
    },
    {
      id: 9,
      name: "بیشتر",
      link: "/",
      icon: "more.svg",
    },
  ];

function RightBar() {
    
  return (
    <div className='h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8'>
        <div className='flex flex-col gap-4 text-lg items-center xxl:items-start'>
            <Link className='rounded-full hover:bg-[#141414] ' href="/" >
                <Image className='' path={'icons/logo.svg'} alt='logoX' w={24} h={24}/>
            </Link>
            <div className='flex flex-col '>
                {
                    menuList.map((item)=>(
                       <Link className='flex items-center gap-4 p-2 rounded-full hover:bg-[#141414]'  key={item.id} href={item.link}>
                        <Image className='' path={`icons/${item.icon}`} alt={item.name} w={24} h={24} />
                        <span className='hidden xl:inline '>{item.name}</span>
                       </Link>
                    ))
                }
            </div>
            <Link href={"/"} className='bg-white text-black rounded-full w-12 h-12 flex items-center justify-center xl:hidden'>
                <Image className='' path="icons/post.svg" alt='new post' w={24} h={24} />
            </Link>
            <Link href={"/"} className='hidden xl:block bg-white text-black rounded-full py-2 px-20 font-bold ' >
                پست کردن
            </Link>
        </div>


        <div className='flex items-center justify-between mt-2 '>
            <div className='flex items-center gap-2 '>
                <div className='relative w-10 h-10 rounded-full overflow-hidden'>
                    <Image className='' path="/general/avatar.png" alt='alireza azadi' w={100} h={100} tr={true} />
                </div>
                <div className='hidden xl:flex flex-col' >
                    <span className='font-semibold'>Alireza Azadi</span>
                    <span className='text-textGray'>@AlirezaDev</span>
                </div>
            </div>
            <div className='hidden xl:block cursor-pointer font-bold'>...</div>
        </div>
    </div>
  )
}

export default RightBar
