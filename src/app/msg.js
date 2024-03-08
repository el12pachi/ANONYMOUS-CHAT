'use client'

export function Send({ msg }) {
    if (msg === "") return null;
    return (
        <div className="w-full flex flex-col justify-normal items-end p-1" >
            <div className="p-4 bg-[#333333] rounded-lg text-white">
                {msg}
            </div>
        </div>
    )
}

export function Recived({ msg }) {
    if (msg === "") return null;
    return (
        <div className="w-full flex flex-col justify-normal items-start p-1" >
            <div className="p-4 bg-[#333333] rounded-lg text-white">
                {msg}
            </div>
        </div>
    )
}