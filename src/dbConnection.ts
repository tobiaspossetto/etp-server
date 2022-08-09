import mongoose, { ConnectOptions } from 'mongoose'

// eslint-disable-next-line require-jsdoc
export async function getConnectionMongo () {
  try {
    // eslint-disable-next-line quotes
    await mongoose.connect(`mongodb+srv://TOBIAS_POSSETTO:${process.env.MONGODB_ATLAS_PASSWORD}@cluster0.wjizsgs.mongodb.net/?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    } as ConnectOptions)

    console.log('MongoDB Connected')
  } catch (error) {
    console.error(error)
    // TODO: Me parecio que cortar el proceso del servidor si no se podia conectar a la base de datos era una buena opcion
    process.exit(1)
  }
}
