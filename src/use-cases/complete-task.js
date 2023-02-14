import { database } from '../database.js'

export function completeTask(req, res) {
  try {
    const { id } = req.params

    const task = database.findOne('tasks', id)

    if (!task) {
      return res.writeHead(404).end(JSON.stringify({
        error: 'Task not found'
      }))
    }
      
    database.update('tasks', id, {
      completed_at: new Date(),
      updated_at: new Date()
    })

    return res.writeHead(204).end()
  } catch (error) {
    if (error instanceof Error) {
      return res.writeHead(500).end(JSON.stringify(error.message))
    }
  }
}