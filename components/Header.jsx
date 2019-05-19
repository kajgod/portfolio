import React from 'react';
import Styles from '../components/Styles';
export const Header = ({ime, titula, slika}) => (
<>
  <header id="header">
    <div className="content">
      <h1>{ime}</h1>
      <h2>{titula}</h2>
    </div>
    <div className="pozdrav">
      <img src={"static/images/"+slika} alt="" />
    </div>
  </header>
</>);
