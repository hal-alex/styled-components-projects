export const colors = {
  primaryBlue: "#645cff",
}

export const createBorder = ({ width, type, color }) =>
  `${width}px ${type} ${color === "blue" ? "blue" : "red"}`
