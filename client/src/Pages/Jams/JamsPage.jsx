import React from 'react';
import applePng from '../../assets/img/apple.png';
import apricotPng from '../../assets/img/apricot.png';
import cherryPng from '../../assets/img/cherry.png';
import raspberryPng from '../../assets/img/raspberry.png';
import strawberryPng from '../../assets/img/strawberry.png';
import currantPng from '../../assets/img/currant.png';
const JamsPage = () => {
    return (
        <div className='jams'>
            <h1>Джемы Десяточка</h1>
            <div className='jamsWrapper'>
                <div className="apple jam">
                    <div className="jam_img_container">

                    <img src={applePng} alt="" />
                    </div>
                    <div className='jamContent'>
                        <p className = 'jamName'>Яблочный джем</p>
                    </div>
                </div>
                <div className="apricot jam">
                    <div className="jam_img_container">

                    <img src={apricotPng} alt="" />
                    </div>
                    <div className='jamContent'>

                    абрикос
                    </div>
                </div>
                <div className="cherry jam">
                    <div className="jam_img_container">

                    <img src={cherryPng} alt="" />
                    </div>
                    <div className="jamContent">
                        вишня
                    </div>
                </div>
                <div className="raspberry jam">
                    <div className="jam_img_container">

                    <img src={raspberryPng} alt="" />
                    </div>
                    <div className='jamContent'>
                    малина
                    </div>
                </div>
                <div className="strawberry jam">
                    <div className="jam_img_container">

                    <img src={strawberryPng} alt="" />
                    </div>
                    <div className="jamContent">
                    клубника
                    </div>
                </div>
                <div className="currant jam">
                    <div className='jam_img_container'>
                        <img src={currantPng} alt="" />
                    </div>
                    <div className="jamContent">

                    смородина
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JamsPage;