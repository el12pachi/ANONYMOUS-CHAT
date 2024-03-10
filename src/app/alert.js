"use client"

import React, { useState } from 'react';


export default function alert({ msg }) {
    var type = "";

    if (!msg.length) {
        return (<></>)
    } else {
        return (
            <>
                <div className={`p-5 rounded-xl ${type=='damage'?'bg-[#d53d3d]':'bg-[#37bd42]'}`}>
                    {msg}
                </div>
            </>
        )
    }
}
