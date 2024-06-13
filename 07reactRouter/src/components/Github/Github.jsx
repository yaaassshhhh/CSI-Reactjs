import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/yaaassshhhh')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)})
    // },[])
    //this api call can be optimize and made more efficient by using loader attribute in the router itself. it calls the api before we route to the page and then we can use that data in the page itself.
    //useEffect starts fetching the data as soon as the component is mounted or when we click on the route 
    //but with loaders as soom as the mouse hovers over the link the data starts fetching and when we click on the link the data is already there.
    //moreover it caches the fetched data thus making the page load faster. even if the user clicks later.
    //useLoaderData is udes to access the data fetched by the loader attribute in the router.
    const data = useLoaderData()
  return (
    <div className='bg-gray-900 text-white text-3xl p-4 text-center '>
    <img src={data.avatar_url} alt="GITHUB_DP" className="rounded-full w-20 h-20" />
    
    Github Followers : {data.followers !== undefined ? data.followers : 'Loading...'}    

    </div>
  )
}

export default Github

export const githubInfoLoader = async() => { 
    const response = await fetch('https://api.github.com/users/yaaassshhhh')
    return response.json()
}