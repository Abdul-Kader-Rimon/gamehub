import React from 'react';
import MyContainer from './MyContainer';
import logo from "../assets/logoG.png"
import MyLink from './MyLink';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
const Footer = () => {
    return (
      <div>
        <footer className=" footer sm:footer-horizontal flex justify-around items-center gap-10 bg-neutral text-neutral-content texcent p-10">
          <aside>
            <MyLink to={"/"}>
              <div className="flex items-center gap-2">
                <img src={logo} className="w-[60px]  " />
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-purple-700">
                  GameHub
                </h2>
              </div>
            </MyLink>
            <p>
              GAMEHUB Industries Ltd.
              <br />
              Copyright © 2025 - All right reserved by GAMEHUB Ltd
            </p>
          </aside>
          <nav>
            <h4 className="footer-title ">Social</h4>
            <div className="grid grid-flow-col gap-4">
              <a href="https://www.facebook.com/">
                <FaFacebook size={28} />
              </a>
              <a href="https://x.com/">
                <FaSquareXTwitter size={28} />
              </a>
              <a href="https://www.youtube.com/">
                <FaYoutube size={28} />
              </a>
              <a href="https://bd.linkedin.com/">
                <FaLinkedin size={28} />
              </a>
            </div>
          </nav>
        </footer>
      </div>
    );
};

export default Footer;