import styled from 'styled-components';

const LayoutWrapper = styled.div`
  color: rgba(0, 0, 0, 0.65);
  background-color: #f0f2f5;
  display: flex;

  h1 {
    font-size: 2em;
  }

  .bg-primary-light {
    background-color: #e6f7ff;
  }

  .primary-light {
    color: #e6f7ff;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: rgba(0, 0, 0, 0.85);
  }

  .content {
    padding: 24px;
  }

  .main {
    display: flex;
    flex-direction: column;
    flex: auto;
    background: #f0f2f5;
    min-height: 100vh;
    overflow-x: hidden;
  }

  .jumbotron {
    background-color: #ffffff;
    min-height: 600px;
  }

  
  h1, .h1 {
    text-align: center;
    font-size: 4.0rem;
    font-weight: 500;
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#55d5fc+0,23c0ef+50,05abe0+100 */
    background: rgb(85,213,252); /* Old browsers */
    background: -moz-linear-gradient(top,  rgba(85,213,252,1) 0%, rgba(35,192,239,1) 50%, rgba(5,171,224,1) 100%); 
    /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  rgba(85,213,252,1) 0%,rgba(35,192,239,1) 50%,rgba(5,171,224,1) 100%); 
    /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  rgba(85,213,252,1) 0%,rgba(35,192,239,1) 50%,rgba(5,171,224,1) 100%); 
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#55d5fc', endColorstr='#05abe0',GradientType=0 ); 
    /* IE6-9 */

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2, .h2 {
    text-align: center;
    font-size: 3rem;
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#55d5fc+0,23c0ef+50,05abe0+100 */
    background: rgb(85,213,252); /* Old browsers */
    background: -moz-linear-gradient(top,  rgba(85,213,252,1) 0%, rgba(35,192,239,1) 50%, rgba(5,171,224,1) 100%); 
    /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  rgba(85,213,252,1) 0%,rgba(35,192,239,1) 50%,rgba(5,171,224,1) 100%); 
    /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  rgba(85,213,252,1) 0%,rgba(35,192,239,1) 50%,rgba(5,171,224,1) 100%); 
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#55d5fc', endColorstr='#05abe0',GradientType=0 ); 
    /* IE6-9 */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h3, .h3 {
    font-size: 1.5rem;
    color: #030303;
    
  }
`;

export default LayoutWrapper;
