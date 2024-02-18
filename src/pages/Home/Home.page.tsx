import { useEffect, useState } from 'react';
import { ContactCard, Layout, WrapperGrid } from '../../components';
import { Contact, ContactModel } from '../../shared/types';
import './Home.styles.scss';
import { contactFormatter } from '../../shared/utils';
import { getContactsData } from '../../services';
import { InputSearch } from '../../components/layout/Header/components';
import { BehaviorSubject, debounceTime, distinctUntilChanged } from 'rxjs';

export const HomePage = () => {
  const [isContactsLoading, setContactsLoading] = useState(false);
  const [contacts, setContacts] = useState<{
    data: Contact[];
    filteredData: Contact[];
    loading: boolean;
    errorMessage: string;
  }>({
    data: [],
    filteredData: [],
    loading: false,
    errorMessage: '',
  });

  const [subject] = useState(new BehaviorSubject(''));

  useEffect(() => {
    const subscription = subject
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((term) => {
        const filteredContacts = contacts.data.filter((contact) =>
          contact.name.toLowerCase().includes(term.toLowerCase())
        );
        setContacts((prev) => ({
          ...prev,
          loading: false,
          filteredData: filteredContacts,
          errorMessage: '',
        }));
      });

    return () => {
      subscription.unsubscribe();
    };
  }, [contacts.data, subject]);

  useEffect(() => {
    setContactsLoading(true);
    getContactsData()
      .then((contactsData: ContactModel[]) => {
        const mappedContacts = contactsData.map((contact) =>
          contactFormatter(contact)
        );
        setContacts({
          ...contacts,
          data: mappedContacts,
          filteredData: mappedContacts,
        });
        setContactsLoading(false);
      })
      .catch((e) => {
        setContacts({
          ...contacts,
          loading: false,
          data: [],
          filteredData: [],
          errorMessage: e.message,
        });
      });
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    subject.next(term);
  };
  if (isContactsLoading) {
    return (
      <Layout>
        <div className="loading-container">Loading...</div>
      </Layout>
    );
  }

  return (
    <Layout
      headerAction={
        <InputSearch
          loading={contacts.loading}
          inputProps={{ placeholder: 'Search...', onChange: onChange }}
        />
      }
    >
      <div className="container">
        <WrapperGrid>
          {contacts.errorMessage ? (
            <p>error</p>
          ) : (
            contacts.filteredData.map((contact) => (
              <ContactCard key={`contact-${contact.id}`} contact={contact} />
            ))
          )}
        </WrapperGrid>
      </div>
    </Layout>
  );
};
