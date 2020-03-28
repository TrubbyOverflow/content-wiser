import React from 'react'
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import withData from '../lib/apollo'


const GET_USERS = gql`
  {
    User {
      name
    }
  }
`

const UserList = () => {
  const { loading, error, data, fetchMore } = useQuery(GET_USERS, {
    notifyOnNetworkStatusChange: true
  });

  if(loading || error) {
    return <div></div>
  }

  const users = data.User
  return (
    <div>
      {users.map(user => {
        return <div key={user.name}>{user.name}</div>
      })}
    </div>
  )
}

export default withData(UserList)
