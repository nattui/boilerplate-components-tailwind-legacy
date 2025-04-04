export const theme = {
  bg: {
    base: "bg-gray-1",
    disabled: "disabled:bg-gray-1",
  },
  border: {
    base: ["border-solid", "border"].join(" "),
    color: {
      active: ["data-[active=true]:border-gray-8", "active:border-gray-8"].join(
        " ",
      ),
      base: "border-gray-5",
      disabled: "disabled:border-gray-5",
      focus: "focus:border-gray-8",
      hover: "hover:border-gray-8",
    },
  },
  disabled: ["disabled:cursor-not-allowed", "disabled:opacity-50"].join(" "),
  duration: "duration-150",
  opacity: {
    trigger: [
      "active:opacity-85",
      "data-[active=true]:opacity-85",
      "hover:opacity-85",
    ].join(" "),
  },
  outline: [
    "focus-visible:outline-2",
    "outline-0",
    "outline-offset-2",
    "outline-primary-9",
  ].join(" "),
  rounded: "rounded-8",
  shadow: {
    box: "shadow-1",
    content: {
      trigger: [
        "hover:*:[filter:none]",
        "active:*:[filter:none]",
        "data-[active=true]:*:[filter:none]",
      ].join(" "),
    },
    filter: "[filter:drop-shadow(0_1px_rgb(0_0_0_/_0.05))]",
  },
}
