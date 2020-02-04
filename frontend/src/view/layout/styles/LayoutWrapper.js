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
  .btn-lg, .btn-group-lg>.btn {
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;
  }
  .btn-sm, .btn-group-sm>.btn {
    padding: .5rem 1rem;
    font-size: .65rem;
    line-height: 1.5;
    border-radius: .3rem;
    background-color: #1290DD;
    color: #fff;
    width: 70px;
    font-weight: 700;
    border: 0;
    border-radius: 35px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

    &:hover {
      box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
      transform: translate(0, -5px);
  }
  }
  .btn-home {
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
  .badge-tlom {
    display: inline-block;
    padding: .25em .4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    background-color: #1290DD;
    vertical-align: baseline;
    border-radius: .25rem;
    transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
  }
  .badge-pill-tlom {
    padding-right: .6em;
    padding-left: .6em;
    border-radius: 10rem;
    background-color: #1290DD;
  }
  .badge {
    display: inline-block;
    padding: .25em .4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    background-color: #1290DD;
    vertical-align: baseline;
    border-radius: .25rem;
    transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
}



.list-group-item-lom {
  position: relative;
  display: block;
  padding: .75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  // border: 1px solid rgba(0,0,0,0.125);
}

.card-lom {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  // border: 1px solid rgba(0,0,0,0.125);
  border-radius: .25rem;
}

.card-header-lom {
  padding: .75rem 1.25rem;
  align-content: left;
  margin-bottom: 0;
  // background-color: rgba(0,0,0,0.03);
  border-bottom: 1px solid rgba(0,0,0,0.125);
}

.card-header-lom:first-child {
  border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
}
.card-title-lom {
  margin-bottom: .75rem;
}

.card-group-lom {
  margin-top: 4px;
  padding: 24px;
  background-color: white;
  width: 100%;
  border: 1px solid #dee2e6 !important;
  border-radius: 5px;
}


`;

export default LayoutWrapper;
