import React from "react";
import { useI18nStore } from "../../i18n/i18n-store";
import { PrimaryButton } from "../buttons/primary";
import { useFilterStore } from "./filter-store";
import { FilterSwitch } from "./filter-switch";
import { TertiaryButton } from "../buttons/tertiary";
import { AgeRangeSlider } from "./age-range-slider/age-range-slider";

export const Filter: React.FC = () => {
	const i18n = useI18nStore().i18n();
	const { hideFilterView } = useFilterStore();

	const {
		isPumpsVisible,
		setShowPumps,
		areOnlyAllAdoptedTreesVisible,
		setAreOnlyAllAdoptedTreesVisible,
		resetFilters,
		areLastWateredTreesVisible,
		setAreLastWateredTreesVisible,
	} = useFilterStore();

	const onToggleAllAdoptedTrees = () => {
		setAreOnlyAllAdoptedTreesVisible(!areOnlyAllAdoptedTreesVisible);
	};

	return (
		<div className="flex flex-row w-full justify-center pointer-events-auto">
			<div
				className={`flex flex-col shadow-gdk-hard-up sm:shadow-gdk-hard bg-none sm:bg-white rounded-lg p-4 sm:p-6 gap-6 sm:gap-6 w-full`}
			>
				<div className="flex flex-col gap-2">
					<div className="font-semibold text-xl">{i18n.filter.title}</div>
					<div className="flex flex-col gap-2 relative">
						<FilterSwitch
							name={i18n.filter.publicPumps}
							onToggle={() => {
								setShowPumps(!isPumpsVisible);
							}}
							isEnabled={isPumpsVisible}
						/>
						<FilterSwitch
							name={i18n.filter.lastWateredTrees}
							onToggle={() => {
								setAreLastWateredTreesVisible(!areLastWateredTreesVisible);
							}}
							isEnabled={areLastWateredTreesVisible}
						/>

						<FilterSwitch
							name={i18n.filter.allAdoptedTrees}
							onToggle={onToggleAllAdoptedTrees}
							isEnabled={areOnlyAllAdoptedTreesVisible}
						/>
					</div>
				</div>

				<div className="flex flex-col w-full gap-y-6">
					<AgeRangeSlider />
				</div>

				<div className="flex flex-col-reverse sm:flex-row justify-between">
					<div className="flex self-center ">
						<TertiaryButton label={i18n.filter.reset} onClick={resetFilters} />
					</div>
					<PrimaryButton label={i18n.filter.show} onClick={hideFilterView} />
				</div>
			</div>
		</div>
	);
};
