const markdownPortis = `
## PORTIS || Methods & Event Handlers

## Methods

| Method | Description      |
|:--------:| -------------:|
| showPortis() => Promise<void> | Display Portis account. |
| setDefaultEmail(email: string) => void | Pre-populate the email field in the login and register pages. |
| logout() => void | Log out the user from their Portis account. |
| changeNetwork(newNetwork: string | object, isGasRelayEnabled: ?boolean) => void | Change the network for all future web3 method calls. |
| importWallet(privateKeyOrMnemonic: string) => Promise<void> | Import an existing wallet to a Portis account. |
| isLoggedIn() => Promise<{ error: string; result: boolean }> | Check if user is already logged in to Portis. |
| getExtendedPublicKey(path: string, coin: string) => Promise<void> | Get the wallet extended public key (xpub). |
| showBitcoinWallet(path: string) => Promise<void> | Display Portis Bitcoin wallet. |

## showPortis

You may want to show a user their Portis account without necessarily having them carry out an action. Calling this method will open the Portis widget.

Live example: https://codesandbox.io/s/0mpm6jy2mn


## Code Example:

\`\`\`javascript
// Calling this method will open the Portis widget
portis.showPortis();
\`\`\`


## setDefaultEmail

If you already know the user's email address, you can use this method to pre-populate the email field in the login and register pages.

Live example: https://codesandbox.io/s/zxwlo8296m


## Code Example:

\`\`\`javascript
// Calling this method will pre-populate the email field in the login and register pages.
portis.setDefaultEmail('satoshi@portis.io');
\`\`\`


## logout

Log out a user from their Portis account.

Live example: https://codesandbox.io/s/portis-logout-example-jgph9

## Code Example:

\`\`\`javascript
// Calling this method will Log out a user from their Portis account
portis.logout();
\`\`\`

## changeNetwork

Change the network for all future web3 method calls. See configuration-network for available network options.

Live example: https://codesandbox.io/s/1j6j0ry4q

## Code Example:

\`\`\`javascript
portis.changeNetwork('kovan');
\`\`\`

> or in case you want to enable gas relay in the new network

\`\`\`javascript
portis.changeNetwork('ropsten', true);
\`\`\`

> or in case you want your user to use a custom network node


\`\`\`javascript
const customNode = {
    nodeUrl: 'https://awesomenode.com',
    chainId: 127,
  };
  portis.changeNetwork(customNode);
\`\`\`



## importWallet

Use this function to import an existing wallet to a Portis account


## Code Example:

\`\`\`javascript
const privateKeyOrMnemonic = '';
portis.importWallet(privateKeyOrMnemonic);
\`\`\`


## isLoggedIn

Use this function to check if the user is already logged in to Portis


## Code Example:

\`\`\`javascript
portis.isLoggedIn().then(({ error, result }) => {
    console.log(error, result);
  });
\`\`\`



## getExtendedPublicKey

Use this function to get the wallet extended public key (xpub) for a specific path, for a specific coin. Available coins: Ethereum, Bitcoin.

Live example: https://codesandbox.io/s/portis-xpub-g76i0

## Code Example:

\`\`\`javascript
portis.getExtendedPublicKey("m/44'/60'/0'/0/0", 'Ethereum').then(({ error, result }) => {
    console.log(error, result);
  });
\`\`\`


## showBitcoinWallet

You may want to show a user their Portis Bitcoin wallet for a specific path without necessarily having them carry out an action.

## Code Example:

\`\`\`javascript
portis.showBitcoinWallet("m/49'/0'/0'/0/0");
\`\`\`


## Event Handlers

| Event Handler | Handler Signature      | Description      |
|:--------:| -------------:| -------------:|
| onLogin(handler) => void | (walletAddress: string, email: string, reputation: object) => void | Triggers when a user logs in. |
| onLogout(handler) => void | () => void | Triggers when a user logs out. |
| onActiveWalletChanged(handler) => void | (newWalletAddress: string) => void | Triggers when a user changes their active wallet. |
| onError(handler) => void | (error: Error) => void | 	Triggers when there's an unexpected error in Portis.|

Complete Tutorial Method:  https://docs.portis.io/#/methods


`;

export default markdownPortis.trim();