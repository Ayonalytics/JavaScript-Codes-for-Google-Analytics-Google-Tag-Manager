<script>
// Select all section elements with data-element_type="section"
var sections = document.querySelectorAll("section[data-element_type='section']");

// Create an IntersectionObserver to monitor visibility of sections
var observer = new IntersectionObserver(function(entries) {
  // Loop through all the entries (the sections being monitored)
  entries.forEach(function(entry) {
    // If the entry (section) is intersecting (visible)
    if (entry.isIntersecting) {
      // Get the id of the section
      var sectionId = entry.target.id;
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
for (var i = 0; i < sections.length; i++) {
  observer.observe(sections[i]);
}
</script>
