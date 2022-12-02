import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.scss';
import classes from './HeaderSP.module.scss';
import { KeyboardArrowDownIcon } from './KeyboardArrowDownIcon';

interface Props {
  className?: string;
  classes?: {
    dSC008701?: string;
    maskGroup?: string;
    root?: string;
  };
  swap?: {
    keyboardArrowDown?: ReactNode;
  };
  text?: {
    about?: ReactNode;
  };
}
/* @figmaId 1:2 */
export const HeaderSP: FC<Props> = memo(function HeaderSP(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame76}>
        <div className={`${props.classes?.maskGroup || ''} ${classes.maskGroup}`}>
          <div className={`${props.classes?.dSC008701 || ''} ${classes.dSC008701}`}></div>
        </div>
        <div className={classes.frame74}>
          <div className={classes.frame71}>
            <div className={classes.shimabukuroMegumi}>Shimabukuro Megumi</div>
          </div>
          <div className={classes.frame72}>
            <div className={classes.unnamed}>/</div>
          </div>
          <div className={classes.frame73}>
            {props.text?.about != null ? props.text?.about : <div className={classes.about}>about</div>}
          </div>
        </div>
      </div>
      <div className={classes.keyboardArrowDown}>
        {props.swap?.keyboardArrowDown || <KeyboardArrowDownIcon className={classes.icon} />}
      </div>
    </div>
  );
});
