import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data = useLoaderData();

    // Below method is not optimised because API fetching is being done after clicking the GitHub link in Nav 
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/ANANDSYADAV')
    //     .then((res) => res.json())
    //     .then((data) => (
    //         setData(data)
    //     ))
    // }, [])
  return (
    <div className='bg-green-700 text-white text-3xl p-4 m-3 text-center'>
        GitHub Followers: {data.followers} 
        <div className='flex justify-center'>
        <img className='rounded-3xl my-3' src={data.avatar_url} alt="GitHub Pic" height={300} width={300} /> </div>
        </div>
  )
}

export default GitHub