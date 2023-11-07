import { FPNumber, api } from '@sora-substrate/util';
import { withConnectedAccount } from './util';

async function main(): Promise<void> {
  await withConnectedAccount(async () => {
      const res = await api.swap.getResultRpc(
        '0x0200040000000000000000000000000000000000000000000000000000000000', 
        '0x0200060000000000000000000000000000000000000000000000000000000000', 
        100
      );
      const amount = FPNumber.fromCodecValue(res.amount);
      const amount_quote = amount.toLocaleString();
      console.info(`[amount: ${amount_quote} DAI, for: ${amount_in} VAL`);
    }
  )
};

main()
  .catch(console.error)
  .finally(() => process.exit());