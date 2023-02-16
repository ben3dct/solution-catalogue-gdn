/** @format */
import { Auth } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";

import { Amplify } from "aws-amplify";
import awsmobile from "./aws-exports";

Amplify.configure({
	...awsmobile,
	oauth: {
		...awsmobile.oauth,
		redirectSignIn: awsmobile.oauth.redirectSignIn.split(",")[+!window.location.hostname.includes("localhost")],
		redirectSignOut: awsmobile.oauth.redirectSignOut.split(",")[+!window.location.hostname.includes("localhost")],
	},
});

export const signIn = async () => {
	const cognitoUser = await Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google });
	return cognitoUser;
};

export const signOut = async () => {
	await Auth.signOut();
};
