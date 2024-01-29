import React, { useEffect } from 'react'

export interface GithubProps {
  token: string;
  onError: (error: string) => void;
}

const Github: React.FunctionComponent<GithubProps> = ({ token, userName, onError }) => {
  
  const headers = {
    "Content-Type": "application/json",
    Authorization: `bearer ${token}`
  }
  const githubBaseUrl = 'https://api.github.com/graphql';

  const getData = async () => {
    const body = {
      "query": `query {
            user(login: "${userName}") {
              contributionsCollection(from: "2023-01-01T00:00:00", to: "2023-12-01T00:00:00") {
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

    await fetch(githubBaseUrl, { method: 'POST', body: JSON.stringify(body), headers: headers }).then(data => {
      if(data.status!=200) onError(`Something Went Wrong`)
    }).catch(err => {
      onError(err)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>index</div>
  )

};

export default Github