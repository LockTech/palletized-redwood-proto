/**
 * Global error code reference.
 *
 * These errors *SHOULD* appear with any error returned by the system. Errors-codes *SHOULD* be
 * restricted to the **Range** defined below; codes which *do not* fit *SHOULD* be restricted to
 * the `+10000` range.
 *
 * Ranges:
 * * `1000` - `1999`    - User-input error
 * * `2000` - `2999`    - Internal, database Error
 * * `3000` - `3999`    - Application error
 * * ..
 * * `10000+`           - Custom, one-off error-codes.
 *
 * Prefixes:
 * * **ER** - General, system-wide errors.
 * * **LO** - Location errors.
 * * **OR** - Order errors.
 * * **PP** - Pallet-Product errors.
 * * **PR** - Product errors.
 * * **PA** - Pallet errors.
 * * **WA** - Warehouse errors.
 */
declare enum PalletizedError {
  // General Errors
  ReservedCharacter = 'ER1000',
}
