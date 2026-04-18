import { useState } from 'react';
import {FCFS} from './Algorithms/fcfs';
import {SJF} from './Algorithms/sjf';
import {SRTF} from './Algorithms/srtf';
function App() {
  const [output, setOutput] = useState(null);
  const [processes, setProcesses] = useState([]);
  const [form, setForm] = useState({
    id: "",
    burst:"",
    priority: "",
  arrival: "",
  });
  const addProcess = () => {
    if( !form.id || form.burst === "" || form.arrival === ""){
      alert("Please fill all fields");
      return;
    }
    const newProcess ={
      id: form.id,
      burst: Number(form.burst),
      priority:form.priority? Number(form.priority): null,
      arrival: Number(form.arrival),
    };
    setProcesses([...processes,newProcess]);

    setForm({
      id: "",
      burst:"",
      priority: "",
      arrival: "",
    });
  }
  const deleteProcess = (id) => {
  setProcesses(processes.filter(p => p.id !== id));
};
const handleRun =() =>{
  const res=FCFS({processes});
  setOutput(res);
}
const handleRunSJF =() =>{
  const res=SJF({processes});
  setOutput(res);
}
const handleRunSRTF =() =>{
  const res=SRTF({processes});
  setOutput(res);
}
  return (
    //basic input form
    <>
    <div className="App">
      <input placeholder="Process ID"
      value={form.id}
      onChange={(e)=>setForm({...form,id:e.target.value})}/>
      
      <input 
      type="number"
      placeholder="Burst Time"
      value={form.burst}
      onChange={(e)=>setForm({...form,burst:e.target.value})}/>
      
      <input 
      type="number"
      placeholder="Priority"
      value={form.priority}
      onChange={(e)=>setForm({...form,priority:e.target.value})}/>
      
      <input 
      type="number"
      placeholder="Arrival Time"
      value={form.arrival}
      onChange={(e)=>setForm({...form,arrival:e.target.value})}/>
      <button onClick={()=>{
        setProcesses([...processes,form]);
        setForm({
          id: "",
          burst:"",
          priority: "",
          arrival: "",
        });
      }}>Add Process</button>
      <button onClick={handleRun}>Run FCFS</button>
      <button onClick={handleRunSJF}>Run SJF</button>
      <button onClick={handleRunSRTF}>Run SRTF</button>

    </div>
    <table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Arrival</th>
      <th>Burst</th>
      <th>Priority</th>
    </tr>
  </thead>
  <tbody>
    {processes.map((p, index) => (
      <tr key={index}>
        <td>{p.id}</td>
        <td>{p.arrival}</td>
        <td>{p.burst}</td>
        <td>{p.priority ?? "-"}</td>
        <td><button onClick={() => deleteProcess(p.id)}>Delete</button></td>
      </tr>
    ))}
  </tbody>
</table>
{output && (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Start</th>
        <th>Finish</th>
        <th>Waiting</th>
        <th>Turnaround</th>
      </tr>
    </thead>
    <tbody>
      {output.result.map((p, i) => (
        <tr key={i}>
          <td>{p.id}</td>
          <td>{p.start}</td>
          <td>{p.finish}</td>
          <td>{p.waitingTime}</td>
          <td>{p.turnaroundTime}</td>
        </tr>
      ))}
    </tbody>
  </table>
)}
{output && (
  <div style={{ display: "flex", marginTop: "20px" }}>
    {output.timeline.map((block, i) => (
      <div
        key={i}
        style={{
          padding: "10px",
          border: "1px solid black",
          minWidth: "50px",
          textAlign: "center"
        }}
      >
        {block.id}
        <br />
        {block.start}-{block.end}
      </div>
    ))}
  </div>
)}
</>
  );
}

export default App;
