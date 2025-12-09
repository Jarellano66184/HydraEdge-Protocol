import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const StakeholderMap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = svgRef.current.clientWidth;
    const height = 400;
    
    // Clear previous render
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height]);

    // Data
    const nodes = [
      { id: "HydraEdge", group: 1, radius: 25 },
      { id: "Farmers (Cascara)", group: 2, radius: 15 },
      { id: "Co-Packer", group: 2, radius: 15 },
      { id: "3PL Supply Chain", group: 2, radius: 15 },
      { id: "Athletes (NIL)", group: 3, radius: 18 },
      { id: "End Consumer", group: 4, radius: 20 },
    ];

    const links = [
      { source: "Farmers (Cascara)", target: "Co-Packer" },
      { source: "Co-Packer", target: "3PL Supply Chain" },
      { source: "3PL Supply Chain", target: "HydraEdge" },
      { source: "HydraEdge", target: "Athletes (NIL)" },
      { source: "Athletes (NIL)", target: "End Consumer" },
      { source: "HydraEdge", target: "End Consumer" }, // Direct relation
    ];

    // Simulation
    const simulation = d3.forceSimulation(nodes as any)
      .force("link", d3.forceLink(links).id((d: any) => d.id).distance(80))
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2));

    // Colors
    const colorScale = (group: number) => {
      switch(group) {
        case 1: return "#ccff00"; // Hydra Green
        case 2: return "#ffffff"; // Supply Chain
        case 3: return "#00ccff"; // Athletes
        case 4: return "#ff00cc"; // Consumer
        default: return "#999";
      }
    };

    // Draw lines
    const link = svg.append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke-width", 2);

    // Draw nodes
    const node = svg.append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", (d: any) => d.radius)
      .attr("fill", (d: any) => colorScale(d.group))
      .call(drag(simulation) as any);

    // Labels
    const label = svg.append("g")
      .attr("class", "labels")
      .selectAll("text")
      .data(nodes)
      .enter()
      .append("text")
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .attr("font-size", "10px")
      .attr("dy", (d: any) => d.radius + 15)
      .text((d: any) => d.id);

    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node
        .attr("cx", (d: any) => d.x)
        .attr("cy", (d: any) => d.y);

      label
        .attr("x", (d: any) => d.x)
        .attr("y", (d: any) => d.y);
    });

    function drag(simulation: any) {
      function dragstarted(event: any) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }
      
      function dragged(event: any) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }
      
      function dragended(event: any) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }
      
      return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    }

    return () => {
      simulation.stop();
    };
  }, []);

  return (
    <div className="w-full bg-zinc-900 rounded-lg border border-zinc-700 overflow-hidden relative">
      <div className="absolute top-2 left-3 text-xs text-gray-400 font-mono">ECOSYSTEM MAP (INTERACTIVE)</div>
      <svg ref={svgRef} className="w-full h-[400px] cursor-move"></svg>
    </div>
  );
};

export default StakeholderMap;