import React from 'react';
import axios from 'axios';


const gitlabUrl = "https://gitlab.com/users"
async function getData(userName) {
  try{
    const responseGitlab = axios.get(`${gitlabUrl}/${userName}/calendar.json`);
    return responseGitlab;
  }

  catch(error) {
    console.log('error',error)
    return error;
  }

} 

export  {getData}

