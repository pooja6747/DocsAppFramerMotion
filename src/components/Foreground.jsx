import React,{useRef} from 'react'
import Card from './Card'


const Foreground = () => {
    const ref = useRef(null)

    const data = [
        {
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quaerat, officiis ratione dolorem expedita o.',
            fileSize: '0.9mb',
            close: false,
            tag: { isOpen: true, tagTitle: 'Download Now', tagColor: "blue" },

        },
        {
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quaerat, officiis ratione dolorem expedita o.',
            fileSize: '0.10mb',
            close: false,
            tag: { isOpen: true, tagTitle: 'Download Now', tagColor: "green" },

        },
        {
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quaerat, officiis ratione dolorem expedita o.',
            fileSize: '0.8mb',
            close: true,
            tag: { isOpen: true, tagTitle: 'Upload', tagColor: "green" },

        }
    ]
    return (
        <>
            <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full bg-sky-800/50 flex gap-10 flex-wrap flex-shrink-0 p-5'>
                {
                    data.map((item, index) => (
                        <Card data={item} reference={ref}/>
                    ))
                }


            </div>

        </>
    )
}

export default Foreground