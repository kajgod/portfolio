import React from 'react';
import Link from 'next/link';
import ImageGallery from 'react-image-gallery';
import GalleryStyles from './GalleryStyles';
export const Ostalo = () => {
  const images = [
    {
      original: 'static/images/ostalo.jpg',
    },
    {
      original: 'static/images/ostalo1.jpg'
    },
    {
      original: 'static/images/ostalo2.jpg'
    }
  ];
  return (<>
    <section className="spotlight">     
      <div className="content">
        <h3>...i hrpa drugih projekata!</h3>
        <p>U 15 godina nakupilo se previše projekata za nabrajati. Između ostalog...</p>
        <ul>
          <li>50-ak Facebook igara za dm Hrvatska/BiH/Srbija: <Link href="http://dedal.hr/dm-2017/valentinovo/"><a target="_blank">primjer</a></Link></li>
          <li>ePoster: <Link href="https://vimeo.com/223127643"><a target="_blank">Vimeo demo</a></Link></li>
          <li>Nekoliko različitih sustava za kvizove s tabletima, gljivama, touch-TV-ima</li>
          <li>...</li>
        </ul>
      </div>
    <ImageGallery items={images} showThumbnails={false} showPlayButton={false} showFullscreenButton={false} /> 
    </section>
    <GalleryStyles />
    <style jsx>{`
      .content {
        margin-left:5%;
        padding: 20px;
      }
      .spotlight {
        background-color: #fff;
      }
      .image-gallery {
        max-width:50%;
      }
      .button {
        box-shadow: inset 0 0 0 2px #e6e6e6;
      }
    `}</style>
  </>);
};
