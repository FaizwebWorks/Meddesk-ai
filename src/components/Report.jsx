import demo from "../assets/demo.jpg"
const Report = () => {
  return (
    <div className="w-[90%] mx-auto mt-6 bg-zinc-100 h-[70vh] p-5 overflow-auto">
        <img className="w-full h-full object-contain" src={demo} alt="image" />
    </div>
  )
}

export default Report