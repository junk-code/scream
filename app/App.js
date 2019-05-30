import React from 'react'
import { NameDropper } from './NameDropper'
import { MomentaryButton } from './MomentaryButton'
import { ToggleButton } from './ToggleButton'
import { Indicator } from './Indicator'
import { Row, Column } from './Layout'

import { useLocalStorage } from './hooks/useLocalStorage'

const initialLightState = {
  lightA: false,
  lightB: false,
  lightC: false
}

export const App = () => {
  const [ lightState, updateLightState ] = useLocalStorage('worldState', initialLightState)
  const { lightA, lightB, lightC } = lightState
  return (
    <Column>
      <Row>
        <pre>{JSON.stringify(lightState, null, '  ')}</pre>
      </Row>
      <Row>
        <NameDropper label='My Name' prefix='myName' />
        <NameDropper label='Their Name' prefix='theirName' />
      </Row>
      <Row>
        <Column>
          <Indicator isOn={lightA} />
          <MomentaryButton
            isPressed={lightA}
            onPress={() => {
              updateLightState({
                ...lightState,
                lightA: true
              })
            }}
            onRelease={() => {
              updateLightState({
                ...lightState,
                lightA: false
              })
            }}
          />
        </Column>
        <Column>
          <Indicator isOn={lightB} />
          <MomentaryButton
            isPressed={lightB}
            onPress={() => {
              updateLightState({
                ...lightState,
                lightB: true
              })
            }}
            onRelease={() => {
              updateLightState({
                ...lightState,
                lightB: false
              })
            }}
          />
        </Column>
        <Column>
          <Indicator isOn={lightC} />
          <ToggleButton
            initialState={lightC}
            onPressChange={isPressed => {
              updateLightState({
                ...lightState,
                lightC: isPressed
              })
            }} />
        </Column>
      </Row>
    </Column>
  )
}
