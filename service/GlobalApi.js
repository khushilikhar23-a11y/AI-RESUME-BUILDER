import axios from "axios";
// const { default: axios } = require("axios");
// const { data } = require("react-router-dom");

const API_KEY=import.meta.env.VITE_STRAPI_API_KEY;
const axiosClient=axios.create({
    baseURL:'http://localhost:1337/api/',
    headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${API_KEY}`
    }
})


const CreateNewResume=(payload)=>axiosClient.post('/user-resumes', { data:payload });
const GetUserResumes=(userEmail)=>axiosClient.get(`/user-resumes?filters[userEmail][$eq]=${userEmail}`);
const GetResumeById=(resumeId)=>axiosClient.get(`/user-resumes/${resumeId}`);

export default{
    CreateNewResume,
    GetUserResumes,
    GetResumeById
}