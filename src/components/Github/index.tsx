import React, { useEffect } from 'react'

export interface GithubProps {
  token: string;
  userName: string;
  onSuccess: (data: any) => void;
  onError: (error: string) => void;
}

const Github: React.FunctionComponent<GithubProps> = ({ token, userName, onSuccess, onError }) => {

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

    await fetch(githubBaseUrl, { method: 'POST', body: JSON.stringify(body), headers: headers })
      .then(function (response) {
        response.json().then((responseBody) => {
          if (response.status == 200) {
            if (responseBody.errors) onError(responseBody.errors[0]?.message)
            else onSuccess(responseBody.data?.user?.contributionsCollection?.contributionCalendar)
          }
          else onError(responseBody?.message)
        }).catch((err:any) => onError(`Malformed Json ${err}`))
      }).catch((err: any) => onError(JSON.stringify(err)));
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <></>
  )

};

export default Github