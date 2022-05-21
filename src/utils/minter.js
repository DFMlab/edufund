import { create as ipfsHttpClient } from "ipfs-http-client";
import axios from "axios";

// initialize IPFS
const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

const mintPoap = async function (minterContract,
    performActions,
    name, description, image, attributes) {

    await performActions(async (kit) => {

        const { defaultAccount } = kit;

        const data = JSON.stringify({
            name,
            description,
            image,
            owner: defaultAccount,
            attributes,
        });

        try {

            const added = await client.add(data);

            const url = `https://ipfs.infura.io/ipfs/${added.path}`;

            const transaction = await minterContract.methods
                .safeMint(defaultAccount, image)
                .send({ from: defaultAccount });

            return transaction;

        } catch (error) {
            console.log("Error uploading file: ", error);
        }
    })
}

export default mintPoap