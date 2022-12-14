import React from 'react';
import styled from 'styled-components';
import { ImageStr } from '../util/image';
import { Link } from 'react-router-dom';
import faceB from '../../resources/shared/desktop/fb.svg'
import twitter from '../../resources/shared/desktop/twiiter.svg'
import instagrm from '../../resources/shared/desktop/insta.svg';
import logo from '../../resources/shared/desktop/logo.svg';




export const HomeFooter = ()=>{
    return(
        <>
            <HOMEFOOTER>
                <HFCONTAINER>
                    <FCONTENT>
                        <FOOTERLOGO>
                            <ImageStr source={logo} />
                        </FOOTERLOGO>
                        <FOOTERNAV>
                            <Link to='/' className="link">
                                <FOOTERLIST>
                                    Home
                                </FOOTERLIST>
                            </Link>
                            <Link to='/' className="link">
                                <FOOTERLIST>
                                    About Us
                                </FOOTERLIST>
                            </Link>
                            <Link to='/' className="link">
                                <FOOTERLIST>
                                    Create your own plan
                                </FOOTERLIST>
                            </Link>
                        </FOOTERNAV>
                        <FICON>
                            <ImageStr cl='icon' source={faceB}/>
                            <ImageStr cl='icon' source={twitter}/>
                            <ImageStr cl='icon' source={instagrm}/>
                        </FICON>
                    </FCONTENT>
                </HFCONTAINER>
            </HOMEFOOTER>
        </>
    )
}


// syle

export const HOMEFOOTER = styled.div`
    transition: all .5s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
`

export const HFCONTAINER = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     background: #2C343E;
     padding: 3em 4em 4em;
     width: 90%;
     margin-bottom: 4em;
     transition: all .5s ease-in-out;

     @media(min-width: 773px){
        transition: all .5s ease-in-out;
     }

     @media(min-width: 1020px){
        padding: 1em;
        width: 88%;
     }
`

export const FCONTENT = styled.div`
     transition: all .5s ease-in-out;
     @media(min-width: 1020px){
        display: flex;
        align-items: center;
        justify-content: space-around;
     }
`

export const FOOTERLOGO =styled.div`
    display: flex;
    justify-content: center;
`
//  navigation section

export const FOOTERNAV = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all .5s ease-in-out;
    .link{
        color: #83888f;
        text-decoration: none;
     }

     @media(min-width: 773px){
        flex-direction: row;
     }
    
`

export const FOOTERLIST = styled.li`
     transition: all .5s ease-in-out;
     list-style: none;
     padding: 1em;
`


// social icons

export const FICON = styled.div`
    margin-top: 3em;
    margin-left: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .5s ease-in-out;

    @media(min-width: 1020px){
        margin: 1em;
        transition: all .5s ease-in-out;
    }

    .icon{

        margin: .8em;
        &:hover{
        cursor: pointer;
        transform: translateY(-15px);
        transition: all .5s ease-in-out;
        
    }
    }

  
`