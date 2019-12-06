module.exports = {
  presets: ["@storybook/addon-docs/preset"],
  addons: [
    "@storybook/addon-knobs/register",
    "@storybook/addon-actions/register",
    "@storybook/addon-a11y/register",
    "@storybook/addon-storysource/register",
    "@storybook/addon-backgrounds/register",
    "@storybook/addon-links/register",
    "@storybook/addon-viewport/register"
  ]
};
