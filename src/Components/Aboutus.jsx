// import {
//   ThirdwebProvider,
//   ConnectWallet,
//   metamaskWallet,
//   coinbaseWallet,
//   walletConnect,
//   localWallet,
//   embeddedWallet,
// } from "@thirdweb-dev/react";

// export default function App() {
//   return (
//     <ThirdwebProvider
//       activeChain="sepolia"
//       clientId="YOUR_CLIENT_ID"
//       locale={en()}
//       supportedWallets={[
//         metamaskWallet(),
//         coinbaseWallet({ recommended: true }),
//         walletConnect(),
//         localWallet(),
//         embeddedWallet({
//           auth: {
//             options: ["email", "google", "apple", "facebook"],
//           },
//         }),
//       ]}
//     >
//       <ConnectWallet theme={"dark"} modalSize={"wide"} />
//     </ThirdwebProvider>
//   );
// }


import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
} from "@thirdweb-dev/react";

export default function Aboutus() {
  return (
    <ThirdwebProvider
      supportedWallets={[
        metamaskWallet({
          recommended: true,
        }),
        coinbaseWallet(),
        walletConnect(),
      ]}
      clientId="<your_client_id>"
    >
      
    </ThirdwebProvider>
  );
}

