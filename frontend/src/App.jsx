import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/students");
      setStudents(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>CampusCore Student Dashboard</h1>

      {students.map((student) => (
        <div
          key={student._id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{student.name}</h3>
          <p>Age: {student.age}</p>
          <p>Course: {student.course}</p>
        </div>
      ))}
    </div>
  );
}

export default App;