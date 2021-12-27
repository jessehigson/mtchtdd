const fillRange = (start, end) => {
  return new Array(end - start + 1).fill().map((item, index) => start + index)
}

export default fillRange
