import React from "react";

interface RightArrowIconProps {
  className?: string;
}

const LeftArrowIcon = React.memo<RightArrowIconProps>(({ className }) => {
  return (
    <svg
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        d="M20 12c0 4.41-3.59 8-8 8s-8-3.59-8-8 3.59-8 8-8 8 3.59 8 8m-8 1h4v-2h-4V8l-4 4 4 4v-3z"
        opacity=".3"
      ></path>
      <path d="M20 12c0 4.41-3.59 8-8 8s-8-3.59-8-8 3.59-8 8-8 8 3.59 8 8m2 0c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zm-10 1h4v-2h-4V8l-4 4 4 4v-3z"></path>{" "}
    </svg>
  );
});

export default LeftArrowIcon;
