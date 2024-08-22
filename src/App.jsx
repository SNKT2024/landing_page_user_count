import "./App.css";
import { Table } from "react-bootstrap";
import { db } from "./firebase";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

function App() {
  const [waitlistData, setWaitlistData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRef = collection(db, "waitlist");
        const q = query(userRef, orderBy("timestamp", "desc"));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setWaitlistData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2>Total Count: {waitlistData.length}</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>TimeStamp</th>
          </tr>
        </thead>
        <tbody>
          {waitlistData.map((entry, index) => (
            <tr key={entry.id}>
              <td>{index + 1}</td>
              <td>{entry.email}</td>
              <td>{entry.timestamp?.toDate().toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default App;
