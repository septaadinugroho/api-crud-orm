/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.ts"],
  extensionsToTreatAsEsm: [".ts"], // Penting buat ngasih tau Jest kalo TS itu ESM
  moduleNameMapper: {
    // Ini trik biar import .js di file .ts lu gak bikin Jest bingung
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  transform: {
    // Konfigurasi ts-jest supaya dukung ESM
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
};
