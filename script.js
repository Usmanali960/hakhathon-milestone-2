function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none'; // Type assertion for HTMLElement
    });
    // Show the specific section by ID
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block'; // Type assertion for HTMLElement
    }
}
