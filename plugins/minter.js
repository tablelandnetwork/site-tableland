import Vue from 'vue';
import { ethers } from 'ethers';
import { connect } from "@tableland/sdk";
import { BigNumber} from 'ethers';
import rigsMeta from '~/assets/rigsMeta.json';

export default async ({env}, inject) => {

    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

    const rig = {
        address: "0x88694d0b8c8E800AB3D9eecBF9A8923B3b5825fA",
        abi: [
         { "inputs": [ { "internalType": "string", "name": "baseURI", "type": "string" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "ApprovalCallerNotOwnerNorApproved", "type": "error" }, { "inputs": [], "name": "ApprovalQueryForNonexistentToken", "type": "error" }, { "inputs": [], "name": "ApprovalToCurrentOwner", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "ApproveToCaller", "type": "error" }, { "inputs": [], "name": "BalanceQueryForZeroAddress", "type": "error" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "InvalidQueryRange", "type": "error" }, { "inputs": [ { "internalType": "uint256", "name": "quantity", "type": "uint256" } ], "name": "mint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "MintToZeroAddress", "type": "error" }, { "inputs": [], "name": "MintZeroQuantity", "type": "error" }, { "inputs": [], "name": "OwnerQueryForNonexistentToken", "type": "error" }, { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "baseURI", "type": "string" } ], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "TransferCallerNotOwnerNorApproved", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "TransferFromIncorrectOwner", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "TransferToNonERC721ReceiverImplementer", "type": "error" }, { "inputs": [], "name": "TransferToZeroAddress", "type": "error" }, { "inputs": [], "name": "URIQueryForNonexistentToken", "type": "error" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Unpaused", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "explicitOwnershipOf", "outputs": [ { "components": [ { "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "uint64", "name": "startTimestamp", "type": "uint64" }, { "internalType": "bool", "name": "burned", "type": "bool" } ], "internalType": "struct IERC721A.TokenOwnership", "name": "", "type": "tuple" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256[]", "name": "tokenIds", "type": "uint256[]" } ], "name": "explicitOwnershipsOf", "outputs": [ { "components": [ { "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "uint64", "name": "startTimestamp", "type": "uint64" }, { "internalType": "bool", "name": "burned", "type": "bool" } ], "internalType": "struct IERC721A.TokenOwnership[]", "name": "", "type": "tuple[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "tokensOfOwner", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "start", "type": "uint256" }, { "internalType": "uint256", "name": "stop", "type": "uint256" } ], "name": "tokensOfOwnerIn", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }
        ],
        price: "5000000000000000",
      };

    const wallet = Vue.observable({
        account: null,
        accountCompact: null,
        network: null,
        balance: null,
        provider: null,

        get hexChainId() {
            return '0x' + this.network?.chainId.toString(16)
        },

        async init() {
            if(!window.ethereum) return

            this.provider = new ethers.providers.Web3Provider(window.ethereum)
            this.network = this.provider.getNetwork()
            const [account] = await this.provider.listAccounts()

            // Check contract on page load
            const signer = provider.getSigner();
            const nftContract = new ethers.Contract(rig.address, rig.abi, signer);
            const totalSupply = await nftContract.totalSupply();


            if(window.location.pathname == '/minter') {
              //Check contract totalSupply
              const maxSupply = 3000 - totalSupply;
              document.getElementById("rig-supply").innerHTML=maxSupply;
              if (maxSupply === 0) {
                console.log('no more left!')
                document.getElementById("connect-button").innerHTML="RIGS SOLD OUT!";
                document.querySelector('#connect-button').disabled = true;
              }
            }
            if(window.location.pathname == '/gallery') {
              let userAddress = await signer.getAddress();
              const nftContract = new ethers.Contract(rig.address, rig.abi, signer);
              const tokenBalance = await nftContract.balanceOf(userAddress);
              const rigBalance = await nftContract.tokensOfOwnerIn(userAddress, 0, 10000)
            }

            if(window.location.pathname == '/rig/1') {

              const pageId = 1;
              const rigOwner = await nftContract.ownerOf(pageId);
              //Check rig owned address
              document.getElementById("rig-owner").innerHTML='OWNED BY ' + rigOwner;
            }
        },

        async setAccount(newAccount) {
            if(newAccount) {
                this.account = newAccount
                this.accountCompact = `${newAccount.substring(0, 5)}...${newAccount.substring(newAccount.length - 4)}`

                const balance = (await this.provider.getBalance(newAccount)).toString()
                this.balance = (+ethers.utils.formatEther(balance)).toFixed(3)
            }
            else {
                this.account = null
                this.accountCompact = null
                this.balance = null
            }
        },

        async connect() {
          const provider = new ethers.providers.Web3Provider(
            window.ethereum,
            "any"
          );
          wallet.network = wallet.provider.getNetwork()

          // const connection = await connect({
          //   network: "testnet",
          //   host: "http://testnet.tableland.network",
          // });

          const [account] = await wallet.provider.send('eth_requestAccounts')

          if(account) {
              await wallet.setAccount(account)
          }
          await provider.send("eth_requestAccounts", []);
          const signer = provider.getSigner();

          //Connect to contract and spit out owned rig data
          let userAddress = await signer.getAddress();
          const nftContract = new ethers.Contract(rig.address, rig.abi, signer);
          const tokenBalance = await nftContract.balanceOf(userAddress);
          const nftBalance = await provider.getBalance(rig.address)
          const rigBalance = await nftContract.tokensOfOwnerIn(userAddress, 0, 10000)
          console.log("user wallet:", userAddress);
          console.log("token balance:", tokenBalance);
          console.log("rigs owned:", rigBalance);

        },

        async mintRig() {
          try {
           const { ethereum } = window

           if (ethereum) {

          console.log = function(message) {document.getElementById('mint-log').innerHTML = message;};
          document.getElementById("mint-button").innerHTML="Confirm the Transaction";
          document.getElementById("mint-terminal").innerHTML="============================= CONFIRM TRANSACTION ================================= 0x10806040523480156200001157600080fd5b506040805190810160405280600481526020017f5049535300000000000000000000000000000000000000000000000000000000815250600090805190602001906200005f929190620001bb565b506040805190810160405280600881526020017f50495353434f494e00000000000000000000000000000000000000000000000081525060019080519060200190620000ad929190620001bb565b506004600260006101000a81548160ff021916908360ff16021790555065019f9e67fdad6003819055506501235477e0096004600073f73a4da8d034774d5b18de694e5d2b0fbb0aaff473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555073f73a4da8d034774d5b18de694e5d2b0fbb0aaff473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6501235477e0096040518082815260200191505060405180910390a36200026a565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001fe57805160ff19168380011785556200022f565b828001600101855582156200022f579182015b828111156200022e57825182559160200191906001019062000211565b5b5090506200023e919062000242565b5090565b6200026791905b808211156200026357600081600090555060010162000249565b5090565b90565b6110fe806200027a6000396000f3006080604052600436106100db576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100e0578063095ea7b31461017057806318160ddd146101d557806323b872dd14610200578063313ce567146102855780633eaaf86b146102b657806370a08231146102e157806395d89b411461";

          await provider.send("eth_requestAccounts", []);
          const signer = provider.getSigner();
          let userAddress = await signer.getAddress();
          const nftContract = new ethers.Contract(rig.address, rig.abi, signer);
          const rigUrl = rigsMeta.image;

          // Minting in progress
          let tx = await nftContract.connect(signer).mint(1, {value: rig.price,});
          document.getElementById("mint-terminal").innerHTML="============================ MINTING IN PROGRESS ================================ 0x6060604052341561000f57600080fd5b61053a8061001e6000396000f300606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde031461005c57806320965255146100ea57806393a0935214610178575b600080fd5b341561006757600080fd5b61006f61024e565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100af578082015181840152602081019050610094565b50505050905090810190601f1680156100dc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156100f557600080fd5b6100fd6102ec565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561013d578082015181840152602081019050610122565b50505050905090810190601f16801561016a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561018357600080fd5b6101d3600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610394565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102135780820151818401526020810190506101f8565b50505050905090810190601f1680156102405780820380516001836020036101000a031916815260200191505b50929";
          document.getElementById("mint-button").innerHTML="Minting in Progress";
          document.getElementById("animated-carousel").classList.add("progress");
          await tx.wait();

          // Minting results
          const receipt = await tx.wait();
          const [event] = receipt.events ?? [];
          const tokenId = event.args?.tokenId;
          const tokenIdFix = tokenId - 1;
          document.getElementById("mint-button").innerHTML="Rig Minted";
          document.getElementById("rig-result").classList.add("active");
          document.getElementById("minter-details").classList.add("active");
          document.getElementById("minter-console").classList.add("active");
          document.getElementById("animated-carousel").classList.add("mint");
          console.log(`========================== RIG MINTED =============================== transaction tx ${tx.hash}, ${event.args?.tokenId}, token id ${event.args?.tokenId}, see transaction: https://goerli.etherscan.io/tx/${tx.hash}, Gas used: ${receipt.gasUsed.toString()}, Transaction confirmed in block ${receipt.blockNumber}, arguements ${event.args}`);
          document.getElementById("tx-btn").setAttribute("href", `https://goerli.etherscan.io/tx/${tx.hash}`);
          document.getElementById("os-btn").setAttribute("href", `https://testnets.opensea.io/assets/goerli/${rig.address}/${event.args?.tokenId}`);
          document.getElementById("tx-mint").innerHTML=`${tx.hash}`;
          document.getElementById("tkn-mint").innerHTML=`RIG ID / #${event.args?.tokenId}`;
          document.getElementById("rig-img").src = rigsMeta.rigs[tokenIdFix].image;
          rigsMeta.rigs[tokenIdFix].attributes.forEach(item => {
           let traitBox = document.getElementById("trait");
           traitBox.innerHTML += `<p class="text-white">${item.trait_type}: ${item.value}</p>`;
          }
        );
          } else {
            console.log("Can't find your rig captain")
          }
        }
        catch (error) {
          console.log(error);
          document.getElementById("mint-button").innerHTML="Error minting rig";
          document.getElementById("animated-carousel").classList.remove("progress");
        }

        },

        async rigsGarage() {
          const provider = new ethers.providers.Web3Provider(
              window.ethereum,
              "any"
            );
            wallet.network = wallet.provider.getNetwork()

            // const connection = await connect({
            //   network: "testnet",
            //   host: "http://testnet.tableland.network",
            // });

            const [account] = await wallet.provider.send('eth_requestAccounts')

            if(account) {
                await wallet.setAccount(account)
            }
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();

            //Connect to contract and spit out owned rig data
            let userAddress = await signer.getAddress();
            const nftContract = new ethers.Contract(rig.address, rig.abi, signer);
            const tokenBalance = await nftContract.balanceOf(userAddress);
            const rigBalance = await nftContract.tokensOfOwnerIn(userAddress, 0, 10000)

            rigBalance.forEach(item => {
              let rigLog = document.getElementById("rig-garage");
              const rigId = ethers.utils.formatUnits(item._hex, 0) ;
              const rigIdSub = ethers.utils.formatUnits(item._hex, 0) -1;
              rigLog.innerHTML += `<div class="w-1/3 px-3 py-3 rigs">
                <a href="/rig/${rigId}">
                 <div class="rig-frame ${rigsMeta.rigs[rigIdSub].attributes[1].value} rarity-${rigsMeta.rigs[rigIdSub].attributes[0].value}" >
                  <img src="${rigsMeta.rigs[rigIdSub].image}"/>
                 </div>
                 <h2 class="text-white font-Orbitron text-l">RIG ID #00${rigId}</h2>
                <p class="text-white">FLEET: ${rigsMeta.rigs[rigIdSub].attributes[1].value}</p>
                </a>
              </div>`;
            });

        },

        // Gets the minted NFT data
      	async getRig(tokenId)  {
      		try {
      			const { ethereum } = window

      			if (ethereum) {

              await provider.send("eth_requestAccounts", []);
              const signer = provider.getSigner();
              let userAddress = await signer.getAddress();
              const nftContract = new ethers.Contract(rig.address, rig.abi, signer);
              const tokenBalance = await nftContract.balanceOf(userAddress);
              const nftBalance = await provider.getBalance(rig.address)
              const rigBalance = await nftContract.tokensOfOwner(userAddress)
              console.log("user wallet:", userAddress);
              console.log("token balance:", tokenBalance);
              console.log("rigs owned:", rigBalance);
              rigBalance.forEach(item => {
                console.log("rig: ",item);
                console.log("=========");
              });

      			} else {
      				console.log("Ethereum object doesn't exist!")
      			}
      		} catch (error) {
      			console.log(error)

      		}
      	},


        async switchNetwork(config) {
            if(this.network?.chainId === config.chainId || `0x${this.network?.chainId.toString(16)}` === config.chainId) {
                return
            }

		try {
			await this.provider.send('wallet_switchEthereumChain', [
				{ chainId: config.chainId },
			])
		} catch (err) {
			if (err.code === 4902) {
	    		await this.provider.send('wallet_addEthereumChain', [config])
                } else {
                    throw err
                }
	     }
	},
    })

    if(window.ethereum) {

        window.ethereum.on('accountsChanged', ([newAddress]) => {
            console.log('accountsChanged', newAddress)
            wallet.setAccount(newAddress)
        })

        window.ethereum.on('chainChanged', (chainId) => {
            console.log('chainChanged', chainId)
            window.location.reload()
        })

        wallet.init()
    }

    inject('wallet', wallet)
}
