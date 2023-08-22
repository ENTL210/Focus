import { createGlobalStyle } from "styled-components";
import LalezarWoff from './Lalezar.woff';
import LalezarWoff2 from './Lalezar.woff2';

export default createGlobalStyle`
    @fontface {
        font-family: "Lalezar";
        src: local('Lalezar'), local('Lalezar'),
        url(${LalezarWoff2}) format('woff2'),
        url(${LalezarWoff}) format('woff');
        font-style: normal;
    }
`