function showSection(sectionId: string): void {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        (section as HTMLElement).style.display = 'none'; // Type assertion for HTMLElement
    });

    // Show the specific section by ID
    const section = document.getElementById(sectionId);
    if (section) {
        (section as HTMLElement).style.display = 'block'; // Type assertion for HTMLElement
    }
}

