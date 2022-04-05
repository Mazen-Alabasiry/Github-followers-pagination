import React from 'react'
import Loading from './Loading'
import Follower from './Follower'
function UsersList({ users, loading }) {
    return (
        <section className='followers'>
            {loading ? <Loading /> :
                <div className='container'>
                    {users.map(user => user && <Follower key={user.id} userData={user} />)}
                </div>
            }
        </section>
    )
}

export default UsersList