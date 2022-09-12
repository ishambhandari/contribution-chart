import React, { useEffect, useState } from "react";

const token = 'testing'

const headers = {
  "Content-Type": "application/json",
  Authorization:`bearer ${token}` 
};

const query_github = `
query {
  viewer {
    contributionsCollection(from: "2021-01-01T00:00:00", to: "2021-12-01T00:00:00") {
      contributionCalendar {
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
  }
}`
const github_baseurl = 'https://api.github.com/graphql';

async function getData(url) {
  try {
  const responseGitlab= fetch(github_baseurl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({query:query_github})
  })
    // const responseGitlab = await axios.post(
    //   `${url}`,
    //   {
    //     headers: {
    //       "Authorization": "bearer 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V",
    //     },
    //   }
    // );
    responseGitlab.then((res)=>{
    console.log("t", res)
    return responseGitlab;
    })
  } catch (error) {
    console.log("error", error);
    return error;
  }
}

// https://gitlab.com/api/v4/events\?target_type\=issue\&action\=created\&after\=2021-01-31\&before\=2021-03-01\&scope\=all"
const ContributionChart = () => {
  const [gitlabdata, setGitlabdata] = useState(null);

  useEffect(() => {
    getData(github_baseurl).then((res)=>
    setGitlabdata(res)
    )
  }, []);
  return (
    <div>
      <div>{JSON.stringify(gitlabdata)}</div>
    </div>
  );
};

export default ContributionChart;
