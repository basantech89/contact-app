import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';
import contacts from '../../contacts';
import styles from './contacts.module.scss';
import Modal from '../generic/Modal';

const ContactInfo = ({ match }) => {
  const contactId = match.params.id;
  const contact = contacts.find(contact => contact._id === contactId);

  return (
    <>
      <Card>
        <CardBody>
          <img className={styles.picture} src={contact.picture} alt={contact.name.first} />
          <CardTitle style={{ display: 'inline-flex', flexDirection: 'column', marginLeft: 40 }}>
            <h1> {contact.name.first} {contact.name.last} </h1>
            <span>
              <img className={styles['work-img']} src={require('../../assets/icons/manager.png')} alt="work" />
              {contact.company}
            </span>
          </CardTitle>
          <CardText> {contact.about} </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardText tag="h5" className={styles['card-text']} style={{ marginBottom: 50 }}>
            <img src={require('../../assets/icons/call.png')} alt="call" />
            <span> {contact.phone} </span>
          </CardText>
          <CardText tag="h5" className={styles['card-text']}>
            <img height="60%" src={require('../../assets/icons/mail.png')} alt="email" />
            <span> {contact.email} </span>
          </CardText>
          <CardText tag="h5" className={styles['card-text']}>
            <img src={require('../../assets/icons/home-address.png')} alt="home-address" />
            <span> {contact.address} </span>
          </CardText>
          <Modal name={`${contact.name.first} ${contact.name.last}`} />
        </CardBody>
      </Card>
    </>
  );
};

export default withRouter(ContactInfo);
