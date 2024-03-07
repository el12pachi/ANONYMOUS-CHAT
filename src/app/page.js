export default function Home() {
  const msg = ["Hola buenas tardes", "Como estas?", "Bien y tu?", "Tambien bien", "Que  haces?", "Nada, tu?  ", "Igual, nada"];
  
  return (
    <>
      <div className="h-screen w-screen bg-[#333333] flex items-center justify-center">
        <div className="bg-[#3F3F3F] w-[900px] h-[700px] rounded-[50px] overflow-hidden relative">
          <div className="w-full h-24 bg-[#0D99FF] flex justify-center items-center text-5xl text-white font-bold">CHAT ANONYMOUS</div>
          <div className="bg-[#3F3F3F] h-full">

          </div>
          <div className="w-full flex items-center justify-center h-auto absolute bottom-0 p-6  gap-3">
            <input type="text"
            className="w-full h-12 rounded-[59px] bg-[#D7D7D7] text-2xl p-4 focus:outline-none text-[#333333]"
            >
            </input>
            <button 
            className="w-24 h-12 bg-[#0D99FF] text-white text-2xl font-bold rounded-[59px] hover:"
            >Send</button>
          </div>
        </div>
      </div>
    </>
  )

}