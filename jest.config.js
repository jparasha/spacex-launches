module.exports = {
  setupFiles: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy"
  },
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  testMatch: [
    "<rootDir>/tests/**/*.(test).{js,jsx,ts,tsx}",
    "<rootDir>/tests/**/?(*.)(spec|test).{js,jsx,ts,tsx}"
  ]
};
