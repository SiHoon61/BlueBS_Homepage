import React from 'react';

//assets
import mainVideo from '../../assets/videos/main.mp4';


//style
import { Video } from './style';

const Home = () => {
    return (
        <>
            <Video muted autoPlay loop>
                <source src={mainVideo} type="video/mp4" />
            </Video>
            <Video muted autoPlay loop>
                <source src={mainVideo} type="video/mp4" />
            </Video>
            <Video muted autoPlay loop>
                <source src={mainVideo} type="video/mp4" />
            </Video>
            <Video muted autoPlay loop>
                <source src={mainVideo} type="video/mp4" />
            </Video>
            <Video muted autoPlay loop>
                <source src={mainVideo} type="video/mp4" />
            </Video>
        </>

    );
};

export default Home;