import React from "react";

function LeaderBoard() {
  return (
    <div className="overflow-x-auto text-light-yellow h-screen">
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
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td>Blue</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
            <td>Blue</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
            <td>Blue</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LeaderBoard;
