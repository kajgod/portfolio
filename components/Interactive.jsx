import React from 'react';
import Link from 'next/link';
import ImageGallery from 'react-image-gallery';
import GalleryStyles from './GalleryStyles';
export const Interactive = () => {
  const images = [
    {
      original: 'static/images/interactive.jpg',
    },
    {
      original: 'static/images/interactive1.jpg'
    },
    {
      original: 'static/images/interactive2.jpg'
    },
    {
      original: 'static/images/interactive3.jpg'
    }
  ];
  return (<>
    <section className="spotlight">
      <ImageGallery items={images} showThumbnails={false} showPlayButton={false} />
      <div className="content">
        <h3>INteractive aplikacija za tablete</h3>
        <p>Arhitektura sustava, baze podataka i velika većina:</p>
        <ul>
          <li>Node.js (Socket.io) server + MySQL</li>
          <li>Modularni framework za backend</li>
          <li>Cordova/PhoneGap app</li>
        </ul>
        <Link href="http://www.najam-tableta.com/">
          <a className="button" target="_blank">
            Više o aplikaciji
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
