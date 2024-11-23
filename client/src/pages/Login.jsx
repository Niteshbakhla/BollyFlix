import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../stores/slices/authSlice'
import toast, { Toaster } from 'react-hot-toast'

const Login = () => {

            const navigate = useNavigate();
            const dispatch = useDispatch();

            const handleLogin = async (e) => {
                        e.preventDefault();
                        try {
                                    const username = e.target.username.value;
                                    const password = e.target.password.value
                                    const res = await axios.post(import.meta.env.VITE_API_URL + "/login", { username, password })
                                    const { data } = res.data;
                                    dispatch(login(data))
                                    if (data.success) {
                                                toast.success(data.message)
                                                setTimeout(() => {
                                                            navigate("/admin/dashboard")
                                                }, 1000);
                                                e.target.reset()
                                    } else {

                                                console.log(data)
                                                alert(data.message)
                                    }
                        } catch (error) {
                                    const { data } = error.response
                                    toast.error(data.message)
                                    console.log(error.message);
                        }
            }
            return (
                        <div className='w-full h-screen flex justify-center items-center'>
                                    <Toaster position='top-center' />
                                    <form onSubmit={handleLogin} className='w-[60%] mx-auto lg:w-[30%] grid gap-3  '>
                                                <Input type='text'
                                                            name="username"
                                                            placeholder='Enter your password' />
                                                <Input type="password" name="password" placeholder="Enter your password" />
                                                <Button>Login</Button>
                                    </form>
                        </div>
            )
}

export default Login