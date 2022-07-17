import axios from "axios";


const baseURL = "http://localhost:3000/Journals";
// to launch in 2nd terminal npx json-server --watch journals.json

const API = {
        getAll: () =>{
            return axios.get(baseURL);
        },
        createJournal: (newJournal)=> {
            return axios.post(baseURL, newJournal)
        },
        getJournalById: (id) => {
            return axios.get(`${baseURL}/${id}`);
        },

    updateJournal: (id, updatedJournal) => {
        return axios.put(`${baseURL}/${id}`, updatedJournal);
    },
    deleteJournal: (id) => {
        return axios.delete(`${baseURL}/${id}`);
    }
    }
export default API;