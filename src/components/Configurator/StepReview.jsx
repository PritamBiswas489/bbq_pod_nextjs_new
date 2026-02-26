export default function StepReview({ data }) {
  // if (!data) return null; // safety guard

  return (
    <div>
      <h2>Review Your Configuration</h2>

      <p>
        <strong>Model:</strong> {data.model || "-"}
      </p>
      <p>
        <strong>Color:</strong> {data.color || "-"}
      </p>
      <p>
        <strong>Countertop:</strong> {data.countertop || "-"}
      </p>
      <p>
        <strong>Interior:</strong> {data.interior || "-"}
      </p>

      <p>
        <strong>Appliances:</strong>{" "}
        {/* {data.appliances.length ? data.appliances.join(", ") : "None"} */}
      </p>

      <p>
        <strong>Features:</strong>{" "}
        {/* {data.features.length ? data.features.join(", ") : "None"} */}
      </p>
    </div>
  );
}
