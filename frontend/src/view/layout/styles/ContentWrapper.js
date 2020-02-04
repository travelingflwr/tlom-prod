import styled from 'styled-components';

const ContentWrapper = styled.div`
  margin-top: 4px;
  padding: 4px;
  background-color: white;
  width: 100%;
  // border: 1px solid #dee2e6 !important
  border-radius: 5px;

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

.card-group-lom {
  margin-top: 4px;
  padding: 4px;
  background-color: white;
  width: 100%;
  // border: 1px solid #dee2e6 !important;
  border-radius: 5px;
}

.list-group-item-lom {
  position: relative;
  display: block;
  // padding: .75rem 1.25rem;
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
  // padding: .75rem 1.25rem;
  align-content: left;
  margin-bottom: 0;
  // background-color: rgba(0,0,0,0.03);
  // border-bottom: 1px solid rgba(0,0,0,0.125);
}

.card-header-lom:first-child {
  // height: 30px;
  // background-color: rgba(0,0,0,0.03);
  border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
}
.card-title-lom {
  margin-bottom: .75rem;
  
}


`;

export default ContentWrapper;
