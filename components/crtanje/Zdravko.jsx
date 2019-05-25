import React from 'react';
import Link from 'next/link';
import ImageGallery from 'react-image-gallery';
import GalleryStyles from '../GalleryStyles';
export const Zdravko = () => {
  const images = [
    {
      original: 'static/images/zdravko003.jpg',
      thumbnail: 'static/images/zdravko003-thmb.png'
    },
    {
      original: 'static/images/zdravko012.png',
      thumbnail: 'static/images/zdravko012-thmb.png'
    },
    {
      original: 'static/images/zdravko013.png',
      thumbnail: 'static/images/zdravko013-thumb.png'
    }
  ];
  return (<>
    <section className="spotlight">
      <div className="content">
        <h3>Strip Zdravko</h3>
        <p>Strip zdravko radio sam po scenarijima kolegice Sanje Starčević za portal E-medikus.</p>
        <Link href="http://www.e-medikus.com/zdravko">
          <a className="button" target="_blank">
            Ostale epizode
          </a>
        </Link>
      </div>
      <ImageGallery items={images} showThumbnails={false} showPlayButton={false} useBrowserFullscreen={false} />
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
      .image-gallery-image {
        max-height: 450px;
      }
    `}</style>
  </>);
};
