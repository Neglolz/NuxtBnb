import cloudinary from "cloudinary";

export default {
	components: true,
	head: {
		titleTemplate: 'Masterting Nuxt: %s',
		htmlAttrs: {
			lang: "en"
		},
		bodyAttrs: {
			class: ['my-style']
		},
		meta: [{
			charset: "utf-8",
		}]
	},
	router: {
		prefetchLinks: false
	},
	plugins: [
		'~/plugins/maps.client',
		'~/plugins/dataApi',
		'~/plugins/auth.client',
		'~/plugins/vCalendar.client',
		'~/plugins/stripe.client',
	],
	modules: [
		'~/modules/auth',
		'~/modules/algolia',
		'~/modules/cloudinary',
		'~/modules/stripe',
		'@nuxtjs/cloudinary',

	],
	buildModules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
	cloudinary: {
		cloudName: 'neglolz',

	},
	image: {
		cloudinary: {
			baseURL: 'https://res.cloudinary.com/neglolz/image/upload'
		}
	},
	serverMiddleware: [
		function (req, res, next) {
			// console.log(req.body)
			next()
		}
	],
	css: ['~/assets/sass/app.scss'],
	build: {
		extractCSS: true,
		loaders: {
			limit: 0,
		}
	},
	publicRuntimeConfig: {
		auth: {
			cookieName: 'idToken',
			clientId: '591085116950-eogcltnlf409p2r0lhksuq68hbjnbl31.apps.googleusercontent.com'
		},
		algolia: {
			appId: 'LMQ8RPQDBT',
			apiKey: '2d0d18c1c44a03069a114b6b6d3f0eb8',
		},
		cloudinary: {
			apiKey: '372459294979117'
		},
		stripe: {
			key: 'pk_test_51JziUxEk8KIxoLI5PAbpqZrbn8xnGoLxo0B1Ax4OBQxyn6RfaOQrX0b8uMuHWTRy5UtGpzjo6xSY6ncrgYFMbuTm002SwztCRM'
		}
	},
	privateRuntimeConfig: {
		test2: process.env.TEST,
		algolia: {
			appId: 'LMQ8RPQDBT',
			key: 'f8f59ffe6d8ac57aa9f302a902edeece'
		},
		cloudinary: {
			apiSecret: 'CcpBz72cg91mRxQJ7A4XmqJyBHA'
		},
		stripe: {
			secretKey: process.env.STRIPE_SECRET_KEY,
		}
	},
}