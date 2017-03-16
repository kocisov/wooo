import { exec, yellow, blue } from './utils'

let deps = [
  'react-redux',
  'redux',
  'redux-thunk'
]

export default function installDeps ({
  directory,
  manager,
  router
}) {
  const command = manager === 'yarn' ? 'yarn add' : 'npm install --save'

  if (router === 'v4') {
    deps.push('react-router-dom')
  } else {
    deps.push(
      'react-router-redux',
      'react-router@3.0.2'
    )
  }

  yellow(`Installing dependencies with ${manager}`)
  blue(`${command} ${deps.join(' ')}`)
  // exec(`${command.join(' ')}`)

  return new Promise(res => {
    res(directory)
  })
}
