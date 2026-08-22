"use client";

import { useState } from "react";

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
};

const nodes: Node[] = [
  {
    id: "vigilant",
    label: "Vigilant AI",
    x: 150,
    y: 60,
  },
  {
    id: "security",
    label: "AI Security",
    x: 350,
    y: 60,
  },
  {
    id: "africandr",
    label: "AfricaNDR",
    x: 150,
    y: 220,
  },
  {
    id: "python",
    label: "Python Automation",
    x: 350,
    y: 220,
  },
];

const center = {
  x: 250,
  y: 140,
};

export default function EcosystemDiagram() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <svg
      viewBox="0 0 500 280"
      className="mx-auto w-full max-w-xl"
      role="img"
      aria-label="Charles Kariuki engineering ecosystem"
    >
      {nodes.map((node) => (
        <line
          key={`line-${node.id}`}
          x1={center.x}
          y1={center.y}
          x2={node.x}
          y2={node.y}
          stroke={
            active === node.id
              ? "#22D3EE"
              : "#1F2428"
          }
          strokeWidth={active === node.id ? 2 : 1}
        />
      ))}

      <circle
        cx={center.x}
        cy={center.y}
        r={10}
        fill="#FFB020"
      />

      <text
        x={center.x}
        y={center.y - 20}
        textAnchor="middle"
        fill="#E8E9EA"
        fontSize="11"
        fontFamily="monospace"
      >
        Charles
      </text>

      {nodes.map((node) => (
        <g
          key={node.id}
          onMouseEnter={() => setActive(node.id)}
          onMouseLeave={() => setActive(null)}
          onClick={() => setActive(node.id)}
          className="cursor-pointer"
        >
          <circle
            cx={node.x}
            cy={node.y}
            r={active === node.id ? 9 : 7}
            fill={
              active === node.id
                ? "#22D3EE"
                : "#8B949E"
            }
          />

          <text
            x={node.x}
            y={node.y + 26}
            textAnchor="middle"
            fill={
              active === node.id
                ? "#22D3EE"
                : "#8B949E"
            }
            fontSize="11"
            fontFamily="monospace"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}