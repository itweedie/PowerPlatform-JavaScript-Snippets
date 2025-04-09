function toggleUIElements(executionContext) {
    console.log("==== START toggleUIElements ===="); // Start log

    // Get the form context from the execution context
    const formContext = executionContext.getFormContext();
    console.log("Retrieved form context.");

    // Handle visibility of techtwed_genderother based on techtwed_gender
    const genderAttribute = formContext.getAttribute("techtwed_gender");
    const genderOtherControl = formContext.getControl("techtwed_genderother");

    if (genderAttribute && genderOtherControl) {
        const genderValue = genderAttribute.getValue();
        console.log(`Gender value retrieved: ${genderValue}`);

        if (genderValue === 304880002) {
            console.log("Gender value is 'Other' (304880002). Showing techtwed_genderother.");
            genderOtherControl.setVisible(true); // Show
        } else {
            console.log("Gender value is not 'Other'. Hiding techtwed_genderother.");
            genderOtherControl.setVisible(false); // Hide
        }
    } else {
        console.log("Gender attribute or control not found. No action taken.");
    }

    // Handle visibility of tab1_section_2 based on techtwed_showsectionb
    const showSectionAttribute = formContext.getAttribute("techtwed_showsectionb");
    const section = formContext.ui.tabs.get("tab1")?.sections.get("tab1_section_2");

    if (showSectionAttribute && section) {
        const showSectionValue = showSectionAttribute.getValue();
        console.log(`Show Section value retrieved: ${showSectionValue}`);

        // Handle both boolean and numeric values
        if (showSectionValue === 1 || showSectionValue === true) {
            console.log("Show Section value is '1' or 'true'. Showing tab1_section_2.");
            section.setVisible(true); // Show
        } else if (showSectionValue === 0 || showSectionValue === false) {
            console.log("Show Section value is '0' or 'false'. Hiding tab1_section_2.");
            section.setVisible(false); // Hide
        } else {
            console.log(`Unhandled Show Section value: ${showSectionValue}. Defaulting to hiding tab1_section_2.`);
            section.setVisible(false); // Default to hiding
        }
    } else {
        console.log("Show Section attribute or section not found. No action taken.");
    }

    console.log("==== END toggleUIElements ===="); // End log
}

function registerOnChangeEventsForFieldEvents(executionContext) {
    console.log("Registering OnChange events for fields...");

    // Get the form context from the execution context
    const formContext = executionContext.getFormContext();
    console.log("Retrieved form context.");

    // Register OnChange event for techtwed_gender
    const genderAttribute = formContext.getAttribute("techtwed_gender");
    if (genderAttribute) {
        console.log("Gender attribute found. Registering OnChange event handler.");
        genderAttribute.addOnChange(toggleUIElements);
    } else {
        console.log("Gender attribute not found. OnChange event handler not registered.");
    }

    // Register OnChange event for techtwed_showsectionb
    const showSectionAttribute = formContext.getAttribute("techtwed_showsectionb");
    if (showSectionAttribute) {
        console.log("Show Section attribute found. Registering OnChange event handler.");
        showSectionAttribute.addOnChange(toggleUIElements);
    } else {
        console.log("Show Section attribute not found. OnChange event handler not registered.");
    }

    // Call the function initially to set the correct visibility on form load
    console.log("Calling toggleUIElements initially to set visibility on form load.");
    toggleUIElements(executionContext);
}
