import React from 'react'
import styled from 'styled-components'

const VisibleRow = styled.div`
  display: inline-flex;
  flex-direction: row;
  border: 1px solid black;
  align-items: center;
  padding: 1px;
  margin: 1px;
`

const VisibleColumn = styled.div`
  display: inline-flex;
  flex-direction: column;
  border: 1px solid black;
  align-items: center;
  padding: 1px;
  margin: 1px;
`

const VisibleItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  padding: 1px;
  margin: 1px;
`

export const Row = (props) => <VisibleRow {...props} />
export const Column = (props) => <VisibleColumn {...props} />
export const Item = (props) => <VisibleItem {...props} />
