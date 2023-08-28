import { env } from '$env/dynamic/private';

export const secrets = {
	userId: env.USER_ID,
	hygraph: {
		url: env.HYGRAPH_GRAPHQL_URL
	}
};
