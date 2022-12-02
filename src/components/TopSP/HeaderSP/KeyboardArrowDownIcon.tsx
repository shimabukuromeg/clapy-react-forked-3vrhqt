import { memo, SVGProps } from 'react';

const KeyboardArrowDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_17_94)'>
      <path d='M6.175 7.15833L10 10.975L13.825 7.15833L15 8.33333L10 13.3333L5 8.33333L6.175 7.15833Z' fill='#D9D9D9' />
    </g>
    <defs>
      <clipPath id='clip0_17_94'>
        <rect width={20} height={20} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(KeyboardArrowDownIcon);
export { Memo as KeyboardArrowDownIcon };
