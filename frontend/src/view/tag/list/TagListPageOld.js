import React, { Component } from 'react';
import TagListFilter from 'view/tag/list/TagListFilter';
import TagListTable from 'view/tag/list/TagListTable';
import TagListToolbar from 'view/tag/list/TagListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class TagListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.tag.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.tag.list.title')}
          </PageTitle>

          <TagListToolbar />
          <TagListFilter />
          <TagListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default TagListPage;
