'use client'

import { Fragment } from 'react'

const Typography = [
	's1',
	's2',
	's3',
	's4',
	's5',
	's6',
	'button',
	'lead',
	'body',
	'caption',
]
export const Container = () => {
	return (
		<section>
			<h6 className='caption text-C1-C'>Style</h6>
			<h1 className='s1'>Typography</h1>
			<div className='flex flex-col gap-20'>
				{Typography.map((item) => (
					<div
						className='grid grid-cols-2 gap-52'
						key={item}>
						<div className={item}>Typography: {item}</div>
						<div className={`${item} underline`}>
							Typography: {item}
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
