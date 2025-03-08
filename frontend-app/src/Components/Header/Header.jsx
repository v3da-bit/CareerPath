import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkMenu } from '../../features/sliderSlice'
import MenuOption from './MenuOption'

const Header = () => {
    const isCompressed = useSelector((state) => state.slider.menuOpen)
    const dispatch = useDispatch();
    
    return (
        <header id="header" className={`${isCompressed?"lg:w-[20%] max-md:w-[90vw] max-md:absolute z-30 py-4 px-6":"lg:w-[5%] max-md:hidden p-4"} h-full flex flex-col duration-500 bg-[#001a2c]`}>
           
            <div className="w-full h-[10%] flex item-center font-bold text-2xl gap-2">
                <img src="./images/logo.png" alt="no image" className="h-10 w-10 rounded-full bg-white" />
                {isCompressed && <h1 className='text-white'>Carrer Path</h1>}
            </div>
            <div className="w-full h-[90%] overflow-y-hidden text-white text-lg">
            <MenuOption link="/home" icon={<i className="text-xl fa-solid fa-house"></i>} text="Home" />
                <MenuOption link="/quiz" icon={<i className="fa-solid fa-brain"></i>} text="Quiz" />
                <MenuOption link="/leaderboard" icon={<i className="fa-solid fa-chart-column"></i>} text="Leaderboard" />
                <MenuOption link="/skillTracker" icon={<i className="fa-solid fa-laptop-file"></i>} text="Skill Tracker" />
                <MenuOption link="/careersuggessions" icon={<i className="fa-solid fa-book-open"></i>} text="Career Suggestions" />
                <MenuOption link="/job" icon={<i className="fa-solid fa-briefcase"></i>} text="Job" />
                <MenuOption link="/profile" icon={<i className="text-xl fa fa-user"></i>} text="Profile" />
                <MenuOption link="/settings" icon={<i className="text-xl fa-solid fa-gear"></i>} text="Settings" />
                <MenuOption link="/logout" icon={<i className="fa-solid fa-arrow-right-from-bracket"></i>} text="Logout" />
            </div>
        </header>
    )
}

export default Header