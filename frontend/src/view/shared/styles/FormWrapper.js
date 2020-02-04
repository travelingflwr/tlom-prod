import styled from 'styled-components';

const FormWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 0;

  label {
    display: inline-block;
    margin-bottom: .5rem;
    margin-right: 4px;
  }

  label.required::before {
    display: inline-block;
    margin-right: 4px;
    content: '*';
    line-height: 1;
    font-size: 16px;
    color: #f5222d;
  }

  form-inline label {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
    margin-right: 4px;
  }

  

  .react-datepicker-wrapper {
    width: 100%;
  }

  .invalid-feedback {
    display: block;
  }

  .form-buttons {
    padding-top: 16px;

    .btn {
      margin-right: 8px;
      margin-bottom: 8px;
    }
  }
`;

export default FormWrapper;
