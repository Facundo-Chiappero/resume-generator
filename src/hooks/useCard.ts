import { handlePaymentSuccess } from "@utils/paypal/paypalHandler"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { PayPalButtonProps } from "types"
import type { OrderResponseBody } from "@paypal/paypal-js"

export function useCard({ name, price, userId }: PayPalButtonProps) {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        event.data?.status === "success" &&
        event.data?.details?.id &&
        userId
      ) {
        const details = event.data.details as OrderResponseBody
        handlePaymentSuccess({ details, name, price, userId })
      } else if (event.data?.status === "error") {
        toast.error("Error while paying with card")
      }
    }

    window.addEventListener("message", handleMessage)

    return () => {
      window.removeEventListener("message", handleMessage)
    }
  }, [name, price, userId])
}
