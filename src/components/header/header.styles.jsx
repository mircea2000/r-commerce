import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

// Option Container Styles
const OptionContainerStyles = css`
    padding: 10px 15px;
    color: #fff;
    text-decoration: none;
    font-weight: 400;
    cursor: pointer;
`
// The Header Container
export const HeaderContainer = styled.header`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    background-color: black;
    border-bottom: 3px solid #41ffbf;
`
// Logo Container
export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 15px 37.5px;
`
// Options Container
export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 15px;
`
// Option Link
export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`
// Option Div
export const OptionDiv = styled.div`
    ${OptionContainerStyles}
`
