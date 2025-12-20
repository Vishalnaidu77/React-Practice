import React from 'react'
import { GiTennisCourt } from "react-icons/gi";
import { CgShapeCircle } from "react-icons/cg";
import { GiPlainCircle } from "react-icons/gi";

const Box = ({ style, btnText, box }) => {
    return (
        <div className={`w-[30%] h-[500px]  rounded-2xl ${style} `}>
            {box==1 && (
                <div className=''>
                    <div className='text-white text-7xl'>
                    <GiTennisCourt />
                    </div>
                    <h1 className='text-white text-[2.8rem]/12 my-6'>Professional hard courts <span className='text-gray-600'> with tournament - grade lighting & climate control - play in</span> perfect conditions, in any season.</h1>
                    <div className='flex gap-5'>
                        <div className='w-10 bg-blue-500 rounded-full flex justify-end text-white text-xl'><CgShapeCircle /></div>
                        <p className='text-gray-500 '>Game Mode</p>
                    </div>
                </div>
                
            )}
            {btnText && (
                <button className='bg-[#e6e6e656] text-white text-lg font-light backdrop-blur-xs py-2 px-4 rounded-full'>{btnText}</button>
            )}
            {box == 3 && (
                <div className='flex flex-col gap-20'>
                    <div className='info flex flex-col gap-4'>
                        <h1 className='text-7xl'>100+</h1>
                        <h3 className='text-xl font-medium'>Pro Coaches</h3>
                        <p className='text-xl font-light'>Cerified professionals ready to boost your <br /> game from first serve to tournament level.</p>
                    </div>
                    <div className="levels text-xl flex flex-col gap-4">
                        <div className="beginner">Beginner</div>
                        <div className="intermediate">Intermediate</div>
                        <div className="advance">Advance</div>
                    </div>
                </div>
            )}
            
        </div>
    )
}

function Section2() {
    return (
        <div className='flex justify-between'>
            <Box box="1" style={"bg-[#030e1d] py-10 px-8"} />
            <Box box="2" style={'bg-[url("https://images.unsplash.com/photo-1737231804745-1f53fa1e0d7f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center flex justify-center items-center'} btnText="Private & Group Lessons"/>
            <Box box="3" style={'bg-gray-200 p-8'}/>
        </div>
    )
}

export default Section2
