import React, {useEffect, useState } from 'react';
import AllJournals from './Components/AllJournals';
import API from './UTILS/API';
import './App.css';
import OneJournal from './Components/OneJournal';
import { Routes, Route, useNavigate } from "react-router-dom";
import UpdateJournal from './Components/UpdateJournal';
import JournalContext from './UTILS/JournalContext';
import NavBar from './Components/NavBar';




function App() {
const [ allJournals, setAllJournals ] = useState([]);
const [ newJournal, setNewJournal ] = useState({
  title:"",
  body:""
});

const [refresh, setRefresh] = useState({count:0 });
const navigate = useNavigate();

useEffect(() => {
getAllJournals();
}, []);

const getAllJournals = () => {
   API.getAll().then((res) => {
     setAllJournals(res.data);
   });
 };

useEffect(() => {
  getAllJournals();
}, [refresh]);

const contextObject ={
  handleSubmit: (e) => {
    e.preventDefault();
    API.createJournal(newJournal).then(res =>{
    console.log(res);
    setRefresh({...refresh, count: refresh.count +1 });
    document.querySelector(".forms").reset();
  });
  },

  handleTitleChange: (e) => {
    const {value} = e.target;
    setNewJournal({...newJournal, title: value});
  },
  handleBodyChange: (e) => {
    const {value} = e.target;
    setNewJournal({...newJournal, body: value});
  },
  updateJournal: (id) => {
    API.updateJournal(id, newJournal).then(res => {
      console.log(res);
      setRefresh({...refresh, count: refresh.count +1 });
      navigate("/");
    });
  },
  handleDelete: (id) => {
    API.deleteJournal(id).then(res => {
      console.log(res);
      setRefresh({...refresh, count: refresh.count +1 });
      navigate("/");
    });
},
};

  return (
    <div>
      <JournalContext.Provider value={contextObject}>
      <NavBar />
        <Routes>
          <Route path="/" exact element={<AllJournals journalData={allJournals} /> }/>
          <Route path="/one-journal/:id" element={<OneJournal />} />
          <Route path="/update-journal/:id" element={<UpdateJournal />} />
       </Routes>
       </JournalContext.Provider>
    </div>
  );
}


export default App;








// const handleTitleChange =(e) => {
//   const {value} = e.target;


// setNewJournal({...newJournal, title: value});
// };

// const handleBodyChange =(e) => {
//   const {value} = e.target;


// setNewJournal({...newJournal, body: value});
// };


// const handleSubmit = (e) =>{
//   e.preventDefault();


//   API.createJournal(newJournal).then(res =>{
//     // console.log(res)
//   })
//   // console.log(newJournal)
// }

// const updateJournal= (id) => {
//   API.updateJournal(id, newJournal).then(res => {
//     console.log(res);
//     setRefresh({...refresh, count: refresh.count +1 });
//     navigate("/");
//   })
// }

// const handleDelete = (id) => {
//   API.deleteJournal(id).then(res => {
//     console.log(res);
//     setRefresh({...refresh, count: refresh.count +1 });
//     navigate("/");
//   });
// };