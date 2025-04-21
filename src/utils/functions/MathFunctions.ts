function ParseToFloat(value: string): number {
  return Number.parseFloat(value)
}

export function Multiply(value1: string, value2: string): number {
  return ParseToFloat(value1) * ParseToFloat(value2)
}
