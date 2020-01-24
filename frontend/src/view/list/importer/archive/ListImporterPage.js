import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';
import importerHoc from 'view/shared/importer/Importer';
import selectors from 'modules/list/importer/listImporterSelectors';
import actions from 'modules/list/importer/listImporterActions';
import fields from 'modules/list/importer/listImporterFields';

class ListImportPage extends Component {
  render() {
    const Importer = importerHoc(
      selectors,
      actions,
      fields,
      i18n('entities.list.importer.hint'),
    );

    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [
              i18n('entities.list.menu'),
              '/list',
            ],
            [
              i18n(
                'entities.list.importer.title',
              ),
            ],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n(
              'entities.list.importer.title',
            )}
          </PageTitle>

          <Importer />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default ListImportPage;
