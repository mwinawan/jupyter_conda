import * as React from "react";

import { GlobalStyle } from "./globalStyles";
import { style, classes } from "typestyle/lib";

export interface CondaEnvToolBarProps {
  isBase: boolean;
  onCreate();
  onClone();
  onImport();
  onExport();
  onRemove();
}

export const CondaEnvToolBar = (props: CondaEnvToolBarProps) => {
  return (
    <div className="jp-Toolbar">
      <button
        className={classes("jp-MaterialIcon", "jp-AddIcon", Style.Button)}
        type="button"
        title="Create"
        onClick={props.onCreate}
      />
      <button
        className={Style.Button}
        type="button"
        title="Clone"
        onClick={props.onClone}
        disabled={props.isBase}
      >
        <i className={classes("fa", "fa-clone", style(GlobalStyle.FaIcon))} />
      </button>
      <button
        className={classes("jp-MaterialIcon", "jp-UploadIcon", Style.Button)}
        type="button"
        title="Import"
        onClick={props.onImport}
      />
      <button
        className={classes("jp-MaterialIcon", "jp-DownloadIcon", Style.Button)}
        type="button"
        title="Export"
        onClick={props.onExport}
      />
      <button
        className={classes("jp-MaterialIcon", "jp-CloseIcon", Style.Button)}
        type="button"
        title="Remove"
        onClick={props.onRemove}
        disabled={props.isBase}
      />
    </div>
  );
};

namespace Style {
  export const Button = classes(
    GlobalStyle.CustomizedButton,
    style({
      flex: "1 1 auto",
      fontSize: "var(--jp-ui-font-size1)",
      color: "var(--jp-ui-font-color0)",
      boxSizing: "border-box",
      textTransform: "uppercase",
      textAlign: "center",
      lineHeight: "32px",
      height: "32px",
      padding: "0px 12px",
      letterSpacing: ".8px",
      outline: "none"
    })
  );
}
