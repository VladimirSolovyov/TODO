import React from 'react'
import { Button, ButtonGroup, Box } from '@mui/material'

interface IFilterButtonsProps {
	setFilter: (filter: 'all' | 'active' | 'completed') => void
	clearCompleted: () => void
}

const FilterButtons: React.FC<IFilterButtonsProps> = ({
	setFilter,
	clearCompleted,
}) => {
	return (
		<Box
			display='flex'
			justifyContent='space-between'
			alignItems='center'
			marginTop={2}
		>
			<ButtonGroup>
				<Button onClick={() => setFilter('all')}>Все</Button>
				<Button onClick={() => setFilter('active')}>Активные</Button>
				<Button onClick={() => setFilter('completed')}>Выполненные</Button>
			</ButtonGroup>
			<Button color='secondary' onClick={clearCompleted}>
				Очистить выполненные
			</Button>
		</Box>
	)
}

export default FilterButtons
