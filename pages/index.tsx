import type { NextPage } from "next";
import { SimpleUI } from '../components/SimpleUI'

const Home: NextPage = () => {
  return <SimpleUI
    rpcUrl="https://rpc.sentry-02.theta-testnet.polypore.xyz" />
}

export default Home