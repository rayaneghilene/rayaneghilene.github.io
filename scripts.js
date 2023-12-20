function showContent(sectionId) {
    // Hide all sections first
    const contentSections = document.querySelectorAll("main section");
    contentSections.forEach((content) => {
        content.classList.add("hidden");
    });

    // Show the selected section
    const selectedContent = document.getElementById(sectionId);
    selectedContent.classList.remove("hidden");

    // Scroll to the selected section
    selectedContent.scrollIntoView({ behavior: "smooth" });
}
