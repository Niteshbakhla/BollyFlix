import React, { useEffect } from 'react'
import Dashboard from './Dashboard'
import { useParams } from 'react-router-dom'
import axios from 'axios';


const MovieDetails = () => {
            const { title } = useParams();
            const decodedTitle = decodeURIComponent(title);
            console.log(decodedTitle);
            const getMoviesDetails = async () => {
                        const res = await axios.get(import.meta.env.VITE_API_URL + `/get-movies/${decodedTitle}`)
                        const { data } = res.data;
                        console.log(data)
            }
            useEffect(() => {
                        getMoviesDetails();
            }, []);
            return (
                        <div>

                        </div>
            )
}

export default MovieDetails