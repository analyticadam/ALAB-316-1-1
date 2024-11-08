# ALAB-316-1-1 (DOM Manipulation-Part One) / ALAB-316-3-1 (DOM Manipulation-Part Two)
# Dynamic Navigation Menu Project

This project creates a dynamic, interactive navigation menu using JavaScript and DOM manipulation, designed to manage active states and display sub-menus for various top-level navigation options.

## Features

1. **Dynamic Main Menu**: 
   - A list of top-level navigation links (like "About," "Catalog," "Orders," and "Account") is generated dynamically using the `menuLinks` data structure. Links are added to the top menu bar.

2. **Sub-Menu Display**:
   - If a top-level link has sub-links, clicking it displays a sub-menu with relevant links.
   - Clicking on links without sub-links, like "About," hides the sub-menu.

3. **Active Link Management**:
   - The clicked top-level link toggles the `active` class.
   - Only the clicked link displays as active, while other links are deactivated.
   - The sub-menu visibility is controlled based on the active state of the top-level links.

## Core Functions

- **Main Menu Generation**: Builds the top navigation bar with clickable links based on `menuLinks`.
- **Sub-Menu Builder**: Dynamically generates a sub-menu for each main menu item with sub-links.
- **Event Handling**: Handles user clicks on the main and sub-menus, managing active states and preventing default behaviors.

## Usage

1. Open the HTML file in a browser to load the dynamic menu.
2. Click on the main menu links to see the active state toggle and the sub-menu display.
