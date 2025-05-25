import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
import { toast } from "react-toastify"

type PayPalButtonProps = {
  name: string
  price: string
  userId: string | undefined
}
type handlePaymentSuccessProps = {
  details: PayPalCaptureDetails
  name: string
  price: string
  userId: string
}
type PayPalCaptureDetails = {
  id: string
  status: string
  payer?: {
    email_address?: string
    name?: {
      given_name?: string
      surname?: string
    }
    payer_id?: string
  }
  create_time?: string
  update_time?: string
  purchase_units?: Array<{
    amount?: {
      currency_code?: string
      value?: string
    }
    description?: string
  }>
}

const handlePaymentSuccess = async ({
  details,
  name,
  price,
  userId,
}: handlePaymentSuccessProps): Promise<void> => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/paypalPayment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentId: details.id,
          amount: price,
          planId: name,
          userId,
        }),
      }
    )

    if (!response.ok) {
      const data = await response.json()
      toast.error(data.message)
    } else {
      const data = await response.json()
      toast.success(data.message)
      window.location.reload()
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    toast.error("There was an unexpected error.\nCheck your connection")
  }
}

export default function PayPalButton({
  name,
  price,
  userId,
}: PayPalButtonProps) {
  return (
    <>
      <PayPalScriptProvider
        options={{ clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID ?? "" }}
      >
        <PayPalButtons
          style={{ layout: "horizontal" }}
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
          onApprove={async (_, actions) => {
            if (!actions.order) return Promise.reject("No order action found")
            if (!userId) return Promise.reject("User is not signed in")

            return actions.order.capture().then((rawDetails) => {
              const details = rawDetails as PayPalCaptureDetails
              if (!details?.id || !details?.payer?.email_address) {
                toast.error("Invalid PayPal capture response")
                return
              }

              handlePaymentSuccess({ details, name, price, userId })
            })
          }}
        />
      </PayPalScriptProvider>
    </>
  )
}
