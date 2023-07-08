import React from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { useEffect } from 'react';

export default function Gotoup() {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <div className='goto container-fluid'>
                <button className='goto-up'
                    onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }}>
                    <IoIosArrowUp></IoIosArrowUp>
                </button>
            </div>
        </>
    )
}
