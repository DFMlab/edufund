import useContract from './useContract'

import abi from '../contracts/Project.json'

const useProjectContract = (contractAddress) => useContract(abi, contractAddress)

export default useProjectContract