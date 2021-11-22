import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Carousel from '@brainhubeu/react-carousel';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import logo from '../../assets/logo.svg'
import setting from './setting';
import fakeData from './FakeData';
import { Card, RestaurantCard, DataCard, Modal } from '../../components';
import { Wrapper, Container, Search, Logo, Map, CarouselTitle, RestaurantCardScroll, ModalWrapper } from './style';

const Home = () => {

    const [ searchText, setSearchText ] = useState("");
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ selectedRestaurant, setSelectedRestaurant  ] = useState({});

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="Logo do restaurante" />
                    <TextField
                        label='Pesquisar'
                        outlined
                        onTrailingIconSelect={() => setSearchText('')}
                        trailingIcon={<MaterialIcon role="button" icon="search"/>}
                    ><Input
                        value={searchText}
                        onChange={(e) => setSearchText(e.currentTarget.value)} />
                    </TextField>
                    <CarouselTitle>Na sua Área</CarouselTitle>
                    <Carousel plugins = {setting} offset={16}>
                        {fakeData.map(({id, name, img, freepik_link})=>
                                <Card
                                    key={id}
                                    title = {name}
                                    photo ={img}
                                    path={freepik_link}
                                />
                            )}
                    </Carousel>
                    <RestaurantCardScroll>
                        {fakeData.map((data)=>
                            <div onClick={() => {
                                    setSelectedRestaurant(data)
                                    setModalOpen(!modalOpen)
                                }
                            }>
                                <RestaurantCard
                                    key={data.id}
                                    title = {data.name}
                                    rating = {data.rating}
                                    address = {data.address}
                                    imgPath ={data.img}
                                    imgSource={data.freepik_link}
                                />
                            </div>
                            
                        )}
                    </RestaurantCardScroll>
                </Search>
            </Container>
            <Map>
                <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </Map>
            <Modal open={modalOpen} onClose={()=> setModalOpen(!modalOpen)}>
                <ModalWrapper>
                    <DataCard
                        title = {selectedRestaurant.name}
                        rating = {selectedRestaurant.rating}
                        address = {selectedRestaurant.address}
                        imgPath ={selectedRestaurant.img}
                        imgSource={selectedRestaurant.freepik_link}
                    />
                </ModalWrapper>
            </Modal>
        </Wrapper>
    )
}


export default Home;