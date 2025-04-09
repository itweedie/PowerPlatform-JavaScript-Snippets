function toggleUIElements(executionContext) {
    const formContext = executionContext.getFormContext();

    // Show/hide the techtwed_genderother field based on the value of techtwed_gender
    const genderValue = formContext.getAttribute("techtwed_gender").getValue();
    const genderOtherControl = formContext.getControl("techtwed_genderother");
    if (genderOtherControl) {
        if (genderValue === 304880002) {
            genderOtherControl.setVisible(true); // Show
        } else {
            genderOtherControl.setVisible(false); // Hide
        }
    }

    // Show/hide tab1_section_2 based on the value of techtwed_showsectionb
    const showSectionValue = formContext.getAttribute("techtwed_showsectionb").getValue();
    const section = formContext.ui.tabs.get("tab1").sections.get("tab1_section_2");
    if (section) {
        if (showSectionValue === 1) {
            section.setVisible(true); // Show
        } else if (showSectionValue === 0) {
            section.setVisible(false); // Hide
        }
    }
}
