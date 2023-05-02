export const methods = [
  {
    name: 'createCharge',
    entity: 'Charge',
    description:
      'Creates a new Charge / Payment Request in the Bitcoin Lightning Network, payable by any Bitcoin Lightning wallet.',
    params: [
      {
        name: 'amount',
        description: 'The amount for the Charge -> in millisatoshis.',
      },
      {
        name: 'expiresIn',
        description: 'Time until Charge expiration -> in seconds.',
      },
      {
        name: 'description',
        description: 'Note or comment for this Charge (visible to payer).',
      },
      {
        name: 'internalId',
        description: 'Open metadata string property.',
      },
      {
        name: 'callbackUrl',
        description: 'The endpoint ZEBEDEE will POST Charge updates to.',
      },
    ],
  },
  {
    name: 'getCharge',
    entity: 'Charge',
    description:
      'Retrieves all information relating a specific Charge / Payment Request.',
    params: [
      {
        name: 'chargeId',
        description: 'The ID of the Charge.',
      },
    ],
  },
  {
    name: 'decodeCharge',
    entity: 'Charge',
    description:
      "Decodes a specific Charge / Payment Request / Invoice from Bitcoin's Lightning Network. This API returns all of the individual properties for the Charge, including the amount, description, expiration, and more.",
    params: [
      {
        name: 'invoice',
        description:
          'The code for the Charge / Payment Request / Lightning Network invoice (e.g. lnbc10m.....61hj).',
      },
    ],
  },
  {
    name: 'createStaticCharge',
    entity: 'Static Charge',
    description:
      'Static Charges are static Payment Requests in the Bitcoin Lightning Network. Whereas Charges create fixed-amount and single-use Payment Requests that expire, Static Charges provide you a lot more flexibility & capabilities, including variable amounts, multi-use, success messages, and slots.',
    params: [
      {
        name: 'minAmount',
        description:
          'Minimum allowed amount for the Static Charge -> in millisatoshis.',
      },
      {
        name: 'maxAmount',
        description:
          'Maximum allowed amount for the Static Charge -> in millisatoshis.',
      },
      {
        name: 'description',
        description:
          'Note or comment for this Static Charge (visible to payer).',
      },
      {
        name: 'successMessage',
        description: 'Message displayed to the payer AFTER payment settles.',
      },
      {
        name: 'allowedSlots',
        description: 'Number of payments this Static Charge can accept',
      },
      {
        name: 'internalId',
        description: 'Open metadata string property.',
      },
      {
        name: 'callbackUrl',
        description: 'The endpoint ZEBEDEE will POST updates to.',
      },
    ],
  },
  {
    name: 'getStaticCharge',
    entity: 'Static Charge',
    description:
      'Retrieves all information relating to a specific Static Charge.',
    params: [
      {
        name: 'staticChargeId',
        description: 'The ID of the Static Charge.',
      },
    ],
  },
  {
    name: 'updateStaticCharge',
    entity: 'Static Charge',
    description:
      'Perform updates to any of the allowed properties of a Static Charge.',
    params: [
      {
        name: 'minAmount',
        description:
          'Minimum allowed amount for the Static Charge -> in millisatoshis.',
      },
      {
        name: 'maxAmount',
        description:
          'Maximum allowed amount for the Static Charge -> in millisatoshis.',
      },
      {
        name: 'description',
        description:
          'Note or comment for this Static Charge (visible to payer).',
      },
      {
        name: 'successMessage',
        description: 'Message displayed to the payer AFTER payment settles.',
      },
      {
        name: 'allowedSlots',
        description: 'Number of payments this Static Charge can accept',
      },
      {
        name: 'internalId',
        description: 'Open metadata string property.',
      },
      {
        name: 'callbackUrl',
        description: 'The endpoint ZEBEDEE will POST updates to.',
      },
    ],
  },
  {
    name: 'createWithdrawalRequest',
    entity: 'Withdrawal Request',
    description:
      'A Withdrawal Request is a QR code that allows someone to scan and receive Bitcoin (e.g. Withdrawals).',
    params: [
      {
        name: 'amount',
        description:
          'The amount for the Withdrawal Request -> in millisatoshis.',
      },
      {
        name: 'expiresIn',
        description: 'Time until Withdrawal Request expiration -> in seconds.',
      },
      {
        name: 'description',
        description:
          'Note or comment for this Withdrawal Request (visible to payer).',
      },
      {
        name: 'internalId',
        description: 'Open metadata string property.',
      },
      {
        name: 'callbackUrl',
        description:
          'The endpoint ZEBEDEE will POST Withdrawal Request updates to.',
      },
    ],
  },
  {
    name: 'getWithdrawalRequest',
    entity: 'Withdrawal Request',
    description: 'Retrieves details about a specific Withdrawal Request.',
    params: [
      {
        name: 'withdrawalRequestId',
        description: 'The ID of the Withdrawal Request.',
      },
    ],
  },
  {
    name: 'sendLightningAddressPayment',
    entity: 'Lightning Address',
    description:
      'Send Bitcoin payments directly to a Lightning Address. A Lightning Address is an internet identifier (akin to an email address -- andre@zbd.gg) that anyone can send Bitcoin Lightning Network payments to.',
    params: [
      {
        name: 'amount',
        description: 'The amount for the Payment -> in millisatoshis.',
      },
      {
        name: 'lnAddress',
        description: 'The Lightning Address of the intended recipient.',
      },
      {
        name: 'comment',
        description: 'Note or description of this Payment.',
      },
      {
        name: 'internalId',
        description: 'Open metadata string property.',
      },
      {
        name: 'callbackUrl',
        description: 'The endpoint ZEBEDEE will POST updates to.',
      },
    ],
  },
  {
    name: 'validateLightningAddress',
    entity: 'Lightning Address',
    description:
      "Not all internet identifiers are Lightning Addresses / compatible with the Lightning Address protocol. Use this endpoint in order to validate whether a user's entered Lightning Address is valid.",
    params: [
      {
        name: 'Lightning Address',
        description: 'The address attempted to be verified.',
      },
    ],
  },
  {
    name: 'createChargeFromLightningAddress',
    entity: 'Lightning Address',
    description:
      "Generates a Bitcoin Lightning Charge / Payment Request for a given Lightning Address destination. Depending on your system's configuration or your product's UX, you may need the ability to generate Charges for specific users using a different provider than ZBD.",
    params: [
      {
        name: 'lnAddress',
        description: 'The Lightning Address of the intended recipient.',
      },
      {
        name: 'amount',
        description: 'The amount for the Charge -> in millisatoshis.',
      },
      {
        name: 'description',
        description: 'Note or comment of this Charge.',
      },
    ],
  },
  {
    name: 'getWallet',
    entity: 'Wallet',
    description: 'Retrieves the total balance of a given Project Wallet.',
    params: [],
  },
  {
    name: 'internalTransfer',
    entity: 'Wallet',
    description:
      'Initiates a transfer of funds between two Project Wallets you own.',
    params: [
      {
        name: 'amount',
        description: 'The amount to be transferred -> in millisatoshis.',
      },
      {
        name: 'receiverWalletId',
        description: 'The Wallet ID of the recipient Project.',
      },
    ],
  },
  {
    name: 'sendKeysendPayment',
    entity: 'Keysend',
    description:
      'This endpoint exposes the ability to make payment directly to a Lightning Network node Public Key, without the need for a Payment Request / Charge.',
    params: [
      {
        name: 'amount',
        description: 'The amount for the Payment -> in millisatoshis.',
      },
      {
        name: 'pubkey',
        description: 'The Public Key for the destination Lightning node.',
      },
      {
        name: 'callbackUrl',
        description: 'The endpoint ZEBEDEE will POST updates to.',
      },
      {
        name: 'internalId',
        description: 'Open metadata object property.',
      },
      {
        name: 'tlvRecords',
        description: 'TLV data records.',
      },
    ],
  },
  {
    name: 'sendPayment',
    entity: 'Payment',
    description:
      'Pays a Charge / Payment Request in the Bitcoin Lightning Network.',
    params: [
      {
        name: 'invoice',
        description: 'Lightning Network Payment Request / Charge.',
      },
      {
        name: 'description',
        description: 'Note or comment for this Payment.',
      },
      {
        name: 'amount',
        description:
          'Amount to be paid to this Charge/Invoice -> in millisatoshis (only valid if Amountless Invoice).',
      },
      {
        name: 'internalId',
        description: 'Open metadata string property.',
      },
      {
        name: 'callbackUrl',
        description: 'The endpoint ZEBEDEE will POST updates to.',
      },
    ],
  },
  {
    name: 'getPayment',
    entity: 'Payment',
    description: 'Retrieves all the information related to a specific Payment.',
    params: [
      {
        name: 'paymentId',
        description: 'The ID of the Payment.',
      },
    ],
  },
  {
    name: 'sendGamertagPayment',
    entity: 'ZBD Gamertag',
    description:
      "This API endpoint is used to send Bitcoin payments directly to a user's ZBD Gamertag.",
    params: [
      {
        name: 'amount',
        description: 'The amount for the Payment -> in millisatoshis.',
      },
      {
        name: 'description',
        description: 'Note or comment for this Payment (visible to recipient).',
      },
      {
        name: 'gamertag',
        description: 'Destination ZBD Gamertag.',
      },
    ],
  },
  {
    name: 'getGamertagTransaction',
    entity: 'ZBD Gamertag',
    description: "Get a given ZBD Gamertag when provided with a ZBD User's ID.",
    params: [
      {
        name: 'transactionId',
        description: 'The ZBD Gamertag Payment Transaction ID.',
      },
    ],
  },
  {
    name: 'getUserIdByGamertag',
    entity: 'ZBD Gamertag',
    description: "Get a given ZBD User's ID when provided with a ZBD Gamertag.",
    params: [
      {
        name: 'gamertag',
        description: 'The ZBD Gamertag of the ZBD user.',
      },
    ],
  },
  {
    name: 'getGamertagByUserId',
    entity: 'ZBD Gamertag',
    description:
      "Invoked when the app first loads. If a plugin reloads, it's invoked again with the existing app.",
    params: [
      {
        name: 'userId',
        description: 'The specified ZBD User ID.',
      },
    ],
  },
  {
    name: 'isSupportedRegion',
    entity: 'Utility',
    description:
      'If you wish to know whether the incoming user request is coming from a region/country where ZEBEDEE is supported or not, you can use this simple API endpoint and pass the target IP address as a parameter.',
    params: [
      {
        name: 'IP Address',
        description: 'The IP Address being checked.',
      },
    ],
  },
  {
    name: 'getZBDProdIps',
    entity: 'Utility',
    description:
      "The ZEBEDEE API relies on callback URLs for keeping you informed about updates that occur to any Charges, Payments, or Withdrawals you've created. In order to ensure that any incoming callback message is indeed from a trusted ZEBEDEE API infrastructure server, we provide this API endpoint for you to know which IP addresses real requests come from.",
    params: [],
  },
  {
    name: 'getBtcUsdExchangeRate',
    entity: 'Utility',
    description:
      "Get the latest price for Bitcoin in US Dollars. The exchange rate feed is refreshed every 5 seconds and is based upon a combination of industry-leading partner exchange providers's price feeds.",
    params: [],
  },
]
