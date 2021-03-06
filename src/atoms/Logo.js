import React from "react";

const Logo = ({ fill, height, width }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 785 671"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Logo</title>
      <desc>Kyle Lutes FullStack Developer</desc>
      <g id="Canvas" transform="translate(-191 1131)">
        <g id="Vector">
          <use
            xlinkHref="#path0_fill"
            transform="translate(191 -1131)"
            fill={`#${fill}`}
          />
        </g>
      </g>
      <defs>
        <path
          id="path0_fill"
          d="M 192.084 0L 2.41746 0C -0.650241 3.66156 -0.162384 6.57161 2.41746 12.4259L 230.95 337.053L 2.41746 657.021C -1.18107 664.722 -0.407442 667.301 2.41746 671L 195.193 671L 394.188 392.97L 394.188 664.787C 396.267 669.164 397.641 670.442 400.407 671L 689.571 671L 781.295 537.421C 786.437 527.694 786.029 524.196 781.295 520.336L 576.081 520.336L 576.081 0L 394.188 0L 394.188 279.583L 192.084 0Z"
        />
      </defs>
    </svg>
  );
};

export default Logo;
