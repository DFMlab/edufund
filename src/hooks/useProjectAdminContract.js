import useContract from './useContract'

import abi from '../contracts/ProjectAdmin.json'

import { ProjectAdminAddress } from '../contracts/addresses.json'

console.log(ProjectAdminAddress)

const useProjectAdminContract = () => useContract(abi, ProjectAdminAddress)

export default useProjectAdminContract