import ProjectDetail from "../components/ProjectDetail";

function BulkUp() {
  return (
    <ProjectDetail
      number="01"
      title="BulkUp"
      category="Product concept"
      description="A product concept exploring how collective buying could make everyday school essentials more accessible, while keeping the experience simple for the people using it."
      details={[
        { label: "Role", value: "Design · Product · Frontend" },
        { label: "Built with", value: "React · TypeScript · Tailwind" },
        { label: "Status", value: "Exploring" },
      ]}
    />
  );
}

export default BulkUp;