import React from 'react';
import { Link } from 'react-router-dom'

import SiteLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

function Header(){
    return(
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg src={SiteLogo} alt='site-logo' />
                </Link>
                <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
            </Content>
        </Wrapper>
    );
}

export default Header;