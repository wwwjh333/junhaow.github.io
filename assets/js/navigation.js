const navLinks = [...document.querySelectorAll("[data-section]")];
const sections = navLinks
  .map((link) => document.getElementById(link.dataset.section))
  .filter(Boolean);

if (sections.length > 1) {
  const setActiveSection = () => {
    const header = document.querySelector(".site-header");
    const marker = window.scrollY + (header?.offsetHeight || 0) + 120;
    const activeSection = sections.reduce(
      (active, section) => section.offsetTop <= marker ? section : active,
      sections[0]
    );

    navLinks.forEach((link) => {
      const isActive = link.dataset.section === activeSection.id;
      link.classList.toggle("active", isActive);
      if (isActive) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };

  setActiveSection();
  window.addEventListener("scroll", setActiveSection, { passive: true });
}
