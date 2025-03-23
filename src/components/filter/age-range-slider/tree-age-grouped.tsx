export const getTreesGroupByAge = () => {
	const treesYoungerThan200 = treesGroupedByAge.filter(
		(ageGroup) => ageGroup.alter < 200,
	);

	// trees with 200+ years are grouped together and displayed as one bar
	const groupedTrees200Plus = treesGroupedByAge
		.filter((ageGroup) => ageGroup.alter >= 200)
		.reduce((accumulator, ageGroup) => accumulator + ageGroup.count, 0);

	return [
		{ pflanzjahr_grouped: 1825, alter: 200, count: groupedTrees200Plus },
		...treesYoungerThan200,
	];
};

export const getMaxCount = () => {
	return Math.max(...treesGroupedByAge.map((item) => item.count));
};

export const treesGroupedByAge = [
	{
		pflanzjahr_grouped: 1705,
		alter: 320,
		count: 0,
	},
	{
		pflanzjahr_grouped: 1715,
		alter: 310,
		count: 0,
	},
	{
		pflanzjahr_grouped: 1725,
		alter: 300,
		count: 0,
	},
	{
		pflanzjahr_grouped: 1735,
		alter: 290,
		count: 0,
	},
	{
		pflanzjahr_grouped: 1745,
		alter: 280,
		count: 0,
	},
	{
		pflanzjahr_grouped: 1755,
		alter: 270,
		count: 0,
	},
	{
		pflanzjahr_grouped: 1765,
		alter: 260,
		count: 0,
	},
	{
		pflanzjahr_grouped: 1775,
		alter: 250,
		count: 0,
	},
	{
		pflanzjahr_grouped: 1785,
		alter: 240,
		count: 0,
	},
	{
		pflanzjahr_grouped: 1795,
		alter: 230,
		count: 43,
	},
	{
		pflanzjahr_grouped: 1805,
		alter: 220,
		count: 8,
	},
	{
		pflanzjahr_grouped: 1815,
		alter: 210,
		count: 7,
	},
	{
		pflanzjahr_grouped: 1825,
		alter: 200,
		count: 5,
	},
	{
		pflanzjahr_grouped: 1835,
		alter: 190,
		count: 2,
	},
	{
		pflanzjahr_grouped: 1845,
		alter: 180,
		count: 94,
	},
	{
		pflanzjahr_grouped: 1855,
		alter: 170,
		count: 8,
	},
	{
		pflanzjahr_grouped: 1865,
		alter: 160,
		count: 5,
	},
	{
		pflanzjahr_grouped: 1875,
		alter: 150,
		count: 133,
	},
	{
		pflanzjahr_grouped: 1885,
		alter: 140,
		count: 84,
	},
	{
		pflanzjahr_grouped: 1895,
		alter: 130,
		count: 732,
	},
	{
		pflanzjahr_grouped: 1905,
		alter: 120,
		count: 96,
	},
	{
		pflanzjahr_grouped: 1915,
		alter: 110,
		count: 339,
	},
	{
		pflanzjahr_grouped: 1925,
		alter: 100,
		count: 1845,
	},
	{
		pflanzjahr_grouped: 1935,
		alter: 90,
		count: 517,
	},
	{
		pflanzjahr_grouped: 1945,
		alter: 80,
		count: 2007,
	},
	{
		pflanzjahr_grouped: 1955,
		alter: 70,
		count: 1732,
	},
	{
		pflanzjahr_grouped: 1965,
		alter: 60,
		count: 3146,
	},
	{
		pflanzjahr_grouped: 1975,
		alter: 50,
		count: 2756,
	},
	{
		pflanzjahr_grouped: 1985,
		alter: 40,
		count: 5132,
	},
	{
		pflanzjahr_grouped: 1995,
		alter: 30,
		count: 5166,
	},
	{
		pflanzjahr_grouped: 2005,
		alter: 20,
		count: 1588,
	},
	{
		pflanzjahr_grouped: 2015,
		alter: 10,
		count: 2337,
	},
	{
		pflanzjahr_grouped: 2025,
		alter: 0,
		count: 0,
	},
];
