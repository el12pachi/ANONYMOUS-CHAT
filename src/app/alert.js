export default function alert({ msg }) {
    var type = "";

    if (!msg.length) {
        return (<></>)
    } else {
        return (
            <>
                <div className={`p-5 rounded-xl bg-[#0D99FF]`}>
                    {msg}
                </div>
            </>
        )
    }
}
