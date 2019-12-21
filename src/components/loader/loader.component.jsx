import React from 'react'

import {LoaderContainer, LoaderOverlay} from './loader.styles'

const Loader = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <LoaderOverlay>
                <LoaderContainer/>
            </LoaderOverlay>
        ) : (
            <WrappedComponent {...otherProps } />
        )
    }
    return Spinner
}


export default Loader