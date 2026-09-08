import ProjectDetail from "../components/ProjectDetail";

function Flashcards() {
  return (
    <ProjectDetail
      number="04"
      title="Flashcards"
      category="React · Interaction"
      description="A React project built around learning, interaction, and creating a simple experience that feels easy to use."
      details={[
        { label: "Focus", value: "React · Interaction" },
        { label: "Built with", value: "React · Tailwind" },
        { label: "Type", value: "React project" },
      ]}
      projectUrl="https://it-project-amber.vercel.app/"
      linkLabel="View live project ↗"
    />
  );
}

export default Flashcards;