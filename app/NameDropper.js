import React from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'
import { Row } from './Layout'
import styled from 'styled-components'

const VisibleInput = styled.input`
  background: rgb(210,210,210);
  border: none;
  font-size: 1rem;
  font-family: inherit;
  padding: 0 .25rem;
`

const VisibleLabel = styled.label`
  user-select: none;
`

export const NameDropper = ({ prefix, label, onValueChange }) => {
  const [name, setName] = useLocalStorage(prefix)
  const onChangeHandler = ({ target }) => {
    setName(target.value)
    if (typeof onValueChange === 'function') {
      onValueChange(target.value)
    }
  }
  const elementId = `id_${prefix}`
  return (
    <Row>
      <VisibleLabel htmlFor={elementId}>{ label }:</VisibleLabel>
      <VisibleInput id={elementId} type='text' onChange={onChangeHandler} value={name} />
    </Row>
  )
}
