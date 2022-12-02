import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.scss';
import classes from './Card.module.scss';

interface Props {
  className?: string;
  classes?: {
    _60f95161b382b3c00f3b3057_80_ca?: string;
    root?: string;
  };
  text?: {
    about?: ReactNode;
  };
}
/* @figmaId 1:17 */
export const Card: FC<Props> = memo(function Card(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.about != null ? props.text?.about : <div className={classes.about}>About</div>}
      <div className={classes.frame65}>
        <div
          className={`${props.classes?._60f95161b382b3c00f3b3057_80_ca || ''} ${
            classes._60f95161b382b3c00f3b3057_80_ca
          }`}
        ></div>
      </div>
    </div>
  );
});
