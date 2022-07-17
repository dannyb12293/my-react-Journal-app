import React from "react";
import { useParams } from "react-router-dom";
import JournalContext from "../../UTILS/JournalContext";
import { useContext } from "react";


const UpdateJournal = () => {

    let { id } = useParams();
    const context = useContext(JournalContext);

    return(
        <div className="update-header">
          <form className="forms"> 
            <h3>Update this Journal</h3>
            <label htmlFor="title">Update Title</label>
            <br/>
            <input name="title" onChange={context.handleTitleChange} ></input>
            <br/>
            <label htmlFor="body">Update Body </label>
            <br/>
            <textarea
              rows="20"
              cols="50"
              name="body"
              onChange={context.handleBodyChange}>
              </textarea>
              <br/>
              <button
               className="btn"
               type="button"
               value="Submit"
               onClick={() =>context.updateJournal(id)}>
                  Update Journal
              </button>
        </form>
        </div>
    );
};

export default UpdateJournal;