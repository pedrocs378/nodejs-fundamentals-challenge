import { database } from '../database.js'

export function deleteTask(req, res) {
  try {
    const { id } = req.params

    const task = database.findOne('tasks', id)

    if (!task) {
      return res.writeHead(404).end(JSON.stringify({
        error: 'Task not found'
      }))
    }

    database.delete('tasks', id)

    return res.writeHead(204).end()
  } catch (error) {
    if (error instanceof Error) {
      return res.writeHead(500).end(JSON.stringify(error.message))
    }
  } 
}