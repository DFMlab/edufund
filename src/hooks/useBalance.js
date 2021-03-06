import { useState, useEffect, useCallback } from 'react';

import { useContractKit } from '@celo-tools/use-contractkit';

const useBalance = () => {

    const { address, kit } = useContractKit();

    const [balance, setBalance] = useState(0);

    const getBalance = useCallback(async () => {

        const value = await kit.getTotalBalance(address);

        setBalance(value);

    }, [address, kit]);

    useEffect(() => {

        if (address) getBalance();

    }, [address, getBalance]);

    return {
        balance,
        getBalance,
    };
};

export default useBalance