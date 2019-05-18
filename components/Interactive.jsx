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
      <ImageGallery items={images} showThumbnails={false} showPlayButton={false} showFullscreenButton={false} />
      <div className="content">
        <h3>INteractive aplikacija za tablete</h3>
        <p>Razvoj arhitekture sustava, baza podataka (MySQL i MongoDB) i velika većina koda za sva tri sustava:</p>
        <ul>
          <li>Node.js (Express + Socket.io) server </li>
          <li>Custom framework za backend sa sustavom single-page-component modula</li>
          <li>Cordova/PhoneGap aplikacija za Android tablete</li>
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
