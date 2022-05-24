import Vue from 'vue'
import { ethers } from 'ethers'

export default async ({env}, inject) => {


    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

    const rig = {
        address: "0xB70C91df903AC3F2A3aD0BeabFeC3fe89dc69c99",
        abi: [
          "function gimmeSome() external",
          "function balanceOf(address _owner) public view returns (uint256 balance)",
          "function transfer(address _to, uint256 _value) public returns (bool success)",
        ],
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


        },

        async setAccount(newAccount) {
            if(newAccount) {
                this.account = newAccount
                this.accountCompact = `${newAccount.substring(0, 4)}...${newAccount.substring(newAccount.length - 4)}`

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

            const [account] = await wallet.provider.send('eth_requestAccounts')
            console.log('wallet connect', {account})

            if(account) {
                await wallet.setAccount(account)
            }
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
        },

        async mintRig() {
          try {
           const { ethereum } = window

           if (ethereum) {

          document.getElementById("mint-button").innerHTML="Confirm the Transaction";
          await provider.send("eth_requestAccounts", []);
          const signer = provider.getSigner();
          let userAddress = await signer.getAddress();
          const nftContract = new ethers.Contract(rig.address, rig.abi, signer);

          const tx = await nftContract.gimmeSome({ gasPrice: 1e9, gasLimit: 80000 });
          console.log = function(message) {
          document.getElementById('mint-log').innerHTML = message;
          };
          console.log(`Transaction hash: ${tx.hash}`);
          document.getElementById("mint-button").innerHTML="Minting in Progress";

          const receipt = await tx.wait();
          console.log(`Transaction confirmed in block ${receipt.blockNumber}`);
          console.log(`Gas used: ${receipt.gasUsed.toString()}`);
          console.log(
              `Minted your rig, see transaction: https://rinkeby.etherscan.io/tx/${tx.hash}`
          );

          } else {
              console.log("object doesnt exist!")
          }
      } catch (error) {
          console.log('Error minting rig', error)
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
