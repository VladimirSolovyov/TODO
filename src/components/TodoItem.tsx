import React from 'react'
import { ListItem, ListItemText, Checkbox } from '@mui/material'
import { ITask } from '../App'

interface ITodoItemProps {
	task: ITask
	completeTask: (id: number) => void
}

const TodoItem: React.FC<ITodoItemProps> = ({ task, completeTask }) => {
	return (
		<ListItem>
			<Checkbox
				checked={task.completed}
				onChange={() => completeTask(task.id)}
			/>
			<ListItemText
				primary={task.text}
				style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
			/>
		</ListItem>
	)
}

export default TodoItem
