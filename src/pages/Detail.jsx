import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { img_1280, img_500 } from '../config/config';
import Navbar from '../components/Navbar';
import Footer from 'rc-table/lib/Footer';

const Detail = () => {
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
       
       <Footer />
  </div>;
};

export default Detail;
