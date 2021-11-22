import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
    height: 90px;
    Width: 90px;
    border-radius: 6px;
    background-image: url(${(props) => props.photo});
    background-size: cover;
`

const Title = styled.span`
    color: white;
    font-family: ${(props)=> props.theme.fonts.fontFamily};
    display: block;
    margin-top: 5px;
    text-shadow: -1px -1px 0 #777, 1px -1px 0 #777, -1px 1px 0 #777, 1px 1px 0 #777;
`
const Link = styled.a`
    text-decoration:none;
`

const ImageCard = ({photo, title, path}) => (
    <Link href={path} target="_blank" rel="noopener noreferrer">
        <Card photo={photo}>
            <Title>{title}</Title>
        </Card>
    </Link>
)

export default ImageCard;