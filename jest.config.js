module.exports = {
  moduleNameMapper: {
    "/^axios$/": "axios/dist/node/axios.cjs",
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  setupFiles: ["./env-setup.js"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testEnvironment: "jsdom",
};
