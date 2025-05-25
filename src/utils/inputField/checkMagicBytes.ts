export const checkMagicBytes = async (file: File): Promise<boolean> => {
  const buffer = await file.slice(0, 4).arrayBuffer()
  const bytes = new Uint8Array(buffer)

  const hex = bytes.reduce(
    (acc, byte) => acc + byte.toString(16).padStart(2, "0"),
    ""
  )

  const jpg = hex.startsWith("ffd8ffe0") || hex.startsWith("ffd8ffe1")
  const png = hex.startsWith("89504e47")
  const webp = hex.startsWith("52494646")

  return jpg || png || webp
}
