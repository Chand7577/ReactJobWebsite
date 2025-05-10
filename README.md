# 🧑‍💼 Job Listing App

A responsive React application that allows users to **add**, **edit**, **delete**, and **view** job listings. Built  using React for the frontend and JSON Server as a mock backend. The app also features toast notifications for user feedback and a modern UI built with Tailwind CSS.

---

## 🚀 Features

- ✅ Create new job listings
- ✏️ Edit existing job posts
- 🗑️ Delete job listings
- 📄 View all job posts in a list
- 🔔 Toast notifications on successful actions
- ⚡ Dynamic routing with React Router
- 📱 Mobile-responsive design

---

## 🛠️ Tech Stack

- **React** – Component-based UI framework
- **JSON Server** – Quick mock backend to simulate RESTful APIs
- **Tailwind CSS** – Utility-first CSS for responsive UI
- **React Toastify** – Toast alerts for user feedback
- **React Router** – For client-side routing

---

## 📦 About JSON Server

**JSON Server** is a zero-configuration tool that turns a simple `db.json` file into a full REST API. It’s great for prototyping and front-end development without needing a real backend.

In this project, it powers all CRUD operations:

- `GET /jobs` – Fetch job listings  
- `POST /jobs` – Add a new job  
- `PUT /jobs/:id` – Update a job  
- `DELETE /jobs/:id` – Delete a job

Start it with:

```bash
npx json-server --watch db.json --port 8000
