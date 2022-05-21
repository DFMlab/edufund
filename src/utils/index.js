import {ERC20_DECIMALS} from "./constants";

export const formatBigNumber = (num) => {

    if (!num) return 0

    return num.shiftedBy(-ERC20_DECIMALS).toFixed(2);
}