import { api } from '@sora-substrate/util';
import { connection } from '@sora-substrate/connection';
import { SORA_ENV } from '@sora-substrate/types/scripts/consts';
import * from 'credentials';
// import { mnemonicGenerate } from '@polkadot/util-crypto'; // TODO: use it within the faucet

const TST_MNEMONIC = 'friend shuffle alien sniff maid dog tomorrow face sponsor place man quantum';

export async function delay(ms = 40000): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

export async function connectAndImportAccount(
  env = SORA_ENV.stage,
  withKeyringLoading = true,
  mnemonic?: string
): Promise<void> {
  await connection.open(env);
  console.info('Connected: ' + env);
  await api.initialize(withKeyringLoading);
  await api.calcStaticNetworkFees();
  // salon muscle select culture inform pen typical object fox fruit culture civil
  api.importAccount(mnemonic ?? TST_MNEMONIC, 'name', 'pass');
}

export async function disconnect(): Promise<void> {
  api.logout();
  await connection.close();
}

export async function withConnectedAccount(fn: Function, env = SORA_ENV.dev, mnemonic?: string): Promise<void> {
  await connectAndImportAccount(env, true, mnemonic);
  await fn();
  await disconnect();
}