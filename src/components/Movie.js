import React from 'react';
import { StarRate } from '@material-ui/icons';
import { PlayCircleOutline } from '@material-ui/icons';
import { img_500 } from '../config/config';


const Movie = ({movie, selectMovie}) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w342"

    return (
        <div onClick={() => selectMovie(movie)}>
           <div key={movie.id} className='flex flex-col bg-[#292c34] font-sans '>
                 <img src={img_500 + movie.poster_path} alt="" />
                  <div className="flex flex-col">
                    <div className='mt-1 mx-1 text-white text-[14px]'>{movie.title || movie.name }</div>
                    <div className='mx-1 text-white text-[14px]'>
                        <StarRate style={{color: "#1b8b9e", marginBottom:"4px" }} />
                      {movie.vote_average}
                      </div>
                    <button className='bg-[#3f4858] p-1 hover:bg-gray-400 flex items-center justify-center space-x-2'>
                    <PlayCircleOutline />
                      <h1 to='/detail' className='text-white  text-[14px] bottom-0' style={{ textDecoration: 'none' }}>Watch Now</h1>
                      </button>
                  </div>
                </div>
        </div>
    );
};


export default Movie;