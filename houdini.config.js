/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	watchSchema: { url: process.env.HYGRAPH_GRAPHQL_URL, interval: 0 },
	plugins: {
		'houdini-svelte': {}
	},
	scalars: {
		Date: {
			type: 'Date',
			unmarshal(val) {
				return new Date(val);
			},
			// turn the value into something the API can use
			marshal(date) {
				return date.getTime();
			}
		},
		DateTime: {
			type: 'Date'
		}
	}
};

export default config;
