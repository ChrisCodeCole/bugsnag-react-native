// this is a basic TypeScript program
// to ensure that the type defs in index.d.ts
// allow the TS compiler to successfully import
// and interact with the JS client

import { Client, Report } from './tmp/package';
const client = new Client('API_KEYYY')
client.notify(new Error('flop'))
client.notify(new Error('flop'), (report: Report, error: Error) => false)
client.notify(new Error('flop'), (report: Report, error: Error) => { })
client.setUser('123', 'B. Nag', 'bugs.nag@bugsnag.com')
client.setUser(undefined, undefined, undefined)
client.setUser()
client.stopSession()
client.startSession()
client.resumeSession()
