import React, { useCallback } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { apiBase } from "../../api-client/api-client";

export const AddMeetingFormPage = () => {
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const meeting = {
        teamId: e.target.teamId.value,
        startAt: e.target.startAt.value,
        endAt: e.target.endAt.value,
        description: e.target.description.value,
        room: e.target.room.value,
      };

      try {
        await apiBase.post("/add-meeting", meeting);

        e.target.reset();

        navigate("/meetings");
      } catch (err) {
        console.log(err);
      }
    },
    [navigate]
  );

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="my-3" controlId="id">
          <Form.Label>Team ID</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter team ID"
            name="teamId"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="start">
          <Form.Label>Start Time</Form.Label>
          <Form.Control type="datetime-local" name="startAt" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="end">
          <Form.Label>End Time</Form.Label>
          <Form.Control type="datetime-local" name="endAt" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description..."
            name="description"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="room">
          <Form.Label>Room</Form.Label>
          <Form.Control type="text" name="room" required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
