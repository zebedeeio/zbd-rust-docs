export const methods = [
  {
    name: 'create_charge',
    entity: 'Charge',
    description:
      'Creates a new Charge / Payment Request in the Bitcoin Lightning Network, payable by any Bitcoin Lightning wallet.',
    struct: [
      {
        name: 'charge: &Charge',
        description: 'The Charge reference containing the required parameters.',
      },
    ],
    params: [
      {
        name: 'charge: &Charge',
        extra: 'required',
        description: 'The Charge reference containing the required parameters.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/charges/create',
      },
    ],
  },
  {
    name: 'get_charge',
    entity: 'Charge',
    description:
      'Retrieves all information relating to a specific Charge / Payment Request.',
    params: [
      {
        name: 'charge_id: String',
        extra: 'required',
        description: 'A String representing the ID of the Charge.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/charges/get',
      },
    ],
  },
  {
    name: 'create_withdrawal_request',
    entity: 'Withdrawal Request',
    description:
      'A Withdrawal Request is a QR code that allows someone to scan and receive Bitcoin (e.g. Withdrawals).',
    params: [
      {
        name: 'withdrawal_request: &WithdrawalRequest',
        extra: 'required',
        description:
          'The WithdrawalRequest reference containing the required parameters.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/withdrawal-requests/create',
      },
    ],
  },
  {
    name: 'get_withdrawal_request',
    entity: 'Withdrawal Request',
    description: 'Retrieves details about a specific Withdrawal Request.',
    params: [
      {
        name: 'String: withdrawal_request_id',
        extra: 'required',
        description: 'A String representing the ID of the Withdrawal Request.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/withdrawal-requests/get',
      },
    ],
  },
  {
    name: 'pay_ln_address',
    entity: 'Lightning Address',
    description:
      'Send Bitcoin payments directly to a Lightning Address. A Lightning Address is an internet identifier (akin to an email address -- andre@zbd.gg) that anyone can send Bitcoin Lightning Network payments to.',
    params: [
      {
        name: 'payment: &LnPayment',
        extra: 'required',
        description:
          'The LnPayment reference containing the required parameters.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/lightning-address/send-payment',
      },
    ],
  },
  {
    name: 'validate_ln_address',
    entity: 'Lightning Address',
    description:
      "Not all internet identifiers are Lightning Addresses / compatible with the Lightning Address protocol. Use this endpoint in order to validate whether a user's entered Lightning Address is valid.",
    params: [
      {
        name: 'lightning_address: &LnAddress',
        extra: 'required',
        description:
          'The LnAddress reference containing the address to be validated.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/lightning-address/validate',
      },
    ],
  },
  {
    name: 'fetch_charge_ln_address',
    entity: 'Lightning Address',
    description:
      "Generates a Bitcoin Lightning Charge / Payment Request for a given Lightning Address destination. Depending on your system's configuration or your product's UX, you may need the ability to generate Charges for specific users using a different provider than ZBD.",
    params: [
      {
        name: 'payment: &LnFetchCharge',
        extra: 'required',
        description:
          'The LnFetchCharge reference containing the lightning address.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/lightning-address/create-charge',
      },
    ],
  },
  {
    name: 'get_wallet_details',
    entity: 'Wallet',
    description: 'Retrieves the total balance of a given Project Wallet.',
    params: [],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/wallet/get',
      },
    ],
  },
  {
    name: 'internal_transfer',
    entity: 'Wallet',
    description:
      'Initiates a transfer of funds between two Project Wallets you own.',
    params: [
      {
        name: 'interal_transfer_payload: &InternalTransfer',
        extra: 'required',
        description:
          'The InternalTransfer reference containing the payload info for the transfer.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/internal-transfer/initiate',
      },
    ],
  },
  {
    name: 'keysend',
    entity: 'Keysend',
    description:
      'This endpoint exposes the ability to make payment directly to a Lightning Network node Public Key, without the need for a Payment Request / Charge.',
    params: [
      {
        name: 'keysend_payload: &Keysend',
        extra: 'required',
        description: 'The Keysend reference containing the payload.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/keysend/send-payment',
      },
    ],
  },
  {
    name: 'pay_invoice',
    entity: 'Payment',
    description:
      'Pays a Charge / Payment Request in the Bitcoin Lightning Network.',
    params: [
      {
        name: 'payment: &Payment',
        extra: 'required',
        description:
          'The Payment reference containing the payment information.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/payments/send',
      },
    ],
  },
  {
    name: 'get_payment',
    entity: 'Payment',
    description: 'Retrieves all the information related to a specific Payment.',
    params: [
      {
        name: 'payment_id: String',
        extra: 'required',
        description: 'A String representing the ID of the Payment.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/payments/get',
      },
    ],
  },
  {
    name: 'pay_gamertag',
    entity: 'ZBD Gamertag',
    description:
      "This API endpoint is used to send Bitcoin payments directly to a user's ZBD Gamertag.",
    params: [
      {
        name: 'payment: &GamertagPayment',
        extra: 'required',
        description:
          'The GamertagPayment reference containing the payment information.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/gamertag/send-payment',
      },
    ],
  },
  {
    name: 'get_gamertag_tx',
    entity: 'ZBD Gamertag',
    description: "Get a given ZBD Gamertag when provided with a ZBD User's ID.",
    params: [
      {
        name: 'transaction_id: String',
        extra: 'required',
        description:
          'A String representing the ZBD Gamertag Payment Transaction ID.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/gamertag/get-payment',
      },
    ],
  },
  {
    name: 'get_userid_by_gamertag',
    entity: 'ZBD Gamertag',
    description: "Get a given ZBD User's ID when provided with a ZBD Gamertag.",
    params: [
      {
        name: 'gamertag: String',
        extra: 'required',
        description: 'A String representing the ZBD Gamertag of the ZBD user.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/gamertag/get-userid',
      },
    ],
  },
  {
    name: 'get_gamertag_by_userid',
    entity: 'ZBD Gamertag',
    description:
      "Invoked when the app first loads. If a plugin reloads, it's invoked again with the existing app.",
    params: [
      {
        name: 'user_id: String',
        extra: 'required',
        description: 'A String representing the specified ZBD User ID.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/gamertag/get-gamertag',
      },
    ],
  },
  {
    name: 'get_is_supported_region_by_ip',
    entity: 'Utility',
    description:
      'If you wish to know whether the incoming user request is coming from a region/country where ZBD is supported or not, you can use this simple API endpoint and pass the target IP address as a parameter.',
    params: [
      {
        name: 'ip: String',
        extra: 'required',
        description: 'A String representing the IP Address being checked.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/utils/is-supported',
      },
    ],
  },
  {
    name: 'get_prod_ips',
    entity: 'Utility',
    description:
      "The ZBD API relies on callback URLs for keeping you informed about updates that occur to any Charges, Payments, or Withdrawals you've created. In order to ensure that any incoming callback message is indeed from a trusted ZBD API infrastructure server, we provide this API endpoint for you to know which IP addresses real requests come from.",
    params: [],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/utils/prod-ips',
      },
    ],
  },
  {
    name: 'get_btc_usd',
    entity: 'Utility',
    description:
      "Get the latest price for Bitcoin in US Dollars. The exchange rate feed is refreshed every 5 seconds and is based upon a combination of industry-leading partner exchange providers's price feeds.",
    params: [],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/utils/btc-usd',
      },
    ],
  },
]
