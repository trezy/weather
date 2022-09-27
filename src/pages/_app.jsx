/* eslint-env node */
// Style imports
import '../scss/reset.scss'
import '../scss/lib.scss'
import '../scss/app.scss'





// Module imports
import { DefaultSeo as DefaultSEO } from 'next-seo'
import { config as fontAwesomeConfig } from '@fortawesome/fontawesome-svg-core'
import NextHead from 'next/head.js'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'





// Local imports
import { AppWrapper } from '../components/AppWrapper/AppWrapper.jsx'
import SEOConfig from '../seo.config.js'
import { useNProgress } from '../hooks/useNProgress.js'





fontAwesomeConfig.autoAddCss = false

// eslint-disable-next-line jsdoc/require-jsdoc
export default function App(props) {
	const {
		Component,
		pageProps,
	} = props
	const router = useRouter()

	useNProgress()

	return (
		<>
			<DefaultSEO {...SEOConfig} />

			<NextHead>
				<meta charSet={'utf-8'} />
				<meta
					content={'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'}
					name={'viewport'} />
				<meta
					content={'width=device-width, initial-scale=1, maximum-scale=1'}
					name={'viewport'} />
			</NextHead>

			<AppWrapper title={Component.title}>
				<Component
					key={router.route}
					{...pageProps} />
			</AppWrapper>
		</>
	)
}

App.defaultProps = {
	pageProps: {},
}

App.propTypes = {
	Component: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.node,
	]).isRequired,
	pageProps: PropTypes.object,
}
