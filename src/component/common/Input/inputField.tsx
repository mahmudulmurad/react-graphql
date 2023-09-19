import React, { InputHTMLAttributes } from "react";
import { FieldErrors } from "react-hook-form";
import { Input } from "antd";
import { UiFormHelperText } from "../HelperText/helperText";

export interface IUiInputTextFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  style?: React.CSSProperties;
  title?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  name: string;
  error?: boolean;
  helperText?: string;
  errors?: FieldErrors;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

export const UiInputTextField: React.FC<IUiInputTextFieldProps> = ({
  title,
  name,
  id,
  placeholder,
  type = "text",
  onChange,
  helperText,
  error,
}) => {
  return (
    <>
      <Input
        name={name}
        placeholder={placeholder}
        id={id}
        title={title}
        type={type}
        onChange={onChange}
      />
      {helperText && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "5px",
          }}
        >
          <UiFormHelperText helperText={helperText} error={error} />
        </div>
      )}
    </>
  );
};
