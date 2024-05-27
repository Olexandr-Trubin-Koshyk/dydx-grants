import { FC } from 'react'
import { getIconByName } from '../../../utils/scripts'

import styles from './button.module.scss'

const getButtonClassNames = (btnOrder: "default" | "reverse", btnType: 'default' | 'secondary' | 'tertiary') => {
  let buttonClassName = `${styles.button}`;

  if (btnOrder === 'reverse') {
    buttonClassName += ` ${styles[btnOrder]}`
  }

  if (btnType !== 'default') {
    buttonClassName += ` ${styles[btnType]}`
  }

  return buttonClassName;
}

interface Props {
  title: string;
  icon?: "arrow" | "dot";
  order?: "default" | "reverse";
  type?: "default" | "secondary" | "tertiary";
}

const Button: FC<Props> = ({ title, icon, order = 'default', type = 'default' }) => {
  return (
    <div className={getButtonClassNames(order, type)}>
      <p>{title}</p>
      {icon && <img src={getIconByName(icon)} alt="Button icon" />}
    </div>
  )
}

export default Button
