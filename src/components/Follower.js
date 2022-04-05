import React from 'react'
const Follower = ({ userData }) => {

  return <article className='card'>
    <img src={userData.avatar_url} alt={userData.login} />
    <h4> {userData.login}</h4>
    <a className='btn' href={userData.html_url} target="_blank" rel="noopener noreferrer">view profile</a>
  </article>
}

export default Follower
