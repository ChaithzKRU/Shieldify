// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function FrameIcon(props) {
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
          "M13.905 7.992H15V6.085A14.142 14.142 0 0013.404 6c-1.58 0-2.661.993-2.661 2.82v1.68H9v2.133h1.743v5.366h2.137v-5.366h1.672l.266-2.133h-1.939V9.03c0-.616.167-1.038 1.026-1.038z"
        }
        fill={"currentColor"}
        fillOpacity={".65"}
      ></path>
    </svg>
  );
}

export default FrameIcon;
/* prettier-ignore-end */
