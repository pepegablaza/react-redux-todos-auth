import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
  }
  *:focus {
  outline: 0;
  outline: none;
  }
  html {
    font-size: 62.5%;
    box-sizing: border-box;
    --color-main: ${(props) => props.theme.colors.main};
    --color-textColor: ${(props) => props.theme.colors.textColor};
    --color-mainDark: ${(props) => props.theme.colors.mainDark};
    --color-borderColor: ${(props) => props.theme.colors.borderColor};
    --color-mainLight: ${(props) => props.theme.colors.mainLight};
    --color-succcessDark: ${(props) => props.theme.colors.succcessDark};
    

    --color-backgroundColor: ${(props) => props.theme.colors.backgroundColor};
    --color-mainLighter: ${(props) => props.theme.colors.mainLighter};
    --color-text: ${(props) => props.theme.colors.textColor};
    --color-white: ${(props) => props.theme.colors.whiteColor};
    --color-errorRed: ${(props) => props.theme.colors.errorRed};
    --shadow: ${(props) => props.theme.colors.shadow};
    @media ${(props) => props.theme.mediaQueries.small} {
      font-size: 60%;
    }
    @media ${(props) => props.theme.mediaQueries.smallest} {
      font-size: 55%;
    }
  }
  body {
    font-family: 'Rubik', sans-serif;
    line-height: 1.6;
    background-color: #f2f2f2;
    
  }
  a, button {
    cursor: pointer;
  }

   a,input, textarea, button {
    outline: none;
    text-decoration: none;
    font-family: inherit;
    color:inherit;
  }


  .icon{
    display:block;
    height:100%;
    width:50%;
    object-fit: contain;
  }


.custom-shape-divider-bottom-1633888040 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1633888040 svg {
    position: relative;
    display: block;
    width: calc(132% + 1.3px);
    height: 218px;
}

.custom-shape-divider-bottom-1633888040 .shape-fill {
    fill: #1D235E;
}
.fas {
  transform:scale(1.5);
 
}
.fas:hover{
   cursor:pointer;
}
.fa-edit {
 color:var( --color-succcessDark);
}
.fa-trash-alt {
  color:var(--color-mainDark)
}
`;
export default GlobalStyle;
