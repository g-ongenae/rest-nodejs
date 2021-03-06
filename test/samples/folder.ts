import { Holder, IFolder } from '../../src';
import { legalDocumentSample } from './legal-document';
import { supportingDocumentSample } from './supporting-document';

export const folderSample: IFolder = {
  id: '5f61d3bf3b9e4d2ad7b4b251',
  state: 0,
  createdAt: new Date('2020-09-16T08:58:39.471+0000'),
  legalDocuments: [legalDocumentSample],
  supportingDocuments: [supportingDocumentSample],
  updatedAt: new Date('2020-09-16T08:58:39.479+0000'),
  expiredAt: new Date('2020-10-16T08:58:39.472+0000'),
  signatures: [
    {
      id: 'sign_id',
      partnerId: 'partner_id',
      legalDocumentIds: ['docId'],
      createdAt: 1560675749902,
      state: 0,
      holder: Holder.APPLICANT,
    },
  ],
};

export const folderSampleWithLastFileUploadedAt: IFolder = {
  ...folderSample,
  lastFileUploadedAt: new Date('2020-10-16T08:58:39.472+0000'),
};
