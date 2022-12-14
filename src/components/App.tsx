import Avatar from "components/Avatar";

import "@rainbow-me/rainbowkit/styles.css";

// TODO - prettier org imports plugin

import { ConnectButton, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { client } from "wallet/connectors";
import { chains } from "wallet/chains";

function App() {
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains}>
        <div className="bg-white">
          <ConnectButton />
          <div className="max-w-screen-xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold tracking-wide text-blue-600 uppercase">
                Welcome to
              </h2>
              <p className="my-3 text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                reactjs-vite-tailwindcss-boilerplate
              </p>
              <p className="text-xl text-gray-400">Start building for free.</p>
              <p className="mt-5">
                <Avatar
                  size="large"
                  src="https://www.gravatar.com/avatar/4405735f6f3129e0286d9d43e7b460d0"
                />
              </p>
            </div>
          </div>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
