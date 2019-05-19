import React, { useState } from 'react';
import Link from 'next/link';
export const Izbornik = ({ aktivna }) => {
  const [otvoren, setOtvoren] = useState(false);
  return (<>
    <nav className={otvoren ? "otvoren" : ""}>
      <div className="otvori">
        <button onClick={() => setOtvoren(!otvoren)}>
          <div id="nav-animacija" className={otvoren ? "otvoren" : ""}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      <div className="linkovi">
        <div className={aktivna == "index" ? "aktiv" : ""}>
          <Link href="./">
            <a>
              Developerski poslovi
                </a>
          </Link>
        </div>
        <div className={aktivna == "crtanje" ? "aktiv" : ""}>
          <Link href="./crtanje">
            <a>
              Crtanje i animacija
                </a>
          </Link>
        </div>
      </div>
    </nav>
    <style jsx global>{`
        nav {
          position:fixed;
          right:20px;
          top:20px;
          width: 40px;
          height: 40px;
          overflow:hidden;
          border-radius: 20px;
          background: #fff;
          transition: width 0.5s, height 0.25s, border-radius 0.33s;
          box-shadow: rgba(0,0,0,0.075) -2px 3px 0px 0px !important;
        }
        nav.otvoren {
          width:250px;
          height: 200px;
          border-radius: 5px;
        }
        nav .otvori {
          text-align: right;
        }
        nav .linkovi div {
          text-align: center;
          width: 210px;
          padding:10px 0px 10px;
          margin: 10px;
        }
        nav .aktiv {
          color: #A8D0E6;
        }
        nav button {
          width:40px;
          height:40px;
          padding:0;
          border-radius: 20px;
        }
        #nav-animacija {
          width: 20px;
          height: 15px;
          margin: 5px 10px;
          position: relative;
          -webkit-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          transform: rotate(0deg);
          -webkit-transition: .5s ease-in-out;
          -moz-transition: .5s ease-in-out;
          -o-transition: .5s ease-in-out;
          transition: .5s ease-in-out;
          cursor: pointer;
        }        
        #nav-animacija span {
          display: block;
          position: absolute;
          height: 2.5px;
          width: 100%;
          background: #A8D0E6;
          border-radius: 2.5px;
          opacity: 1;
          left: 0;
          -webkit-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          transform: rotate(0deg);
          -webkit-transition: .25s ease-in-out;
          -moz-transition: .25s ease-in-out;
          -o-transition: .25s ease-in-out;
          transition: .25s ease-in-out;
        }
        #nav-animacija span:nth-child(1) {
          top: 0px;
        }
        #nav-animacija span:nth-child(2),#nav-animacija span:nth-child(3) {
          top: 6px;
        }
        #nav-animacija span:nth-child(4) {
          top: 12px;
        }
        #nav-animacija.otvoren span:nth-child(1) {
          top: 6px;
          width: 0%;
          left: 50%;
        }
        #nav-animacija.otvoren span:nth-child(2) {
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -o-transform: rotate(45deg);
          transform: rotate(45deg);
        }
        #nav-animacija.otvoren span:nth-child(3) {
          -webkit-transform: rotate(-45deg);
          -moz-transform: rotate(-45deg);
          -o-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }
        #nav-animacija.otvoren span:nth-child(4) {
          top: 6px;
          width: 0%;
          left: 50%;
        }
      `}</style>
  </>);
};
