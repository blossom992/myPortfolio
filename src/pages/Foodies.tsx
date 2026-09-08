import ProjectDetail from "../components/ProjectDetail";

function Foodies() {
  return (
    <ProjectDetail
      number="03"
      title="Foodies"
      category="UI Design · Figma"
      description="A food-focused interface designed in Figma, where I explored visual hierarchy, layout, and how to create a simple and engaging experience."
      details={[
        { label: "Focus", value: "UI Design · Visual Design" },
        { label: "Designed with", value: "Figma" },
        { label: "Status", value: "Frontend in progress" },
      ]}
      projectUrl="https://www.figma.com/proto/kgEVJYvrFBHqjrwNqXJVj9/freeCodeCamp?node-id=318-5&p=f&t=6erMRNTvdr6oIdqG-1&scaling=scale-down&content-scaling=fixed&page-id=91%3A2"
      linkLabel="View design ↗"
    />
  );
}

export default Foodies;