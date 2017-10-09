import 'babel-polyfill'
import argv from './argv'
import checkOptions from './options'
import { install, prepare } from './dependencies'
import createFiles from './files'
import clear from 'clear'

export default async function wooo() {
  const args = await argv()
  const options = await checkOptions(args)
  const prepared = await prepare(options)
  const installed = await install(prepared)
  const created = await createFiles(options)

  clear()

  console.log(created)
}
