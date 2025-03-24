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
				href: "https://survey.typeform.com/to/k8H12Hlf",
				label: "Feedback",
			},
			imprint: {
				href: "https://www.netz39.de/impressum/",
				label: "Imprint",
			},
			privacy: {
				href: "https://www.netz39.de/datenschutz/",
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
				
[Feel free to answer a few questions](https://survey.typeform.com/to/k8H12Hlf)`,
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
					answer: `The map shows a large portion of Magdeburg's street and park trees (approx. 80,000; as of March 2025). Additionally, it displays how much precipitation has fallen on each tree in the last 30 days and whether they have already been watered during this time. For various reasons, unfortunately not all of Magdeburg's city trees are listed yet. However, we are working to improve the data situation and achieve the most complete representation possible of Magdeburg's tree inventory. The current data sources are:

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

Curious about which tree stands in front of your door? Our interactive map visualizes nearly 80,000 street and park trees in Magdeburg. If you want to learn more about a tree, navigate and zoom to the desired location and click on the colored dot. Now numerous details about the selected tree will be displayed in the menu bar on the right.

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
					answer: `When the page is opened for the first time, the browser loads approximately 80,000 data points – this can take a while! Regardless, there may be slightly different displays when using different browsers. For the best "experience," we recommend using Chrome or Firefox Desktop. Based on experience, the most common problems can be eliminated if the browser is not outdated (i.e., the latest version is installed) and a stable internet connection (LAN or WLAN) exists.

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
				id: "Linde",
				title: "Linden (Tilia)",
				description:
					"The linden tree is a beautiful tree with heart-shaped leaves that is often planted in city squares and streets. In summer, its small yellow flowers have a sweet scent and attract many bees that collect nectar there. With its round crown, the linden tree provides plenty of shade where people can rest on hot days. Linden trees can grow very old and large in cities and are known for coping well with exhaust fumes and dusty air. The linden is a friendly urban tree that not only provides shade for people but also helps to clean the air.",
			},
			{
				id: "Ahorn",
				title: "Maple (Acer)",
				description:
					'The maple tree is a popular city tree with its distinctive, star-shaped leaves that turn beautifully red and yellow in autumn. In spring, the maple produces small flowers that later develop into the amusing "nose pinchers" - winged fruits that spin like propellers when they fall from the tree. Many birds and insects find a home in the maple, even in the middle of the city. The maple grows quickly and can cope well with the urban climate, which is why it is often planted along streets and in parks. Its broad crown provides pleasant shade in summer for playing children and adults who want to take a break.',
			},
			{
				id: "Eiche",
				title: "Oak (Quercus)",
				description:
					"The oak is a large, strong tree that grows in many cities in parks and squares. It has special leaves with jagged edges and bears acorns in autumn that look like small caps with shells and are eagerly collected by squirrels and other animals. An oak tree can become very old - sometimes several hundred years - and provides a home for many birds, insects, and small animals in the city. The oak has thick, rough bark and can live well in the city despite exhaust fumes and poor air quality. Under its broad crown, people find cool shade in summer when it's hot in the city.",
			},
			{
				id: "Platane",
				title: "Plane tree (Platanus)",
				description:
					"The plane tree is a large urban tree with distinctive, mottled bark that looks like a puzzle with brown, green, and yellow patches. Its leaves resemble a hand with five fingers and provide plenty of shade in summer on city squares and along streets. The plane tree bears small, round, spiky fruits that hang like balls on the tree and later burst open. It is particularly well-suited for the city because it tolerates heat, drought, and dirty air better than many other trees. The plane tree can become very old and is often the largest tree on a playground or in a city park.",
			},
			{
				id: "Kastanie",
				title: "Chestnut (Aesculus)",
				description:
					"The chestnut tree is a magnificent tree with large, fan-shaped leaves that can be found in many cities in schoolyards and parks. In spring, it bears beautiful white or pink flower candles that look like small towers and decorate the tree. In autumn, the shiny brown chestnuts in spiky green shells fall to the ground, which children like to collect for crafting or playing. With its dense crown, the chestnut tree provides a good shady spot when it's hot in the city during summer. In many cities, chestnut trees are particularly popular because they grow large and strong and create beautiful places to linger.",
			},
			{
				id: "Rosskastanie",
				title: "Horse chestnut (Aesculus hippocastanum)",
				description:
					"The horse chestnut is a popular city tree with large, hand-shaped leaves that look like a fan with seven fingers. In spring, it adorns itself with white flower candles that stand upright like little towers, making the whole tree glow. In autumn, shiny brown chestnuts in spiky green shells fall down, which children like to collect to craft chestnut figures or other characters. The horse chestnut grows into a large, round tree and provides plenty of shade in parks and schoolyards on hot days. Although the fruits of the horse chestnut are not edible (unlike true edible chestnuts), it is an important tree for the city because it provides food for many insects and helps clean the air.",
			},
			{
				id: "Esche",
				title: "Ash (Fraxinus)",
				description:
					"The ash is a slender, tall tree with smooth gray bark that thrives in city parks and along riverbanks. Its leaves consist of many small leaflets on a stem, similar to a feather, which often fall off green in autumn without changing to colorful hues beforehand. In spring, the ash forms small, inconspicuous flowers, before later developing flat, oblong seeds with wings that can sail through the air like small propellers. The ash grows quickly and has a light crown, through which enough sunlight still shines for plants on the ground. In the city, the ash is a valuable tree because it copes well with the urban climate and its wood is both flexible and strong at the same time.",
			},
			{
				id: "Birke",
				title: "Birch (Betula)",
				description:
					"The birch is a slender tree with strikingly white bark that looks like paper and sometimes has small black lines. Its leaves are small, triangular, and jagged at the edges, which flutter easily in the wind and show a bright, fresh green in spring. The birch has long, thin branches that often hang down like hair and bear small catkins in spring, which later become tiny winged seeds that the wind can carry far. In the city, the birch often grows along roadsides and in parks, where it looks particularly beautiful with its white bark and airy crown. The birch is a brave tree that can grow on poor soils and is one of the first to find a new home after a fire or on empty spaces in the city.",
			},
			{
				id: "Robinie",
				title: "Robinia (Robinia)",
				description:
					'The black locust, also known as "false acacia," is a tree with feathery leaves and deeply furrowed, grayish-brown bark that adorns many city streets. In late spring, it bears beautiful white clusters of flowers that smell sweet and attract bees. The black locust is very resistant to exhaust fumes and drought, which is why it can grow particularly well in the city. Its roots can absorb nitrogen from the air and improve the soil, which is a great trick of this tree. Although the black locust originally comes from North America, it feels so at home in our cities that it now seems like a native tree and provides food and shelter for many animals.',
			},
			{
				id: "Hasel",
				title: "Hazel tree (Corylus)",
				description:
					"The hazel is a small tree or large shrub that beautifies city parks with its hanging catkins in spring. Its heart-shaped leaves provide pleasant shade in summer on playgrounds and in gardens. In autumn, the hazel bears delicious nuts that can be collected not only by squirrels but also by people. City dwellers especially appreciate the hazel because it is robust against exhaust fumes and provides a home for many birds. The branches of the hazel were formerly used as divining rods to find hidden water.",
			},
			{
				id: "Hainbuche",
				title: "Hornbeam (Carpinus)",
				description:
					"The hornbeam is a great urban tree with heart-shaped leaves and a smooth, gray-striped bark that looks like muscles. It doesn't grow very tall, usually only 15 meters, and tolerates exhaust fumes and dry air particularly well, which is why it is often planted along streets and in parks. In autumn, its leaves turn a beautiful yellow, and small winged nuts hang in clusters on the tree. The hornbeam provides a home for many birds and insects and can also withstand heavy pruning, which is why it is often used as a hedge.",
			},
			{
				id: "Pappel",
				title: "Poplar (Populus)",
				description:
					'The poplar is a fast-growing tree that can be found in many cities and stands out with its slender shape and silvery shimmering leaves. It can grow very tall, sometimes over 30 meters, and its roots help protect the soil from erosion. In spring, its fluffy seeds fly through the air like small snowflakes, sometimes looking like "poplar snow." Poplars rustle especially beautifully in the wind because their leaves hang on long, thin stems. In the city, poplars are important shade providers and help make the air cleaner.',
			},
			{
				id: "Ulme",
				title: "Elm (Ulmus)",
				description:
					"The elm is a magnificent urban tree with a broad, arched crown that provides plenty of shade and once adorned many streets and squares. Its leaves are rough and uneven at the base, giving them a distinctive shape that children can easily recognize. Unfortunately, many elms have disappeared due to a disease called Dutch elm disease, but resistant varieties are being replanted today. In spring, the elm forms small green flowers and later flat, round fruits with a wing that can sail through the air like small frisbees. The elm is an important habitat for many insects and birds in the city and can live for over 400 years under good conditions.",
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
			"The map visualizes nearly 80,000 urban trees and displays information on species, age and water requirements. Use the filter and search functions to quickly get an overview.",
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
			"We are currently loading nearly 80,000 trees from the Magdeburg tree population.",
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
			hint: () => `have already been poured since 2023.`,
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

The MAGDEBURG GIESST map shows the full splendor, and thus nearly 80,000 city trees, with information on species, age and water requirements. Use the filters and search to find out more about the trees in your neighborhood.

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
