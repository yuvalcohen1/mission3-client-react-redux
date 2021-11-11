import React from "react";

export const TableRow = ({ index, meeting }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{meeting.startAt}</td>
      <td>{meeting.endAt}</td>
      <td>{meeting.description}</td>
      <td>{meeting.room}</td>
    </tr>
  );
};
