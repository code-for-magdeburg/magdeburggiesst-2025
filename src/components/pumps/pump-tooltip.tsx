import React from "react";
import { useI18nStore } from "../../i18n/i18n-store";
import { Pump } from "../map/hooks/use-pump-store";
import { useMapConstants } from "../map/hooks/use-map-constants";

interface PumpTooltipProps {
	pump: Pump;
}

export const PumpTooltip: React.FC<PumpTooltipProps> = ({ pump }) => {
	const i18n = useI18nStore().i18n();
	const { pumpUpdateLink } = useMapConstants();

	// The "status" in the OpenStreetMap property is German, so we need to translate it
	const statusMap = {
		funktionsfähig: i18n.pumps.working,
		defekt: i18n.pumps.defect,
		unbekannt: i18n.pumps.unknown,
	};

	return (
		<div
			style={{
				position: "absolute",
				left: pump.x,
				top: pump.y - 5,
				transform: "translate(-50%, -100%)",
				zIndex: 500,
			}}
			className="p-6 bg-white rounded-lg flex flex-col gap-2 shadow-gdk-hard min-w-[300px]"
		>
			<div className="border-b-2 pb-2">
				<div className="font-bold text-lg">{i18n.pumps.title}</div>
				<div className="">{pump.address}</div>
			</div>
			<div className="py-2">
				<div className="flex flex-row justify-between">
					<div className="font-bold">{i18n.pumps.status}</div>
					<div className="">
						{statusMap[pump.status as keyof typeof statusMap]}
					</div>
				</div>
				<div className="flex flex-row justify-between">
					<div className="font-bold">{i18n.pumps.lastCheck}</div>
					<div className="">{pump.lastCheck}</div>
				</div>
			</div>
			{/* Pump update link hidden.
				Refer to this issue: https://github.com/technologiestiftung/giessdenkiez-de/issues/999 */}
			<div className="text-sm pt-2 border-t-2 hidden">
				<a
					className="underline"
					target="_blank"
					rel="noreferrer"
					href={pumpUpdateLink(pump.id, pump.lat, pump.lng)}
				>
					{i18n.pumps.update}
				</a>
			</div>
		</div>
	);
};
