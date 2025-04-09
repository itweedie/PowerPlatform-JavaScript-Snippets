function toggleUIElements(executionContext) {
    const formContext = executionContext.getFormContext();

    // Get field value
    const fieldValue = formContext.getAttribute("your_field_name").getValue(); // e.g., true/false or string

    // Show/hide tab
    const tab = formContext.ui.tabs.get("your_tab_name");
    if (tab) {
        tab.setVisible(fieldValue === "show");
    }

    // Show/hide section within tab
    const section = tab.sections.get("your_section_name");
    if (section) {
        section.setVisible(fieldValue === "show");
    }

    // Show/hide field (column)
    const control = formContext.getControl("your_field_name");
    if (control) {
        control.setVisible(fieldValue === "show");
    }
}
