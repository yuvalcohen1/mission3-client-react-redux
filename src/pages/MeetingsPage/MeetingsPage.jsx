import React, { useCallback } from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { MeetingsTable } from "../../components/MeetingsTable/MeetingsTable";
import { fetchMeetingsById } from "../../features/meetings/meetingsSlice";

export const MeetingsPage = () => {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams.data);
  const meetingsByTeamId = useSelector((state) => state.meetings.data);

  const handleChange = useCallback(
    (e) => {
      const selectedTeamId = e.target.value;
      dispatch(fetchMeetingsById(selectedTeamId));
    },
    [dispatch]
  );

  return (
    <Container>
      <h1 className="meetings-header text-center my-3">Meetings Schedule</h1>

      <Form.Select
        className="my-3"
        aria-label="Default select example"
        onChange={handleChange}
      >
        <option>Choose Team</option>
        {teams.map((team) => (
          <option key={team.id} value={team.id}>
            {team.teamName}
          </option>
        ))}
      </Form.Select>

      {meetingsByTeamId.length ? <MeetingsTable /> : null}
    </Container>
  );
};
