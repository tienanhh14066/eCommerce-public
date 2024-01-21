'use client'

import { twMerge } from 'tailwind-merge'

export type Size = 'small' | 'medium' | 'large'
export type IconPostion = 'left' | 'right'
export type StyleType = 'stroke' | 'color' | 'bright' | 'simple'
type Props = {
	onCLick?: () => void
	size?: Size
	iconPostion?: IconPostion
	styleType: StyleType
	title: string
}

const Button: React.FC<Props> = ({
	onCLick = () => {},
	styleType = 'color',
	title = 'Button',
	iconPostion,
	size = 'medium',
}) => {
	const IconLeft = () => {
		return (
			iconPostion === 'left' && (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='6'
					height='10'
					viewBox='0 0 6 10'
					className='rotate-180'
					fill='none'>
					<path
						d='M1.5332 8.18669L4.2732 5.44669C4.39737 5.32178 4.46706 5.15282 4.46706 4.97669C4.46706 4.80057 4.39737 4.6316 4.2732 4.50669L1.60654 1.84003'
						strokeWidth='2.5'
						strokeLinecap='round'
						strokeLinejoin='bevel'
					/>
				</svg>
			)
		)
	}
	const IconRight = () => {
		return (
			iconPostion === 'right' && (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='6'
					height='10'
					viewBox='0 0 6 10'
					fill='none'>
					<path
						d='M1.5332 8.18669L4.2732 5.44669C4.39737 5.32178 4.46706 5.15282 4.46706 4.97669C4.46706 4.80057 4.39737 4.6316 4.2732 4.50669L1.60654 1.84003'
						strokeWidth='2.5'
						strokeLinecap='round'
						strokeLinejoin='bevel'
					/>
				</svg>
			)
		)
	}
	return (
		<button
			onClick={onCLick}
			className={twMerge(
				'button inline-flex gap-[0.375rem] rounded-xl items-center w-fit',
				styleType,
				size,
			)}>
			{IconLeft()}
			{title}
			{IconRight()}
		</button>
	)
}

export default Button
