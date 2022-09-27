// Module imports
import {
	Head as NextHead,
	Html as NextHTML,
	Main as NextMain,
	NextScript,
} from 'next/document'





// Local imports
import manifestData from '../../public/manifest.json'





/**
 * Customises the root HTML shell.
 */
export default function Document() {
	return (
		<NextHTML>
			<NextHead>
				<meta charSet={'utf-8'} />
				<meta
					content={manifestData.name}
					name={'application-name'} />
				<meta
					content={'yes'}
					name={'apple-mobile-web-app-capable'} />
				<meta
					content={'default'}
					name={'apple-mobile-web-app-status-bar-style'} />
				<meta
					content={manifestData.name}
					name={'apple-mobile-web-app-title'} />
				<meta
					content={'A web app for tracking the weather.'}
					name={'description'} />
				<meta
					content={'telephone=no'}
					name={'format-detection'} />
				<meta
					content={'yes'}
					name={'mobile-web-app-capable'} />
				<meta
					content={'/icons/browserconfig.xml'}
					name={'msapplication-config'} />
				<meta
					content={manifestData.background_color}
					name={'msapplication-TileColor'} />
				<meta
					content={'no'}
					name={'msapplication-tap-highlight'} />
				<meta
					content={manifestData.theme_color}
					name={'theme-color'} />

				<link
					href={'/icons/touch-icon-iphone.png'}
					rel={'apple-touch-icon'} />
				<link
					href={'/icons/touch-icon-ipad.png'}
					rel={'apple-touch-icon'}
					sizes={'152x152'} />
				<link
					href={'/icons/touch-icon-iphone-retina.png'}
					rel={'apple-touch-icon'}
					sizes={'180x180'} />
				<link
					href={'/icons/touch-icon-ipad-retina.png'}
					rel={'apple-touch-icon'}
					sizes={'167x167'} />

				<link
					href={'/icons/favicon-32x32.png'}
					rel={'icon'}
					sizes={'32x32'}
					type={'image/png'} />
				<link
					href={'/icons/favicon-16x16.png'}
					rel={'icon'}
					sizes={'16x16'}
					type={'image/png'} />
				<link
					href={'/manifest.json'}
					rel={'manifest'} />
				<link
					color={'#5bbad5'}
					href={'/icons/safari-pinned-tab.svg'}
					rel={'mask-icon'} />
				<link
					href={'/favicon.ico'}
					rel={'shortcut icon'} />
				<link
					href={'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap'}
					rel={'stylesheet'} />

				{/* <link rel='apple-touch-startup-image' href='/images/apple_splash_2048.png' sizes='2048x2732' /> */}
				{/* <link rel='apple-touch-startup-image' href='/images/apple_splash_1668.png' sizes='1668x2224' /> */}
				{/* <link rel='apple-touch-startup-image' href='/images/apple_splash_1536.png' sizes='1536x2048' /> */}
				{/* <link rel='apple-touch-startup-image' href='/images/apple_splash_1125.png' sizes='1125x2436' /> */}
				{/* <link rel='apple-touch-startup-image' href='/images/apple_splash_1242.png' sizes='1242x2208' /> */}
				{/* <link rel='apple-touch-startup-image' href='/images/apple_splash_750.png' sizes='750x1334' /> */}
				{/* <link rel='apple-touch-startup-image' href='/images/apple_splash_640.png' sizes='640x1136' /> */}
			</NextHead>

			<body>
				<NextMain />
				<NextScript />
			</body>
		</NextHTML>
	)
}
