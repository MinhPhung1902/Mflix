import {useEffect, useState} from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'
import Movie from "../components/Movie"
import Youtube from 'react-youtube'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { PlayCircleFilledOutlined } from "@material-ui/icons"
import { PlayCircleOutlined } from "@mui/icons-material"
import { ListAltOutlined } from "@material-ui/icons"
import SearchIcon from '@mui/icons-material/Search';

function Other() {
    const MOVIE_API = "https://api.themoviedb.org/3/"
    const SEARCH_API = MOVIE_API + "search/movie"
    const DISCOVER_API = MOVIE_API + "discover/movie"
    const API_KEY = "cebdf129ce62ae24355f1a8ad713183d"
    const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280"

    const [playing, setPlaying] = useState(false)
    const [trailer, setTrailer] = useState(null)
    const [movies, setMovies] = useState([])
    const [searchKey, setSearchKey] = useState("")
    const [movie, setMovie] = useState({title: "Loading Movies"})

    useEffect(() => {
        fetchMovies()
    }, [])

    const fetchMovies = async (event) => {
        if (event) {
            event.preventDefault()
        }

        const {data} = await axios.get(`${searchKey ? SEARCH_API : DISCOVER_API}`, {
            params: {
                api_key: API_KEY,
                query: searchKey
            }
        })

        console.log(data.results[0])
        setMovies(data.results)
        setMovie(data.results[0])

        if (data.results.length) {
            await fetchMovie(data.results[0].id)
        }
    }

    const fetchMovie = async (id) => {
        const {data} = await axios.get(`${MOVIE_API}movie/${id}`, {
            params: {
                api_key: API_KEY,
                append_to_response: "videos"
            }
        })

        if (data.videos && data.videos.results) {
            const trailer = data.videos.results.find(vid => vid.name === "Official Trailer")
            setTrailer(trailer ? trailer : data.videos.results[0])
        }

        setMovie(data)
    }


    const selectMovie = (movie) => {
        fetchMovie(movie.id)
        setPlaying(false)
        setMovie(movie)
        window.scrollTo(0, 0)
    }

    const renderMovies = () => (
        movies.map(movie => (
            <Movie
                selectMovie={selectMovie}
                key={movie.id}
                movie={movie}
            />
        ))
    )

    return (
        <><Navbar /><div className="App">
            <header className="max-w-[1020px] my-0 mx-auto py-0 px-[15px] w-full flex justify-between p-[15px] uppercase">s
                <form className="relative flex items-center justify-center p-2" onSubmit={fetchMovies}>
                    <SearchIcon />
                    <input className="py-[5px] px-[10px] border-[1px] border-[#2d333f] outline-none" type="text" id="search"
                        onInput={(event) => setSearchKey(event.target.value)} />
                    <button className="absolute right-[5px] top-[5px] bg-transparent text-white cursor-pointer border-none" type="submit"><i className="fa fa-search"></i></button>
                </form>
            </header>
            {movies.length ?
                <main>
                    {movie ?
                        <div className="bg-cover flex flex-end pb-[50px] relative "
                            style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${BACKDROP_PATH}${movie.backdrop_path})` }}>
                            {playing ?
                                <>
                                    <Youtube
                                        videoId={trailer.key}
                                        className='absolute right-0 left-0 top-0 bottom-0 w-full h-[640px]'
                                        containerClassName={"youtube-container amru"}
                                        opts={{
                                            width: '100%',
                                            height: '100%',
                                            playerVars: {
                                                autoplay: 1,
                                                controls: 0,
                                                cc_load_policy: 0,
                                                fs: 0,
                                                iv_load_policy: 0,
                                                modestbranding: 0,
                                                rel: 0,
                                                showinfo: 0,
                                            },
                                        }} />
                                    <button onClick={() => setPlaying(false)} className={"button close-video"}>Close
                                    </button>
                                </> :
                                <div className="mx-[240px] my-0 first-letter:py-0 px-[15px] font-sans">
                                    <div className="w-[80%] mt-[600px]">
                                        <div className='flex flex-row space-x-3'>
                                        {trailer ?
                                            <button className='flex flex-row bg-[#1b8b9e] hover:bg-cyan-200 space-x-2 rounded-lg p-2' onClick={() => setPlaying(true)}
                                                type="button">
                                                    <PlayCircleFilledOutlined style={{  color: "#fff",marginTop:'4px', cursor:'pointer', transform:"scale(1.3)" }} />
                                                    <h1 className='text-white text-[22px] mt-[4px]'>Play Now</h1>
                                                    </button>
                                            : 'Sorry, no trailer available'}
                                        <h1 className='text-white text-[36px] mb-[10px]'>{movie.title}</h1>
                                        </div>
                                        <p className='text-white mt-1'>{movie.overview}</p>
                                    </div>
                                </div>}
                        </div>
                        : null}
                    <div className='mt-5 text-white flex flex-row mx-10 sm:mx-20 md:mx-30 lg:mx-40 text-3xl font-sans'>
        <div className='bg-[#1b8b9e] w-2 h-8'></div>
       <h1 className='ml-3 text-white text-[27px]'>What to watch?</h1>
       <div className="flex space-x-1 ml-3 mt-1 hover:text-gray-400">
         <PlayCircleOutlined style={{  color: "#1b8b9e", marginTop:'6px', cursor:'pointer' }} />
         <Link to='/movies'><h1 className='text-[#1b8b9e] text-[16px] mt-2'>Movies</h1></Link>
       </div>
       <div className="flex space-x-1 ml-3 mt-1 hover:text-gray-400">
         <ListAltOutlined style={{ color: "#1b8b9e", marginTop:'6px', cursor:'pointer' }} />
         <Link to='/series'><h1 className='text-[#1b8b9e] text-[16px] mt-2'>TV show</h1></Link>
       </div>
        </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-10 sm:mx-20 md:mx-30 lg:mx-40 text-white py-5'>
                        {renderMovies()}
                    </div>
                </main>
                : 'Sorry, no movies found'}
        </div><Footer /></>
    );
}

export default Other;