import React from "react";
import ReactStars from 'react-rating-stars-component'
import { Data, DataInfo, Title, Address, Photo, RatingWrapper, Rating } from "./styles";

const DataCard = ({title="Nome do restaurante", rating=3.5, address = "Endereço", imgPath, imgSource}) => {
    
    const settings = {
        value: rating,
        isHalf: true,
        edit: false,
        activeColor: "#e7711c",
        size: 20
    }

    return (
        <Data>
            <DataInfo>
                <Title>{title}</Title>
                <RatingWrapper>
                    <ReactStars {...settings} />
                    <Rating>{rating}</Rating>
                </RatingWrapper>
                <Address>{address}</Address>
            </DataInfo>
            <a href={imgSource} target="_blank" rel="noopener noreferrer">
                <Photo photo={imgPath}/>
            </a>
        </Data>
    )
}

export default DataCard;