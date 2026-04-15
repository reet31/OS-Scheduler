# 🧠 OS Scheduler Visualizer

A web-based interactive simulator for CPU scheduling algorithms with real-time visualization, performance analysis, and intelligent algorithm recommendations.

---

## 🚀 Features

- ⚙️ Simulate CPU Scheduling Algorithms:
  - First Come First Serve (FCFS)
  - (Upcoming) Shortest Job First (SJF)
  - (Upcoming) Round Robin (RR)

- 📊 Performance Metrics:
  - Waiting Time
  - Turnaround Time
  - Execution Timeline (Gantt Chart)

- 🎮 Interactive UI:
  - Add / Delete processes dynamically
  - Real-time updates
  - Visual scheduling representation

- 🧠 Smart Recommendation System (Planned):
  - Suggests best algorithm based on input characteristics
  - Provides explanation for decision

- 📈 Graphical Comparison (Planned):
  - Compare algorithms visually using charts

---

## 🛠️ Tech Stack

- Frontend: React.js
- Visualization: Chart.js / Recharts (planned)
- Styling: CSS

---

## 📌 How It Works

1. Enter process details:
   - Process ID
   - Arrival Time
   - Burst Time
   - Priority (optional)

2. Click **Run FCFS**

3. The system:
   - Sorts processes by arrival time
   - Calculates start and finish times
   - Computes waiting and turnaround times
   - Displays execution order using a Gantt chart

---

## 🧪 Example

Input:
P1 → Arrival: 0, Burst: 5  
P2 → Arrival: 2, Burst: 3  

Output:
- Execution Order: P1 → P2  
- Waiting Time:
  - P1: 0
  - P2: 3  
- Turnaround Time:
  - P1: 5
  - P2: 6  

---

## 🔥 Upcoming Features

- ⏱️ Preemptive Scheduling (SRTF)
- 🔄 Round Robin with Time Quantum
- ⚡ Context Switching Cost Simulation
- ⚠️ Starvation Detection
- 🧠 Explainable "Theory Mode"
- 📤 Export Results (PDF / CSV)
- 🌙 Dark Mode UI

---

## 💡 Why This Project?

Most scheduling simulators only show results.

This project focuses on:
- Visualization
- Real-world behavior simulation
- Explainability
- User interaction

---

## 📦 Setup Instructions

```bash
git clone https://github.com/your-username/os-scheduler-visualizer.git
cd os-scheduler-visualizer
npm install
npm start