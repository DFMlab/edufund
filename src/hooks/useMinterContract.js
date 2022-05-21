import useContract from './useContract'

import abi from './../contracts/poap.json'

import contractAddress from './../contracts/poap-address.json'

const useMinterContract = () => useContract(abi, contractAddress)

export default useMinterContract