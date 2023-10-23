import { AriaRole, MouseEventHandler, PropsWithChildren } from 'react';
import { PropsWithClassName, PropsWithTestId } from '../../utils/types';

/**
 * The `ButtonVariant` enumerates types of Buttons.
 */
export enum ButtonVariant {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Text = 'Text',
}

/**
 * Properties for the `Button` component.
 * @param {boolean} [disabled] - Optional. The button disabled state. Default: `false`
 * @param {MouseEventHandler<HTMLButtonElement>} [onClick] - Optional. A function invoked when the button is clicked.
 * @param {AriaRole} [role] - Optional. An Aria role value. Default: `button`
 * @param {string} [title] - Optional. The title attribute of the HTML button element.
 * @param {string} [type] - Optional. The type attribute of the HTML button element. Default: `button`
 * @param {ButtonVariant} [variant] - Optional. The type of Button. Default: `Primary`
 * @see {@link PropsWithClassName}
 * @see {@link PropsWithTestId}
 * @see {@link PropsWithChildren}
 */
export interface ButtonProps extends PropsWithChildren, PropsWithClassName, PropsWithTestId {
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  role?: AriaRole;
  title?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
}
