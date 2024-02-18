import './Input.styles.scss';
import { InputProps } from './Input.types';

export const Input = (props: InputProps) => {
  const { icon, inputProps } = props;
  return (
    <div className="input">
      {icon}
      <input id={`text-input-${inputProps.name}`} {...inputProps} />
    </div>
  );
};
