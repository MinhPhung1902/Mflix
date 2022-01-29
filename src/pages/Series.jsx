import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Paginati0n from '../components/Paginati0n';
import { img_500 } from '../config/config';
import { PlayCircleOutline, StarBorderOutlined, StarRate } from '@material-ui/icons';


const Series = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchSeries = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=cebdf129ce62ae24355f1a8ad713183d&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
    );
    console.log(data)
    setContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSeries();
  }, [page]);
  return <div>
      <Navbar />
      <div className='mt-5 text-white flex flex-row mx-10 sm:mx-20 md:mx-30 lg:mx-40  font-sans'>
        <div className='bg-[#1b8b9e] w-2 h-8'></div>
       <h1 className='ml-3 text-[27px] text-white'>Series</h1>
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
                      <h1 className='text-white mt-2 text-[14px] bottom-0'>Watch Now</h1>
                      </button>
                  </div>
                </div>
              )
            })
           
          }
        </div>
      <Paginati0n />
      <Footer />
  </div>;
};

export default Series;
