import logo from "../assets/meddesk-logo.png"

const Navbar = () => {
  return (
    <div className="w-full relative py-4 px-10 flex items-center justify-between">
        <img width={120} src={logo} alt="LOGO" />
        <p className="absolute text-sm font-medium text-zinc-700 mt-10">IT just works Better</p>
        <div className="flex items-center gap-6 font-medium pt-2">
            <a href="/">Home</a>
            <a href="/transcript">Transcript</a>
            <a href="/report">Report</a>
            <a href="/p3">p3</a>
        </div>
    </div>
  )
}

export default Navbar