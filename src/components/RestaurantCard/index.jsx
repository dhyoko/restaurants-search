import React from "react";
import ReactStars from 'react-rating-stars-component'
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto, RatingWrapper, Rating } from "./styles";

const RestaurantCard = ({title="Nome do restaurante", rating=3.5, address = "Endereço", imgPath, imgSource}) => {
    
    const settings = {
        value: rating,
        isHalf: true,
        edit: false,
        activeColor: "#e7711c",
        size: 20
    }

    return (
        <Restaurant>
            <RestaurantInfo>
                <Title>{title}</Title>
                <RatingWrapper>
                    <ReactStars {...settings} />
                    <Rating>{rating}</Rating>
                </RatingWrapper>
                <Address>{address}</Address>
            </RestaurantInfo>
            <a href={imgSource} target="_blank" rel="noopener noreferrer">
                <RestaurantPhoto photo={imgPath}/>
            </a>
        </Restaurant>
    )
}

export default RestaurantCard;