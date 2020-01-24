import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormErrors from 'view/shared/form/formErrors';
import { FastField } from 'formik';

export class SwitchFormItemNotFast extends Component {
  render() {
    const {
      label,
      name,
      form,
      hint,
      size,
      inputProps,
      errorMessage,
      required,
    } = this.props;

    const sizeLabelClassName =
      {
        small: 'col-form-label-sm',
        large: 'col-form-label-lg',
      }[size] || '';

    return (
      <div className="form-group">
        {!!label && (
          <label
            className={`col-form-label ${
              required ? 'required' : null
            } ${sizeLabelClassName}`}
            htmlFor={name}
          >
            {label}
          </label>
        )}

        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id={name}
            name={name}
            onChange={(event) => {
              form.setFieldValue(
                name,
                event.target.checked,
              );
              form.setFieldTouched(name);
            }}
            checked={!!form.values[name]}
            {...inputProps}
          />

          <label
            className="custom-control-label"
            htmlFor={name}
          >
            &#160;
          </label>
        </div>

        <div className="invalid-feedback">
          {FormErrors.displayableError(
            form,
            name,
            errorMessage,
          )}
        </div>

        {!!hint && (
          <small className="form-text text-muted">
            {hint}
          </small>
        )}
      </div>
    );
  }
}

SwitchFormItemNotFast.defaultProps = {};

SwitchFormItemNotFast.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  label: PropTypes.string,
  hint: PropTypes.string,
  size: PropTypes.string,
  errorMessage: PropTypes.string,
  inputProps: PropTypes.object,
};

class SwitchFormItem extends Component {
  render() {
    return (
      <FastField
        name={this.props.name}
        render={({ form }) => (
          <SwitchFormItemNotFast
            {...this.props}
            form={form}
          />
        )}
      />
    );
  }
}

export default SwitchFormItem;
