/**
 * Scrolls the viewport to the element specified by the given ID,
 * applying a fixed offset (e.g., for a header).
 * * @param {string} id - The HTML ID of the target element (e.g., "gallery").
 * @param {number} [offset=75] - The vertical offset to subtract from the target position in pixels.
 */
export const scrollToId = (id, offset = 75) => {
  const targetElement = document.getElementById(id);

  if (targetElement) {
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;

    const finalPosition = targetPosition - offset;

    window.scrollTo({
      top: finalPosition,
      behavior: "smooth",
    });
  } else {
    console.warn(`Attempted to scroll to unknown ID: #${id}`);
  }
};
