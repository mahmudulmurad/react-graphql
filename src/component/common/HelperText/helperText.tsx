import * as React from "react";
export interface IUiFormHelperText {
  helperText?: string;
  error?: boolean;
}

export function UiFormHelperText(props: IUiFormHelperText) {
  const { helperText, error } = props;

  return <div style={error ? { color: "red" } : {}}>{helperText}</div>;
}
