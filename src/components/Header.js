import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src="data:image/jpeg;base64,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"/>
            
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a {
        display: flex; 
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0; 
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`
