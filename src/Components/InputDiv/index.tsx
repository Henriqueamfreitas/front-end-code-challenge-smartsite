import { forwardRef, HTMLProps } from "react";
import { StyledInputDiv } from "./style";
import { UseFormRegister } from "react-hook-form";

interface IInputDivProps extends Omit<HTMLProps<HTMLInputElement>, "label"> {
  id: string,
  type: string,
  value?: string,
  spanText?: string,
  label: string | JSX.Element,
  register: UseFormRegister<any>;
  registerName: string,
}

export const InputDiv = forwardRef<HTMLInputElement, IInputDivProps>(
  ({ id, type, value, spanText, label, register, registerName,...rest }, ref) => {
  return (
    <StyledInputDiv>
      <input type={type} id={id} value={value} {...register(registerName)} {...rest} ref={ref}/>
      {
        registerName === "period" ?
        <label htmlFor={id}><span>{label}</span> <span>{spanText}</span></label> :
        <label htmlFor={id}>{label}</label>
      }
    </StyledInputDiv>
  )
})
