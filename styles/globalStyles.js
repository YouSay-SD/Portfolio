import { Global, css } from '@emotion/react';

export const GlobalStyles = () => (
  <Global
    styles={css`
      // Font Family
      /* @font-face {
        font-family: 'Segoe UI Historic';
        src: url('./fonts/Segoe-ui-historic.ttf') format('truetype');
      }

      @font-face {
        font-family: 'Segoe UI Historic';
        src: url('./fonts/Segoe-ui-historic-regular.ttf') format('truetype');
        font-weight: 400;
      } */

      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'M PLUS 1p', sans-serif;
        /* font-family: 'Segoe UI Historic', 'Segoe UI', Helvetica, Arial,
          sans-serif; */
      }

      body {
        &::-webkit-scrollbar {
          width: 4px; 
          background-color: rgba(38, 42, 46, .2);
        }

        &::-webkit-scrollbar-thumb {
          background-color: #262A2E;
          border-radius: 5px;
        }
      }

      img {
        max-width: 100%;
        vertical-align: top;
      }

      a {
        text-decoration: none;
      }
    `}
  />
);
