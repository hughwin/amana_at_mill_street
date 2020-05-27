import Carousel from 'react-bootstrap/Carousel' 
import React,  { Component } from 'react'
import livingroom1 from '../static/images/ground-living.jpeg'
import livingroom2 from '../static/images/ground-living-2.jpeg'
export class BootStrapCarousel extends Component {
    render() {
        return (
            <div>
                <div class='container-fluid' >
                    <div className="row title" style={{ marginBottom : "20px"}}>
                        </div>
                        </div>
                        <div className='container-fluid'>
                            <Carousel>
                                <Carousel.Item style = {{'height':"400px"}} >
                                    <img style={{'height':"400px"}}
                                    className="d-block w-100"
                                    src={livingroom1} 
                                    alt="Living room"/>
                                    </Carousel.Item>
                                    <Carousel.Item style = {{'height':"400px"}} >
                                    <img style={{'height':"400px"}}
                                    className="d-block w-100"
                                    src={livingroom2} 
                                    alt="Living room"/>
                                    </Carousel.Item>
                                    </Carousel>
                                    </div>
                                    </div>

        )
    }
}

export default BootStrapCarousel