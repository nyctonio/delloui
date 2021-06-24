import styled from "styled-components";
import {FaTimes} from 'react-icons/fa';
import {Link as RouterLink} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' :'0')};
    top:${({isOpen}) => (isOpen ? '0' :'-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color:#fff;
`
export const Icon = styled.div`
    position: absolute;
    top:1.25rem;
    right:1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color:#fff;
`;


export const SidebarLink = styled(ScrollLink)`       
    display: flex;
    align-items: center;
    justify-content:center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2 ease-in-out;
    color:#fff;
    cursor: pointer;

    &:hover{
        color:#01bf71;
        transition:0.2s ease-in-out;
    }
`;

export const SideBtnWrap = styled.div`
    display:flex;
    justify-content:center;
`;

export const SidebarMenu = styled.ul`
    padding:0px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,80px);
    text-align: center;

    @media screen and (max-width:480px) {
        grid-template-rows:repeat(6,60px);
    }
`;

export const SidebarRoute = styled(RouterLink)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2 ease-in-out;
    text-decoration: none;

    &:hover{
        color:#010606;
        background:#fff;
        transition: all 0.2s ease-in-out;
    }
`;