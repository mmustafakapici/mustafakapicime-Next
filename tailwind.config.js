module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Primary": {},
        "Success": {},
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "White": "#FFFFFF",
          "Black": "#000000"
        },
        "Danger": {},
        "foreground": "#000000",
        "background": "#D9D9D9"
      },
      "spacing": {
        "TwoUnits": "32px",
        "OneAndHalfUnits": "24px",
        "Unit": "16px",
        "FiveUnits": "80px",
        "FourUnits": "64px",
        "SixUnits": "96px",
        "HalfUnit": "8px",
        "ThreeUnits": "48px"
      },
      "borderRadius": {
        "Radius4": "4px",
        "Radius8": "8px",
        "Radius2": "2px",
        "Round": "50%"
      },
      "scale": {
        "XXLarge": "288px",
        "Medium": "96px",
        "Small": "48px",
        "MaxWidth": "1400px",
        "XLarge": "192px",
        "Large": "144px",
        "XSmall": "16px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ]
}