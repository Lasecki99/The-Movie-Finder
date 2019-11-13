import React, { Component } from 'react';
import '../styles/Home.css'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

class Home extends Component {

    state = {}

    render() {
        const movie = this.props.movies.map(item => {
            if (item.backdrop_path) {
                return (
                    <div key={item.id}>
                        <img src={`https://image.tmdb.org/t/p/original/` + item.backdrop_path} alt="" />
                        <h4>{item.title}</h4>
                        <h5 onClick={() => this.props.id(item.id)}>See details</h5>
                    </div>
                )
            } else return null;
        });
        return (
            <div className='movie'>
                <ul className="list">
                    <Carousel
                        showIndicators={false}
                        showThumbs={false}
                        showStatus={false}
                        infiniteLoop={true}
                        autoPlay={true}>{movie}</Carousel>
                </ul>
            </div >
        );
    }
}

export default Home;