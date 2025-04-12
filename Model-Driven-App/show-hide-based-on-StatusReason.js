"use strict";
function toggleByStatusReason(executionContext) {
    console.log("==== START show/hide Status Reason ===="); // Start log

    // Get the form context from the execution context
    const formContext = executionContext.getFormContext();
    console.log("Retrieved form context.");

    // Get the Status Reason value (statuscode column)
    const status = formContext.getAttribute("statuscode").getValue(); // Status Reason
    console.log(`Status Reason value retrieved: ${status}`);

    // Get the tab to show/hide (tab3)
    const tab = formContext.ui.tabs.get("tab3");
    if (tab) {
        console.log("Tab 'tab3' found.");

        // Decision-making based on the Status Reason value
        if (status === 1) {
            console.log("Status Reason is 'Status One' (value: 1). Hiding tab3.");
            tab.setVisible(false); // Hide tab3
        } else if (status === 304880001) {
            console.log("Status Reason is 'Status Two' (value: 304880001). Showing tab3.");
            tab.setVisible(true); // Show tab3
        } else {
            console.log(`Status Reason is an unhandled value (${status}). Defaulting to hiding tab3.`);
            tab.setVisible(false); // Default to hiding tab3 for other values
        }
    } else {
        console.log("Tab 'tab3' not found. No action taken.");
    }

    console.log("==== END show/hide Status Reason ===="); // End log
}

function registerOnChangeEvent(executionContext) {
    console.log("Registering OnChange event for Status Reason...");

    // Get the form context from the execution context
    const formContext = executionContext.getFormContext();
    console.log("Retrieved form context.");

    // Get the Status Reason attribute (statuscode column)
    const statusAttribute = formContext.getAttribute("statuscode");
    if (statusAttribute) {
        console.log("Status Reason attribute found. Registering OnChange event handler.");

        // Register the toggleByStatusReason function for the OnChange event
        statusAttribute.addOnChange(toggleByStatusReason);

        // Call the function initially to set the correct visibility on form load
        console.log("Calling toggleByStatusReason initially to set visibility on form load.");
        toggleByStatusReason(executionContext);
    } else {
        console.log("Status Reason attribute not found. OnChange event handler not registered.");
    }
}
