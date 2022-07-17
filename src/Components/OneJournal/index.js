import React, {useEffect, useState} from "react";
import API from "../../UTILS/API";
import { useParams } from "react-router-dom";
import JournalContext from "../../UTILS/JournalContext";
import { useContext } from "react";


const OneJournal =() => {
  const [journal, setJournal] = useState({});
  const { id } = useParams();
  const context = useContext(JournalContext);

useEffect (() => {
   const getJournal = () => {
    API.getJournalById(id).then(res => {
      console.log(res);
      setJournal(res.data);
      console.log(journal);
            });
        };

    getJournal();
    },[]);

    return(
        <div className="view-journal">
        <h3>{journal.title}</h3>
        <p>{journal.body}</p>
        <button className="btn" onClick={() => context.handleDelete(journal.id)}>Delete</button>
        <a className="btn" href={`/update-journal/${journal.id}`}>Update Journal</a>
        </div>
    );
};

export default OneJournal;