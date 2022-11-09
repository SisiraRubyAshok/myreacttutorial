import React from 'react'

function Counter({title, ...obj}) {
	return (
		<div>
			count: {obj.count}, {title}
		</div>
	)
}

export default Counter