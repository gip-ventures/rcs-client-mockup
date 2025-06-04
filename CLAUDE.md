# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React component library called `@longears/smartphone-mockup` that provides customizable smartphone preview components. The library allows developers to display content in a smartphone mockup with various UI elements like message bubbles, rich cards, reply chips, and information screens.

## Development Commands

- `npm run build`: Build the project using Rollup (outputs to dist/)
- `npm run watch`: Build the project and watch for changes
- `npm run prepare`: Run the build script before publishing

## Project Architecture

### Core Components

The project is organized around a main `Smartphone` component that provides the base mockup with different available sizes (small, medium, large).

Key components include:

1. **Base Components**
   - `Smartphone`: Core mockup component with status bar, notch, and home indicator

2. **Feature Components**
   - `MessageBubble`: For displaying message bubbles with timestamps and status indicators
   - `RichCard`: For displaying rich cards with media, text, and suggestions
   - `RichCardCarousel`: For displaying multiple rich cards in a carousel
   - `ReplyChip`: For displaying interactive reply chips/suggestions

3. **Screen Templates**
   - `InfoScreen`: Information screen with hero image, logo, and contact details
   - `MessageScreen`: Message screen template for displaying conversations

4. **Layout Wrappers**
   - `PreviewToggle`: Component for toggling between different preview modes
   - `PreviewWrapper`: Wrapper component for the preview with title and actions

### Type System

The project uses TypeScript with well-defined interfaces and enums in `types.ts`, including:

- Size variants (`sm`, `md`, `lg`) 
- Layout options (vertical, horizontal)
- Media types (image, video, gif)
- Card types and aspect ratios
- Status indicators (sent, delivered, read)

### Styling

The project uses TailwindCSS for styling with responsive design based on the selected size variant.

## Build System

The project uses Rollup for building with the following configuration:
- Outputs in CommonJS and ESM formats
- Generates TypeScript declarations
- Processes CSS with PostCSS and TailwindCSS
- Excludes peer dependencies from the bundle