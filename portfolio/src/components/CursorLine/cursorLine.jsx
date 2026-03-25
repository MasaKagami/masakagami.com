import React, { useRef, useEffect } from "react";

const CursorLine = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const updateSVGSize = () => {
      // Update SVG dimensions to cover the full document
      if (svgRef.current) {
        svgRef.current.setAttribute("width", `${document.documentElement.scrollWidth}px`);
        svgRef.current.setAttribute("height", `${document.documentElement.scrollHeight}px`);
      }
    };

    const handleMouseMove = (event) => {
      const { pageX: x, pageY: y } = event;

      // Create a new path segment
      const pathSegment = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathSegment.setAttribute("stroke", "red"); // Line color
      pathSegment.setAttribute("stroke-width", "3"); // Line thickness
      pathSegment.setAttribute("fill", "none");
      pathSegment.setAttribute("stroke-linecap", "round");

      // Draw the path using the cursor's current position
      const lastSegment = svgRef.current.getAttribute("last-segment");
      const newPath = lastSegment
        ? `${lastSegment} L ${x} ${y}` // Continue from the last position
        : `M ${x} ${y}`; // Start the path

      pathSegment.setAttribute("d", newPath);

      // Append the new path to the SVG
      svgRef.current.appendChild(pathSegment);

      // Update the last position for the next segment
      svgRef.current.setAttribute("last-segment", `M ${x} ${y}`);

      // Animate fade-out
      pathSegment.style.animation = "fade-out 1.5s linear";

      // Remove the path after the animation ends
      setTimeout(() => {
        pathSegment.remove();
      }, 500);
    };

    // Ensure the SVG covers the full document dimensions
    updateSVGSize();
    window.addEventListener("resize", updateSVGSize); // Update dimensions on resize

    // Add the mousemove listener
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Cleanup
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", updateSVGSize);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      style={{
        position: "absolute", // Ensure it covers the entire page
        top: 0,
        left: 0,
        pointerEvents: "none", // Prevent blocking interactions
        zIndex: 9999, // Place above all other elements
      }}
    />
  );
};

export default CursorLine;
