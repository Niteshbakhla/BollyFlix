import axios from 'axios'
import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import toast, { Toaster } from 'react-hot-toast'

const Moviecard = ({ image, to, title, id, getPost }) => {

            const deletePost = async (id) => {

                        try {
                                    const { data } = await axios.delete(import.meta.env.VITE_API_URL + "/delete-movie/" + id)
                                    toast.success(data.message)

                        } catch (error) {
                                    console.log(error.message)
                        }
            }

            useEffect(() => {
                        getPost()
            }, [])

            return (
                        <div className=' w-[85vw]  m-auto md:w-[15rem]  p-2 md:h-[400px] rounded-xl shadow-md lg:m-6'>
                                    <Toaster position='top-center' />
                                    <img className='rounded-sm' src={image} alt="" />
                                    <h2 className='px-3'>Download: {title}</h2>
                                    <Button onClick={() => deletePost(id)} >Delete</Button>
                        </div>
            )
}

export default Moviecard