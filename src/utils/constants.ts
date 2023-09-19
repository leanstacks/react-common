/**
 * Possible `unit` values to use with "unit" formatting style using `Intl.NumberFormat`.
 * @see https://tc39.es/ecma402/#table-sanctioned-single-unit-identifiers
 */
export enum Unit {
  Celsius = 'celsius',
  Centimeter = 'centimeter',
  Fahrenheit = 'fahrenheit',
  Inch = 'inch',
  Kilometer = 'kilometer',
  KilometerPerHour = 'kilometer-per-hour',
  Mile = 'mile',
  MilePerHour = 'mile-per-hour',
  Millimeter = 'millimeter',
  Percent = 'percent',
}

/**
 * Possible `unitDisplay` values to use with "unit" formatting style using
 * `Intl.NumberFormat`. Default: `short`.
 */
export enum UnitDisplay {
  Long = 'long',
  Narrow = 'narrow',
  Short = 'short',
}
