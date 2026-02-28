import React from "react";
import styles from "./index.module.scss";
import { FaCheck } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import Image from "next/image";



const questions = [
	{
		key: "power",
		label: "Do you have an electrical outlet available at the installation site? *",
		options: [
			"Yes – existing outdoor power supply",
			"No – electrical connection required",
			"Other (please specify)",
		],
	},
	{
		key: "water",
		label: "Do you have a water connection available?",
		options: [
			"Yes – existing water source",
			"No – plumbing connection required",
			"Other (please specify)",
		],
	},
	{
		key: "drainage",
		label: "Is there a drainage connection available for the sink waste?",
		options: [
			"Yes – existing drain connection",
			"No – drainage connection required",
			"Other (please specify)",
		],
	},
	{
		key: "surface",
		label: "Is there a solid, flat and level surface prepared for installation?",
		options: [
			"Yes – concrete base or equivalent",
			"No – base preparation required",
			"Other (please specify)",
		],
	},
	{
		key: "access",
		label: "Is there suitable access for delivery and positioning?",
		options: [
			"Yes – clear access for vehicle and crane positioning",
			"Limited access – requires review",
			"Unsure – please advise",
		],
	},
];

const StepInstallationRequirements = ({ value = {}, onChange }) => {
	const handleChange = (key, option, customValue = "") => {
		if (option === "Other (please specify)") {
			onChange({ ...value, [key]: { option, customValue } });
		} else {
			onChange({ ...value, [key]: { option, customValue: "" } });
		}
	};

	return (
		<form className={styles.wrapper} autoComplete="off">
			{questions.map((q) => {
				const selected = value[q.key]?.option || "";
				return (
					<div className={styles.divider} key={q.key}>
						<h5>{q.label}</h5>
						<div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
							{q.options.map((opt) => (
								<label key={opt} style={{ display: "flex", alignItems: "center", gap: 8 }}>
									<input
										type="radio"
										name={q.key}
										value={opt}
										checked={selected === opt}
										onChange={() => handleChange(q.key, opt)}
										style={{ marginRight: 8 }}
									/>
									{opt}
								</label>
							))}
							{selected === "Other (please specify)" && (
								<input
									type="text"
									placeholder="Please specify..."
									value={value[q.key]?.customValue || ""}
									onChange={(e) => handleChange(q.key, "Other (please specify)", e.target.value)}
									style={{ marginTop: 8, padding: 8, borderRadius: 6, border: "1px solid #ccc", width: "100%" }}
								/>
							)}
						</div>
					</div>
				);
			})}
			<div className={styles.divider}>
				<h5>Additional Requirements / Notes</h5>
				<textarea
					placeholder="Tell us about preferred delivery timing, site conditions, access restrictions, or any specific questions you may have."
					value={value.additionalNotes || ""}
					onChange={e => onChange({ ...value, additionalNotes: e.target.value })}
					style={{ width: "100%", minHeight: 100, padding: 12, borderRadius: 8, border: "1px solid #ccc", resize: "vertical" }}
				/>
			</div>
		</form>
	);
};
export default StepInstallationRequirements;