import React from "react";
import { toast, ToastContainer } from "react-toastify";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Base from "./layouts/Base";
import JobsPage from "./pages/JobsPage";
import NotFound from "./pages/NotFound";
import JobPage from "./pages/JobPage";
NotFound;
import { AddJobPage } from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
const App = () => {
  // add new job
  const addJob = async (job) => {
    const res = await fetch("https://json-server-wiov.onrender.com/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  };
  // delete job

  const deleteJob = async (id) => {
    const res = await fetch(`https://json-server-wiov.onrender.com/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  // edit job
  const EditJob = async (job) => {
    const res = await fetch(`https://json-server-wiov.onrender.com/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Base />}>
        <Route index element={<Home />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path="/edit/:id" element={<EditJobPage EditJob={EditJob} />} />

        <Route path="jobs/:id" element={<JobPage deleteJob={deleteJob} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
