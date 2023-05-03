import React, { useState} from 'react';

export default function Header (props) {
    const buttonInactive = "bg-blue-500 hover:bg-white text-white hover:text-gray-800 py-2 px-2 border-2 hover:border-black rounded-full w-32";
    const buttonActive = "cursor-default bg-white text-black py-2 px-2 border-2 border-black rounded-full w-32";
    return (
        <>
            <nav className="py-4 px-2 mx-10 items-center relative">
                <div className="flex mx-auto mt-4">
                    
                    <a href="https://bpitindia.com/" className="flex items-center">
                        <img src="/bpit-logo.jpeg" className="h-20 mr-3 rounded-full border-4 p-1" alt="bpit logo" />
                        <span className="text-xl font-semibold text-gray-800">Bhagwan parshuram institute of Technology</span>
                    </a>  
                    <div className="flex ml-auto w-1/2 justify-evenly items-center border">
                        <button className={props.leaveButton ? buttonActive: buttonInactive} onClick={props.onLeaveButtonClick}>Leave</button>
                        <button className={props.attendanceButton ? buttonActive: buttonInactive} onClick={props.onAttendanceButtonClick}>Attendance</button>
                        <button className={props.timetableButton ? buttonActive: buttonInactive} onClick={props.onTimetableButtonClick}>Time-Table</button>
                        <button className={props.lsButton ? buttonActive: buttonInactive} onClick={props.onLoginButtonClick}>Login/Register</button>
                    </div>
                </div>
                <hr className="border border-gray-600 mt-4"/>
            </nav>
        </>
    )
}