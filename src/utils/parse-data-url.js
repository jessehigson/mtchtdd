const parseDataUrl = dataUrl => {
  const [, ext, data] = dataUrl.match(/^data:.+\/(.+);base64,(.*)$/)
  return { ext, data: Buffer.from(data, "base64") }
}

export default parseDataUrl
