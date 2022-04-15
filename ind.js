 GENESIS_FILE="/network/genesis.json"
      CONSENSUS_RPC_API="istanbul"
      NETWORK_ID=$$(cat $${GENESIS_FILE} | grep chainId | awk -F " " '{print $$2}' | awk -F "," '{print $$1}')
      GETH_ARGS_istanbul="--emitcheckpoints --istanbul.blockperiod 1 --mine --miner.threads 1 --syncmode full"
      GETH_ARGS_istanbul="--emitcheckpoints --istanbul.blockperiod 10 --mine --miner.threads 1 --syncmode full"
      if [ ! -f $${DDIR}/control_file ]; then
        mkdir -p $${DDIR}/keystore
        mkdir -p $${DDIR}/geth
@@ -49,7 +49,7 @@ x-masa-testnet-node-v10-def:
services:
  ui:
    extends:
      file: ./src/ui/docker-compose.yml
      file: ./ui/docker-compose.yml
      service: ui
  masa-node:
    << : *masa-testnet-node-v10-def
