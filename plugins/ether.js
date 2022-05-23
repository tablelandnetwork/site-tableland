import Vue from 'vue'
import { ethers } from 'ethers'

export default async ({env}, inject) => {

    const nftContractAddress = "0x2acb10fb88268d3cfc5ee4fcf8b37d8e63e4167d"

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

            !!account && this.setAccount(account)
            window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{
                  chainId: "0x4",
              }]
          });
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

            wallet.network = wallet.provider.getNetwork()

            const [account] = await wallet.provider.send('eth_requestAccounts')
            console.log('wallet connect', {account})

            if(account) {
                await wallet.setAccount(account)
            }
        },

        async mint() {
          try {
           const { ethereum } = window

           if (ethereum) {
               const provider = new ethers.providers.Web3Provider(ethereum)
               const signer = provider.getSigner()
               const nftContract = new ethers.Contract(
                   nftContractAddress,
                   // NFT.abi,
                   signer
               )

               let nftTx = await nftContract.createEternalNFT()
               console.log('Minting rig...', nftTx.hash)
               setMiningStatus(0)

               let tx = await nftTx.wait()
               setLoadingState(1)
               console.log('minted rig!!', tx)
               let event = tx.events[0]
               let value = event.args[2]
               let tokenId = value.toNumber()

               console.log(
                   `Minted your rig, see transaction: https://rinkeby.etherscan.io/tx/${nftTx.hash}`
               )

               getMintedNFT(tokenId)
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
