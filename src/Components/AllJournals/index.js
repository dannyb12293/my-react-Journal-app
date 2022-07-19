import React from "react";
import CreateJournal from "../CreateJournal";
import JournalContext from "../../UTILS/JournalContext";
import { useContext } from "react";


const AllJournals = ({ journalData })=> {
const context = useContext(JournalContext);

    // console.log(journalData)
return(
        <div className="container header">
            <CreateJournal />
        <div>
        {journalData.map((journal) => (
            <div key={journal.id}className="one-journal">
                <h3>
                    <b>{journal.title}</b>
                
                </h3>
                

                <a className="btn btn-light" href={`one-journal/${journal.id}`}>
                {" "}
                View Journal{" "}
                </a>

                <a className="btn btn-secondary" href={`update-journal/${journal.id}`}>
                {" "}
                Update Journal{" "}
                </a>
                <button className="btn btn-dark" onClick={() => context.handleDelete(journal.id)}>Delete</button>
            </div>
        ))}
        </div>
        </div>
    );
};


export default AllJournals;