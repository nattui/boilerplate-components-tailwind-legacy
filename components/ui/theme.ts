export const theme = {
  border: {
    base: ["border-solid", "border"].join(" "),
    color: {
      active: ["data-[active=true]:border-gray-8", "active:border-gray-8"].join(
        " ",
      ),
      base: "border-gray-5",
      disabled: "disabled:!border-gray-5",
      focus: "focus:border-gray-8",
      hover: "hover:border-gray-8",
    },
  },
  disabled: ["disabled:cursor-not-allowed", "disabled:opacity-50"].join(" "),
  duration: "duration-150",
  outline: [
    "focus-visible:outline-2",
    "outline-0",
    "outline-offset-2",
    "outline-primary-9",
  ].join(" "),
  rounded: "rounded-8",
  shadow: "shadow-1",
}
