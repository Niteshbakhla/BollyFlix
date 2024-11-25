import React, { useEffect, useState } from 'react'
import Adminmoviecard from './Adminmoviecard'
import Moviecard from './Moviecard'
import axios from 'axios'


const Allpost = () => {

  const [posts, setPosts] = useState([])

  const getAllPost = async () => {
    const { data } = await axios.get(import.meta.env.VITE_API_URL + "/getAll-movies")
    setPosts(data.data)
  }

  useEffect(() => {
    getAllPost();
  }, [])
  return (
    <div className='mx-8'>
      <h3 className='text-2xl font-bold'>
        Posts until now
      </h3>

      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 '>


        {

          posts?.map((data) => (

            <Moviecard

              to={data.movieName}
              getPost={getAllPost} id={data._id}
              image={data.screenshots[0]?.secure_url}
              title={data.movieName} />

          ))
        }

      </div>
    </div>
  )
}

export default Allpost