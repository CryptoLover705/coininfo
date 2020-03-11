/*
  info from:
    https://github.com/CryptoLover705/AstraCoinNew/blob/master/src/chainparams.cpp
*/

var common = {
  name: 'Astracoin',
  unit: 'TR3B'
}

var main = Object.assign({}, {
  hashGenesisBlock: '00000b673c3cb8076da1dcf66d20e010b05f0c06971a3bafb3c7df8fe589ed77',
  // nDefaultPort
  port: 4143,
  portRpc: 4144,
  protocol: {
    magic: 0xdce8f5ff // careful, sent over wire as little endian
  },
  // vSeeds
  seedsDns: [
    'explorer.tr3b-astra.space'
  ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ADE4,
      public: 0x0488B21E
    },
    bip44: 222,
    private: 0xde,
    public: 0x80,
    scripthash: 0x63
  }
}, common)

module.exports = {
  main: main,
}
