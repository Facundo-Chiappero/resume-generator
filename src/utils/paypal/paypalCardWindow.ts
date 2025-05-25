export const openCardWindow = (name: string, price: string) => {
  const win = window.open("", "CardPayment", "width=600,height=800")
  if (!win) return

  const html = `
    <html>
    <head>
      <title>PayPal Card Payment</title>
      <script src="https://www.paypal.com/sdk/js?client-id=${
        import.meta.env.VITE_PAYPAL_CLIENT_ID
      }&components=buttons&enable-funding=card"></script>
    </head>
    <body>
      <div id="paypal-button-container"></div>
      <script>
        paypal.Buttons({
          fundingSource: 'card',
          createOrder: function(data, actions) {
            return actions.order.create({
              intent: 'CAPTURE',
              purchase_units: [{
                description: '${name}',
                amount: {
                  value: '${price}',
                  currency_code: 'USD'
                }
              }]
            });
          },
          onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
              window.opener.postMessage({ status: 'success', details }, '*');
              window.close();
            });
          },
          onCancel: function () {
            window.opener.postMessage({ status: 'error', error: 'cancelled' }, '*');
            window.close();
          },
          onError: function (err) {
            window.opener.postMessage({ status: 'error', error: err }, '*');
            window.close();
          }
        }).render('#paypal-button-container');
      </script>
    </body>
    </html>
  `

  win.document.writeln(html)
}
