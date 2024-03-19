# Three Way Javascript Filter

This project provides a dynamic location selection interface, enabling users to filter locations by area, country, and city through interconnected dropdown menus. It's built with HTML, CSS, and vanilla JavaScript, offering a straightforward way to integrate a location-based selection system into web projects.

## Features

- **Dynamic Location Filtering**: Users can select an area, country, and city from dropdown menus, where selections in one dropdown dynamically filter options in the others.
- **Data-driven Approach**: The system uses a predefined JSON array to populate the dropdown menus, making it easy to customize with different locations.
- **Pure JavaScript**: No external libraries or frameworks required, ensuring compatibility and easy integration with various web projects.

## Setup

1. **Include the HTML Structure**: Copy the `<select>` elements for area, country, and city into your HTML body.

    ```html
    <select id="areaDropdown"></select>
    <select id="countryDropdown"></select>
    <select id="cityDropdown"></select>
    ```

2. **Add the JavaScript**: Include the provided JavaScript code in your project. This script:
   - Defines the sample JSON data array with locations.
   - Populates the area dropdown with unique areas.
   - Sets up event listeners for each dropdown to handle changes and filter options accordingly.

3. **Styling (Optional)**: Apply CSS styling as needed to match your website's design.

## Customization

- **Modifying Locations**: Edit the `locations` array within the script to add or remove locations based on your requirements.

- **Event Listener Adjustments**: Modify the event listener functions if you need to change how dropdown selections are handled or to integrate with other parts of your website.

## Contributing

Contributions are welcome! If you'd like to improve the location dropdown system or add new features, please feel free to submit a pull request.

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).
