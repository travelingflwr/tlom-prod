import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { i18n } from 'i18n';
import Toolbar from 'view/shared/styles/Toolbar';
import { connect } from 'react-redux';
import projectSelectors from 'modules/project/projectSelectors';
import destroySelectors from 'modules/project/destroy/projectDestroySelectors';
import destroyActions from 'modules/project/destroy/projectDestroyActions';
import auditLogSelectors from 'modules/auditLog/auditLogSelectors';
import ButtonIcon from 'view/shared/ButtonIcon';
import ConfirmModal from 'view/shared/modals/ConfirmModal';

class ProjectViewToolbar extends Component {
  state = {
    destroyConfirmVisible: false,
  };

  doOpenDestroyConfirmModal = () => {
    this.setState({
      destroyConfirmVisible: true,
    });
  };

  doCloseDestroyConfirmModal = () => {
    this.setState({ destroyConfirmVisible: false });
  };

  id = () => {
    return this.props.match.params.id;
  };

  doDestroy = () => {
    this.doCloseDestroyConfirmModal();
    const { dispatch } = this.props;
    dispatch(destroyActions.doDestroy(this.id()));
  };

  render() {
    const {
      hasPermissionToEdit,
      hasPermissionToAuditLogs,
      hasPermissionToDestroy,
      destroyLoading,
    } = this.props;

    return (
      <Toolbar>
        {hasPermissionToEdit && (
          <Link to={`/project/${this.id()}/edit`}>
            <button
              className="btn btn-primary"
              type="button"
            >
              <ButtonIcon iconClass="fas fa-edit" />{' '}
              {i18n('common.edit')}
            </button>
          </Link>
        )}

        {hasPermissionToDestroy && (
          <button
            className="btn btn-primary"
            type="button"
            disabled={destroyLoading}
            onClick={this.doOpenDestroyConfirmModal}
          >
            <ButtonIcon
              loading={destroyLoading}
              iconClass="fas fa-trash-alt"
            />{' '}
            {i18n('common.destroy')}
          </button>
        )}

        {hasPermissionToAuditLogs && (
          <Link
            to={`/audit-logs?entityId=${encodeURIComponent(
              this.id(),
            )}`}
          >
            <button className="btn btn-light" type="button">
              <ButtonIcon iconClass="fas fa-history" />{' '}
              {i18n('auditLog.menu')}
            </button>
          </Link>
        )}

        {this.state.destroyConfirmVisible && (
          <ConfirmModal
            title={i18n('common.areYouSure')}
            onConfirm={() => this.doDestroy()}
            onClose={() =>
              this.doCloseDestroyConfirmModal()
            }
            okText={i18n('common.yes')}
            cancelText={i18n('common.no')}
          />
        )}
      </Toolbar>
    );
  }
}

function select(state) {
  return {
    hasPermissionToAuditLogs: auditLogSelectors.selectPermissionToRead(
      state,
    ),
    hasPermissionToEdit: projectSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToDestroy: projectSelectors.selectPermissionToDestroy(
      state,
    ),
    destroyLoading: destroySelectors.selectLoading(state),
  };
}

export default connect(select)(ProjectViewToolbar);
