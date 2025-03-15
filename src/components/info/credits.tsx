import React from "react";

const logoNetz39 = "/images/netz39-logo.svg";
const logoCodeForMagdeburg = "/images/code-for-md-logo.svg";

export const Credits: React.FC = () => {
	return (
		<div className="flex flex-row gap-4 md:gap-10 text-xs items-center">
			<div style={{ width: "150px" }}>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.netz39.de"
				>
					<img src={logoNetz39} alt="Logo Netz39 e.V." />
				</a>
			</div>
			<div style={{ width: "150px" }}>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://codefor.de/magdeburg"
				>
					<img src={logoCodeForMagdeburg} alt="Logo Code for Magdeburg" />
				</a>
			</div>
		</div>
	);
};
