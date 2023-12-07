import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"

const Card = ({ data, reference }) => {

    return (
        <>
            <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className='mt-14 relative w-60 h-72 rounded-[50px] bg-zinc-900/90  text-white p-5 px-8 py-10 overflow-hidden'>

                <FaRegFileAlt />
                <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>

                <div className='footer absolute bottom-0 left-0 w-full'>
                    <div className='flex items-center justify-between mb-3 px-8 py-3'>
                        <h5>{data.fileSize}</h5>
                        <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                            {
                                data.close ? <IoMdCloseCircle /> : <FaFileDownload size="0.8em" color='#fff' />
                            }

                        </span>

                    </div>
                    {
                        data.tag.isOpen && (
                            <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600 " : "bg-green-500"} flex items-center justify-center`}>
                                <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                            </div>
                        )
                    }

                </div>
            </motion.div>
        </>
    )
}

export default Card