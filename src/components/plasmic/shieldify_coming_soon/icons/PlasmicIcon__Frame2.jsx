// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Frame2Icon(props) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M10.714 10.485h1.857v.925c.268-.533.954-1.01 1.985-1.01C16.53 10.4 17 11.458 17 13.401V17h-2v-3.156c0-1.106-.268-1.73-.948-1.73-.945 0-1.338.672-1.338 1.73V17h-2v-6.515zm-3.429 6.43h2V10.4h-2v6.515zm2.287-8.64a1.265 1.265 0 01-.377.901 1.295 1.295 0 01-1.819 0 1.274 1.274 0 01-.376-.9c0-.339.135-.663.377-.902a1.291 1.291 0 011.818 0c.241.24.377.563.377.902z"
        }
        fill={"currentColor"}
        fillOpacity={".65"}
      ></path>
    </svg>
  );
}

export default Frame2Icon;
/* prettier-ignore-end */
