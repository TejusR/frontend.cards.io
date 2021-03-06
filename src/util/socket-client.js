import io from 'socket.io-client'
import startEventListeners from '../rootState/rootEventListener'

var socket
var dispatch

const setDispatch = (d) => {
	dispatch = d
}

const reconnectToGame = (gameType, playerId) => {
	if (socket === undefined) {
		console.log('Reconnecting')
		socket = io('http://localhost:3000/' + gameType, {
			query: { pid: playerId }
		})
		startEventListeners(dispatch)
	}
}

const openGameSocket = (type) => {
	if (socket === undefined) {
		console.log('Opening to ' + type)
		socket = io('http://localhost:3000/' + type)
		startEventListeners(dispatch)
	}
}

export { socket, openGameSocket, setDispatch, reconnectToGame }
