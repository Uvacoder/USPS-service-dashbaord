import MDCompositeGraph from "./MDCompositeGraphs";

export const MDCompositeContainer = (props) => {
  const { mailClass } = props;
  return (
    <div>
      {" "}
      im the composite container {mailClass}
      <MDCompositeGraph mailClass={mailClass} />
    </div>
  );
};

export default MDCompositeContainer;
