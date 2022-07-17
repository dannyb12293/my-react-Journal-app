import React from "react";
import JournalContext from "../../UTILS/JournalContext";
import { useContext } from "react";

const CreateJournal =() =>{

    const context = useContext(JournalContext);

    return(

        <div>
        <form onSubmit={context.handleSubmit} className="forms">
            <label htmlFor="title">Title Of Journals</label>
            <br/>
            <input name="title" onChange={context.handleTitleChange} ></input>
            <br/>
            <label htmlFor="body">Body of Journal</label>
            <br/>
            <textarea
              rows="20"
              cols="50"
              name="body"
              onChange={context.handleBodyChange}>
              </textarea>
              <br/>
              <button onClick={context.handleSubmit} className="btn" type="button">
                  Add Journal
              </button>
        </form>
        </div>
    );
};

export default CreateJournal;



// line 5 reference
// { handleSubmit, handleTitleChange, handleBodyChange }