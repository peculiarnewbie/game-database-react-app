import React from 'react';
import { Link } from 'react-router-dom'

import SiteLogo from '../../images/gamz-white.png';
import TMDBLogo from '../../images/Logo-white.png';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

function Header(){
    return(
        <Wrapper>
            <Content>
                <a href="">
                    <LogoImg src={SiteLogo} alt='site-logo' />
                </a>
                <a href="https://peculiarnewbie.github.io/" target="_blank">
                    <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
                </a>
            </Content>
        </Wrapper>
    );
}

export default Header;