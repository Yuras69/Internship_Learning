import React from 'react'
import {useState}  from 'react'

function Github() {
const [followers, setFollowers] = useState(0)

  return (
    <div className='bg-green-400 flex justify-center items-center h-screen text-2xl font-bold text-white px'>
      GitHub Followers: {followers}
    <button className='ml-4 bg-orange-700 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded' onClick={() => setFollowers(followers + 1)}>
        Follow
      </button>
    </div>
  )
}

export default Github
