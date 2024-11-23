import React from 'react'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setTab } from '../../../stores/slices/navSlice'
import axios from 'axios'
import { logout } from '../../../stores/slices/authSlice'
import toast, { Toaster } from 'react-hot-toast'

const Adminnavbar = () => {
            const navigate = useNavigate()
            const dispatch = useDispatch();
            const handleLogout = async () => {
                        try {
                                    dispatch(logout())
                                    const { data } = await axios.post(import.meta.env.VITE_API_URL + '/logout')

                                    if (data.success) {
                                                toast.success(data.message)
                                                setTimeout(() => {
                                                            navigate("/admin/login")
                                                }, 1000);
                                    }
                        } catch (error) {
                                    console.log(error.message)
                        }
            }
            return (
                        <div>
                                    <nav className='flex justify-between items-center my-5 mx-8  '>
                                                <Toaster position='top-center' />
                                                <ul className='flex gap-3 font-semibold'>
                                                            <li onClick={() => dispatch(setTab("create-post"))}
                                                                        className='font-semibold text-gray-600 hover:text-black 
                                                            cursor-pointer hover:underline'>Create Post</li>
                                                            <li onClick={() => dispatch(setTab("all-post"))}
                                                                        className='font-semibold text-gray-600 hover:text-black
                                                             cursor-pointer hover:underline'>All Post</li>
                                                </ul>

                                                <Button onClick={handleLogout} >Logout</Button>
                                    </nav>
                        </div>
            )
}

export default Adminnavbar