import { useState, useEffect } from "react";
import { moroccoRegions } from "@/data/regions";

interface MoroccoMapProps {
  onRegionClick?: (regionId: string, regionName: string) => void;
  selectedRegion?: string | null;
}

const MoroccoMap = ({ onRegionClick, selectedRegion }: MoroccoMapProps) => {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [svgContent, setSvgContent] = useState<string>("");

  useEffect(() => {
    // Load and parse the Morocco SVG
    fetch("/morocco.svg")
      .then((response) => response.text())
      .then((data) => {
        setSvgContent(data);
      })
      .catch((error) => {
        console.error("Error loading Morocco SVG:", error);
      });
  }, []);

  const handleRegionClick = (regionId: string) => {
    const region = moroccoRegions.find((r) => r.id === regionId);
    if (region && onRegionClick) {
      onRegionClick(regionId, region.name);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, regionId: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleRegionClick(regionId);
    }
  };

  const getRegionName = (regionId: string) => {
    const region = moroccoRegions.find((r) => r.id === regionId);
    return region?.name || "";
  };

  useEffect(() => {
    if (!svgContent) return;

    // Add click handlers to SVG paths
    const container = document.getElementById("morocco-map-container");
    if (!container) return;

    const paths = container.querySelectorAll("path[id^='MA-']");
    
    paths.forEach((path) => {
      const regionId = path.getAttribute("id");
      if (!regionId) return;

      // Style the path
      const isSelected = selectedRegion === regionId;
      const isHovered = hoveredRegion === regionId;

      if (isSelected) {
        path.setAttribute("fill", "hsl(var(--primary))");
        path.setAttribute("class", "cursor-pointer transition-all duration-200");
      } else if (isHovered) {
        path.setAttribute("fill", "hsl(var(--primary) / 0.7)");
        path.setAttribute("class", "cursor-pointer transition-all duration-200");
      } else {
        path.setAttribute("fill", "hsl(var(--secondary))");
        path.setAttribute("class", "cursor-pointer transition-all duration-200 hover:fill-[hsl(var(--primary)/0.6)]");
      }

      path.setAttribute("stroke", "hsl(var(--background))");
      path.setAttribute("stroke-width", "2");
      path.setAttribute("tabindex", "0");
      path.setAttribute("role", "button");
      path.setAttribute("aria-label", `Select ${getRegionName(regionId)} region`);

      // Add event listeners
      path.addEventListener("click", () => handleRegionClick(regionId));
      path.addEventListener("mouseenter", () => setHoveredRegion(regionId));
      path.addEventListener("mouseleave", () => setHoveredRegion(null));
      path.addEventListener("keydown", (e) => {
                if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleRegionClick(regionId);
                }
      });
    });

    return () => {
      // Cleanup event listeners
      paths.forEach((path) => {
        path.replaceWith(path.cloneNode(true));
      });
    };
  }, [svgContent, hoveredRegion, selectedRegion]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div
        id="morocco-map-container"
        className="w-full h-full max-h-[500px] flex items-center justify-center"
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />

      {(hoveredRegion || selectedRegion) && (
        <div className="mt-4 text-center transition-all duration-200">
          <p className="text-sm font-semibold text-foreground">
            {hoveredRegion
              ? getRegionName(hoveredRegion)
              : selectedRegion
              ? getRegionName(selectedRegion)
              : ""}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {selectedRegion && !hoveredRegion
              ? "Filtering by this region"
              : "Click to filter search results"}
          </p>
        </div>
      )}
    </div>
  );
};

export default MoroccoMap;
