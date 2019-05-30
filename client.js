import React from 'react'
import { render } from 'react-dom'

import { App } from './app/App'

// const LIGHTHOUSE_WS_URL = `wss://lighthouse.glitch.me/ws`

// const WS = new WebSocket(LIGHTHOUSE_WS_URL)

// const senderMaker = ws => object => ws.send(JSON.stringify(object))

// const myID = 'Boogers'

// const makeDeferredID = () => `defferredID_${myID}_${Math.random() * 1000000000000}`

// const deferredPromises = new Map()

// const checkExistsMaker = ws => theirID => new Promise((resolve, reject)=>{
//   const deferredID = makeDeferredID()
//   const deferredObject = { deferredID, theirID, resolve, reject }
//   const send = senderMaker(ws)
//   deferredPromises.set(deferredID, deferredObject)
//   send({
//     type:'existanceCheck',
//     payload:{
//       theirID,
//       deferredID
//     }
//   })
// })

// WS.addEventListener('open',()=>{
//   const send = senderMaker(WS)
//   console.log('Connected to Lighthouse.')
//   send({
//     type:'registerSelf',
//     payload:{
//       myID
//     }
//   })
//   const checkExists = checkExistsMaker(WS)
//   console.time('flight')
//   checkExists('Boogers').then(({ exists, theirID })=>{
//     console.timeEnd('flight')
//     if(exists){
//       console.log(`${theirID} Exists!`)
//     }else{
//       console.error(`${theirID} Does NOT exist!`)
//     }
//   }).catch(error=>console.error(error))
// })

// WS.addEventListener('close', ()=>{
//   console.log('Disconnected from Lighthouse')
// })

// const actions = {
//   echo(payload){
//     // console.timeEnd('flight')
//     console.log('echo', payload)
//   },
//   dataTransferResult(payload){
//     console.log('Data Transfer Result:', payload)
//   },
//   existanceCheckResult({ exists, theirID }){
//     console.log('Existance Check Result:', { exists, theirID })
//   },
//   error(payload){
//     const { message, ...stuff } = payload
//     console.error(new Error(message), {...stuff})
//   }
// }

// WS.addEventListener('message', ({data})=>{
//   if(typeof data === 'string'){
//     try{
//       const { type, payload } = JSON.parse(data)
//       const { deferredID } = payload
//       if(deferredID && deferredPromises.has(deferredID)){
//         const {resolve, reject, ...rest} = deferredPromises.get(deferredID)
//         if(type === 'error'){
//           reject({...payload, type, ...rest})
//         }else{
//           resolve({...payload, type, ...rest})
//         }
//         deferredPromises.delete(deferredID)
//       } else if(typeof actions[type] === 'function'){
//         actions[type](payload)
//       }else{
//         console.error('unhandled message type:', { type })
//       }
//     }
//     catch(err){
//       console.error(err)
//     }
//   }else{
//     console.error('Local Error: data object is not a JSON Parsable String!', { data })
//   }
// })

render(<App />, document.getElementById('root'))
