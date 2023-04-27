"use client"

import { type ReactNode, createContext } from "react"
import { type VariantCtx } from "@/lib/types"

type Props = {
  children: ReactNode
  ctx: VariantCtx
}

export const VariantContext = createContext<VariantCtx>({})

export default function VariantProvider({ children, ctx }: Props) {
  return (
    <VariantContext.Provider value={ctx}>{children}</VariantContext.Provider>
  )
}
