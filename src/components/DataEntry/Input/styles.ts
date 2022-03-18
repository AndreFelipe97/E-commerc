import styled from "styled-components";

export const LableFloat = styled.div`
  position: relative;
  padding-top: 13px;
  align-self: stretch;
  
  &:not(:first-child) {
    margin-top: 1.5rem;
  }

  input:focus + label {
    margin-top: 0px;
    top: -50%;
    z-index: 2;
    transition: 0.2s;
    border: none;
    border-bottom: 1px var(--colo-primary-red) solid;
  }
`;

export const LableFloatInput = styled.input`
  order: 0;
  border: 0 none;
  border-bottom: 2px solid var(--color-grey-2);
  outline: none;
  min-width: 180px;
  font-size: 16px;
  margin-top: 1rem;
  transition: all .3s ease-out;
  -webkit-transition: all .3s ease-out;
  -moz-transition: all .3s ease-out;
  -webkit-appearance:none;
  border-radius: 0;
  min-width: 100%;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  &:focus {
    border: 0 none;
    border-bottom: 2px solid var(--color-primary-red);
    margin-top: 0;
  }

  input::placeholder{
    color:transparent;
  }
  &:required:invalid + label{
    color: red;
  }
  &:focus:required:invalid{
    border: 0 none;
    border-bottom: 2px solid yellow;
  }
  &:required:invalid + label:before{
    content: '*';
  }
  &:focus + label,
  &:not(:placeholder-shown) + label{
    font-size: 13px;
    margin-top: 0;
    color: var(--color-primary-red);
  }
`;

export const LabelFloatLabel = styled.label`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.6rem;
  margin-top: 13px;
  transition: all .3s ease-out;
  -webkit-transition: all .3s ease-out;
  -moz-transition: all .3s ease-out;
`;