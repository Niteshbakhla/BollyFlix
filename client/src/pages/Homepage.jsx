import Moviecard from '@/components/custom/Moviecard'
import React from 'react'

const Homepage = () => {
            return (
                        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6'>
                                    <Moviecard image={"https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} to={"to"} title={"lorem12"} />
                                    <Moviecard image={"https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} to={"to"} title={"lorem12"} />
                        </div>
            )
}

export default Homepage