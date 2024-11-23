import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import {
            Menubar,
            MenubarContent,
            MenubarItem,
            MenubarMenu,
            MenubarSeparator,
            MenubarShortcut,
            MenubarTrigger,
} from "@/components/ui/menubar"
import { Link } from 'react-router-dom';
import { genreData, movieData } from '@/datas/data';







const Navbar = () => {

            return (
                        <>
                                    <nav className='p-[20px] shadow-md '>
                                                <div className='flex justify-between items-center flex-col sm:flex-row '>
                                                            <h3 className='text-3xl font-extrabold'>CodeFLIX</h3>
                                                            <div className='flex gap-2 '>
                                                                        <Input type="text" className="w-[40vw] shadow-lg" />
                                                                        <Button >Search</Button>
                                                            </div>
                                                </div>

                                                <div>
                                                            <Menubar>
                                                                        <MenubarMenu>
                                                                                    <MenubarTrigger>
                                                                                                Home
                                                                                    </MenubarTrigger>
                                                                                    <MenubarContent>
                                                                                                <MenubarItem>Item1</MenubarItem>
                                                                                                <MenubarSeparator />
                                                                                                <MenubarItem>Item1</MenubarItem>
                                                                                                <MenubarSeparator />
                                                                                                <MenubarItem>Item1</MenubarItem>
                                                                                                <MenubarSeparator />
                                                                                                <MenubarItem>Item1</MenubarItem>
                                                                                    </MenubarContent>
                                                                        </MenubarMenu>
                                                                        <MenubarMenu>
                                                                                    <MenubarTrigger>Home</MenubarTrigger>
                                                                                    <MenubarContent>
                                                                                                {
                                                                                                            movieData.map(item => (
                                                                                                                        <MenubarItem>{item.title}</MenubarItem>

                                                                                                            ))
                                                                                                }
                                                                                    </MenubarContent>
                                                                        </MenubarMenu>

                                                                        <MenubarMenu>
                                                                                    <MenubarTrigger>Genre</MenubarTrigger>
                                                                                    <MenubarContent>
                                                                                                {
                                                                                                            genreData.map((item) => (

                                                                                                                        <MenubarItem>{item.title}</MenubarItem>

                                                                                                            ))
                                                                                                }
                                                                                    </MenubarContent>
                                                                        </MenubarMenu>
                                                            </Menubar>
                                                </div>
                                    </nav>
                        </>
            )
}

export default Navbar