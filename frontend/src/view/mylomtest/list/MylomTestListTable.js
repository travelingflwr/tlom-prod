import { i18n } from 'i18n';
import actions from 'modules/mylomtest/list/mylomTestListActions';
import destroyActions from 'modules/mylomtest/destroy/mylomTestDestroyActions';
import selectors from 'modules/mylomtest/list/mylomTestListSelectors';
import destroySelectors from 'modules/mylomtest/destroy/mylomTestDestroySelectors';
import model from 'modules/mylomtest/mylomTestModel';
import mylomTestSelectors from 'modules/mylomtest/mylomTestSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'view/shared/styles/TableWrapper';
import TableColumnHeader from 'view/shared/table/TableColumnHeader';
import ConfirmModal from 'view/shared/modals/ConfirmModal';
import Pagination from 'view/shared/table/Pagination';
import Spinner from 'view/shared/Spinner';
import UserListItem from 'view/iam/list/UserListItem';
import CustomerListItem from 'view/customer/list/CustomerListItem';
import SubscriptionListItem from 'view/subscription/list/SubscriptionListItem';
import CategoryListItem from 'view/category/list/CategoryListItem';

const { fields } = model;

class MylomTestListTable extends Component {
  state = {
    recordIdToDestroy: null,
  };

  doOpenDestroyConfirmModal = (id) => {
    this.setState({
      recordIdToDestroy: id,
    });
  };

  doCloseDestroyConfirmModal = () => {
    this.setState({ recordIdToDestroy: null });
  };

  doChangeSort = (columnKey) => {
    const { dispatch, sorter } = this.props;

    const order =
      sorter.columnKey === columnKey &&
      sorter.order === 'ascend'
        ? 'descend'
        : 'ascend';

    dispatch(
      actions.doChangeSort({
        columnKey,
        order,
      }),
    );
  };

  doChangePagination = (pagination) => {
    const { dispatch } = this.props;
    dispatch(actions.doChangePagination(pagination));
  };

  doDestroy = (id) => {
    this.doCloseDestroyConfirmModal();
    const { dispatch } = this.props;
    dispatch(destroyActions.doDestroy(id));
  };

  doToggleAllSelected = () => {
    const { dispatch } = this.props;
    dispatch(actions.doToggleAllSelected());
  };

  doToggleOneSelected = (id) => {
    const { dispatch } = this.props;
    dispatch(actions.doToggleOneSelected(id));
  };

  render() {
    const {
      pagination,
      rows,
      loading,
      isAllSelected,
      selectedKeys,
      sorter,
      hasRows,
    } = this.props;

    return (
      <TableWrapper>
        <div className="table-responsive">
          <table className="table table-bordered mt-4">
            <thead className="thead">
              <tr>
                <TableColumnHeader className="th-checkbox">
                  {hasRows && (
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="table-header-checkbox"
                        checked={!!isAllSelected}
                        onChange={() =>
                          this.doToggleAllSelected()
                        }
                      />
                      <label
                        htmlFor="table-header-checkbox"
                        className="custom-control-label"
                      >
                        &#160;
                      </label>
                    </div>
                  )}
                </TableColumnHeader>
                    <TableColumnHeader
                      onSort={this.doChangeSort}
                      hasRows={hasRows}
                      sorter={sorter}
                      name={fields.id.name}
                      label={fields.id.label}
                    />
                    <TableColumnHeader
                      onSort={this.doChangeSort}
                      hasRows={hasRows}
                      sorter={sorter}
                      name={fields.name.name}
                      label={fields.name.label}
                    />
                    <TableColumnHeader
                      onSort={this.doChangeSort}
                      hasRows={hasRows}
                      sorter={sorter}
                      name={fields.description.name}
                      label={fields.description.label}
                    />
                    <TableColumnHeader
                      label={fields.user.label}
                      name={fields.user.name}
                      asRows={hasRows}
                    />
                    <TableColumnHeader
                      label={fields.customer.label}
                    />
                    <TableColumnHeader
                      label={fields.subscription.label}
                    />
                    <TableColumnHeader
                      onSort={this.doChangeSort}
                      hasRows={hasRows}
                      sorter={sorter}
                      name={fields.dueDate.name}
                      label={fields.dueDate.label}
                    />
                    <TableColumnHeader
                      label={fields.category.label}
                    />
                    <TableColumnHeader
                      onSort={this.doChangeSort}
                      hasRows={hasRows}
                      sorter={sorter}
                      name={fields.state.name}
                      label={fields.state.label}
                    />
                    <TableColumnHeader
                      onSort={this.doChangeSort}
                      hasRows={hasRows}
                      sorter={sorter}
                      name={fields.status.name}
                      label={fields.status.label}
                    />
                    <TableColumnHeader
                      onSort={this.doChangeSort}
                      hasRows={hasRows}
                      sorter={sorter}
                      name={fields.createdAt.name}
                      label={fields.createdAt.label}
                    />
                <TableColumnHeader className="th-actions" />
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td colSpan={100}>
                    <Spinner />
                  </td>
                </tr>
              )}
              {!loading && !hasRows && (
                <tr>
                  <td colSpan={100}>
                    <div className="d-flex justify-content-center">
                      {i18n('table.noData')}
                    </div>
                  </td>
                </tr>
              )}
              {!loading &&
                rows.map((row) => (
                  <tr key={row.id}>
                    <th className="th-checkbox" scope="row">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id={`table-header-checkbox-${row.id}`}
                          checked={selectedKeys.includes(
                            row.id,
                          )}
                          onChange={() =>
                            this.doToggleOneSelected(row.id)
                          }
                        />
                        <label
                          htmlFor={`table-header-checkbox-${row.id}`}
                          className="custom-control-label"
                        >
                          &#160;
                        </label>
                      </div>
                    </th>
                        <td>
                          {fields.id.forView(
                            row[fields.id.name],
                          )}
                        </td>
                        <td>
                          {fields.name.forView(
                            row[fields.name.name],
                          )}
                        </td>
                        <td>
                          {fields.description.forView(
                            row[fields.description.name],
                          )}
                        </td>
                        <td>
                          <UserListItem value={row[fields.user.name]} />
                        </td>
                        <td>
                          <CustomerListItem value={row[fields.customer.name]} />
                        </td>
                        <td>
                          <SubscriptionListItem value={row[fields.subscription.name]} />
                        </td>
                        <td>
                          {fields.dueDate.forView(
                            row[fields.dueDate.name],
                          )}
                        </td>
                        <td>
                          <CategoryListItem value={row[fields.category.name]} />
                        </td>
                        <td>
                          {fields.state.forView(
                            row[fields.state.name],
                          )}
                        </td>
                        <td>
                          {fields.status.forView(
                            row[fields.status.name],
                          )}
                        </td>
                        <td>
                          {fields.createdAt.forView(
                            row[fields.createdAt.name],
                          )}
                        </td>
                    <td className="td-actions">
                      <Link
                        className="btn btn-link"
                        to={`/mylomtest/${row.id}`}
                      >
                        {i18n('common.view')}
                      </Link>
                      {this.props.hasPermissionToEdit && (
                        <Link
                          className="btn btn-link"
                          to={`/mylomtest/${row.id}/edit`}
                        >
                          {i18n('common.edit')}
                        </Link>
                      )}
                      {this.props
                        .hasPermissionToDestroy && (
                        <button
                          className="btn btn-link"
                          type="button"
                          onClick={() =>
                            this.doOpenDestroyConfirmModal(
                              row.id,
                            )
                          }
                        >
                          {i18n('common.destroy')}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <Pagination
          onChange={this.doChangePagination}
          disabled={loading}
          pagination={pagination}
        />

        {this.state.recordIdToDestroy && (
          <ConfirmModal
            title={i18n('common.areYouSure')}
            onConfirm={() =>
              this.doDestroy(this.state.recordIdToDestroy)
            }
            onClose={() =>
              this.doCloseDestroyConfirmModal()
            }
            okText={i18n('common.yes')}
            cancelText={i18n('common.no')}
          />
        )}
      </TableWrapper>
    );
  }
}

function select(state) {
  return {
    loading:
      selectors.selectLoading(state) ||
      destroySelectors.selectLoading(state),
    rows: selectors.selectRows(state),
    pagination: selectors.selectPagination(state),
    filter: selectors.selectFilter(state),
    selectedKeys: selectors.selectSelectedKeys(state),
    hasRows: selectors.selectHasRows(state),
    sorter: selectors.selectSorter(state),
    isAllSelected: selectors.selectIsAllSelected(state),
    hasPermissionToEdit: mylomTestSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToDestroy: mylomTestSelectors.selectPermissionToDestroy(
      state,
    ),
  };
}

export default connect(select)(MylomTestListTable);
