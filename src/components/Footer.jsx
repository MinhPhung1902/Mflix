import React from 'react';

const Footer = () => {
    const navigate = [
        {id:1, title:'About Us', path:'/'},
        {id:1, title:'Term of services', path:'/'},
        {id:1, title:'Contact', path:'/'},
        {id:1, title:'Sitemap', path:'/'},
    ]
  return <div className='bg-[#1e2129]  bottom-10  space-y-3 p-5'>
      <div className="flex items-center justify-center space-x-5">
        {navigate.map((e) => {
            return (
                <a className='text-sm text-white hover:text-gray-400' id={e.id}>{e.title}</a>
            )
        })}
        </div>
        <h1 className="text-center text-gray-400 text-sm mx-10 md:mx-[165px] lg:mx-[230px] space-x-3 ">
        Mflix is a Free Movies streaming site with zero ads. 
        We let you watch movies online without having to register or paying, with over 10000 movies and TV-Series. 
        You can also Download full movies from MoviesCloud and watch it later if you want.
        </h1>
        <h1 className='text-center text-gray-400 text-sm mx-10 md:mx-[180px] lg:mx-[200px] space-x-3'>
           &copy; Developed by Kanye Phung, 2022. All right reserved
        </h1>
  </div>;
};

export default Footer;
