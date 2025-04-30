import { RiDeleteBin6Line } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Selected = ({ selectedPlayer, selectedPlayers, setSelectedPlayers }) => {
  const { name, hand, image, id } = selectedPlayer;

  const handleDeletePlayer = () => {
    const updatedPlayers = selectedPlayers.filter((player) => player.id !== id);
    setSelectedPlayers(updatedPlayers);
    toast.info("player is removed");
  };

  return (
    <div>
      <div className="border border-slate-300 rounded-2xl px-5 py-5 flex justify-between items-center mt-4 mb-4">
        <div className="flex items-center gap-5">
          <img
            className="h-20 w-20 rounded-2xl object-cover"
            src={image}
            alt={name}
          />
          <div className="flex justify-between gap-4 flex-col">
            <p className="text-xl font-bold">{name}</p>
            <p className="text-slate-400">{hand}</p>
          </div>
        </div>
        <RiDeleteBin6Line
          onClick={handleDeletePlayer}
          className="text-red-500 h-7 w-7 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Selected;
