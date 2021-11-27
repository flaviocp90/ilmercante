import React from 'react';
import '../style/display-window.css';
import { BsFacebook } from 'react-icons/bs';
import vetrina1 from '../img/IMG_4865.JPG';
import vetrina2 from '../img/IMG_4878.JPG';
import vetrina3 from '../img/IMG_4879.JPG';
import vetrina4 from '../img/IMG_4880.JPG';
import vetrina5 from '../img/IMG_4885.JPG';
import vetrina6 from '../img/IMG_4899.JPG';
import vetrina7 from '../img/IMG_4846.JPG';
import vetrina8 from '../img/IMG_4852.JPG';
import vetrina9 from '../img/IMG_4853.JPG';

const DisplayWindow = () => {
    return (
        <main role='main'>
            <section className='jumbotron text-center'>
                <div className='container'>
                    <h1 className='jumbotron-heading'>Scopri alcuni dei nostri fantastici prodotti</h1>
                    <p className='lead text-muted'>La cura del dettaglio ci contaddistingue</p>
                </div>
            </section>

            <div className='container-fluid d-flex justify-content-center header-vetrina'> 
                <h1>Per la tua laurea</h1>
            </div>


            <div className='abum py-5 bg-light'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='card mb-4 box-shadow'>
                                <img className='card-img-top' src={vetrina1} alt="" />
                                <div className='card-body'>
                                    <h2></h2>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='col-md-4'>
                            <div className='card mb-4 box-shadow'>
                                <img className='card-img-top' src={vetrina5} alt="" />
                                <div className='card-body'>
                                    <h2></h2>
                                    <p></p>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='card mb-4 box-shadow'>
                                <img className='card-img-top' src={vetrina6} alt="" />
                                <div className='card-body'>
                                    <h2></h2>
                                    <p></p>
                                </div>
                            </div>
                        </div>

                        <div className='container-fluid d-flex justify-content-center header-vetrina'> 
                <h1>Per il tuo evento speciale</h1>
            </div>
                        <div className='col-md-4'>
                            <div className='card mb-4 box-shadow'>
                                <img className='card-img-top' src={vetrina4} alt="" />
                                <div className='card-body'>
                                <h2></h2>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className='col-md-4'>
                            <div className='card mb-4 box-shadow'>
                                <img className='card-img-top' src={vetrina2} alt="" />
                                <div className='card-body'>
                                <h2></h2>
                                    <p></p>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='card mb-4 box-shadow'>
                                <img className='card-img-top' src={vetrina3} alt="" />
                                <div className='card-body'>
                                <h2></h2>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div className='container-fluid d-flex justify-content-center header-vetrina'> 
                <h1>Per un fantastico regalo</h1>
            </div>


                        <div className='col-md-4'>
                            <div className='card mb-4 box-shadow'>
                                <img className='card-img-top' src={vetrina7} alt="" />
                                <div className='card-body'>
                                <h2></h2>
                                    <p></p>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='card mb-4 box-shadow'>
                                <img className='card-img-top' src={vetrina8} alt="" />
                                <div className='card-body'>
                                <h2></h2>
                                    <p></p>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='card mb-4 box-shadow'>
                                <img className='card-img-top' src={vetrina9} alt="" />
                                <div className='card-body'>
                                <h2></h2>
                                    <p></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <section className='jumbotron text-center'>
                <div className='container'>
                    <h1 className='jumbotron-heading'><a href="https://www.facebook.com/Il-Mercante-dei-Sogni-105897247545388" target='_blank'><BsFacebook/></a> Seguici sulla nostra pagina Facebook</h1>
                </div>
            </section>


        </main>
        
    )
};

export default  DisplayWindow;