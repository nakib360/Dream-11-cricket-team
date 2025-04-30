import { useEffect, useState } from "react";
import Player from "./Player";
import Selected from "../Selected/Selected";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Players = ({ coins, setCoins }) => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [activeTab, setActiveTab] = useState("available"); 

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const handSelectPlayers = (player) => {
    const alreadySelected = selectedPlayers.find((p) => p.id === player.id);
    if (alreadySelected) {
      toast.error("The player is already selected. Please select another.");
      return;
    }

    if (coins < player.price) {
      toast.error("Not enough coins!");
      return;
    }

    setSelectedPlayers([...selectedPlayers, player]);
    setCoins((prev) => prev - player.price);
    toast.info("The player is successfully added!");
  };

  return (
    <div className="px-20 py-20 pb-70">
      <div className="flex justify-between items-center">
        <p className="text-3xl font-bold">{activeTab === "available" ? "Available Players" : `Selected Players (${selectedPlayers.length}/${players.length})`}</p>
        <div className="flex items-center">
          <button onClick={() => setActiveTab("available")} className={`text-sm px-3 py-2 border ${activeTab === "available" ? "border-yellow-400 bg-yellow-200" : "border-slate-400 hover:border-yellow-200 hover:bg-yellow-200"} rounded-l-2xl`}>Available Players</button>
          <button onClick={() => setActiveTab("selected")} className={`text-sm px-3 py-2 border ${activeTab === "selected" ? "border-yellow-400 bg-yellow-200" : "border-slate-400 hover:border-yellow-200 hover:bg-yellow-200"} rounded-r-2xl`}>Selected Players</button>
        </div>
      </div>

      {/* Available Players Section */}
      {activeTab === "available" && ( <div className="py-10 grid grid-cols-3 gap-10"> {players.map((player) => (
            <Player key={player.id} handSelectPlayers={handSelectPlayers} players={player}/>
            ))}
        </div>
      )}

      {/* Selected Players Section */}
      {activeTab === "selected" && (<div className="mt-10">
          <p className="text-3xl font-bold mb-6"></p>
          {selectedPlayers.length === 0 ? (<p className="text-slate-500">No players selected yet.</p>) : (
            selectedPlayers.map((player) => (
              <Selected key={player.id} selectedPlayer={player} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} setCoins={setCoins} />
            ))
          )}
        </div>
      )}

      {/* Toast Container */}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default Players;
