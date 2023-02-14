import { database } from '../database.js'

export function listTasks(_, res) {
  try {
    const tasks = database.select('tasks')

    return res.end(JSON.stringify(tasks))
  } catch (error) {
    if (error instanceof Error) {
      return res.writeHead(500).end(JSON.stringify(error.message))
    }
  }
}