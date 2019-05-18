import React from 'react';
import Link from 'next/link';
import ImageGallery from 'react-image-gallery';
import GalleryStyles from './GalleryStyles';
export const Incase = () => {
  const images = [
    {
      original: 'static/images/incase.jpg',
    },
    {
      original: 'static/images/incase1.jpg'
    },
    {
      original: 'static/images/incase2.jpg'
    }
  ];
  return (<>
    <section className="spotlight">     
    <ImageGallery items={images} showThumbnails={false} showPlayButton={false} showFullscreenButton={false} /> 
      <div className="content">
        <h3>Incase interaktivne radionice</h3>
        <p>Arhitektura sustava, baze podataka i suradnja s <em>hardverašima</em>.</p>
        <ul>
          <li>Node.js (Socket.io) server + MongoDB</li>
          <li>Linux kiosk browser na touchscreen TV-ima</li>
          <li>Modularna administracija</li>
        </ul>
        <Link href="https://youtu.be/gUhpgLhzDGY">
          <a className="button" target="_blank">
            YouTube demo
            </a>
        </Link>
      </div>
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
