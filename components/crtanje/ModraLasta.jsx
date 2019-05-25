import React from 'react';
import ImageGallery from 'react-image-gallery';
import GalleryStyles from '../GalleryStyles';
export const ModraLasta = () => {
  const images = [
    {
      original: 'static/images/sve_bolje_006.png',
    },
    {
      original: 'static/images/sve_bolje_007.png'
    },
    {
      original: 'static/images/sve_bolje_008.png'
    },
    {
      original: 'static/images/sve_bolje_009.png'
    }
  ];
  return (<>
    <section className="spotlight">      
      <div className="content">
        <h3>Strip u Modroj lasti</h3>
        <p>Kako sam odrastao uz <em>Modru lastu</em> i zahvaljujući Ivici Bednjancu zavolio strip, neobično me razveselilo kad sam ove godine dobio priliku - crtati strip za nove generacije <em>lastaša</em>!</p>
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
    `}</style>
  </>);
};
