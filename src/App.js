import React from 'react';
import './index.css'
import 'antd/dist/antd.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MoviesCaroursel from './components/MoviesCarousel';
import Trending from './pages/Trending';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Search from './pages/Search';
import Detail from './pages/Detail';
import Other from './pages/Other'


const App = () => {
  return <div className='bg-[#1e2129]'>
    <Routes>
      <Route path='/trending' element={<Trending />}></Route>
      <Route path='/movies' element={<Movies />}></Route>
      <Route path='/series' element={<Series />}></Route>
      <Route path='/search' element={<Search />}></Route>
      <Route path='/detail' element={<Detail />}></Route>
      <Route path='/' element={<Other />}></Route>
    </Routes>
  </div>;
};

export default App;
