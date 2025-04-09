function toggleByBpfStatus(executionContext) {
    const formContext = executionContext.getFormContext();
    const bpfControl = formContext.data.process;

    if (!bpfControl) {
        console.warn("BPF not available on this form.");
        return;
    }

    // Get the active stage
    const activeStage = bpfControl.getActiveStage();

    if (activeStage) {
        const stageName = activeStage.getName(); // Use .getId() if you prefer the ID
        console.log("Active BPF Stage:", stageName);

        // Example: Show a section if BPF is in specific stage
        if (stageName === "Approval") {
            const section = formContext.ui.tabs.get("tab_approval").sections.get("section_approvalDetails");
            if (section) {
                section.setVisible(true);
            }
        } else {
            const section = formContext.ui.tabs.get("tab_approval").sections.get("section_approvalDetails");
            if (section) {
                section.setVisible(false);
            }
        }
    }

    // Optional: get the overall BPF status
    const processInstanceStatus = bpfControl.getStatus(); // "Active", "Finished", etc.
    console.log("BPF Status:", processInstanceStatus);
}
