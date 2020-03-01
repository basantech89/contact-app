import React from 'react';
import { withRouter } from 'react-router-dom';
import { Table } from 'reactstrap';
import { usePageContext } from "../common/Pagination/PageProvider";
import Pagination from "../common/Pagination/Pagination";
import contacts from '../../contacts';
import styles from './contacts.module.scss';

const Contacts = ({ history }) => {
  const itemsPerPage = 10;
  const { currentPage } = usePageContext();
  const navigate = (id) => {
    history.push(id);
  };

  const lastItem = currentPage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;
  const showContacts = contacts.slice(firstItem, lastItem).map(contact => (
    <tr onClick={() => navigate(contact._id)} key={contact.index} className={styles.row}>
      <td> {contact.name.first} </td>
      <td> {contact.name.last} </td>
    </tr>
  ));

  return (
    <>
      <Table responsive className={styles.table}>
        <thead>
          <tr>
            <th> First Name </th>
            <th> Last Name </th>
          </tr>
        </thead>
        <tbody>
          {showContacts}
        </tbody>
      </Table>
      <Pagination totalItems={contacts.length} itemsPerPage={itemsPerPage} />
    </>
  );
};

export default withRouter(Contacts);
