import React from 'react';
import { Link } from 'react-router-dom'

import SiteLogo from '../../images/gamz-white.png';
import TMDBLogo from '../../images/Logo.png';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

function Header(){
    return(
        <Wrapper>
            <Content>
                <a href="" target="_blank">
                    <LogoImg src={SiteLogo} alt='site-logo' />
                </a>
                <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
            </Content>
        </Wrapper>
    );
}

export default Header;