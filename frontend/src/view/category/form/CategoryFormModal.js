import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { i18n } from 'i18n';
import CategoryForm from 'view/category/form/CategoryForm';
import CategoryService from 'modules/category/categoryService';
import Errors from 'modules/shared/error/errors';

class CategoryFormModal extends Component {
  constructor(props) {
    super(props);
    this.modalRef = React.createRef();
    this.state = {
      saveLoading: false,
    };
  }

  componentDidMount() {
    window.$(this.modalRef.current).modal('show');
    window
      .$(this.modalRef.current)
      .on('hidden.bs.modal', this.props.onClose);
  }

  doSubmit = async (_, data) => {
    try {
      this.setState({
        saveLoading: true,
      });
      const { id } = await CategoryService.create(data);
      const record = await CategoryService.find(id);
      window.$(this.modalRef.current).modal('hide');
      this.props.onSuccess(record);
    } catch (error) {
      Errors.handle(error);
    } finally {
      this.setState({
        saveLoading: false,
      });
    }
  };

  doCancel = () => {
    window.$(this.modalRef.current).modal('hide');
  };

  render() {
    return ReactDOM.createPortal(
      <div
        ref={this.modalRef}
        className="modal"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {i18n('entities.category.new.title')}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
              >
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <CategoryForm
                saveLoading={this.state.saveLoading}
                onSubmit={this.doSubmit}
                onCancel={this.doCancel}
                modal
              />
            </div>
          </div>
        </div>
      </div>,
      document.getElementById('modal-root'),
    );
  }
}

export default CategoryFormModal;
