import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { AddMeetingFormPage } from "./pages/AddMeetingFormPage/AddMeetingFormPage";
import { MeetingsPage } from "./pages/MeetingsPage/MeetingsPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/meetings" element={<MeetingsPage />} />
        <Route path="/add-meetings" element={<AddMeetingFormPage />} />
        <Route path="/" element={<Navigate to="/meetings" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
