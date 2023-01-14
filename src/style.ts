import styled, { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        color: #2C2C2C;
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
        font-family: Ubuntu, "times new roman", times, roman, serif;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: inherit;
        font-weight: inherit;
    }

    html, body, #root {
        height: 100%;
        line-height: 1;
        background: #E5E5E5;
    }
    li {
        list-style: none;
    }
    img {
        vertical-align: top;
    }
    #root {
        margin:0 auto;
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

`