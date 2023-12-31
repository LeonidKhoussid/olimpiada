import React from "react";

interface RightArrowIconProps {
  className?: string;
}

const RightArrowIcon = React.memo<RightArrowIconProps>(({ className }) => {
  return (
    <svg
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        d="M4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8m8-1H8v2h4v3l4-4-4-4v3z"
        opacity=".3"
      ></path>
      <path d="M4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8m-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12zm10-1H8v2h4v3l4-4-4-4v3z"></path>
    </svg>
  );
});

export default RightArrowIcon;
