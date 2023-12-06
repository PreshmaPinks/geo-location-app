// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
const { defaults } = require("jest-config");

/** @type {import('jest').Config} */
const config = {
  transformIgnorePatterns: ["*"],
};

module.exports = config;

export default config;
