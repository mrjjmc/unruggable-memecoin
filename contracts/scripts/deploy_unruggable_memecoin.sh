#!/bin/bash

# Deployment script for `UnruggableMemecoin` contract
# Arguments:
# 1: recipient address that will receive the initial supply of tokens
# 2: name of the token
# 3: symbol of the token
# 4: initial supply of tokens

# Check if all required arguments are provided
if [ "$#" -ne 4 ]; then
    echo "Usage: $0 <recipient_address> <token_name> <token_symbol> <initial_supply>"
    exit 1
fi

# Ensure required environment variables are set
if [ -z "$STARKNET_KEYSTORE" ] || [ -z "$STARKNET_ACCOUNT" ] || [ -z "$STARKNET_RPC" ]; then
    echo "Error: STARKNET_KEYSTORE, STARKNET_ACCOUNT, and STARKNET_RPC environment variables must be set"
    exit 1
fi

RECIPIENT_ADDRESS="$1"
TOKEN_NAME="$2"
TOKEN_SYMBOL="$3"
INITIAL_SUPPLY="$4"
DECIMALS_18_SUFFIX="000000000000000000"

# Prepare declare args
COMPILER_VERSION="2.1.0"
CONTRACT_CLASS_FILE="./target/dev/unruggablememecoin_UnruggableMemecoin.contract_class.json"
DECLARE_ARGS="--compiler-version=$COMPILER_VERSION"

# Declare the contract and capture the command output
command_output=$(starkli declare "$CONTRACT_CLASS_FILE" "$DECLARE_ARGS" --watch)

# Extract the class hash
class_hash=$(echo "$command_output" | awk '/Class hash declared:/{print $4}')

echo "Class hash: $class_hash"

# Deploy the contract using the extracted class hash
starkli deploy "$class_hash" "$RECIPIENT_ADDRESS" "str:$TOKEN_NAME" "str:$TOKEN_SYMBOL" "u256:$INITIAL_SUPPLY$DECIMALS_18_SUFFIX"
