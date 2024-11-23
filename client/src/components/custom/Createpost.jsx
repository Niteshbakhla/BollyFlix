import { useEffect, useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import {
            Select,
            SelectContent,
            SelectItem,
            SelectTrigger,
            SelectValue,
} from '../ui/select';
import axios from 'axios';
import uploadImage from '../../../hooks/uploadImage';
import toast, { Toaster } from 'react-hot-toast';

const CreatePost = () => {
            const [movieName, setMovieName] = useState('');
            const [description, setDescription] = useState('');
            const [imageURL, setImageURL] = useState('');
            const [releasedYear, setMovieReleasedDate] = useState('');
            const [quality, setQuality] = useState('');  // Corrected this to match schema (quality)
            const [genere, setGenere] = useState('');    // Corrected this to match schema (genere)
            const [movieType, setMovieType] = useState(''); // Corrected this to match schema (movieType)
            const [subtitles, setSubtitles] = useState('N/A'); // Corrected this to match schema (subtitles)
            const [storyline, setStoryline] = useState('');
            const [screenshots, setScreenshots] = useState([]);
            const [downloadLinks, setDownloadLinks] = useState([]);
            const [selectedFiles, setSelectedFiles] = useState([]);



            const handleImageInput = async (e) => {
                        const files = e.target.files;
                        const filesArray = Array.from(files);
                        setSelectedFiles(filesArray);
            }


            const handleSubmit = async (e) => {
                        e.preventDefault();

                        if (!movieName) {
                                    return alert("Enter the movie name")
                        } else if (!genere) {
                                    return alert("Enter the genere")
                        }
                        try {

                                    const thumbnail = []

                                    const { public_id, secure_url } = await uploadImage({ image: selectedFiles })
                                    setScreenshots({ public_id, secure_url })
                                    const res = await axios.post(import.meta.env.VITE_API_URL + "/createmovie", {
                                                fullName: movieName,
                                                storyline,
                                                quality,
                                                genere,
                                                subtitles,
                                                releasedYear,
                                                downloadLinks,
                                                screenshots,
                                              

                                    }, {
                                                withCredentials: true,
                                                headers: {
                                                            "Content-Type": "application/json",
                                                            Authorization: `Bearer ${localStorage.getItem("token")}`
                                                }
                                    });

                                    const data = await res.data;

                                    if (data.success) {
                                                toast.success("Movie added successfully!")

                                    } else {
                                                toast.error("Failed to add movie")

                                    }
                        } catch (error) {
                                    const { data } = error.response

                                    console.log(data)
                                    console.log(error.message);
                        }
            }

            useEffect(() => { 
                        console.log(screenshots)
            }, [])

            const listOfGenres = [
                        'Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Thriller',
            ];

            return (
                        <div className="max-w-xl mx-auto  p-6 bg-white rounded-lg shadow-lg">
                                    <Toaster position='top-center' />
                                    <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Add a Movie</h2>
                                    <form onSubmit={handleSubmit} className=''>
                                                <div className="mb-4">
                                                            <Input
                                                                        type="text"
                                                                        id="movieName"
                                                                        placeholder="Enter Movie Name"
                                                                        value={movieName}
                                                                        onChange={(e) => setMovieName(e.target.value)}
                                                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                                            />
                                                </div>

                                                <div className="mb-4">
                                                            <Textarea
                                                                        id="description"
                                                                        placeholder="Enter Movie Storyline"
                                                                        value={description}
                                                                        onChange={(e) => setDescription(e.target.value)}
                                                                        rows={4}
                                                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                                            />
                                                </div>

                                                <div className="mb-4">
                                                            <Input
                                                                        type="text"
                                                                        id="movieReleasedDate"
                                                                        placeholder="Enter Movie Released Date"
                                                                        value={releasedYear}
                                                                        onChange={(e) => setMovieReleasedDate(e.target.value)}
                                                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                                            />
                                                </div>

                                                <div className="mb-4">
                                                            <Input
                                                                        type="url"
                                                                        id="imageURL"
                                                                        placeholder="Enter Image URL"
                                                                        value={imageURL}
                                                                        onChange={(e) => setImageURL(e.target.value)}
                                                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                                            />
                                                </div>

                                                <div className="mb-4">
                                                            <Input
                                                                        type="text"
                                                                        id="quality" // Changed to 'quality' from 'movieQuality'
                                                                        placeholder="Enter Movie Quality"
                                                                        value={quality} // Changed to 'quality' from 'movieQuality'
                                                                        onChange={(e) => setQuality(e.target.value)}
                                                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                                            />
                                                </div>

                                                <div className="mb-4">
                                                            <Select value={genere} onValueChange={setGenere}>
                                                                        <SelectTrigger className="w-[180px]">
                                                                                    <SelectValue placeholder="Select Movie Genre" />
                                                                        </SelectTrigger>
                                                                        <SelectContent>
                                                                                    {listOfGenres.map((genre, i) => (
                                                                                                <SelectItem key={i} value={genre}>
                                                                                                            {genre}
                                                                                                </SelectItem>
                                                                                    ))}
                                                                        </SelectContent>
                                                            </Select>
                                                </div>

                                                <div className="mb-4">
                                                            <Select value={movieType} onValueChange={setMovieType}>
                                                                        <SelectTrigger className="w-[180px]">
                                                                                    <SelectValue placeholder="Select Movie Type" />
                                                                        </SelectTrigger>
                                                                        <SelectContent>
                                                                                    {['action', 'comedy', 'drama', 'horror', 'romance', 'thriller'].map((type, i) => (
                                                                                                <SelectItem key={i} value={type}>
                                                                                                            {type}
                                                                                                </SelectItem>
                                                                                    ))}
                                                                        </SelectContent>
                                                            </Select>
                                                </div>

                                                <div>
                                                            <div className="mb-4">
                                                                        <Input
                                                                                    type="text"
                                                                                    id="subtitles"
                                                                                    placeholder="Enter Subtitles (N/A if not available)"
                                                                                    value={subtitles}
                                                                                    onChange={(e) => setSubtitles(e.target.value)}
                                                                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                                                        />
                                                            </div>

                                                            <div className="mb-4">
                                                                        <Textarea
                                                                                    id="storyline"
                                                                                    placeholder="Enter Detailed Storyline"
                                                                                    value={storyline}
                                                                                    onChange={(e) => setStoryline(e.target.value)}
                                                                                    rows={4}
                                                                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                                                        />
                                                            </div>

                                                            <div className="mb-4">
                                                                        <Input
                                                                                    type="file"
                                                                                    multiple
                                                                                    placeholder="Select Movie Screenshots"
                                                                                    accept="*"
                                                                                    onChange={handleImageInput}

                                                                        />
                                                            </div>

                                                            <div className="mb-4">
                                                                        <Input
                                                                                    type="text"
                                                                                    id="downloadLinks"
                                                                                    placeholder="Enter Download Links (comma separated)"
                                                                                    value={downloadLinks}
                                                                                    onChange={(e) => setDownloadLinks(e.target.value.split(','))}
                                                                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                                                        />
                                                            </div>

                                                            <div className="flex justify-center">
                                                                        <Button
                                                                                    type="submit"
                                                                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
                                                                        >
                                                                                    Add Movie
                                                                        </Button>
                                                            </div>
                                                </div>
                                    </form>
                        </div>
            );
};

export default CreatePost;
