'use client'

import { Fragment } from 'react'
import Button, { IconPostion, Size, StyleType } from './components/Button'

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
const ButtonList = [
	// stroke
	{
		styleType: 'stroke',
		size: 'large',
		title: 'Button',
		iconPostion: '',
	},
	{
		styleType: 'stroke',
		size: 'large',
		title: 'Button',
		iconPostion: 'left',
	},
	{
		styleType: 'stroke',
		size: 'large',
		title: 'Button',
		iconPostion: 'right',
	},
	{
		styleType: 'stroke',
		size: 'medium',
		title: 'Button',
		iconPostion: '',
	},
	{
		styleType: 'stroke',
		size: 'medium',
		title: 'Button',
		iconPostion: 'left',
	},
	{
		styleType: 'stroke',
		size: 'medium',
		title: 'Button',
		iconPostion: 'right',
	},
	{
		styleType: 'stroke',
		size: 'small',
		title: 'Button',
		iconPostion: '',
	},
	{
		styleType: 'stroke',
		size: 'small',
		title: 'Button',
		iconPostion: 'left',
	},
	{
		styleType: 'stroke',
		size: 'small',
		title: 'Button',
		iconPostion: 'right',
	},
	// color
	{
		styleType: 'color',
		size: 'large',
		title: 'Button',
		iconPostion: '',
	},
	{
		styleType: 'color',
		size: 'large',
		title: 'Button',
		iconPostion: 'left',
	},
	{
		styleType: 'color',
		size: 'large',
		title: 'Button',
		iconPostion: 'right',
	},
	{
		styleType: 'color',
		size: 'medium',
		title: 'Button',
		iconPostion: '',
	},
	{
		styleType: 'color',
		size: 'medium',
		title: 'Button',
		iconPostion: 'left',
	},
	{
		styleType: 'color',
		size: 'medium',
		title: 'Button',
		iconPostion: 'right',
	},
	{
		styleType: 'color',
		size: 'small',
		title: 'Button',
		iconPostion: '',
	},
	{
		styleType: 'color',
		size: 'small',
		title: 'Button',
		iconPostion: 'left',
	},
	{
		styleType: 'color',
		size: 'small',
		title: 'Button',
		iconPostion: 'right',
	},
	// bright
	{
		styleType: 'bright',
		size: 'large',
		title: 'Button',
		iconPostion: '',
	},
	{
		styleType: 'bright',
		size: 'large',
		title: 'Button',
		iconPostion: 'left',
	},
	{
		styleType: 'bright',
		size: 'large',
		title: 'Button',
		iconPostion: 'right',
	},
	{
		styleType: 'bright',
		size: 'medium',
		title: 'Button',
		iconPostion: '',
	},
	{
		styleType: 'bright',
		size: 'medium',
		title: 'Button',
		iconPostion: 'left',
	},
	{
		styleType: 'bright',
		size: 'medium',
		title: 'Button',
		iconPostion: 'right',
	},
	{
		styleType: 'bright',
		size: 'small',
		title: 'Button',
		iconPostion: '',
	},
	{
		styleType: 'bright',
		size: 'small',
		title: 'Button',
		iconPostion: 'left',
	},
	{
		styleType: 'bright',
		size: 'small',
		title: 'Button',
		iconPostion: 'right',
	},
	// simple
	{
		styleType: 'simple',
		size: 'large',
		title: 'Button',
		iconPostion: '',
	},
	{
		styleType: 'simple',
		size: 'large',
		title: 'Button',
		iconPostion: 'left',
	},
	{
		styleType: 'simple',
		size: 'large',
		title: 'Button',
		iconPostion: 'right',
	},
	{
		styleType: 'simple',
		size: 'medium',
		title: 'Button',
		iconPostion: '',
	},
	{
		styleType: 'simple',
		size: 'medium',
		title: 'Button',
		iconPostion: 'left',
	},
	{
		styleType: 'simple',
		size: 'medium',
		title: 'Button',
		iconPostion: 'right',
	},
	{
		styleType: 'simple',
		size: 'small',
		title: 'Button',
		iconPostion: '',
	},
	{
		styleType: 'simple',
		size: 'small',
		title: 'Button',
		iconPostion: 'left',
	},
	{
		styleType: 'simple',
		size: 'small',
		title: 'Button',
		iconPostion: 'right',
	},
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
			<h6 className='caption text-C1-C'>Style</h6>
			<h1 className='s1'>Button</h1>
			<div className='grid grid-cols-3 gap-8'>
				{ButtonList.map((item, index) => (
					<Button
						key={index}
						styleType={item.styleType as StyleType}
						size={item.size as Size}
						title={item.title}
						iconPostion={item.iconPostion as IconPostion}
					/>
				))}
			</div>
		</section>
	)
}
