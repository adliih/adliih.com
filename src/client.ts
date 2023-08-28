import { HoudiniClient } from '$houdini';
import { secrets } from '$lib/server/secrets';

export default new HoudiniClient({
	url: secrets.hygraph.url

	// uncomment this to configure the network call (for things like authentication)
	// for more information, please visit here: https://www.houdinigraphql.com/guides/authentication
	// fetchParams({ session }) {
	//     return {
	//         headers: {
	//             Authentication: `Bearer ${session.token}`,
	//         }
	//     }
	// }
});
