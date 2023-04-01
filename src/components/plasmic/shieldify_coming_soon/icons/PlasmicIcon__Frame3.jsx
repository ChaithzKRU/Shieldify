// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Frame3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18 8.184a5.03 5.03 0 01-1.418.398 2.5 2.5 0 001.083-1.394c-.476.29-1 .496-1.56.61A2.437 2.437 0 0014.308 7c-1.362 0-2.459 1.134-2.459 2.524 0 .2.017.392.057.575-2.045-.102-3.855-1.107-5.07-2.639a2.59 2.59 0 00-.337 1.275c0 .874.439 1.649 1.093 2.097a2.384 2.384 0 01-1.112-.31v.027c0 1.226.853 2.245 1.971 2.48a2.4 2.4 0 01-.645.083 2.12 2.12 0 01-.466-.044c.319 1 1.224 1.734 2.299 1.758A4.865 4.865 0 016 15.868 6.801 6.801 0 009.774 17c4.527 0 7.002-3.846 7.002-7.18 0-.112-.004-.22-.009-.326A4.98 4.98 0 0018 8.184z"
        }
        fill={"currentColor"}
        fillOpacity={".65"}
      ></path>
    </svg>
  );
}

export default Frame3Icon;
/* prettier-ignore-end */
