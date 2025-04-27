import React from 'react'
import Image from 'next/image';
interface ImageEditorPropsType {
    onClose: () => void;
    previewUrl: string,
    settings: {
        type: "original" | "wide" | "square";
        sensitive: boolean
    },
    setSettings: React.Dispatch<React.SetStateAction<{
        type: "original" | "wide" | "square";
        sensitive: boolean;
    }>>
}

function ImageEditor(props: ImageEditorPropsType) {

    const {
        onClose,
        previewUrl,
        setSettings,
        settings
    } = props

    const handleChangeSensitive=(sensitive:boolean)=>{
        setSettings((prevState)=>({...prevState,sensitive}))}

    const handleChangeType=((type:"original"|"wide"|"square")=>{
        setSettings((prevState=>({...prevState,type})))
    })

    return (
        <div className='fixed w-screen h-screen top-0 right-0 bg-black bg-opacity-50 z-10 flex items-center justify-center'>
            <div className='bg-black rounded-xl p-12 flex flex-col gap-4'>
                {/* قسمت بالای مودال */}
                <div className='flex items-center justify-between pt-2 mt-2'>
                    <div className='flex align-center gap-4'>
                        <svg
                            width={32}
                            className='rotate-180 cursor-pointer'
                            onClick={onClose}
                            viewBox="0 0 24 24">

                            <path
                                fill="#e7e9ea"
                                d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z" />
                        </svg>

                        <h2 className='font-bold text-xl'>بریدن رسانه</h2>
                    </div>
                    <button className='py-2 px-4 rounded-full bg-white text-black font-bold' >ذخیره کردن</button>
                </div>
                {/* قسمت عکس */}
                <div className='w-[600px] h-[600px] flex items-center '>
                    <Image src={previewUrl} alt="" width={600} height={600} className={
                        `w-full ${settings.type === "original" ? "h-full object-contain" : settings.type === "square" ? "aspect-square object-cover" : "aspect-video object-cover"} `
                    } />

                </div>
                {/* قسمت پایین تنظیمات عکس */}
                <div>

                </div>
            </div>
        </div>
    )
}

export default ImageEditor
