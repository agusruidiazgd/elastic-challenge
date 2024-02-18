import { ReactElement } from 'react';
import './Header.styles.scss';

export const Header = (props: { action?: ReactElement }) => {
  const { action } = props;
  return (
    <header className="header">
      <h1 className="header-title">Contact Elastic List</h1>
      {action}
    </header>
  );
};
