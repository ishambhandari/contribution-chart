import React, { useEffect, useState } from "react";

const token = 'token'

const headers = {
  "Content-Type": "application/json",
  Authorization: `bearer ${token}`
}
const github_baseurl = 'https://api.github.com/graphql';

async function getData(url, username) {

  const body = {
    "query": `query {
      user(login: "${username}") {
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
  }

  const response = await fetch(github_baseurl,
    { method: 'POST', body: JSON.stringify(body), headers: headers })
  const data = await response.json()
  console.log(data)
}

// https://gitlab.com/api/v4/events\?target_type\=issue\&action\=created\&after\=2021-01-31\&before\=2021-03-01\&scope\=all"
const ContributionChart = () => {
  const [gitlabdata, setGitlabdata] = useState(null);

  useEffect(() => {
    getData(github_baseurl, "iampratik32").then((res) =>
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
