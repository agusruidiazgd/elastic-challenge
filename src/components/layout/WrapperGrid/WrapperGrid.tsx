import './WrapperGrid.styles.scss';
import { WrapperGridProps } from './WrapperGrid.types';

export const WrapperGrid = (props: WrapperGridProps) => {
  const { children } = props;
  return <main className="wrapper-grid">{children}</main>;
};
