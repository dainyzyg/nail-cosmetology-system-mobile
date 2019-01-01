const exo = {
  init() {
    window.socket = window.io('http://localhost:8888')
    window.socket.on('connect', function() {
      // socket.close()
      console.log('connect')
    })
    window.socket.on('connecting', function() {
      console.log('connecting')
    })
    window.socket.on('disconnect', function() {
      console.log('disconnect')
    })
    window.socket.on('connect_error', function() {
      console.log('connect_failed')
    })
    window.socket.on('reconnecting', function() {
      console.log('reconnecting')
    })

    window.socket.on('news', (data) => {
      console.log(data)
    })
    window.socket.emit('c', Math.random(), (err, data) => {
      console.log('emit:', data)
    })
  }
}

export default exo
