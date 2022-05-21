import useContract from './useContract'

import abi from './../contracts/ProjectAdmin.json'

import { ProjectAdminAddress } from './../contracts/address.json'

const useProectAdminContract = () => useContract(abi, ProjectAdminAddress)

export default useProectAdminContract