export const DesignOptions = {
  primaryColor: "yellow",

  colors: {
    yellow: [
      "#fff9c2",
      "#fff59d",
      "#fff176",
      "#ffee58",
      "#ffeb3b",
      "#ffea13",
      "#fdd835",
      "#fbc02d",
      "#f9a825",
      "#f57f17",
    ] as const, // ✅ THIS FIXES IT
  },

  components: {
    radius: "lg",
    TextInput: {
      styles: {
        input: {
          borderRadius: "10px",
          backgroundColor: "#191918",
          border: "none",
          color: "#ffffff",
          padding: "25px 12px",
        },
        label: {
          color: "#83837f",
        },
      },
    },

    Checkbox: {
      styles: {
        input: {
          "&:checked": {
            backgroundColor: "#ffea13",
            borderColor: "#ffea13",
          },
        },
        icon: {
          color: "#010100",
        },
        label: {
          color: "#9ca3af",
          fontSize: "14px",
        },
      },
    },

    Button: {
      styles: {
        root: {
          height: "48px",
          borderRadius: "10px",
          padding: "12px 18px",
          fontWeight: 500,
        },
      },
    },
  },
};
