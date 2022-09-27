// Style imports
import styles from './AppWrapper.module.scss'





// Module imports
import PropTypes from 'prop-types'





/**
 * Contains the main app components, such as navigation and footers.
 *
 * @param {object} props All props.
 * @param {import('react').ReactNode} props.children The contents of the component.
 */
export function AppWrapper(props) {
	const { children } = props

	return (
		<div className={styles['app-wrapper']}>
			{children}
		</div>
	)
}

AppWrapper.defaultProps = {
	children: null,
}

AppWrapper.propTypes = {
	children: PropTypes.node,
}
