import React from 'react';
import ImageGallery from 'react-image-gallery';
import GalleryStyles from '../GalleryStyles';
export const Fusing = () => {
  const images = [
      {
        original: 'static/images/fusing1.gif',
      },
      {
        original: 'static/images/fusing2.gif',
      },
      {
        original: 'static/images/fusing3.gif',
      },
      {
        original: 'static/images/fusing4.gif',
      },
      {
        original: 'static/images/fusing5.gif',
      },
      {
        original: 'static/images/fusing6.gif',
      }
];
  return (<>
    <section className="spotlight">     
    <ImageGallery items={images} showThumbnails={false} showPlayButton={false} showFullscreenButton={false} /> 
      <div className="content">
        <h3>Animacije</h3>
        <p>Niz animacija za nikad dovršeni portal za traženje sezonskih radnika / posla.</p>
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
