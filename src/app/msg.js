'use client'

export function Send({ msg }) {
    if (msg === "") return null;
    return (
        <div className="w-full flex h-auto justify-end p-1" >
            <div className="p-4 bg-[#333333] rounded-lg text-white break-all max-w-[70%]">
                {msg}
            </div>
        </div>
    )
}

export function Recived({ msg }) {
    if (msg === "") return null;
    return (
        <div className="w-full flex h-auto justify-start p-1" >
            <div className="p-4 bg-[#333333] rounded-lg text-white break-all max-w-[70%]">
                {msg}
            </div>
        </div>
    )
}