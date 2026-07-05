const { spawn } = require('child_process')
const port = process.env.PORT || 8000

const server = spawn('php', ['artisan', 'serve', `--host=0.0.0.0`, `--port=${port}`], {
  stdio: 'inherit'
})

server.on('error', (err) => {
  console.error('Failed to start server:', err)
  process.exit(1)
})