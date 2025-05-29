import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
import { toast } from "react-toastify"
import { useCard } from "@hooks/useCard"
import { PayPalButtonProps } from "types"
import { openCardWindow } from "@utils/paypal/paypalCardWindow"
import Card from "@components/icons/Card"
import { handleApprove } from "@utils/paypal/paypalHandler"

export default function PayPalButton({
  name,
  price,
  userId,
}: PayPalButtonProps) {
  useCard({ name, price, userId })

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
          onApprove={(_, actions) =>
            handleApprove({ actions, name, price, userId })
          }
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
