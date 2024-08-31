import { FaPlay } from "react-icons/fa";
import { IoPrint } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const Buttons = () => {
  const location = useLocation();
  return (
    <div className="w-full flex pt-5 px-16 justify-end gap-5">
      {(location.pathname === "/transcript" ||
        location.pathname === "/report") && (
        <button className="h-12 w-12 flex items-center justify-center bg-green-500 rounded-full">
          <FaPlay className="text-white h-5 w-5" />
        </button>
      )}
      {location.pathname === "/report" && (
        <button className="h-12 w-12 flex items-center justify-center rounded-full bg-green-500">
          <IoPrint className="text-white h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default Buttons;
