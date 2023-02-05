```Javascript
<script>
// Select all section elements with data-element_type="section"
const sections = document.querySelectorAll("section[data-element_type='section']");

// Create an IntersectionObserver to monitor visibility of sections
const observer = new IntersectionObserver((entries) => {
  // Loop through all the entries (the sections being monitored)
  entries.forEach((entry) => {
    // If the entry (section) is intersecting (visible)
    if (entry.isIntersecting) {
      // Get the id of the section
      const sectionId = entry.target.id;
      // Check if the section has an id
      if (sectionId) {
        // Create or access the data layer for Google Analytics
        window.dataLayer = window.dataLayer || [];
        // Push the "sectionViewed" event with the sectionId as a parameter
        window.dataLayer.push({
          event: "sectionViewed",
          sectionId: sectionId
        });
      }
      // Stop observing the section
      observer.unobserve(entry.target);
    }
  });
});

// Loop through all sections and observe each one
sections.forEach((section) => {
  observer.observe(section);
});
</script>
```
