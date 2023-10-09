import { Dispatch, SetStateAction, createContext } from "react"

export type Amount = {
    amount: string | undefined;
    setAmount: Dispatch<SetStateAction<string | undefined>>
}

export const AmountContext = createContext<Amount>({} as Amount)