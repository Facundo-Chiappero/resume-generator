import { toast } from "react-toastify"
import { handlePaymentSuccessProps } from "types"

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
