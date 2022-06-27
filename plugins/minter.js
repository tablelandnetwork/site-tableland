// import Vue from 'vue'
// import { ethers } from 'ethers'
// import { connect } from "@tableland/sdk"

export default async ({ env }, inject) => {
  // const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  // const rig = {
  //     address: "0xdD1f53CeA78543239E6323d9b35B5fA27451f63a",
  //     abi: [
  //   	 { "inputs": [ { "internalType": "string", "name": "baseURI", "type": "string" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "ApprovalCallerNotOwnerNorApproved", "type": "error" }, { "inputs": [], "name": "ApprovalQueryForNonexistentToken", "type": "error" }, { "inputs": [], "name": "ApprovalToCurrentOwner", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "ApproveToCaller", "type": "error" }, { "inputs": [], "name": "BalanceQueryForZeroAddress", "type": "error" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "InvalidQueryRange", "type": "error" }, { "inputs": [ { "internalType": "uint256", "name": "quantity", "type": "uint256" } ], "name": "mint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "MintToZeroAddress", "type": "error" }, { "inputs": [], "name": "MintZeroQuantity", "type": "error" }, { "inputs": [], "name": "OwnerQueryForNonexistentToken", "type": "error" }, { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "baseURI", "type": "string" } ], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "TransferCallerNotOwnerNorApproved", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "TransferFromIncorrectOwner", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "TransferToNonERC721ReceiverImplementer", "type": "error" }, { "inputs": [], "name": "TransferToZeroAddress", "type": "error" }, { "inputs": [], "name": "URIQueryForNonexistentToken", "type": "error" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Unpaused", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "explicitOwnershipOf", "outputs": [ { "components": [ { "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "uint64", "name": "startTimestamp", "type": "uint64" }, { "internalType": "bool", "name": "burned", "type": "bool" } ], "internalType": "struct IERC721A.TokenOwnership", "name": "", "type": "tuple" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256[]", "name": "tokenIds", "type": "uint256[]" } ], "name": "explicitOwnershipsOf", "outputs": [ { "components": [ { "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "uint64", "name": "startTimestamp", "type": "uint64" }, { "internalType": "bool", "name": "burned", "type": "bool" } ], "internalType": "struct IERC721A.TokenOwnership[]", "name": "", "type": "tuple[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "tokensOfOwner", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "start", "type": "uint256" }, { "internalType": "uint256", "name": "stop", "type": "uint256" } ], "name": "tokensOfOwnerIn", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }
  //     ],
  //   };
  // const wallet = Vue.observable({
  //     account: null,
  //     accountCompact: null,
  //     network: null,
  //     balance: null,
  //     provider: null,
  //     get hexChainId() {
  //         return '0x' + this.network?.chainId.toString(16)
  //     },
  //     async init() {
  //         if(!window.ethereum) return
  //         this.provider = new ethers.providers.Web3Provider(window.ethereum)
  //         this.network = this.provider.getNetwork()
  //         const [account] = await this.provider.listAccounts()
  //     },
  //     async setAccount(newAccount) {
  //         if(newAccount) {
  //             this.account = newAccount
  //             this.accountCompact = `${newAccount.substring(0, 4)}...${newAccount.substring(newAccount.length - 4)}`
  //             const balance = (await this.provider.getBalance(newAccount)).toString()
  //             this.balance = (+ethers.utils.formatEther(balance)).toFixed(3)
  //         }
  //         else {
  //             this.account = null
  //             this.accountCompact = null
  //             this.balance = null
  //         }
  //     },
  //     async connect() {
  //       const provider = new ethers.providers.Web3Provider(
  //           window.ethereum,
  //           "any"
  //         );
  //         wallet.network = wallet.provider.getNetwork()
  //         const connection = await connect({
  //           network: "testnet",
  //           host: "http://testnet.tableland.network",
  //         });
  //         const [account] = await wallet.provider.send('eth_requestAccounts')
  //         console.log('wallet connect', {account})
  //         if(account) {
  //             await wallet.setAccount(account)
  //         }
  //         await provider.send("eth_requestAccounts", []);
  //         const signer = provider.getSigner();
  //     },
  //     async mintRig() {
  //       try {
  //        const { ethereum } = window
  //        if (ethereum) {
  //       document.getElementById("mint-button").innerHTML="Confirm the Transaction";
  //       document.getElementById("mint-terminal").innerHTML="==========================  CONFIRM TRANSACTION =============================== 60806040523480156200001157600080fd5b506040805190810160405280600481526020017f5049535300000000000000000000000000000000000000000000000000000000815250600090805190602001906200005f929190620001bb565b506040805190810160405280600881526020017f50495353434f494e00000000000000000000000000000000000000000000000081525060019080519060200190620000ad929190620001bb565b506004600260006101000a81548160ff021916908360ff16021790555065019f9e67fdad6003819055506501235477e0096004600073f73a4da8d034774d5b18de694e5d2b0fbb0aaff473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555073f73a4da8d034774d5b18de694e5d2b0fbb0aaff473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6501235477e0096040518082815260200191505060405180910390a36200026a565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001fe57805160ff19168380011785556200022f565b828001600101855582156200022f579182015b828111156200022e57825182559160200191906001019062000211565b5b5090506200023e919062000242565b5090565b6200026791905b808211156200026357600081600090555060010162000249565b5090565b90565b6110fe806200027a6000396000f3006080604052600436106100db576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100e0578063095ea7b31461017057806318160ddd146101d557806323b872dd14610200578063313ce567146102855780633eaaf86b146102b657806370a08231146102e157806395d89b4114610338578063a293d1e8146103c8578063a9059cbb14610413578063b5931f7c14610478578063cae9ca51146104c3578063d05c78da1461056e578063dd62ed3e146105b9578063e6cb901314610630575b600080fd5b3480156100ec57600080fd5b506100f561067b565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561013557808201518184015260208101905061011a565b50505050905090810190601f1680156101625780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561017c57600080fd5b506101bb600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610719565b604051808215151515815260200191505060405180910390f35b3480156101e157600080fd5b506101ea61080b565b6040518082815260200191505060405180910390f35b34801561020c57600080fd5b5061026b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610856565b604051808215151515815260200191505060405180910390f35b34801561029157600080fd5b5061029a610ae6565b604051808260ff1660ff16815260200191505060405180910390f35b3480156102c257600080fd5b506102cb610af9565b6040518082815260200191505060405180910390f35b3480156102ed57600080fd5b50610322600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610aff565b6040518082815260200191505060405180910390f35b34801561034457600080fd5b5061034d610b48565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561038d578082015181840152602081019050610372565b50505050905090810190601f1680156103ba5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156103d457600080fd5b506103fd6004803603810190808035906020019092919080359060200190929190505050610be6565b6040518082815260200191505060405180910390f35b34801561041f57600080fd5b5061045e600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c02565b604051808215151515815260200191505060405180910390f35b34801561048457600080fd5b506104ad6004803603810190808035906020019092919080359060200190929190505050610d8b565b6040518082815260200191505060405180910390f35b3480156104cf57600080fd5b50610554600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610daf565b604051808215151515815260200191505060405180910390f35b34801561057a57600080fd5b506105a36004803603810190808035906020019092919080359060200190929190505050610ffe565b6040518082815260200191505060405180910390f35b3480156105c557600080fd5b5061061a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061102f565b6040518082815260200191505060405180910390f35b34801561063c57600080fd5b5061066560048036038101908080359060200190929190803590602001909291905050506110b6565b6040518082815260200191505060405180910390f35b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107115780601f106106e657610100808354040283529160200191610711565b820191906000526020600020905b8154815290600101906020018083116106f457829003601f168201915b505050505081565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600460008073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205460035403905090565b60006108a1600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483610be6565b600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061096a600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483610be6565b600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610a33600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836110b6565b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b600260009054906101000a900460ff1681565b60035481565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610bde5780601f10610bb357610100808354040283529160200191610bde565b820191906000526020600020905b815481529060010190602001808311610bc157829003601f168201915b505050505081565b6000828211151515610bf757600080fd5b818303905092915050565b6000610c4d600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483610be6565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610cd9600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836110b6565b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60008082111515610d9b57600080fd5b8183811515610da657fe5b04905092915050565b600082600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925856040518082815260200191505060405180910390a38373ffffffffffffffffffffffffffffffffffffffff16638f4ffcb1338530866040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610f8c578082015181840152602081019050610f71565b50505050905090810190601f168015610fb95780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b158015610fdb57600080fd5b505af1158015610fef573d6000803e3d6000fd5b50505050600190509392505050565b60008183029050600083148061101e575081838281151561101b57fe5b04145b151561102957600080fd5b92915050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600081830190508281101515156110cc57600080fd5b929150505600a165627a7a723058204c51e8029b4ec384399d82904ba7bec3813f50d39249e2abbb0f695843fecbd70029";
  //       await provider.send("eth_requestAccounts", []);
  //       const signer = provider.getSigner();
  //       let userAddress = await signer.getAddress();
  //       const nftContract = new ethers.Contract(rig.address, rig.abi, signer);
  //       // Minting in progress
  //       const tx = await nftContract.mint(1);
  //       console.log = function(message) {document.getElementById('mint-log').innerHTML = message;};
  //       console.log(`MINTING IN PROCESS // Transaction hash: ${tx.hash}`);
  //       document.getElementById("mint-button").innerHTML="Minting in Progress";
  //       document.getElementById("animated-carousel").classList.add("progress");
  //       // Minting results
  //       const receipt = await tx.wait();
  //       document.getElementById("mint-button").innerHTML="Rig Minted";
  //       document.getElementById("rig-result").classList.add("active");
  //       document.getElementById("minter-details").classList.add("active");
  //       document.getElementById("minter-console").classList.add("active");
  //       document.getElementById("animated-carousel").classList.add("mint");
  //       console.log(
  //           `Minted your rig, see transaction: https://rinkeby.etherscan.io/tx/${tx.hash}, Gas used: ${receipt.gasUsed.toString()}, Transaction confirmed in block ${receipt.blockNumber}`
  //       );
  //       document.getElementById("tx-btn").setAttribute("href", `https://rinkeby.etherscan.io/tx/${tx.hash}`);
  //       } else {
  //         console.log("Can't find your rig captain")
  //       }
  //     }
  //     catch (error) {
  //       console.log('Error minting rig see transaction: https://rinkeby.etherscan.io/tx/${tx.hash}', error);
  //       document.getElementById("mint-button").innerHTML="Error minting rig";
  //       document.getElementById("animated-carousel").classList.remove("progress");
  //       document.getElementById("mint-terminal").innerHTML=error;
  //     }
  //     },
  //     async switchNetwork(config) {
  //         if(this.network?.chainId === config.chainId || `0x${this.network?.chainId.toString(16)}` === config.chainId) {
  //             return
  //         }
  // 	try {
  // 		await this.provider.send('wallet_switchEthereumChain', [
  // 			{ chainId: config.chainId },
  // 		])
  // 	} catch (err) {
  // 		if (err.code === 4902) {
  //     		await this.provider.send('wallet_addEthereumChain', [config])
  //             } else {
  //                 throw err
  //             }
  //      }
  // },
  // })
  // if(window.ethereum) {
  //     window.ethereum.on('accountsChanged', ([newAddress]) => {
  //         console.log('accountsChanged', newAddress)
  //         wallet.setAccount(newAddress)
  //     })
  //     window.ethereum.on('chainChanged', (chainId) => {
  //         console.log('chainChanged', chainId)
  //         window.location.reload()
  //     })
  //     wallet.init()
  // }
  // inject('wallet', wallet)
};
