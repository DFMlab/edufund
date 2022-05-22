

const donate = async function (contract, performActions, amount) {

    try {
        await performActions(async (kit) => {
            const { defaultAccount } = kit;

            const amountInWei = kit.web3.utils.toWei(amount, 'ether')

            await contract.methods.donate().send({ from: defaultAccount, value: amountInWei });
        })
    } catch { }


}


export default donate