/* eslint-disable no-dupe-keys */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import { useState,useEffect } from 'react';
import Slider from "react-slick";
import Banners from "api/banners.json"
import Title from './ui/Title';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import { FaLastfmSquare } from 'react-icons/fa';
import { useWindowWidth} from '@react-hook/window-size';


function NextBtn({ className, style, onClick } ) {
  return (
    <button className={' text-brand-color absolute top-1/2 -right-6 -translate-y-1/2'} onClick={onClick}>
        <IoIosArrowForward size={22}/>
    </button>
  )
}
function PrewBtn({ className, style, onClick } ) {
  return ( 
  <button className={' text-brand-color absolute top-1/2 -left-6 -translate-y-1/2'} onClick={onClick}>
    <IoIosArrowBack size={22}/>
</button>
  )
}

  
export default function Campaigns(){

    const [banners, setBanners] = useState([]);
    const windowWidth = useWindowWidth()

    useEffect(() =>{
        setBanners(Banners);
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows:true,
        autoplaySpeed: 3500,
        cssEase: "linear",
        nextArrow: <NextBtn />,
        prevArrow: <PrewBtn />,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              arrows:false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              arrows:false
            }
          },
        
        ]
      };
   return(
    <div className="container mx-auto md:pt-8">
      <div className='hidden md:block'>
        <Title>Kampanyalar</Title>
      </div>
        <Slider className=' md:mx-2' {...settings}>
            {banners.length && banners.map((banner, index) =>(
                <div key={banner.id}>
                    <picture className=' block px-4'>
                        <img src={banner.image} className=' rounded-lg'></img>
                    </picture>
                </div>
            ))}
        </Slider>
    </div>
    )
}
 