import { Content } from "./content-types";

export const en: Content = {
	map: {
		attribution: {
			mapbox: {
				href: "https://www.mapbox.com/about/maps/",
				label: "© Mapbox",
			},
			openStreetMap: {
				href: "https://www.openstreetmap.org/copyright",
				label: "© OpenStreetMap",
			},
			improve: {
				href: "https://www.mapbox.com/map-feedback",
				label: "**Improve this map**",
			},
			feedback: {
				href: "https://citylabberlin.typeform.com/to/kCdnCgvC#product_id=GdK",
				label: "Feedback",
			},
			imprint: {
				href: "https://www.technologiestiftung-berlin.de/de/impressum/",
				label: "Imprint",
			},
			privacy: {
				href: "https://www.technologiestiftung-berlin.de/de/datenschutz/",
				label: "Privacy",
			},
		},
	},
	locationSearch: {
		placeholder: "Search for an address",
	},
	legend: {
		title: "Legend",
		greenTrees: "No water requirement",
		yellowTrees: "Moderate water requirement",
		orangeTrees: "Critical water requirement",
		grayTrees: "Not matching the filter settings",
	},
	navbar: {
		map: "Map",
		profile: {
			sidebarLabel: "Profile",
			title: "Your profile",
			overview: {
				subtitle: "Your overview",
				irrigations: "Waterings",
				liter: "Liters",
				adoptedTrees: "Adopted trees",
			},
			adoptedTrees: {
				subtitle: "Adopted trees",
				irrigationTimes: "Times",
				irrigationAmount: "Liters",
				showAll: "Show all",
				showLess: "Show less",
				noAdoptedTreesMessage:
					"If you regularly water a tree, you can adopt it. The trees you have adopted will be displayed here.",
			},
			settings: {
				subtitle: "Profile details",
				username: "Username",
				yourUsername: "Your username",
				editUsername: "New username",
				placeholderUser: "Your username",
				updateEmailEmailSentTitle: "E-Mail sent!",
				updateEmailEmailSentMessage:
					"We sent you an email with a confirmation link to your new email address to confirm the change. Check your mailbox!",
				passwordChangeWithoutRecoveryLinkTitle: "An error occurred.",
				passwordChangeWithoutRecoveryLinkMessage:
					"Note: This page can only be accessed if the password reset link in the email has been clicked previously.",
				passwordChangeWithoutRecoveryLinkLinkLabel: "Back to home",
				pleaseWait: "Please wait a moment...",
				email: "Email",
				yourEmail: "Your email address",
				editEmail: "New email address",
				placeholderMail: "xyz@ts.berlin",
				password: "Password",
				changePassword: "Change password",
				newPassword: "New password",
				passwordChangeConfirmationTitle:
					"Your password was successfully changed!",
				passwordChangeConfirmationMessage: 'Press "OK" to go to your profile.',
				deleteAccount: "Delete account",
				confirmDelete: "Delete",
				cancel: "Cancel",
				save: "Save",
				confirm: "OK",
				approve: "Done",
				checkInput: "Please check your input",
				usernameShould: "Your username needs to: ",
				usernameLength: "be at least 3-50 characters long",
				onlyNumberAndLetters: "and consist only of letters or numbers",
				usernameTaken: "This username is already taken",
				backToLogin: "Back to login",
				register: "Register",
				confirmEmailTitle: "Confirm account",
				confirmEmail: (email: string) =>
					`Check your inbox for "${email}", you should have received a mail from "info@magdeburg-giesst.de" containing a link to activate your account.`,
				existingAccount: "Do you already have an account?",
				logIn: "Login",
				passwordShould: "Your password needs to contain:",
				passwordLength: "at least 8 characters",
				passwordUpperAndLowerCase: "upper and lower case letters",
				passwordSpecialChar: "at least one special character",
				passwordNumber: "at least one number",
				logInShort: "Login",
				missingAccount: "Don't have an account yet?",
				registerNow: "Register now",
				forgotYourPassword: "forget your password?",
				ohNoforgotYourPassword: "Oh no. Did you",
				passwordForgotten: "Reset your password",
				resetPasswordEmailSentTitle: "Email sent!",
				resetPasswordEmailSentMessage:
					"We sent you an email with a link to reset your password. Check your mailbox!",
				clickHere: "click here",
				resetPassword: "Reset password",
				invalidCredentials: "Invalid credentials",
				deleteAccountConfirm: "Are you sure you want to delete your account?",
			},
			logOut: "Log out",
			showPassword: "Show",
			hidePassword: "Hide",
		},
		info: "Info",
	},
	notFound: {
		title: "404 - Page Not Found",
	},
	info: {
		infoTitel: "Information",
		about: {
			head: {
				question: "About the Project",
				answer: `MAGDEBURG GIESST builds upon the tree registry. The tree registry is a directory maintained by the city of Magdeburg in which (city/street or park) trees are managed and which is provided by the municipal department of City Gardens and Cemeteries and the Property Management Service. However, these authorities are not responsible for all trees in Magdeburg. Trees on private properties or on properties of housing cooperatives, for example, do not appear in MAGDEBURG GIESST.`,

				aboutUsTitle: "About Us",
				aboutUsAnswer: `MAGDEBURG GIESST is a project by [Code For Magdeburg](https://www.codefor.de/magdeburg), [Baumfreunde Magdeburg](https://www.baumfreunde-md.de) and [Netz39 e.V.](https://www.netz39.de) The project is supported by the CityLAB Berlin - a project of the [Technologiestiftung Berlin](https://www.citylab-berlin.org/) - whose App [Gieß den Kiez](https://www.giessdenkiez.de/) forms the basis for the Magdeburg app of MAGDEBURG GIESST.`,
				press: `For inquiries, it's best to send an email to [info@magdeburg-giesst.de](mailto:info@magdeburg-giesst.de?subject=Magdeburg%20giesst%20Anfrage">info@magdeburg-giesst.de).`,
				communityTitle: "Community",
				communityAnswer:
					"Would you like to find out more about watering trees, report pumps or exchange ideas with other active users? Then join our Slack chat!",
				slackButton: "Go to Slack Community",
				feedback: `Do you have **feedback** on *MAGDEBURG GIESST*?
				
[Feel free to answer a few questions](https://citylabberlin.typeform.com/to/kCdnCgvC#product_id=GdK)`,
			},
			qa: [
				{
					question: "Useful Links",
					answer: `[Watering in dry conditions (Baumpflegeportal)](https://www.baumpflegeportal.de/baumpflege/trockenheit-duerre-wann-baeume-giessen/)

[Mein Baum für Magdeburg](https://www.magdeburg.de/Start/B%C3%BCrger-Stadt/Stadt/Aktionen/index.php?object=tx%7C37.9220.1)

[Baumfreunde Magdeburg](https://www.baumfreunde-md.de)

[City trees - significance and challenges in times of climate change (HCU Hamburg)](https://www.hcu-hamburg.de/fileadmin/documents/REAP/files/Bildungsmaterial_Stadtbaeume_im_Klimawandel_2017.pdf)

[Functions of city trees (Nature Conservation Association)](https://www.bund-naturschutz.de/natur-und-landschaft/stadt-als-lebensraum/stadtbaeume/funktionen-von-stadtbaeumen.html)`,
				},
				{
					question: "Data Sources",
					answer: `The map shows a large portion of Magdeburg's street and park trees (approx. 82,000; as of March 2025). Additionally, it displays how much precipitation has fallen on each tree in the last 30 days and whether they have already been watered during this time. For various reasons, unfortunately not all of Magdeburg's city trees are listed yet. However, we are working to improve the data situation and achieve the most complete representation possible of Magdeburg's tree inventory. The current data sources are:

Trees: [Open Government Data Magdeburg](https://www.magdeburg.de/B%C3%BCrger-Stadt/Verwaltung-Service/Offene-Verwaltungsdaten/index.php?NavID=37.906&object=tx|37.12819.1&La=1&)

Precipitation: [German Weather Service](https://www.dwd.de/)

Pumps: [Open Street Map](https://www.openstreetmap.de)`,
				},
				{
					question: "Partners and Supporters",
					answer: `This project would not be possible without the support of the wonderful people at the following institutions:

[CityLAB Berlin](https://citylab-berlin.org/)

[Otto pflanzt!](https://ottopflanzt.de/)

[Netz39 e.V.](https://www.netz39.de/)

[Baumfreunde Magdeburg](https://baumfreunde-md.de/)

[Code for Leipzig](https://codefor.de/leipzig)`,
				},
			],
		},
		faq: {
			title: "F.A.Q.",
			description:
				"Based on the active exchange in our Slack community as well as your feedback via email and telephone, we have created a small FAQ. The most frequently asked questions are answered here.",
			qa: [
				{
					question: "How can I participate?",
					answer: `Explore:

Curious about which tree stands in front of your door? Our interactive map visualizes nearly 82,000 street and park trees in Magdeburg. If you want to learn more about a tree, navigate and zoom to the desired location and click on the colored dot. Now numerous details about the selected tree will be displayed in the menu bar on the right.

Watering and adopting trees:

Would you like to get active or are you already actively watering? On MAGDEBURG GIESST, you can record whether and how much water you have given a tree. Trees can also be adopted. The adopted trees appear in your own user profile and can be found again more quickly. This way, other neighbors in the area can see which trees need their attention. To water and adopt trees, first create a profile with a valid email address and then log in. Now you can document your watering activities accordingly and see whether and how often trees in your neighborhood have already been watered by other users.

Connect:

Through our public [Slack Channel](https://join.slack.com/t/magdeburggiesst/shared_invite/zt-1tf5i2z3k-mTmk_PUBEOWuNWzDSNoH4w), you can connect with other waterers and report broken pumps in your neighborhood.`,
				},
				{
					question: "What can I do if trees are not registered correctly?",
					answer: `We obtain the tree dataset with all attributes such as address, tree species, and planting year per tree from the Public Administrative Data of the City of Magdeburg. The provided tree registry is based on the aggregated data from the Municipal Department of City Gardens and Cemeteries Magdeburg and the Property Management Service. Therefore, it may occasionally happen that tree data is outdated or properties differ from the current reality. Unfortunately, we cannot make changes to the tree registry ourselves. Any discrepancies can only be reported directly to the responsible authority. However, once a year, these departments publish an updated tree registry, which we link to MAGDEBURG GIESST after publication.`,
				},
				{
					question: "Why should I take action and water trees?",
					answer: `The prolonged drought and heat periods of the last two years have taken an immense toll on Magdeburg's urban greenery.

The Municipal Department of City Gardens and Cemeteries is already active, but cannot keep up with watering during Magdeburg's hot summers. Through this platform, we also want to give citizens the opportunity to help trees specifically based on their current water supply and to stay informed. The goal is to save as many trees as possible through neighborhood engagement.`,
				},
				{
					question: "How do I water correctly?",
					answer: `Depending on age, location, and species, trees require different amounts of water. Young trees (0-15 years) need more water than middle-aged trees (15-40 years). Old trees (from 40 years) are usually completely self-sufficient.

Since newly planted trees are usually supplied with water by the municipal department for city gardens and cemeteries until they reach the age of five years, trees between five and 15 years of age in particular need our attention, or rather our water. We have highlighted this with markings indicating low, medium, or high water requirements.

Based on the Berlin [Good Care Handbook](https://www.berlin.de/sen/uvk/natur-und-gruen/stadtgruen/pflegen-und-unterhalten/handbuch-gute-pflege/), we recommend watering less frequently but with larger amounts of water. The handbook recommends up to 200 liters per watering for newly planted trees. This ensures that soil moisture increases even at deeper levels. Ultimately, even smaller amounts won't harm, especially during the height of summer. It's important to loosen dried-out soil before watering so that water can penetrate the ground rather than running off on the surface or pooling incorrectly. Watering bags are also recommended - these release water very slowly, minimizing surface runoff and allowing it to seep continuously into the soil.`,
				},
				{
					question: `How do I deal with water scarcity?`,
					answer: `During periods of drought and water scarcity, it's particularly important to use water sparingly. If you want to water your tree, always first ask yourself which tree has the greatest need. It's better to water less frequently but with larger quantities of water. This encourages the tree to develop deeper roots and makes it better equipped to withstand drought.

Try to use water from public street pumps rather than drinking water from your home plumbing. In the long term, it's worthwhile to collect rainwater and store it in rain barrels. Neighborhood initiatives like [Wassertanke](https://wassertanke.org/) can help you with such community projects.`,
				},
				{
					question: "Who can I contact if pumps are broken or damaged?",
					answer: `The infrastructure of the streets, which includes the public hand pumps, falls under the responsibility of the respective city departments. If pumps are broken or damaged, repair needs can be reported there. We update the pump locations on the map weekly from the Open Street Map database. If you want to help improve the data, for example by reporting a defective pump, you can do so in our [Slack Channel #pumpen-melden](https://app.slack.com/client/T052UAPPF7G/C052YPL8Q1K). The OSM community then has the opportunity to enter your information into the database.`,
				},
				{
					question: "How are technical problems handled?",
					answer: `We are aware of certain technical challenges but rely on your assistance. We welcome your technical feedback and questions in our [Slack Channel](https://join.slack.com/t/magdeburggiesst/shared_invite/zt-1tf5i2z3k-mTmk_PUBEOWuNWzDSNoH4w) or via email. Those who feel at home in the "tech world" are cordially invited to contribute to our [Open Source GitHub Repository](https://github.com/code-for-magdeburg/magdeburggiesst-2025) and can comment on issues or code fixes directly in the repository.`,
				},
				{
					question: "Why is the website not loading or loading very slowly?",
					answer: `When the page is opened for the first time, the browser loads approximately 82,000 data points – this can take a while! Regardless, there may be slightly different displays when using different browsers. For the best "experience," we recommend using Chrome or Firefox Desktop. Based on experience, the most common problems can be eliminated if the browser is not outdated (i.e., the latest version is installed) and a stable internet connection (LAN or WLAN) exists.

Using the website via smartphone (mobile network) may lead to performance issues (slow page loading). If problems occur repeatedly, you can report these in our [Slack Channel](https://join.slack.com/t/magdeburggiesst/shared_invite/zt-1tf5i2z3k-mTmk_PUBEOWuNWzDSNoH4w), by email, or via GitHub Issue, including details of the device used, operating system, browser, and browser version.
Die Nutzung über das Smartphone (Mobilfunknetz) kann zu Performance-Problemen (Seite lädt langsam) führen. Sollten wiederholt Probleme auftreten, könnt ihr diese in unserem [Slack Channel](https://join.slack.com/t/magdeburggiesst/shared_invite/zt-1tf5i2z3k-mTmk_PUBEOWuNWzDSNoH4w), per Mail oder via [GitHub Issue](https://github.com/code-for-magdeburg/magdeburggiesst-2025/issues) unter Angabe des benutzten Geräts, des Betriebssystems, des Browsers und Version des Browsers melden.`,
				},
				{
					question: "What should I do if I watered a tree incorrectly?",
					answer: `To undo a watering because, for example, you watered the neighboring tree instead or watered on a different day, first click on the tree. Scroll down in the tree's sidebar to the view of past waterings, click on the trash can icon next to the entry you want to delete, and click "Delete" to confirm. You can only delete waterings that you have performed yourself. After deletion, enter the watering with the correct information (number of liters and time).`,
				},
				{
					question: "Can the principle be transferred to other cities?",
					answer: `The “Gieß den Kiez” platform is an open source software project and runs under an MIT license. Accordingly, the idea and also the source code can be used and further developed free of charge for implementation in other cities. If you are interested, please take a look at our [GitHub Repository](https://github.com/technologiestiftung/giessdenkiez-de) or contact us via email. We are also happy to support your city with the technical implementation via [DeineStadtgießt](https://deinestadt.giessdenkiez.de/).`,
				},
				{
					question: "I still have a question!",
					answer: `If the FAQ couldn't help you or if you have a more complex inquiry, please write us an [E-mail](mailto:info@magdeburg-giesst.de).`,
				},
				{
					question: "Why aren't all of Magdeburg's trees shown?",
					answer: `MAGDEBURG GIESST is built on the tree registry. The tree registry is a directory maintained by the city in which (city/street or park) trees are managed and which is provided by the municipal department for city gardens and cemeteries and the property service. However, these authorities are not responsible for all trees in Magdeburg. Trees on private property or on property owned by housing cooperatives, for example, therefore do not appear on MAGDEBURG GIESST.`,
				},
			],
		},
		share: {
			title:
				"Share MAGDEBURG GIESST with your social circle and help us expand the watering community:",
			content:
				"On MAGDEBURG GIESST you can learn about Magdeburg's tree population, find thirsty trees, and record when you have watered them!",
			openSource:
				"MAGDEBURG GIESST is an [Open Source Project](https://github.com/code-for-magdeburg/magdeburggiesst-2025)!",
		},
		credits: {
			projectBy: "A project of",
			fundedBy: "Funded by",
		},
	},
	treeDetail: {
		title: "Tree information",
		adoptIt: "Adopt this tree",
		alsoAdoptedByOtherUsers: "Also adopted by other users",
		onlyAdoptedByOtherUsers: "Adopted by other users",
		ageTitle: "Age",
		adoptLoading: "Tree is being adopted...",
		unadoptLoading: "Adoption is being canceled...",
		isAdopted: "You have adopted this tree",
		adoptHintTitle: "Adopt a tree",
		adoptHint:
			"If you water this tree on a regular basis, you can adopt it. This way you can find it in your profile.",
		adoptErrorMessage: "Error adopting the tree. Please try again.",
		adoptLoginFirst: "Please log in first to adopt this tree",
		age: (age: number) => `${age === 1 ? "year" : "years"}`,
		ageUnknown: "Unknown",
		treeTypeUnknown: "Tree species unknown",
		managedBy:
			"This tree is already being taken care of by the Stadtgartenbetrieb and does not need to be watered.",
		waterNeed: {
			title: "Water requirements",
			hintWinter:
				"Outside of the vegetation period (March-October), the trees do not require any water as they are practically in hibernation.",
			hint: "Depending on the age of the tree, the need for water varies.",
			needXLiters: (liters: string) => `Needs ${liters} liters per week`,
			needsOnlyOnDryDays: "Only needs water on dry days",
			waterManaged: "Supplied, only in need during dry periods",
			winterSleep: "The trees are currently in hibernation",
			managedByGroundwater: "Groundwater",
			unknownTitle: "Water needs **unknown**",
			unknown:
				"The age and therefore the water requirement are unfortunately unknown. The info box may help you make your own assessment.",
			unknownShort: "Unknown",
			seniorTitle: "Needs water only during dry periods",
			seniorExplanation:
				"Older trees can usually supply themselves with groundwater, but as the heat increases they also appreciate additional water.",
			liters: "liters",
			watered: "watered",
			covered: "covered",
			rained: "rain",
			stillMissing: "still missing",
			dataOfLastXDays: "* data of last 30 days",
			manager: "Stadtgartenbetrieb",
			alreadyWateredByManager: "Watered by **Stadtgartenbetrieb**",
			alreadyWateredByGroundwater: "Covered by **groundwater**",
			winterNeedsNoWater: "No water needed in winter",
			stillWaterXLiters: (liters: string) => `
Needs

**${liters} liters**`,
			shouldBeWatered: "Should be watered",
			sufficientlyWatered: "Sufficiently watered at the moment",
			readMore: "Show more",
			ageAndWaterHintTitle: "Water requirements and age",
			ageAndWaterHint: `
Particularly young trees need water in the first few years. Rather less often, but a lot at once. 

**Below 5 years**: We are taken care of by the Stadtgartenbetrieb.

**5-15 years**: At this age, we are no longer watered by the administration in all districts and are not yet "self-sufficient". We are thankful for some extra water, especially in dry times - preferably less often, but a lot at once (approx. 100-200 liters per month). 

**Older trees (15+ years)**: We can supply ourselves via the groundwater.`,
			ageAndWaterHintWinter: `
When the trees lose more of their leaves in autumn, their photosynthetic processes also decrease, and they need less energy—and therefore less water. 
With the official end of the vegetation period, the watering season also comes to an end for this year. Starting in March, it will pick up again! We Can!

**Water needs during the vegetation period (March-October)**:

`,
			ageAndWaterHintSpecialDistrict: (
				babyAgeLimit: number,
				district: string,
			) => `
Particularly young trees need water in the first few years. Rather less often, but a lot at once. 

The district ${district} has provided us with additional information on the individual pouring strategy.

**Below ${babyAgeLimit} years**: We are taken care of by the district green space office.

**Older trees (${babyAgeLimit}+ years)**: We can supply ourselves via the groundwater.`,

			close: "Show less",
			lastXDaysYLitersWater: (days: number, liters: string) =>
				`In the last ${days} days, **${liters} liters** were watered.`,
			lastXDaysYLitersRain: (days: number, liters: string) =>
				`In the last ${days} days, it rained **${liters} liters**.`,
			iWatered: "I watered",
			loginToWater: {
				login: "Log-in",
				toWater: "to submit a watering",
			},
			submitWatering: "Submit watering",
			wateredHowMuch: "Liters",
			wateredHowMuchPlaceholder: "Amount in L",
			wateredWhen: "When?",
			waterSave: "Save",
			waterCancel: "Cancel",
			wateringSuccessful: "Your watering entry was successful!",
		},
		lastWaterings: {
			deletedAccount: "Deactivated Account",
			title: "Last waterings",
			last30Days: "Last 30 days",
			nothingLast30Days: "No waterings in the last 30 days",
			before: "Previous",
			nothingBefore: "No previous waterings",
		},
		problem: {
			title: "Report a problem",
			description:
				"Have you discovered tree damage or is the tree disk being misused? Tell the public order office:",
			link: "To the official form",
		},
		treeTypeInfos: [
			{
				id: "LINDE",
				title: "Linden (Tilia)",
				description:
					"The lime tree has been the typical street tree in Berlin for years. With a share of a good third, it characterizes the street tree population. A total of 10 different species can be distinguished. The winter lime tree (Tilia cordata), a medium-sized tree that also finds room in narrower streets, is the preferred tree. The large-crowned imperial lime (Tilia intermedia), on the other hand, is reserved for wide avenues.",
			},
			{
				id: "AHORN",
				title: "Maple (Acer)",
				description:
					"The maple genus comprises approx. 20% of the total stock. The Norway maple (Acer platanoides) is particularly suitable for the street location. The early flowering and the colorful autumn coloring make the maple a particularly popular tree species.",
			},
			{
				id: "EICHE",
				title: "Oak (Quercus)",
				description:
					"Oaks make up around 9% of the total stock. In Berlin, it is mainly the common oak (Quercus robur) that is planted. As a light tree, the oak is not suitable for narrow streets. The most recent avenues in the parliamentary and government district were planted with the so-called Spree oak (Quercus palustris), which is characterized by its particularly beautiful autumn colouring, among other things.",
			},
			{
				id: "PLATANE",
				title: "Plane tree (Platanus)",
				description:
					"An ideal avenue tree for wide streets is the plane tree (Platanus acerifolia), which in addition to a height of 20 to 30 m can also reach a stately crown diameter of 15 to 20 m. Sycamore trees make up around 6% of the total population. The best-known and, at over 120 years old, oldest plane tree avenue in Berlin is Puschkinallee in Berlin-Treptow.",
			},
			{
				id: "KASTANIE",
				title: "Chestnut (Aesculus)",
				description:
					"The chestnut (Aesculus) accounts for around 5% of the total population, putting it in fifth place among Berlin's street trees. Horse chestnuts have five- and multi-lobed leaves that resemble the fingers of a hand; sweet chestnuts have single leaves that are also clearly serrated.",
			},
			{
				id: "ROSSKASTANIE",
				title: "Horse chestnut (Aesculus hippocastanum)",
				description:
					"The horse chestnut (Aesculus hippocastanum) accounts for around 5% of the total population, making it the fifth most popular street tree in Berlin. Horse chestnuts have five- and multi-lobed leaves that resemble the fingers of a hand; sweet chestnuts have single leaves that are also clearly serrated.",
			},
			{
				id: "ESCHE",
				title: "Ash (Fraxinus)",
				description:
					"The ash tree (Fraxinus) accounts for approx. 3% of the total population and thus occupies sixth place among Berlin's street trees. With a height of up to 40 m, it is one of the tallest deciduous trees in Europe.",
			},
			{
				id: "BIRKE",
				title: "Birch (Betula)",
				description:
					"The birch (Betula) accounts for around 3% of the total population. Although the birch is a pioneer tree that is very undemanding and grows on any soil, it is less suitable as a street tree as the tree grates often offer too little space for the shallow-rooted trees.",
			},
			{
				id: "ROBINIE",
				title: "Robinia (Robinia)",
				description:
					"The Robinia (Robinia) accounts for around 2% of the total population. It was cultivated as a park tree in Berlin's Lustgarten from 1672 and is now very common throughout Berlin. The Robinia has low demands on the soil and, thanks to the nodule bacteria on its roots, it can bind atmospheric nitrogen and thus fertilize the soil.",
			},
			{
				id: "HASEL",
				title: "Hazel tree (Corylus)",
				description:
					"The hazel tree (Corylus) accounts for around 2% of the total population, making it the ninth most common street tree in Berlin. The hazelnut grows as a shrub or small tree up to 6 m high.",
			},
			{
				id: "HAINBUCHE",
				title: "Hornbeam (Carpinus)",
				description:
					"The proportion of hornbeams (Carpinus) is around 2% of the total population. The tree reaches a height of up to 25 meters. The crown is initially slightly conical and later expands widely.",
			},
			{
				id: "PAPPEL",
				title: "Poplar (Populus)",
				description:
					"The poplar (Populus) accounts for around 2% of Berlin's total population. They have ovoid to triangular, sometimes heart-shaped leaves.",
			},
			{
				id: "ULME",
				title: "Elm (Ulmus)",
				description:
					"Elms (Ulmus) make up around 2% of the total population. There are three of the world's 45 species of this deciduous deciduous tree: the mountain elm, the field elm and the elm tree. It grows up to 600 meters high and can live to be 250 years old.",
			},
		],
		treeTypeInfoTitle: "Tree profile",
	},
	filter: {
		title: "Filter",
		publicPumps: "Public pumps",
		myAdoptedTrees: "My adopted trees",
		allAdoptedTrees: "Adopted trees",
		lastWateredTrees: "Previously watered trees",
		treeAge: "Tree age",
		show: "Show",
		reset: "Reset",
		treeAgeTitle: "Tree age",
		years: "years",
	},
	common: {
		defaultErrorMessage: "Something went wrong! Please try again later.",
	},
	contact: {
		dialogTitle: (contactName: string) =>
			`**Send an email to *${contactName}***`,
		dialogDetail: (contactName: string, userMail: string) =>
			`The email to *${contactName}* automatically contains your email address (*${userMail}*) and your text message:`,
		dialogPlaceholder: "Briefly describe why you would like to connect...",
		dialogCancel: "Cancel",
		dialogSubmit: "Send",
		dialogAlreadyContactedError: (contactName: string) =>
			`You already sent a contact request to *${contactName}*.`,
		dialogAlreadyContactedExplanation:
			"You have already sent a contact request to this person. Another request is not possible.",
		genericErrorTitle: "Contact request not possible",
		genericError: `Oops, something went wrong. Please try again.`,
		dialogSuccess: (contactName: string) =>
			`The contact request was sent to *${contactName}*.`,
		dailyLimitError: "You have reached the daily limit for contact requests.",
		dailyLimitExplanation:
			"You have reached the daily limit of 3 contact requests. Please try again tomorrow.",
		containsUrlHint:
			" Please note, that the message must not contain any links.",
		messageTooLongError: "The message must be less than 200 characters long.",
		messageRestrictionsHint: (maxLength: number, message: string) =>
			`${Math.max(0, maxLength - message.length)} characters left.`,
		loginFirst: "Log in for contact request",
		loginFirstReason:
			"You can only send contact requests if you are logged in.",
		loginFirstAction: "Log in",
		confirm: "Okay!",
	},
	pumps: {
		title: "Public pump",
		status: "Status",
		lastCheck: "Last check",
		update: "Update status in OpenStreetMap",
		working: "Working",
		defect: "Broken",
		unknown: "Unknown",
	},
	splash: {
		headline:
			"Magdeburg's city trees are suffering from drought and you can help them!",
		subheadlineWinter: `Currently the trees are practically in hibernation and don’t need any additional water.
**Starting in March, it will pick up again! We Can!**`,
		subheadline:
			"Find out about the water needs of the trees in your neighborhood, adopt the tree on your doorstep and become part of the active watering community in Magdeburg!",
		actionTitle: "Let's go",
		actionTitleWinter: "Explore!",
		discoverTitle: "Discover",
		discoverContent:
			"The map visualizes over 80,000 urban trees and displays information on species, age and water requirements. Use the filter and search functions to quickly get an overview.",
		waterTitle: "Water",
		waterContent:
			"Grab a watering can and become part of the watering community! Over one hundred active people have already joined forces for Magdeburg's trees and are regularly submitting their waterings.",
		adoptTitle: "Adopt",
		adoptContent:
			"By adopting a tree - or several - you let your neighborhood know that these trees will be cared for. This creates a coordinated commitment.",
		networkTitle: "Connect",
		networkContent:
			"Join our Slack chat to connect with the watering community, exchange questions, and coordinate watering in your neighborhood.",
		questionHeadline: "Gieß den Kiez also in your city?",
		questionSubheadline:
			"Cities like Leipzig, Magdeburg and Co. have already successfully joined the watering wave! Is your city the next one?",
		discoverMoreTitle: "Learn more!",
		letsGo: "Let's go",
	},
	loading: {
		mapLoading:
			"We are currently loading over 82,000 trees from the Magdeburg tree population.",
		treeLoading: "Loading tree information...",
	},
	stats: {
		title: "Magdeburg Statistics",
		subtitle: "MAGDEBURG GIESST in numbers",
		streetTrees: "City trees",
		publicPumps: "Public pumps",
		activeUsers: "Active casters",
		backToFront: "back",
		wateringsStat: {
			title: "Waterings",
			unit: "times",
			hint: (currentYear) => `were poured in ${currentYear}.`,
			legend: "Number of waterings",
			backContent: `The watering activity varies in Magdeburg's districts depending on volunteer engagement. In some districts, committed residents have already organized themselves into watering groups ([Slack Community](https://join.slack.com/t/magdeburggiesst/shared_invite/zt-1tf5i2z3k-mTmk_PUBEOWuNWzDSNoH4w)).`,
		},
		wateringBehaviorStat: {
			title: "Pouring behaviour",
			unit: "liters",
			watered: "poured",
			rain: "rain",
			hint: () => `have already been poured since 2020.`,
			legend: "∑ Liters poured per month",
			backContent: `Thousands of liters of water have already been voluntarily poured!
			
"The more the better" doesn't always apply given increasing water scarcity. And the Magdeburg watering community knows this, of course, and is therefore mainly active when the trees are actually thirsty: during the growing season (April-October) in particularly hot, dry years. 

Datenquelle: [Wetterdaten (DWD)](https://opendata.dwd.de/)`,
		},
		wateringAmountStat: {
			title: "Pouring volume",
			unit: "liters",
			hint: (currentYear) =>
				`are entered on average per watering in ${currentYear}.`,
			legend: "Ø Liters per year",
			backContent: `“The more the better” applies here to a limited extent: a lot at once, but not too often. And the active community already knows this too, of course.

A watering should involve more rather than fewer liters at a time so that the root system of the thirsty young trees can develop downwards.

But be careful! Young trees can also be overwatered. More information on [watering recommendations for urban trees](https://www.berlin.de/sen/uvk/natur-und-gruen/stadtgruen/stadtbaeume/waessern-von-stadtbaeumen/).`,
		},
		treeSpeciesStat: {
			title: "Tree species",
			unit: "tree species",
			hint: () => `exist in Magdeburg.`,
			other: "Other",
			legend: "Share of Magdeburg’s tree population",
			backContent: `Magdeburg is diverse - including the trees!

This overview shows the twenty most common species, each summarized according to the overarching tree genus.

The MAGDEBURG GIESST map shows the full splendor, and thus over 80,000 city trees, with information on species, age and water requirements. Use the filters and search to find out more about the trees in your neighborhood.

Data source: [Magdeburg tree cadastre](https://www.magdeburg.de/B%C3%BCrger-Stadt/Verwaltung-Service/Offene-Verwaltungsdaten/index.php?NavID=37.906&object=tx|37.12819.1&La=1&)`,
		},
		adoptionStat: {
			title: "Tree adoptions",
			unit: "trees",
			hint: () => `are adopted.`,
			legend: "of the adopted trees are particularly thirsty.",
			backContent: `Adopting a tree on MAGDEBURG WATERS shows that it is being regularly cared for and thus facilitates neighborhood coordination. Dozens of trees can therefore already consider themselves lucky.
			
Young trees (under 15 years old) are especially thirsty. These are usually watered by the city gardening department until at least their fifth year. Therefore, trees that are **5 - 15 years** old are "particularly thirsty."`,
		},
		gdKSalesPitch: `*Gieß den Kiez* also in **your city**?

[Find out more!](https://deinestadt.giessdenkiez.de/)`,
	},
};
