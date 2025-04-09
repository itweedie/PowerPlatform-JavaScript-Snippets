function toggleByStatusReason(executionContext) {
    const formContext = executionContext.getFormContext();

    const status = formContext.getAttribute("statuscode").getValue(); // Status Reason
    const state = formContext.getAttribute("statecode").getValue();   // Status (Active/InActive)

    // Example: Hide a tab if record is Inactive
    const tab = formContext.ui.tabs.get("tab_summary");
    if (tab) {
        tab.setVisible(state === 0); // 0 = Active, 1 = Inactive
    }

    // Example: Show a column if status reason is a specific value
    const specialControl = formContext.getControl("new_specialfield");
    if (specialControl) {
        specialControl.setVisible(status === 123456); // Replace with your actual status reason value
    }
}
