import React from 'react';

import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.webp';
import ImgItems from './ImgItems';


const Images = () => {

  const imgurls=[
    'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=600',
    img1,
    img2,
    img3
  ]

  return (
    <div>
      <h1>Welcome to Image Placing</h1>

      

 
  <div className='imglayout'>

    {
    imgurls.map(
      (imgitem,index)=>

        <ImgItems 
      
        imgindex={index}
        imgitems={imgitem}

      />

     /*  <img src={imgitem} alt='text' width={350}/> */
      
      )}
 </div>
    

    </div>
  )
}

export default Images