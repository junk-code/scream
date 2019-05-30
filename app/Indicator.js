import React from 'react'
import styled, { css } from 'styled-components'

const VisibleIndicator = styled.div`
  height: 1rem;
  width: 1rem;
  margin: 0.5rem;
  border-radius: 100%;
  display: inline-block;
  ${props => props.isOn ? css`
    background: red;
  ` : css`
    background: rgba(0,0,0,.25);
  `}
`

export const Indicator = ({ isOn }) => {
  return (
    <VisibleIndicator isOn={isOn} />
  )
}
