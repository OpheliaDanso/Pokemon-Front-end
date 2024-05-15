import React, { useState, useEffect } from "react";

function LeaderBoard() {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/winners")
      .then((response) => response.json())
      .then((data) => {
        setLeaderboardData(data); // Assuming your API response is an array of objects containing the required fields (name, wins, loses, points)
      })
      .catch((error) => {
        console.error("Error fetching leaderboard data:", error);
      });
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <div className="overflow-x-auto text-light-yellow h-screen">
      <div className="flex justify-center pt-10 pb-10 text-2xl underline">
        <h1>Leaderboard</h1>
      </div>
      <table className="table table-zebra">
        {/* head */}
        <thead className="text-light-yellow">
          <tr>
            <th></th>
            <th>Name</th>
            <th>Wins</th>
            <th>Loses</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((player, index) => (
            <tr key={player._id}>
              <th>{index + 1}</th>
              <td>
                {player.first_name} {player.last_name}
              </td>
              <td>{player.wins}</td>
              <td>{player.loses}</td>
              <td>{player.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaderBoard;
