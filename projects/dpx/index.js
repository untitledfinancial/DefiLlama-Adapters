const { sumTokensExport } = require('../helper/unwrapLPs')
const ADDRESSES = require('../helper/coreAssets.json')

const EURC = '0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42';
const DPX_TOKEN = '0x7A62dEcF6936675480F0991A2EF4a0d6f1023891';

const OWNERS = [
  '0xe333551E18ef0471A71d7e8e761212766aa5AD4f', // SettlementRouter v2.0
  '0xB5071fA48B92e3652701053eEd8826ab94014AaA', // BasketPegManager
  '0x741f3179786d9f72e134BdC699D6604eaB250D6E', // PolicyManager
  '0x4F3741252847E4F07730c4CEC3018b201Ac6ce87', // ESGRedistribution
];

module.exports = {
  methodology:
    'USDC and EURC held in the DPX SettlementRouter (in-flight settlements), ' +
    'BasketPegManager (basket reserves), ESGRedistribution (ESG impact pool), and ' +
    'PolicyManager (governance) contracts on Base mainnet. ' +
    'DPX protocol token holdings included.',
  base: {
    tvl:     sumTokensExport({ owners: OWNERS, tokens: [ADDRESSES.base.USDC, EURC] }),
    staking: sumTokensExport({ owners: OWNERS, tokens: [DPX_TOKEN] }),
  },
};
