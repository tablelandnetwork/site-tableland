import Vue from "vue";
import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";

export default async ({ env }, inject) => {
  ethers.getDefaultProvider();

  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum, "any")
      : new WalletConnectProvider({
          infuraId: "e949e17ac40246f0a00ff2a4119be7a2",
        });

  const rig = {
    address: "0x0e1b53feac55716c5fdb2623ed719144a423ceee",
    abi: [
	{
		"inputs": [],
		"name": "ApprovalCallerNotOwnerNorApproved",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ApprovalQueryForNonexistentToken",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ApproveToCaller",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "BalanceQueryForZeroAddress",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "InsufficientAllowance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "InsufficientValue",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "InvalidProof",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "InvalidQueryRange",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "MintERC2309QuantityExceedsLimit",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "MintToZeroAddress",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "MintZeroQuantity",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "MintingClosed",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "OwnerQueryForNonexistentToken",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "OwnershipNotInitializedForExtraData",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "SoldOut",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferCallerNotOwnerNorApproved",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferFromIncorrectOwner",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferToNonERC721ReceiverImplementer",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferToZeroAddress",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "URIQueryForNonexistentToken",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ZeroQuantity",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "previousAdmin",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "newAdmin",
				"type": "address"
			}
		],
		"name": "AdminChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "beacon",
				"type": "address"
			}
		],
		"name": "BeaconUpgraded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "fromTokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "toTokenId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "ConsecutiveTransfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "version",
				"type": "uint8"
			}
		],
		"name": "Initialized",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "enum ITablelandRigs.MintPhase",
				"name": "mintPhase",
				"type": "uint8"
			}
		],
		"name": "MintPhaseChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Paused",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Refund",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "beneficiary",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "numPurchased",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Revenue",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Unpaused",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "implementation",
				"type": "address"
			}
		],
		"name": "Upgraded",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "allowlistRoot",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "beneficiary",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "explicitOwnershipOf",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "addr",
						"type": "address"
					},
					{
						"internalType": "uint64",
						"name": "startTimestamp",
						"type": "uint64"
					},
					{
						"internalType": "bool",
						"name": "burned",
						"type": "bool"
					},
					{
						"internalType": "uint24",
						"name": "extraData",
						"type": "uint24"
					}
				],
				"internalType": "struct IERC721AUpgradeable.TokenOwnership",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "tokenIds",
				"type": "uint256[]"
			}
		],
		"name": "explicitOwnershipsOf",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "addr",
						"type": "address"
					},
					{
						"internalType": "uint64",
						"name": "startTimestamp",
						"type": "uint64"
					},
					{
						"internalType": "bool",
						"name": "burned",
						"type": "bool"
					},
					{
						"internalType": "uint24",
						"name": "extraData",
						"type": "uint24"
					}
				],
				"internalType": "struct IERC721AUpgradeable.TokenOwnership[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_maxSupply",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_mintPrice",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "_beneficiary",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "royaltyReceiver",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "_allowlistRoot",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_waitlistRoot",
				"type": "bytes32"
			}
		],
		"name": "initialize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "freeAllowance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "paidAllowance",
				"type": "uint256"
			},
			{
				"internalType": "bytes32[]",
				"name": "proof",
				"type": "bytes32[]"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mintPhase",
		"outputs": [
			{
				"internalType": "enum ITablelandRigs.MintPhase",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mintPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "proxiableUUID",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_salePrice",
				"type": "uint256"
			}
		],
		"name": "royaltyInfo",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_beneficiary",
				"type": "address"
			}
		],
		"name": "setBeneficiary",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "uri",
				"type": "string"
			}
		],
		"name": "setContractURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_mintPhase",
				"type": "uint256"
			}
		],
		"name": "setMintPhase",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string[]",
				"name": "uriTemplate",
				"type": "string[]"
			}
		],
		"name": "setURITemplate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "tokensOfOwner",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "start",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "stop",
				"type": "uint256"
			}
		],
		"name": "tokensOfOwnerIn",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unpause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newImplementation",
				"type": "address"
			}
		],
		"name": "upgradeTo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newImplementation",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "upgradeToAndCall",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "waitlistRoot",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
],
  };

  const wallet = Vue.observable({
    account: null,
    accountCompact: null,
    network: null,
    balance: null,
    provider: null,
    price: null,
    quantity: "1",
    priceFix: null,
    tokenBalance: null,
    totalSupply: 200,
    claimStatus: null,
    freeAllowance: 0,
    paidAllowance: 0,
    proof: "0x6c00000000000000000000000000000000000000000000000000000000000000",

    //Walletconnect functions
    async connectMobile() {
      await provider.enable();
      const wallct = new ethers.providers.Web3Provider(provider);
      const signer = await wallct.getSigner();
      const [account] = await wallct.listAccounts();
      // this.$wallet.provider = this.provider2.provider.accounts[0];
      console.log("connected to account:" + account);
      if (account) {
        await wallet.setAccountWallet(account);
      }
    },

    get hexChainId() {
      return "0x" + this.network?.chainId.toString(16);
    },

    async init() {
      this.provider = provider;

      // Check totalSupply via api connection on pageload (requires no web3 wallet provider)

      // Looksrare API, use for main net or rinkeby contract queries
      const rigSupply = await(await fetch('https://api.looksrare.org/api/v1/collections/stats?address=0x8EAa9AE1Ac89B1c8C8a8104D08C045f78Aadb42D')).json();
      this.totalSupply = rigSupply.data.totalSupply;

      // Optomism API, use for optimism contract queries
      // const rigSupply = await(await fetch('https://api-kovan-optimistic.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0x61a748d5f21e7b235f740bdb496b66b852687000&apikey=SAHJW4NKQD6IFP49Y8DGBSH7NHQBR2FXK3')).json();
      // this.totalSupply = rigSupply.result;


      // For devices with no browser wallet
      // Notes: Not working at the moment, need to find better way to implement WalletConnect
      if (!window.ethereum) {
        // const nftContract = new ethers.Contract(rig.address, rig.abi);
        // const totalSupply = await nftContract.totalSupply();

        console.log("connected to walletconnect");

        const wallct = new ethers.providers.Web3Provider(provider);
        // const signer = await wallct.getSigner();

        const nftContract = new ethers.Contract(rig.address, rig.abi);
        const totalSupply = await nftContract.totalSupply();
        this.totalSupply = totalSupply;

        const [account] = await wallct.listAccounts();
        // this.$wallet.provider = this.provider2.provider.accounts[0];

        // if (account) {
        //   await provider.enable();
        //   console.log("connected to account:" + account);
        //   const nftContract = new ethers.Contract(rig.address, rig.abi, signer);
        //   const balance = (await wallct.getBalance(account)).toString();
        //   this.balance = (+ethers.utils.formatEther(balance)).toFixed(3);
        //   this.account = account;
        //   this.accountCompact = `${account.substring(
        //     0,
        //     5
        //   )}...${account.substring(account.length - 4)}`;
        //   console.log(this.balance)
        //   console.log(this.account)
        // }
      }

      // For devices WITH browser wallets
      if (window.ethereum) {
        this.network = this.provider.getNetwork();

        const [account] = await this.provider.listAccounts();

        if (account) {
          await wallet.setAccount(account);
        }

        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(rig.address, rig.abi, signer);
        const totalSupply = await nftContract.totalSupply();
        this.totalSupply = totalSupply;
        const rigId = this.rigId;

        const rigPrice = await nftContract.connect(signer).mintPrice();
        this.price = rigPrice;

        // Force page refreshes on network changes
        {
          // The "any" network will allow spontaneous network changes
          const provider = new ethers.providers.Web3Provider(
            window.ethereum,
            "any"
          );
          provider.on("network", (newNetwork, oldNetwork) => {
            // When a Provider makes its initial connection, it emits a "network"
            // event with a null oldNetwork along with the newNetwork. So, if the
            // oldNetwork exists, it represents a changing network
            if (oldNetwork) {
              window.location.reload();
            }
          });
        }

        if (window.location.pathname == "/minter/") {
          //Check contract totalSupply

          const maxSupply = 3000 - totalSupply;
          document.getElementById("rig-supply").innerHTML = maxSupply + "/3000";
          if (maxSupply === 0) {
            console.log("no more left!");
            document.getElementById("mint-button").innerHTML = "RIGS SOLD OUT!";
            document.querySelector("#mint-button").disabled = true;
          }
        }

        if (window.location.pathname == "/garage/") {
          let userAddress = await signer.getAddress();
          const nftContract = new ethers.Contract(rig.address, rig.abi, signer);
          const tokenBalance = await nftContract.balanceOf(userAddress);
          this.tokenBalance = tokenBalance;
          const rigBalance = await nftContract.tokensOfOwnerIn(
            userAddress,
            0,
            10000
          );

          //find solution to getting rate limited on requests, edge cases
          await rigBalance.forEach(async (item) => {
            let rigLog = document.getElementById("rig-garage");
            const rigId = await ethers.utils.formatUnits(item._hex, 0);
            const tokenURI = await nftContract.tokenURI(rigId);
            const rigsMeta = await (await fetch(tokenURI)).json();
            if (rigsMeta.attributes[0].value == "100") {
              rigLog.innerHTML += `<div class="lg:w-1/3 md:w-1/2 w-full px-3 py-3 rigs">
                      <a href="/rigs/${rigId}">
                       <div class="rig-frame " >
                        <img src="${rigsMeta.image}"/>
                       </div>
                       <h2 class="text-black font-Orbitron text-xl px-3 py-3">#${rigId}</h2>

                       <p class="text-black px-3 py-0">Fleet: ${rigsMeta.attributes[5].value}</p>
                       <p class="text-black px-3 py-3 pb-3 ${rigsMeta.attributes[0].value} rarity-${rigsMeta.attributes[0].value}">Original: ${rigsMeta.attributes[3].value} ${rigsMeta.attributes[6].value}</p>
                      </a>
                    </div>`;
            } else {
              rigLog.innerHTML += `<div class="lg:w-1/3 md:w-1/2 w-full px-3 py-3 rigs">
                      <a href="/rigs/${rigId}">
                       <div class="rig-frame " >
                        <img src="${rigsMeta.image}"/>
                       </div>
                       <h2 class="text-black font-Orbitron text-xl px-3 py-3">#${rigId}</h2>

                       <p class="text-black px-3 py-0">Fleet: ${rigsMeta.attributes[4].value}</p>
                       <p class="text-black px-3 py-3 pb-3 ${rigsMeta.attributes[0].value} rarity-${rigsMeta.attributes[5].value}">Original: ${rigsMeta.attributes[0].value * 100}%</p>
                      </a>
                    </div>`;
            }
          });
        }

        if (window.location.pathname == "/rigs/" + rigId) {
          //Check rig owned address
          const rigOwner = await nftContract.ownerOf(rigId);
          document.getElementById("rig-owner").innerHTML =
            "> Owner: " + rigOwner;
        } else {
        }
      }
    },

    async setAccount(newAccount) {
      if (newAccount) {
        this.account = newAccount;
        this.accountCompact = `${newAccount.substring(
          0,
          5
        )}...${newAccount.substring(newAccount.length - 4)}`;

        const balance = (await this.provider.getBalance(newAccount)).toString();
        this.balance = (+ethers.utils.formatEther(balance)).toFixed(3);
      } else {
        this.account = null;
        this.accountCompact = null;
        this.balance = null;
      }
    },

    async setAccountWallet() {
      this.account = null;
      this.accountCompact = null;
      this.balance = null;
    },

    async connect() {
      try {
        const provider = new ethers.providers.Web3Provider(
          window.ethereum,
          "any"
        );
        wallet.network = wallet.provider.getNetwork();

        const [account] = await wallet.provider.send("eth_requestAccounts");

        if (account) {
          await wallet.setAccount(account);
        }
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();

        //Connect to contract and spit out owned rig data
        let userAddress = await signer.getAddress();
        const nftContract = new ethers.Contract(rig.address, rig.abi, signer);
        const tokenBalance = await nftContract.balanceOf(userAddress);
        const nftBalance = await provider.getBalance(rig.address);
        const rigBalance = await nftContract.tokensOfOwnerIn(
          userAddress,
          0,
          10000
        );

        if (window.location.pathname == "/garage") {
        }
      } catch (error) {
        console.log(JSON.stringify(error));
        console.log = function (message) {
          document.getElementById("mint-log").innerHTML = message;
        };
      }
    },

    async claimRig() {
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      let userAddress = await signer.getAddress();
      const rigAllowance = await(await fetch('https://testnet.tableland.network/query?s=select%20*%20from%20rigs_allowlist_5_59%20where%20address=%27'+ userAddress +'%27')).json();

      if (rigAllowance.rows) {
        this.claimStatus = 1;
        console.log("you're on the claim list!");
        const rigList = rigAllowance.rows[0];
        this.freeAllowance = rigList[1];
        this.paidAllowance = rigList[2];
      }

      else {
        console.log("Wallet ID not on whitelist, try again!");
        document.getElementById("claim-button").innerHTML =
          "NOT WHITELISTED!";
        document.getElementById("claim-text").innerHTML =
        "==== You are currently not on our whitelist, come back July 18, 2022 ====";
        }


    },

    async mintRig() {
      try {
        const { ethereum } = window;

        if (ethereum) {
          // console.log = function (message) {
          //   document.getElementById("mint-log").innerHTML = message;
          // };

          document.getElementById("mint-button").innerHTML =
            "Confirm the Transaction";
          document.getElementById("mint-terminal").innerHTML =
            "============================= CONFIRM TRANSACTION ================================= <p>0x10806040523480156200001157600080fd5b506040805190810160405280600481526020017f5049535300000000000000000000000000000000000000000000000000000000815250600090805190602001906200005f929190620001bb565b506040805190810160405280600881526020017f50495353434f494e00000000000000000000000000000000000000000000000081525060019080519060200190620000ad929190620001bb565b506004600260006101000a81548160ff021916908360ff16021790555065019f9e67fdad6003819055506501235477e0096004600073f73a4da8d034774d5b18de694e5d2b0fbb0aaff473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555073f73a4da8d034774d5b18de694e5d2b0fbb0aaff473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6501235477e0096040518082815260200191505060405180910390a36200026a565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001fe57805160ff19168380011785556200022f565b828001600101855582156200022f579182015b828111156200022e57825182559160200191906001019062000211565b5b5090506200023e919062000242565b5090565b6200026791905b808211156200026357600081600090555060010162000249565b5090565b90565b6110fe806200027a6000396000f3006080604052600436106100db576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100e0578063095ea7b31461017057806318160ddd146101d557806323b872dd14610200578063313ce567146102855780633eaaf86b146102b657806370a08231146102e157806395d89b411461</p>";

          await provider.send("eth_requestAccounts", []);
          const signer = provider.getSigner();
          let userAddress = await signer.getAddress();
          const nftContract = new ethers.Contract(rig.address, rig.abi, signer);

          const quantity = this.quantity;
          const freeAllowance = this.freeAllowance;
          const paidAllowance = this.paidAllowance;
          const proof = this.proof;

          // Minting in progress

          let tx = await nftContract.connect(signer).mint(quantity, freeAllowance, paidAllowance, proof);

          document.getElementById("mint-terminal").innerHTML =
            "============================== MINTING IN PROGRESS ================================ <p>0x6060604052341561000f57600080fd5b61053a8061001e6000396000f300606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde031461005c57806320965255146100ea57806393a0935214610178575b600080fd5b341561006757600080fd5b61006f61024e565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100af578082015181840152602081019050610094565b50505050905090810190601f1680156100dc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156100f557600080fd5b6100fd6102ec565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561013d578082015181840152602081019050610122565b50505050905090810190601f16801561016a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561018357600080fd5b6101d3600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610394565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102135780820151818401526020810190506101f8565b50505050905090810190601f1680156102405780820380516001836020036101000a031916815260200191505b50929</p>";
          document.getElementById("mint-button").innerHTML =
            "Minting in Progress";
          document
            .getElementById("animated-carousel")
            .classList.add("progress");
          await tx.wait();

          // Minting results
          const receipt = await tx.wait();
          const [event] = receipt.events ?? [];
          const tokenId = event.args?.tokenId;
          const tokenIdFix = tokenId - 1;
          const tokenURI = await nftContract.tokenURI(tokenId);
          // const rigsMeta = await (await fetch(tokenURI)).json();

          document.getElementById("mint-button").innerHTML = "Mint Results";
          document.getElementById("rig-result").classList.add("active");
          document.getElementById("minter-details").classList.add("active");
          document.getElementById("minter-console").classList.add("active");
          document.getElementById("minter-title").classList.add("active");
          document.getElementById("animated-carousel").classList.add("mint");
          console.log(
            `============================ RIG MINTED =============================== <p>transaction tx ${
              tx.hash
            }, ${event.args?.tokenId}, token id ${
              event.args?.tokenId
            }, see transaction: hhttps://etherscan.io/tx/${
              tx.hash
            }, Token URI ${tokenURI}

            Gas used: ${receipt.gasUsed.toString()}, Transaction confirmed in block ${
              receipt.blockNumber
            }</p>`
          );
          await receipt.events.forEach(async (item) => {
            let rigResult = document.getElementById("rig-box");
            const tokenId = item.args?.tokenId;
            const tokenURI = await nftContract.tokenURI(tokenId);
            const rigsMeta = await (await fetch(tokenURI)).json();

            rigResult.innerHTML += `<div class="md:flex justify-center text-center px-6 py-2">
            <div class="w-full md:w-1/3 rig-frame">
             <img src="${rigsMeta.image}">
            </div>
            <div class="w-full md:w-2/3">
              <div class="minter-console" id="minter-console">
                <div class="text-white text-left" id="mint-log">
                  <div id="mint-terminal" class="frame">
                        <div class="text-left text-white rarity-${rigsMeta.attributes[0].value}"><p class="original-text">IT'S AN ORIGINAL!</p></div>
                        <div class="text-left">> Querying Rig ID #00${tokenId}</div>
                        <div class="text-left">tableland> SELECT * FROM rig_parts WHERE fleet = '${
                          rigsMeta.attributes[4].value
                        }';</div><br>

                        <div id="trait-${tokenId}" class="flex flex-wrap"></div>
                        <div class="text-left">
                        <p>> Transaction TX '${
                          tx.hash
                        }', See transaction: https://etherscan.io/tx/'${
              tx.hash
            }' Gas used: '${receipt.gasUsed.toString()}', Transaction confirmed in block '${
              receipt.blockNumber
            }'</p>
                        </div>
                  </div>
                </div>
              </div>
           </div>
           </div>`;
            rigsMeta.attributes.forEach((item) => {
              let traitBox = document.getElementById("trait-" + tokenId);
              traitBox.innerHTML += `
                <div class="lg:w-1/3 w-1/2 px-0 py-2" v-for="parts in rig.attributes">
                <strong>${item.trait_type}</strong><br>
                -------------<br>
              ${item.value}
              </div>
              `;
            });
          });
          document
            .getElementById("tx-btn")
            .setAttribute(
              "href",
              `https://etherscan.io/tx/${tx.hash}`
            );
          document.getElementById("os-btn").setAttribute("href", `/garage/`);
        } else {
          console.log("Can't find your rig captain");
        }
      } catch (error) {
        console.log(error);
        document.getElementById("mint-button").innerHTML = "Error minting rig";
        document
          .getElementById("animated-carousel")
          .classList.remove("progress");
      }
    },

    async disconnect() {
      if (!window.ethereum) {
        const wallct = new ethers.providers.Web3Provider(provider);
        const [account] = await wallct.listAccounts();
        if (account) {
          await wallet.setAccount(0);
        }
      }
      if (window.ethereum) {
        const [account] = await wallet.provider.send("eth_requestAccounts");
        if (account) {
          await wallet.setAccount(0);
        }
      }
    },

    async switchNetwork(config) {
      if (
        this.network?.chainId === config.chainId ||
        `0x${this.network?.chainId.toString(16)}` === config.chainId
      ) {
        return;
      }
      try {
        await this.provider.send("wallet_switchEthereumChain", [
          { chainId: config.chainId },
        ]);
      } catch (err) {
        if (err.code === 4902) {
          await this.provider.send("wallet_addEthereumChain", [config]);
        } else {
          throw err;
        }
      }
    },
  });

  if (window.ethereum) {
    window.ethereum.on("accountsChanged", ([newAddress]) => {
      console.log("accountsChanged", newAddress);
      wallet.setAccount(newAddress);
      if (window.location.pathname == "/garage/") {
        window.location.reload();
      }
    });

    window.ethereum.on("chainChanged", (chainId) => {
      console.log("chainChanged", chainId);
      window.location.reload();
    });
  }
  wallet.init();
  inject("wallet", wallet);
};
