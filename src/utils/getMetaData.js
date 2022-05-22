

const getMetaData = async function (contract) {

    try {
        const metaData = await contract.methods.getMetaData().call();

        console.log(metaData)

        return metaData
    } catch(e) { console.log(e) }

}


export default getMetaData