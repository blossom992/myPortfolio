import ProjectDetail from "../components/ProjectDetail";

function FinTrack() {
  return (
    <ProjectDetail
      number="02"
      title="FinTrack"
      category="Finance · Frontend"
      description="A simple finance tracker built to make everyday spending easier to understand through a clear and easy-to-navigate experience."
      details={[
        { label: "Focus", value: "Finance · Frontend" },
        { label: "Built with", value: "React · TypeScript · Tailwind" },
        { label: "Type", value: "Frontend project" },
      ]}
      projectUrl="https://fin-track-lscr.vercel.app/"
      linkLabel="View live project ↗"
    />
  );
}

export default FinTrack;