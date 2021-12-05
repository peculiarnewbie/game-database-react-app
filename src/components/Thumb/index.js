import React from 'react';
import { Link } from 'react-router-dom'
// Styles
import { Wrapper, Content, Image, Text, Gap } from './Thumb.styles';

const Thumb = ({ image, title, gameId, gameLink, clickable }) => (
    <Wrapper>
        {clickable ? (
            <a href={gameLink?.url} target="_blank">
                <Content>
                    <Image src={image} alt='movie-thumb' />
                </Content>
                <Text>{title}</Text>
            </a>
        ) : (
            <Content>
            <Image src={image} alt='movie-thumb' />
            </Content>
        )
        }
    </Wrapper>
)

export default Thumb;