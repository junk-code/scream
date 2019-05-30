import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const VisibleToggleButton = styled.div`
  padding: 1rem;
  background: rgb(210,210,210);
  border: 1px solid black;
  margin: 1px;
  display: inline-block;
  user-select: none;
  cursor: normal;
  ${props => props.isOn ? css`
    background: green;
  ` : null}
`
export const ToggleButton = ({ isPressed, initialState, onPressChange, ...stuff }) => {
  const [ isPressedContext, setPressed ] = useState(isPressed || initialState || false)
  const downHandler = () => {
    const newValue = !isPressedContext
    setPressed(newValue)
    if (typeof onPressChange === 'function') {
      onPressChange(newValue)
    }
  }
  return (
    <VisibleToggleButton
      {...stuff}
      onPointerDown={downHandler}
      isOn={isPressedContext} />
  )
}
