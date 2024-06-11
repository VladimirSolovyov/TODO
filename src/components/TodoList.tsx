import React from 'react'
import { ITask } from '../App'
import { List } from '@mui/material'
import TodoItem from './TodoItem'

interface ITodoListProps {
	tasks: ITask[]
	completeTaks: (id: number) => void
}

const TodoList: React.FC<ITodoListProps> = ({ tasks, completeTaks }) => {
	return (
		<List>
			{tasks.map(task => (
				<TodoItem
					key={task.id}
					task={task}
					completeTask={completeTaks}
				></TodoItem>
			))}
		</List>
	)
}

export default TodoList
