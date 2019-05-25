import React from 'react';
import ImageGallery from 'react-image-gallery';
import GalleryStyles from '../GalleryStyles';
export const Cestitke = () => {
  const images = [
    {
      original: 'static/images/cestitke1.png',
      thumbnail: 'static/images/cestitke1t.png'
    },
    {
      original: 'static/images/cestitke2.png',
      thumbnail: 'static/images/cestitke2t.png'
    },
    {
      original: 'static/images/cestitke3.png',
      thumbnail: 'static/images/cestitke3t.png'
    }
  ];
  return (<>
    <section className="spotlight">
      <ImageGallery items={images} showThumbnails={false} showPlayButton={false} useBrowserFullscreen={false} />
      <div className="content">
        <h3>Čestitke za kolegice i kolege</h3>
        <p>Zadnjih godina sam za SVAKOG kolegicu i kolegu u Dedalu crtao novogodišnju čestitku koja je svaka interna šala na račun neke zgode ili nezgode koja im se u tekućoj godini dogodila.</p>
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
      .image-gallery-image {
        max-height: 450px;
      }
    `}</style>
  </>);
};
