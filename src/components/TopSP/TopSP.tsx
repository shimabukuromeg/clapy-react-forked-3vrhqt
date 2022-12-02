import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.scss';
import { Card } from './Card/Card';
import { HeaderSP } from './HeaderSP/HeaderSP';
import { KeyboardArrowDownIcon } from './KeyboardArrowDownIcon';
import classes from './TopSP.module.scss';

interface Props {
  className?: string;
}
/* @figmaId 1:28 */
export const TopSP: FC<Props> = memo(function TopSP(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <HeaderSP
        className={classes.headerSP}
        classes={{ dSC008701: classes.dSC008701, maskGroup: classes.maskGroup }}
        swap={{
          keyboardArrowDown: <KeyboardArrowDownIcon className={classes.icon} />,
        }}
        text={{
          about: <div className={classes.about}>Top</div>,
        }}
      />
      <div className={classes.frame78}>
        <Card
          className={classes.card}
          classes={{ _60f95161b382b3c00f3b3057_80_ca: classes._60f95161b382b3c00f3b3057_80_ca }}
        />
        <Card
          className={classes.card2}
          classes={{ _60f95161b382b3c00f3b3057_80_ca: classes._60f95161b382b3c00f3b3057_80_ca2 }}
          text={{
            about: <div className={classes.about2}>History</div>,
          }}
        />
        <Card
          className={classes.card3}
          classes={{ _60f95161b382b3c00f3b3057_80_ca: classes._60f95161b382b3c00f3b3057_80_ca3 }}
          text={{
            about: <div className={classes.about3}>Skill</div>,
          }}
        />
      </div>
    </div>
  );
});
