import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { TableRow } from "../TableRow/TableRow";

export const MeetingsTable = () => {
  const meetingsByTeamId = useSelector((state) => state.meetings.data);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Start</th>
          <th>End</th>
          <th>Description</th>
          <th>Room</th>
        </tr>
      </thead>
      <tbody>
        {meetingsByTeamId.map((m, i) => (
          <TableRow key={m.id} index={i} meeting={m} />
        ))}
      </tbody>
    </Table>
  );
};
