# Shokz SuiteCommerce Extensions

This repository contains SuiteCommerce / SuiteCommerce Advanced extensions for the Shokz NetSuite Commerce storefront. It is based on the NetSuite SuiteCommerce Extension Developer Tools and includes multiple extension packages under `Workspace`.

## Project Structure

```text
.
|-- Workspace/              # Source code for custom extensions
|-- gulp/                   # SuiteCommerce extension build and deploy tasks
|-- @sc-utils/              # Local SuiteCommerce utility packages used by the tooling
|-- LocalDistribution/      # Generated local build output
|-- DeployDistribution/     # Generated deployment output
|-- package.json            # Node.js dependencies and toolchain metadata
|-- gulpfile.js             # Gulp task loader
|-- .nsdeploy               # NetSuite deployment configuration
`-- payload.json            # Generated deployment payload
```

## Extensions

| Extension | Version | Description |
| --- | --- | --- |
| `FixSliderAutoPlay` | `1.0.0` | Fixes bxSlider autoplay behavior. |
| `HideFeatures` | `1.0.0` | Hides selected storefront features. |
| `InventoryStatusOverride` | `1.0.0` | Overrides product inventory status display. |
| `ItemSpecExt` | `1.0.0` | Adds item specification links on product pages. |
| `LoginPopup` | `1.0.0` | Login popup customization. |
| `MinQtyExt` | `1.0.3` | Minimum quantity validation/customization. |
| `MKT` | `1.0.1` | Marketing-related storefront module. |
| `PDPVideoExt` | `1.0.0` | PDP video customization. |
| `ProductInStock` | `1.0.2` | Shows product stock numbers. |
| `ProductOptionSelector` | `1.0.1` | Switches PDP products based on selected options. |
| `PromotionalBadgesExt` | `1.0.7` | Promotional badge display configuration. |
| `PromotionalGiftExt` | `1.0.6` | Promotional gift offer logic. |
| `QuickViewExtension` | `1.0.0` | Quick View field configuration. |

## Requirements

- Node.js `^20.10.0`
- npm `^10.2.3`
- NetSuite account access with SuiteCommerce extension deployment permissions
- Valid `.nsdeploy` configuration for the target NetSuite account

## Setup

Install dependencies:

```bash
npm install
```

Show available SuiteCommerce gulp tasks:

```bash
npx gulp help
```

## Development

Most custom source files live under:

```text
Workspace/<ExtensionName>/Modules/<ModuleName>/
```

Common module folders include:

- `JavaScript/` - frontend entry points, views, and models
- `SuiteScript/` - service controllers and backend logic
- `Templates/` - SuiteCommerce template files
- `Sass/` - extension styles
- `Configuration/` - extension configuration JSON

After changing an extension, update its `manifest.json` if files, version, configuration, assets, or application entry points change.

## Build and Deploy

Use the SuiteCommerce gulp tasks provided by the developer tools. Run `npx gulp help` to confirm the exact commands available in this local toolchain.

Typical workflow:

```bash
npm install
npx gulp help
```

Before deploying, confirm:

- `.nsdeploy` points to the intended NetSuite account/environment.
- The target extension `manifest.json` has the correct `version`.
- Generated files in `LocalDistribution/`, `DeployDistribution/`, and `payload.json` are current if your process depends on them.

## GitHub Upload Notes

Before pushing this folder to GitHub, review sensitive and generated files carefully.

Recommended files/directories to exclude from Git:

```gitignore
node_modules/
LocalDistribution/
DeployDistribution/
payload.json
.env
.nsdeploy
.idea/
```

`package-lock.json`, `package.json`, `gulpfile.js`, `gulp/`, `@sc-utils/`, and `Workspace/` should generally be committed so another developer can install and work with the project.

Example first push:

```bash
git init
git add .
git commit -m "Initial SuiteCommerce extensions"
git branch -M main
git remote add origin https://github.com/<owner>/<repo>.git
git push -u origin main
```

Replace `<owner>/<repo>` with the actual GitHub repository path.
