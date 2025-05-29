import { OnApproveActions, OrderResponseBody } from "@paypal/paypal-js"
import { toast } from "react-toastify"
import { handlePaymentSuccessProps, PayPalButtonProps } from "types"

export const handlePaymentSuccess = async ({
  details,
  name,
  price,
  userId,
}: handlePaymentSuccessProps): Promise<void> => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/paypalPayment`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paymentId: details.id,
          amount: price,
          planId: name,
          userId,
        }),
      }
    )

    const data = await res.json()
    if (!res.ok) toast.error(data.message)
    else {
      toast.success(data.message)

      window.location.reload()
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    toast.error("Unexpected error. Check your connection.")
  }
}

export const handleApprove = async ({
  actions,
  name,
  price,
  userId,
}: PayPalButtonProps & {
  actions: OnApproveActions
}) => {
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
