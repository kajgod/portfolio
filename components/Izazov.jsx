import React from 'react';
import Link from 'next/link';
import ImageGallery from 'react-image-gallery';
import GalleryStyles from './GalleryStyles';
export const Izazov = () => {
  const images = [
    {
      original: 'static/images/izazov.jpg',
    },
    {
      original: 'static/images/izazov1.jpg'
    },
    {
      original: 'static/images/izazov2.jpg'
    },
    {
      original: 'static/images/izazov3.jpg'
    }
  ];
  return (<>
    <section className="spotlight">      
      <div className="content">
        <h3>Kviz Izazov</h3>
        <p>Sve od ideje interaktivnog kviza kojim tvrtke usmjeravaju pažnju posjetitelja na svoj štand, preko načina igre, dizajna, animacija...</p>
        <ul>
          <li>Node.js (Express + Socket.io) server </li>
          <li>Prikaz na TV-u je canvas animacija preko cijelog zaslona prikazana u web pregledniku</li>
          <li>Cordova/PhoneGap aplikacija za Android tablete</li>
        </ul>
        <Link href="http://www.najam-tableta.com/">
          <a className="button" target="_blank">
            YouTube demo
            </a>
        </Link>
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
