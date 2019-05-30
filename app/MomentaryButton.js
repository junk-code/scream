import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const VisibleMomentaryButton = styled.div`
  padding: 1rem;
  background: grey;
  margin: 1px;
  display: inline-block;
  user-select: none;
  border: 1px solid black;
  border-radius: .75rem;
  cursor: normal;
  ${props => props.isOn ? css`background: yellow;` : null}
`
export const MomentaryButton = ({ isPressed, onPress, onRelease, ...stuff }) => {
  const [ isPressedContext, setPressed ] = useState(isPressed || false)
  const downHandler = () => {
    setPressed(true)
    if (typeof onPress === 'function') {
      onPress()
    }
  }
  const upHandler = () => {
    setPressed(false)
    if (typeof onRelease === 'function') {
      onRelease()
    }
  }
  return (
    <VisibleMomentaryButton
      {...stuff}
      onPointerDown={downHandler}
      onPointerUp={upHandler}
      onPointerLeave={upHandler}
      isOn={isPressedContext} />
  )
}
