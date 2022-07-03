
// const pos = [-31.42528037992335, -62.07158078019124]

export default (io: any) => {
  io.on('connection', async (io: any) => {
    console.log('new user connected')
  })
}
