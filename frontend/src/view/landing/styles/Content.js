import styled from 'styled-components';

const Content = styled.div`
  /* width: 800px; */
  width: 90%;
  height: 100%;
  min-height: 100%;
  overflow-y: auto;
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  position: relative;
  background-color: white;

  @media only screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
  }

  .jumbotron {
    background-color: #ffffff;
    /* min-height: 600px; */
  }

  
  h1, .h1 {
    text-align: center;
    font-size: 3.0rem;
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
    font-size: 2rem;
    font-weight: 400;
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
    font-weight: 500;
    font-size: 1.5rem;
    color: #030303;
    
  }
  .btn-lg, .btn-group-lg>.btn {
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;
  }
  .btn-sm, .btn-group-sm>.btn {
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;
  }
  .btn-landing {
    /* color: #fff;
    font-size: 1.25rem;
    background-color: #e5195f;
    border-color: #e5195f ; */
    margin: 0 auto;
    display: block;
    width: 200px;
    postition: relative;
    padding: 12px 0;
    left: 50%;
    font-family: inherit;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    // background-color: #e5195f;
    background-color: #1290DD;
    border: 0;
    border-radius: 35px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
  /* .btn {
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
  } */

  
`;

export default Content;
