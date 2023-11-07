// import { FPNumber, api } from '@sora-substrate/util';
import { connection } from '@sora-substrate/connection';
// import { SORA_ENV } from '@sora-substrate/types/scripts/consts';

const MNEMONIC = 'friend shuffle alien sniff maid dog tomorrow face sponsor place man quantum';

async function getQuote(): Promise<void> {
    // const env = SORA_ENV.prod;
    const env = 'wss://ws.mof.sora.org';

    await connection.open(env);
    console.info('Connected: ' + env);

    // const withKeyringLoading = true;
    // await api.initialize(withKeyringLoading);

    // api.importAccount(MNEMONIC, 'name', 'pass');

    // const amount_in = 100;
    // const res = await api.swap.getResultRpc(
    //     '0x0200060000000000000000000000000000000000000000000000000000000000', 
    //     '0x0200000000000000000000000000000000000000000000000000000000000000', 
    //     amount_in
    // );

    // const amount = FPNumber.fromCodecValue(res.amount);
    // const amount_quote = amount.toLocaleString();
    // console.info(`[amount: ${amount_quote} XOR, for: ${amount_in} DAI`);

    // api.logout();
    // await connection.close();
    // console.info('Disconnected: ' + env);
};
  
getQuote()
    .catch(console.error)
    .finally(() => process.exit());