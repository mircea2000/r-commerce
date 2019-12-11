import React from 'react';
// import './homePage.styles.scss'

import {HomePageContainer} from './homePage.styles'

import Directory from '../../components/directory/directory.component'
const HomePage = () => {
    return (
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
    );
};

export default HomePage;