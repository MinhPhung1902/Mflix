import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { img_2000, img_500 } from '../config/config'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PlayCircleOutline, StarRate, ListAltOutlined } from '@material-ui/icons';


const MoviesCaroursel = () => {
  const [credits, setCredits] = useState([]);
  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=cebdf129ce62ae24355f1a8ad713183d`
    );
    setCredits(data.results);
  };

  useEffect(() => {
    fetchCredits();
  }, []);
  const SlidesData = [
    {id:1, backdrop_path:'https://wallpaperboat.com/wp-content/uploads/2021/12/19/79926/spider-man-no-way-home-12.jpg', title:'Spider-Man: No Way Home', description:'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.'},
    {id:2, backdrop_path:'https://images.alphacoders.com/110/thumb-1920-1106614.jpg', title:'The 355', description:'A group of top female agents from American, British, Chinese, Columbian and German  government agencies are drawn together to try and stop an organization from acquiring a deadly weapon to send the world into chaos.'},
    {id:3, backdrop_path:'https://wallpaperaccess.com/full/7485291.jpg', title:'Encanto', description:`The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.`},
    {id:4, backdrop_path:'https://images8.alphacoders.com/116/thumb-1920-1166926.jpeg', title:'Eternals', description:'Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants.'},
    {id:5, backdrop_path:'https://ghostbustersnews.com/wp-content/uploads/2021/09/ghostbusters_afterlife_new_posters_banner.jpg', title:'Ghostbusters: Afterlife', description:'When a single mom and her two kids arrive in a small town, they begin to discover their connection to the original Ghostbusters and the secret legacy their grandfather left behind.'},
  ]
  return (
  <div className='mx-[20px] md:mx-[100px] lg:mx-[200px] mt-10'>
    <Carousel>
      {SlidesData.map((x) =>
      {
        return (
          <Carousel.Item>
    <img
      className="block w-[200%]"
      src={ x.backdrop_path }
      alt="First slide"
    />
     <Carousel.Caption>
      <h1 className='text-white font-sans shadow-2xl'>{x.title}</h1>
      <p className='text-gray-300 text-sm font-sans shadow-2xl'>{x.description}</p>
   </Carousel.Caption>
  </Carousel.Item>
        )
      }
      )}
    </Carousel>
  </div>
  );
};

export default MoviesCaroursel;
