import React from 'react'
import './weather.css';

function ShowTemp({text}) {
    return (
        <div class="container my-5">
            <div class="row mb-2">
                <div class="col-md-4">
                    <div class="card card1 ">

                        <div class="card-body">
                            <h5 class="card-title">Description</h5>
                            <p class="card-text">{text.description}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card card2" >
                        <div class="card-body">
                            <h5 class="card-title">Temp</h5>
                            <p class="card-text">{text.temp }°C</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card card3">
                        <div class="card-body">
                            <h5 class="card-title">Temp Min</h5>
                            <p class="card-text">{text.temp_min}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-md-4">
                    <div class="card card4">

                        <div class="card-body">
                            <h5 class="card-title">Temp Max</h5>
                            <p class="card-text">{text.temp_max}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card card5">
                        <div class="card-body">
                            <h5 class="card-title">Humidity</h5>
                            <p class="card-text">{text.humidity}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card card6">
                        <div class="card-body">
                            <h5 class="card-title">Sunrise</h5>
                            <p class="card-text">{text.sunrise}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-md-4">
                    <div class="card card7">

                        <div class="card-body">
                            <h5 class="card-title">Sunset</h5>
                            <p class="card-text">{text.sunset}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card card8">
                        <div class="card-body">
                            <h5 class="card-title">Country</h5>
                            <p class="card-text">{text.country}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ShowTemp;