import logo from "../assets/meddesk-logo.png"

const Navbar = () => {
  return (
    <div className="w-full relative py-4 px-10 flex items-center justify-between">
        <img width={250} className="bg-white p-1 mt-[-40px]" src={logo} alt="LOGO" />
        <p className="absolute text-lg font-medium text-black bg-white uppercase mt-10 w-fit px-[29px]">IT just works Better</p>
        <div className="flex items-center gap-6 font-medium pt-2">
            <a className="border-2 border-green-500 p-8 text-black text-lg bg-pink-200" href="/">Home</a>
            <a className="bg-white border-2 border-green-500 p-8 text-black text-lg" href="/transcript">Transcript</a>
            <a className="bg-white border-2 border-green-500 p-8 text-black text-lg" href="/report">Report</a>
            <a className="bg-white border-2 border-green-500 p-8 text-black text-lg" href="/p3">p3</a>
        </div>
    </div>
  )
}

export default Navbar