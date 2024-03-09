"use client"

import React, { useState } from 'react';


export default function alert({ msg }) {

    return (
        <>
            <div className="bg-[#0D99FF] p-5 rounded-xl">
                {msg}
            </div>
        </>
    )
}
