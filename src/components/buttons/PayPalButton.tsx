import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
import { toast } from "react-toastify"
import { useCard } from "@hooks/useCard"
import { PayPalButtonProps } from "types"
import { openCardWindow } from "@utils/paypal/paypalCardWindow"
import { handlePaymentSuccess } from "@utils/paypal/paypalHandler"
import type {
  OnApproveActions,
  OnApproveData,
  OrderResponseBody,
} from "@paypal/paypal-js"
import Card from "@components/icons/Card"

export default function PayPalButton({
  name,
  price,
  userId,
}: PayPalButtonProps) {
  useCard({ name, price, userId })

  const handleApprove = async (_: OnApproveData, actions: OnApproveActions) => {
    if (!actions.order) return Promise.reject("No order action found")
    if (!userId) return Promise.reject("User is not signed in")

    const rawDetails = await actions.order.capture()
    const details = rawDetails as OrderResponseBody

    if (!details?.id || !details?.payer?.email_address) {
      toast.error("Invalid PayPal capture response")
      return
    }

    handlePaymentSuccess({ details, name, price, userId })
  }

  return (
    <>
      <PayPalScriptProvider
        options={{ clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID ?? "" }}
      >
        <PayPalButtons
          fundingSource="paypal"
          className="max-w-96 min-w-48 w-full m-4"
          createOrder={(_, actions) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  description: name,
                  amount: {
                    currency_code: "USD",
                    value: price,
                  },
                },
              ],
            })
          }}
          onApprove={handleApprove}
          onCancel={() => toast.error("Payment canceled")}
          onError={() => toast.error("Error while doing payment")}
        />
      </PayPalScriptProvider>

      <button
        className="bg-light-background-secondary dark:bg-dark-background-secondary cursor-pointer font-semibold px-4 py-2 mt-4 rounded-sm text-pretty flex items-center justify-center gap-4 max-w-96 min-w-48 w-full"
        onClick={() => openCardWindow(name, price)}
      >
        <Card />
        Pay with Credit or Debit Card
      </button>
    </>
  )
}
