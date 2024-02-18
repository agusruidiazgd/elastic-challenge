import { InputSearchProps } from './InputSearch.types';
import './InputSearch.styles.scss';
import { Input } from '../../../../form';

export const InputSearch = (props: InputSearchProps) => {
  const { inputProps } = props;
  return (
    <Input icon={<i className="fa fa-search"></i>} inputProps={inputProps} />
  );
};
