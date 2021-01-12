export function formatReferenceData(data: IProjectData) {
	const {
		thumbnail,
		score,
		type_interior,
		type_transition,
		type_exterior,
		size_big,
		size_small,
		size_medium,
		ceiling_low,
		ceiling_medium,
		ceiling_high,
		ceiling_none,
		material_natural,
		material_mixed,
		material_artificial,
		color_red,
		color_green,
		color_blue,
		color_white,
		color_black,
		tone_pastel,
		tone_grey,
		tone_vivid,
		limit_open,
		limit_semi,
		limit_closed,
		population_dense,
		population_medium,
		population_low,
		furniture_high,
		furniture_medium,
		furniture_low,
		operation_day,
		operation_night,
		light_high,
		light_medium,
		light_low
	} = data;
	return {
		thumbnail,
		score,
		type_interior,
		type_transition,
		type_exterior,
		size_big,
		size_small,
		size_medium,
		ceiling_low,
		ceiling_medium,
		ceiling_high,
		ceiling_none,
		material_natural,
		material_mixed,
		material_artificial,
		color_red,
		color_green,
		color_blue,
		color_white,
		color_black,
		tone_pastel,
		tone_grey,
		tone_vivid,
		limit_open,
		limit_semi,
		limit_closed,
		population_dense,
		population_medium,
		population_low,
		furniture_high,
		furniture_medium,
		furniture_low,
		operation_day,
		operation_night,
		light_high,
		light_medium,
		light_low
	};
}

interface IProjectData {
	thumbnail: string;

	score: number;

	type_interior: number;
	type_transition: number;
	type_exterior: number;

	size_big: number;
	size_small: number;
	size_medium: number;

	ceiling_low: number;
	ceiling_medium: number;
	ceiling_high: number;
	ceiling_none: number;

	material_natural: number;
	material_mixed: number;
	material_artificial: number;

	color_red: number;
	color_green: number;
	color_blue: number;
	color_white: number;
	color_black: number;

	tone_pastel: number;
	tone_grey: number;
	tone_vivid: number;

	limit_open: number;
	limit_semi: number;
	limit_closed: number;

	population_dense: number;
	population_medium: number;
	population_low: number;

	furniture_high: number;
	furniture_medium: number;
	furniture_low: number;

	operation_day: number;
	operation_night: number;

	light_high: number;
	light_medium: number;
	light_low: number;
}
