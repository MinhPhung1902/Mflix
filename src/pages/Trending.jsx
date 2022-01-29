import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import MovieCaroursel from '../components/MoviesCarousel';
import axios from 'axios';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Paginati0n from '../components/Paginati0n';
import { img_500 } from '../config/config';
import { PlayCircleOutline, StarRate, ListAltOutlined } from '@material-ui/icons';


const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=cebdf129ce62ae24355f1a8ad713183d`
    );
    console.log(data)
    setContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
  }, [page]);
  return <div>
      <Navbar />
      <MovieCaroursel />
      <div className='mt-5 text-white flex flex-row mx-10 sm:mx-20 md:mx-30 lg:mx-40 text-3xl font-sans'>
        <div className='bg-[#1b8b9e] w-2 h-8'></div>
       <h1 className='ml-3 text-white'>Trending</h1>
       <div className="flex space-x-1 ml-3 mt-1 hover:text-gray-400">
         <PlayCircleOutline style={{  color: "#1b8b9e", marginTop:'6px', cursor:'pointer' }} />
         <Link to='/movies'><h1 className='text-[#1b8b9e] text-[16px] mt-2'>Movies</h1></Link>
       </div>
       <div className="flex space-x-1 ml-3 mt-1 hover:text-gray-400">
         <ListAltOutlined style={{ color: "#1b8b9e", marginTop:'6px', cursor:'pointer' }} />
         <Link to='/series'><h1 className='text-[#1b8b9e] text-[16px] mt-2'>TV show</h1></Link>
       </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-10 sm:mx-20 md:mx-30 lg:mx-40 text-white py-5'>
          {
            content  && content.map((c) =>{
              return(
                <div key={c.id} className='flex flex-col bg-[#292c34] font-sans '>
                 <img src={img_500 + c.poster_path} alt="" />
                  <div className="flex flex-col">
                    <div className='mt-1 mx-1 text-white text-[14px]'>{c.title || c.name }</div>
                    <div className='mx-1 text-white text-[14px]'>
                        <StarRate style={{color: "#1b8b9e", marginBottom:"4px" }} />
                      {c.vote_average}
                      </div>
                    <button className='bg-[#3f4858] p-1 hover:bg-gray-400 flex items-center justify-center space-x-2'>
                    <PlayCircleOutline />
                      <h1 to='/detail' className='text-white  text-[14px] bottom-0' style={{ textDecoration: 'none' }}>Watch Now</h1>
                      </button>
                  </div>
                </div>
              )
            })
           
          }
        </div>
        <Paginati0n setPage={setPage} />
      <Footer />
  </div>;
};

export default Trending;
