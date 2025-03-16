import { Content } from "./content-types";

export const de: Content = {
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
				label: "**Diese Karte verbessern**",
			},
			feedback: {
				href: "https://citylabberlin.typeform.com/to/kCdnCgvC#product_id=GdK",
				label: "Feedback",
			},
			imprint: {
				href: "https://www.technologiestiftung-berlin.de/de/impressum/",
				label: "Impressum",
			},
			privacy: {
				href: "https://www.technologiestiftung-berlin.de/de/datenschutz/",
				label: "Datenschutz",
			},
		},
	},
	locationSearch: {
		placeholder: "Suche nach einer Adresse",
	},
	legend: {
		title: "Legende",
		greenTrees: "Versorgte Bäume",
		yellowTrees: "Mäßig versorgte Bäume",
		orangeTrees: "Gießbedürftige Bäume",
		grayTrees: "nicht dem Filter entsprechend",
	},
	navbar: {
		map: "Karte",
		profile: {
			sidebarLabel: "Profil",
			title: "Dein Profil",
			overview: {
				subtitle: "Deine Übersicht",
				irrigations: "Gießungen",
				liter: "Liter",
				adoptedTrees: "Adoptierte Bäume",
			},
			adoptedTrees: {
				subtitle: "Adoptierte Bäume",
				irrigationTimes: "Mal",
				irrigationAmount: "Liter",
				showAll: "Alle anzeigen",
				showLess: "Weniger anzeigen",
				noAdoptedTreesMessage:
					"Wenn Du einen Baum regelmäßig gießt, kannst Du ihn adoptieren. Deine adoptierten Bäume erscheinen hier in Deiner Profilübersicht.",
			},
			settings: {
				subtitle: "Profildetails",
				username: "Benutzername",
				yourUsername: "Dein Benutzername",
				editUsername: "Neuer Benutzername",
				placeholderUser: "Dein Benutzername",
				email: "E-Mail",
				yourEmail: "Deine E-Mail Adresse",
				editEmail: "Neue E-Mail Adresse",
				placeholderMail: "xyz@ts.berlin",
				updateEmailEmailSentTitle: "E-Mail gesendet!",
				updateEmailEmailSentMessage:
					"Wir haben an Deine neue E–Mail Adresse einen Bestätigungslink zum Ändern Deiner Email gesendet. Checke Dein Postfach!",
				password: "Passwort",
				changePassword: "Passwort ändern",
				newPassword: "Neues Passwort",
				passwordChangeConfirmationTitle:
					"Dein Passwort wurde erfolgreich geändert!",
				passwordChangeConfirmationMessage:
					'Klicke auf "OK" um zu Deinem Profil zu gelangen.',
				passwordChangeWithoutRecoveryLinkTitle:
					"Es ist ein Fehler aufgetreten.",
				passwordChangeWithoutRecoveryLinkMessage:
					"Hinweis: Diese Seite kann nur aufgerufen werden, wenn zuvor der Passwort-Zurücksetzen Link in der E-Mail angeklickt wurde.",
				passwordChangeWithoutRecoveryLinkLinkLabel: "Zurück zur Startseite",
				pleaseWait: "Einen Moment Geduld bitte...",
				deleteAccount: "Account löschen",
				confirmDelete: "Löschen",
				approve: "Fertig",
				checkInput: "Bitte überprüfe Deine Eingabe",
				usernameShould: "Dein Benutzername muss: ",
				usernameLength: "mindestens 3-50 Zeichen lang sein",
				onlyNumberAndLetters: "und nur aus Buchstaben oder Zahlen bestehen",
				usernameTaken: "Dieser Benutzername ist bereits vergeben",
				backToLogin: "zurück zum Login",
				register: "Registrieren",
				confirmEmailTitle: "Account bestätigen",
				confirmEmail: (email: string) =>
					`Überprüfe Dein E-Mail Postfach für ${email} nach einer E-Mail von "info@magdeburg-giesst.de" mit einem Link um Deinen Account zu bestätigen.`,
				existingAccount: "Du hast schon einen Account?",
				logIn: "Melde Dich an",
				passwordShould: "Dein Passwort muss enthalten:",
				passwordLength: "mindestens 8 Zeichen",
				passwordUpperAndLowerCase: "Klein- und Großbuchstaben",
				passwordSpecialChar: "mindestens ein Sonderzeichen",
				passwordNumber: "mindestens eine Zahl",
				logInShort: "Anmelden",
				missingAccount: "Du hast noch keinen Account?",
				registerNow: "Registriere Dich",
				forgotYourPassword: "Passwort vergessen?",
				ohNoforgotYourPassword: "Oh nein. Du hast Dein",
				passwordForgotten: "Passwort vergessen",
				resetPasswordEmailSentTitle: "E-Mail gesendet!",
				resetPasswordEmailSentMessage:
					"Wir haben Dir eine E-Mail zum Ändern Deines Passworts gesendet. Checke Dein Postfach!",
				clickHere: "Hier klicken",
				resetPassword: "Passwort zurücksetzen",
				invalidCredentials: "Falsches Passwort oder E-Mail Adresse",
				deleteAccountConfirm: "Willst Du Deinen Account wirklich löschen?",
				cancel: "Abbrechen",
				save: "Speichern",
				confirm: "OK",
			},
			logOut: "Ausloggen",
			showPassword: "Zeigen",
			hidePassword: "Verbergen",
		},
		info: "Info",
	},
	notFound: {
		title: "404 - Seite wurde nicht gefunden",
	},
	info: {
		infoTitel: "Info",
		about: {
			head: {
				question: "Über das Projekt",
				answer: `Die Folgen des Klimawandels, insbesondere die trockenen und heißen Sommer, belasten das Magdeburger Ökosystem. Unsere Stadtbäume vertrocknen und tragen langfristige Schäden davon: In den letzten Jahren mussten immer mehr Bäume gefällt werden und ihre Lebensdauer sinkt. Inzwischen wird die Bevölkerung regelmäßig zur Unterstützung aufgerufen, allerdings weitgehend unkoordiniert. Dies möchten wir ändern und mit diesem Projekt eine koordinierte Bürger*innenbeteiligung bei der Bewässerung städtischen Grüns ermöglichen.`,

				aboutUsTitle: "Über uns",
				aboutUsAnswer: `MAGDEBURG GIESST ist ein Projekt von [Code For Magdeburg](https://www.codefor.de/magdeburg), der [Baumfreunde Magdeburg](https://www.baumfreunde-md.de) und dem [Netz39 e.V.](https://www.netz39.de) Das Projekt wird unterstützt durch das CityLAB Berlin - ein Projekt der [Technologiestiftung Berlin](https://www.citylab-berlin.org/) - deren App [Gieß den Kiez](https://www.giessdenkiez.de/) die Basis für die Magdeburger App von MAGDEBURG GIESST bildet.`,
				press: `Sende Anfragen am besten an [info@magdeburg-giesst.de](mailto:info@magdeburg-giesst.de?subject=Magdeburg%20giesst%20Anfrage">info@magdeburg-giesst.de).`,
				communityTitle: "Community",
				communityAnswer:
					"Du möchtest Dich über das Gießen von Bäumen informieren, Pumpen melden oder Dich mit anderen aktiven Nutzer:innen austauschen? Dann tritt unserem Slack-Chat bei!",
				slackButton: "Zur Slack Community",
				feedback: `Du hast **Feedback** zu *MAGDEBURG GIESST*?

[Beantworte uns gerne ein paar Fragen](https://citylabberlin.typeform.com/to/kCdnCgvC#product_id=GdK)`,
			},
			qa: [
				{
					question: "Nützliche Links",
					answer: `[Gießen bei Trockenheit (Baumpflegeportal)](https://www.baumpflegeportal.de/baumpflege/trockenheit-duerre-wann-baeume-giessen/)

[Mein Baum für Magdeburg](https://www.magdeburg.de/Start/B%C3%BCrger-Stadt/Stadt/Aktionen/index.php?object=tx%7C37.9220.1)

[Baumfreunde Magdeburg](https://www.baumfreunde-md.de)

[Stadtbäume - Bedeutung und Herausforderungen in Zeiten des Klimawandels (HCU Hamburg)](https://www.hcu-hamburg.de/fileadmin/documents/REAP/files/Bildungsmaterial_Stadtbaeume_im_Klimawandel_2017.pdf)

[Funktionen von Stadtbäumen (Bund Naturschutz e.V.)](https://www.bund-naturschutz.de/natur-und-landschaft/stadt-als-lebensraum/stadtbaeume/funktionen-von-stadtbaeumen.html)`,
				},
				{
					question: "Datenquellen",
					answer: `Die Karte zeigt einen Großteil der Magdeburger Straßen- und Anlagenbäume (ca. 82.000; Stand: März 2025). Zusätzlich wird abgebildet, wie viel Niederschlag in den letzten 30 Tagen bei jedem Baum gefallen ist und ob diese in der Zeit bereits gegossen wurden. Aus verschiedenen Gründen sind leider noch nicht alle Magdeburger Stadtbäume aufgeführt. Wir arbeiten aber daran, die Datenlage zu verbessern und eine möglichst vollständige Darstellung des Magdeburger Baumbestandes zu erreichen. Die aktuellen Datenquellen sind:

Bäume: [Offene Verwaltungsdaten Magdeburg](https://www.magdeburg.de/B%C3%BCrger-Stadt/Verwaltung-Service/Offene-Verwaltungsdaten/index.php?NavID=37.906&object=tx|37.12819.1&La=1&)

Niederschlagsdaten: [Deutscher Wetterdienst](https://www.dwd.de/)

Pumpen: [Open Street Map](https://www.openstreetmap.de)`,
				},
				{
					question: "Partner und Unterstützer",
					answer: `Dieses Projekt wäre nicht möglich ohne die Unterstützung der wundervollen Leute der folgenden Einrichtungen:

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
				"Basierend auf dem regen Austausch unserer Community auf Slack & euren Rückmeldungen per Email und Telefon, haben wir ein kleines FAQ angelegt. Hier werden die am häuftigsten gestellten Fragen beantwortet.",
			qa: [
				{
					question: "Wie kann ich mitmachen?",
					answer: `
Informieren:

Neugierig, welcher Baum vor deiner Tür steht? Unsere interaktive Karte visualisiert fast 82.000 Straßen- und Anlagenbäume von Magdeburg. Wenn du mehr über einen Baum erfahren willst, navigiere und zoome dich zum gewünschten Standort und klicke auf den farbigen Punkt. Nun werden dir im Menüband rechts zahlreiche Informationen zum ausgewählten Baum angezeigt.

Bäume bewässern und adoptieren:

Du möchtest aktiv werden oder bist bereits aktiv am Gießen? Auf MAGDEBURG GIESST kannst du eintragen, ob und mit wie viel Wasser du einen Baum gegossen hast. Bäume können auch adoptiert werden. Die adoptierten Bäume erscheinen im eigenen Nutzerprofil und können schneller wiedergefunden werden. So können andere Nachbarn in der Umgebung sehen, welche Bäume ihre Aufmerksamkeit benötigen. Um Bäume zu bewässern und zu adoptieren, lege dazu zunächst ein Profil mit einer gültigen Email-Adresse an und logge dich im Anschluss ein. Nun kannst du deine Gieß-Aktionen entsprechend dokumentieren und sehen, ob und wie oft Bäume in deinem Kiez bereits von anderen Nutzer:innen gegossen wurden.

Vernetzen:

Über unseren öffentlichen [Slack Channel](https://join.slack.com/t/magdeburggiesst/shared_invite/zt-1tf5i2z3k-mTmk_PUBEOWuNWzDSNoH4w) kannst du dich mit anderen Gießer:innen austauschen und defekte Pumpen in deinem Kiez melden.`,
				},
				{
					question:
						"Was kann ich tun, wenn Bäume nicht richtig eingetragen sind?",
					answer:
						"Wir beziehen den Baum-Datensatz mit allen Attributen wie bspw. Adresse, Baumart und Pflanzjahr je Baum aus den Öffentlichen Verwaltungsdaten der Stadt Magdeburg. Das bereitgestellte Baumkataster basiert wiederum auf den aggregierten Daten des Eigenbetriebs Stadtgarten und Friedhöfe Magdeburg und dem Liegenschaftsservice. Es kann daher immer wieder vorkommen, dass Daten von Bäumen veraltet sind oder Eigenschaften der tagesaktuellen Realität abweichen. Leider können wir selbst keine Änderungen im Baumkataster vornehmen. Etwaige Abweichungen können nur direkt bei der zuständigen Behörde gemeldet werden. Einmal im Jahr veröffentlichen die Stellen aber ein aktualisiertes Baumkataster, das wir nach Veröffentlichung mit MAGDEBURG GIESST verknüpfen.",
				},
				{
					question: "Warum sollte ich aktiv werden und Bäume gießen?",
					answer: `Die langanhaltenden Dürre- und Hitzeperioden der letzten zwei Jahre haben dem Magdeburger Stadtgrün immens zugesetzt.
					
Der Eigenbetrieb Stadtgarten und Friedhöfe ist bereits aktiv, kommt allerdings mit dem Gießen während Magdeburger Hitze-Sommern nicht hinterher. Durch die Plattform möchten wir auch Bürger:innen die Möglichkeit geben, Bäumen gezielt auf Grundlage ihrer aktuellen Wasserversorgung zu helfen und sich zu informieren. Ziel ist es, möglichst viele Bäume durch nachbarschaftliches Engagement zu retten.`,
				},
				{
					question: "Wie gieße ich richtig?",
					answer: `Je nach Alter, Standort und Baumart benötigen Bäume unterschiedlich viel Wasser. Jungbäume (0-15 Jahre), benötigen mehr Wasser als mittelalte Bäume (15-40 Jahre). Altbäume (ab 40 Jahre) sind meist komplette Selbstversorger.

Da frisch gepflanzte Bäume bis zum Alter von fünf Jahren in der Regel vom Eigenbetrieb Stadtgarten und Friedhöfe mit Wasser versorgt werden, benötigen besonders die Bäume zwischen fünf und 15 Jahren unsere Aufmerksamkeit, beziehungsweise unser Wasser. Dies haben wir mit den Kennzeichnungen des geringen, mittleren oder hohen Wasserbedarfs hervorgehoben.

Angelehnt an das Berliner [Handbuch Gute Pflege](https://www.berlin.de/sen/uvk/natur-und-gruen/stadtgruen/pflegen-und-unterhalten/handbuch-gute-pflege/) empfehlen wir euch, lieber selten, dafür mit größeren Menge an Wasser zu gießen. Das Handbuch empfiehlt für frisch gepflanzte Bäume bis zu 200l pro Gießung. So sorgt ihr dafür, dass die Bodenfeuchte auch in der Tiefe erhöht wird. Im Endeffekt schaden aber auch kleinere Mengen gerade im Hochsommer nicht. Wichtig ist es, den ausgetrockneten Boden vor dem Gießen aufzulockern, sodass das Wasser in den Boden eindringen kann und nicht oberirdisch abläuft oder sich falsch anstaut. Auch zu empfehlen sind sogenannte Gießsäcke aus denen das Wasser nur sehr langsam austritt, kaum oberflächlich abläuft und somit kontinuierlich in den Boden sickert.`,
				},
				{
					question: "Wie gehe ich mit der Wasserknappheit um?",
					answer: `In Zeiten von Trockenheit und Wasserknappheit ist es besonders wichtig, sparsam mit Wasser umzugehen. Wenn Du Deinen Baum gießen möchtest, dann frage dich zunächst immer, welcher Baum den größten Bedarf hat. Gieße lieber seltener, dafür aber mit größeren Mengen Wasser. So wird der Baum dazu angeregt, tiefere Wurzeln zu bilden und ist besser gegen Trockenheit gewappnet.
					
Versuche das Wasser der öffentlichen Straßenpumpen, statt Trinkwasser aus der Hausleitung zu nutzen. Langfristig lohnt es sich, Regenwasser aufzufangen und in Regentonnen zu speichern. Nachbarschaftsinitiativen wie [Wassertanke](https://wassertanke.org/) helfen Euch bei derartigen Nachbarschaftsprojekten.`,
				},
				{
					question:
						"An wen kann ich mich wenden, wenn Pumpen kaputt oder beschädigt sind?",
					answer: `Für die Infrastruktur der Straßen, zu denen auch die öffentlichen Schwengelpumpen zählen, sind die jeweiligen Ämter der Stadt verantwortlich. Sollten Pumpen kaputt oder beschädigt sein, kann dort Reparaturbedarf gemeldet werden. Die Standorte der Pumpen in der Karte laden wir wöchentlich aus der Datenbank von Open Street Map. Wenn Ihr helfen wollt, die Daten zu verbessern, indem ihr zum Beispiel eine defekte Pumpe meldet, könnt ihr das in unserem [Slack Channel #pumpen-melden](https://app.slack.com/client/T052UAPPF7G/C052YPL8Q1K) tun. Die OSM-Community hat dann die Möglichkeit eure Informationen in die Datenbank einzutragen.`,
				},
				{
					question: "Wie wird mit technischen Problemen umgegangen?",
					answer: `Wir sind uns einiger technischen Hürden bewusst, sind aber auf eure Mithilfe angewiesen. Euer technisches Feedback und eure Fragen nehmen wir gerne in unserem [Slack Channel](https://join.slack.com/t/magdeburggiesst/shared_invite/zt-1tf5i2z3k-mTmk_PUBEOWuNWzDSNoH4w) oder per Mail entgegen. Wer sich in der „Tech-Welt” zu Hause fühlt, ist herzlich zur Mitarbeit in unserem [Open Source GitHub Repository](https://github.com/code-for-magdeburg/magdeburggiesst-2025) eingeladen und kann seine Issues oder Code Fixes direkt in das Repository kommentieren.`,
				},
				{
					question: "Warum lädt die Website nicht oder nur sehr langsam?",
					answer: `Wenn die Seite zum ersten Mal geöffnet wird, lädt der Browser knapp 82.000 Datenpunkte – das kann eine Weile dauern! Unabhängig davon, kann es zu leicht unterschiedlichen Darstellungen bei der Verwendung unterschiedlicher Browser kommen. Für die beste „Experience” empfehlen wir die Nutzung von Chrome oder Firefox Desktop. Die häufigsten Probleme lassen sich erfahrungsgemäß beseitigen, wenn der Browser nicht veraltet, respektive die neueste Version installiert ist und eine stabile Internetverbindung (LAN oder WLAN) besteht.
					
Die Nutzung über das Smartphone (Mobilfunknetz) kann zu Performance-Problemen (Seite lädt langsam) führen. Sollten wiederholt Probleme auftreten, könnt ihr diese in unserem [Slack Channel](https://join.slack.com/t/magdeburggiesst/shared_invite/zt-1tf5i2z3k-mTmk_PUBEOWuNWzDSNoH4w), per Mail oder via [GitHub Issue](https://github.com/code-for-magdeburg/magdeburggiesst-2025/issues) unter Angabe des benutzten Geräts, des Betriebssystems, des Browsers und Version des Browsers melden.`,
				},
				{
					question:
						"Was tun, wenn ich fälschlicherweise eine Gießung eingetragen habe?",
					answer:
						"Um eine Gießung rückgängig zu machen, weil bspw. stattdessen der Nachbarbaum oder zu einem anderen Tag gegossen wurde, klicke zunächst auf den Baum. Scrolle in der Seitenleiste des Baumes runter bis zur Ansicht der vergangenen Gießungen, klicke auf das Papierkorb-Symbol neben dem Eintrag, den du löschen möchtest und klicke auf „Löschen”, um zu bestätigen. Es können nur Gießungen gelöscht werden, die du selbst vorgenommen hast. Trage nach der Löschung die Gießung mit den richtigen Angaben (Anzahl an Litern und Zeitpunkt) ein.",
				},
				{
					question: "Ist das Prinzip auf andere Städte übertragbar?",
					answer: `Die „Gieß den Kiez” Plattform ist ein Open Source Software Projekt und läuft unter einer MIT Lizenz. Dementsprechend kann die Idee, aber auch der Quellcode für die Umsetzung in anderen Städten kostenlos genutzt und weiterentwickelt werden. Wenn Du Dich dafür interessierst, schau gerne in unserem [Open Source GitHub Repository](https://github.com/technologiestiftung/giessdenkiez-de) vorbei oder kontaktiere uns via Mail. Wir unterstützen Deine Stadt auch gerne bei der technischen Umsetzung mit [DeineStadtgießt](https://deinestadt.giessdenkiez.de/).`,
				},
				{
					question: "Ich habe immer noch eine Frage!",
					answer: `Das FAQ konnte Dir nicht weiterhelfen oder Du hast eine komplexere Anfrage? Dann schreib uns eine [E-Mail](mailto:info@magdeburg-giesst.de).`,
				},
				{
					question: "Warum werden nicht alle Magdeburger Bäume angezeigt?",
					answer:
						"MAGDEBURG GIESST baut auf dem Baumkataster auf. Das Baumkataster ist ein Verzeichnis der Stadt, in dem (Stadt-/Straßen- oder Park-)Bäume verwaltet werden und das durch den Eigenbetrieb Stadtgarten und Friedhöfe und dem Liegenschaftsservice bereitgestellt wird. Diese Behörden sind aber nicht für alle Magdeburger Bäume zuständig. Bäume auf Privatgrundstücken oder auf Grundstücken von Wohnungsgenossenschaften beispielsweise tauchen daher bei MAGDEBURG GIESST nicht auf.",
				},
			],
		},
		share: {
			title:
				"Teile MAGDEBURG GIESST mit Deinem Umfeld und hilf uns die Gieß-Community zu vergrößern:",
			content:
				"Auf MAGDEBURG GIESST kannst Du Dich über den Magdeburger Baumbestand erkundigen, durstige Bäume finden und eintragen, wann Du diese gegossen hast!",
			openSource:
				"MAGDEBURG GIESST ist ein [Open Source Projekt](https://github.com/code-for-magdeburg/magdeburggiesst-2025)!",
		},
		credits: {
			projectBy: "Ein Projekt der",
			fundedBy: "Gefördert durch",
		},
	},
	treeDetail: {
		title: "Bauminformationen",
		adoptIt: "Diesen Baum adoptieren",
		alsoAdoptedByOtherUsers: "Auch von anderen User:innen adoptiert",
		onlyAdoptedByOtherUsers: "Von anderen User:innen adoptiert",
		adoptLoading: "Baum wird adoptiert...",
		unadoptLoading: "Adoption wird aufgehoben...",
		isAdopted: "Du hast diesen Baum adoptiert",
		adoptHintTitle: "Baum adoptieren",
		adoptHint:
			"Wenn Du regelmäßig den gleichen Baum gießt, kannst Du diesen adoptieren. So findest Du ihn schnell in Deiner Profilübersicht wieder.",
		adoptErrorMessage:
			"Fehler beim Adoptieren des Baumes. Bitte versuche es erneut.",
		adoptLoginFirst: "Logge Dich ein um diesen Baum zu adoptieren",
		ageTitle: "Standalter",
		age: (age: number) => `${age === 1 ? "Jahr" : "Jahre"}`,
		ageUnknown: "Unbekannt",
		treeTypeUnknown: "Baumart unbekannt",
		managedBy:
			"Dieser Baum wird bereits vom Stadtgartenbetrieb versorgt und muss nicht gegossen werden.",
		waterNeed: {
			title: "Wasserbedarf",
			hintWinter:
				"Außerhalb der Vegetationszeit (März-Oktober) benötigen die Bäume kein Wasser, sie sind quasi im Winterschlaf.",
			hint: "Je nach Baumalter unterscheidet sich der Bedarf an Wasser.",
			needXLiters: (liters: string) => `Braucht ca. ${liters} Liter pro Monat`,
			needsOnlyOnDryDays: "Braucht nur an trockenen Tagen Wasser",
			waterManaged: "Versorgt, nur in trockenen Phasen bedürftig",
			winterSleep: "Die Bäume sind derzeit im Winterschlaf",
			managedByGroundwater: "Grundwasser",
			unknownTitle: "Wasserbedarf **unbekannt**",
			unknown:
				"Das Alter dieses Baumes ist unbekannt und daher auch sein Wasserbedarf. Vielleicht helfen Dir die weiteren Informationen für eine eigenständige Einschätzung.",
			unknownShort: "Unbekannt",
			seniorTitle: "Braucht nur in trockenen Phasen Wasser",
			seniorExplanation:
				"Ältere Bäume können sich in der Regel über das Grundwasser selbst versorgen, aber bei zunehmender Hitze freuen auch sie sich über zusätzliches Wasser.",
			liters: "Liter",
			watered: "gegossen",
			covered: "versorgt",
			rained: "Regen",
			stillMissing: "fehlen noch",
			dataOfLastXDays: "* Daten der letzen 30 Tage",
			manager: "vom Stadtgartenbetrieb",
			alreadyWateredByManager: "Bereits vom **Stadtgartenbetrieb versorgt**",
			alreadyWateredByGroundwater: "Über das **Grundwasser versorgt**",
			winterNeedsNoWater: "Benötigt aktuell kein Wasser",
			stillWaterXLiters: (liters: string) => `
Noch

**${liters} Liter**

gießen`,
			shouldBeWatered: "Sollte gegossen werden",
			sufficientlyWatered: "Momentan ausreichend bewässert",
			readMore: "Mehr anzeigen",
			ageAndWaterHintTitle: "Wasserbedarf und Standalter",
			ageAndWaterHint: `
Insbesondere junge Bäume brauchen in den ersten Jahren Wasser. Lieber seltener, aber dafür viel.

**Unter 5 Jahren**: Wir sind frische Jungbäume und unser Durst wird vom Stadtgartenbetrieb gestillt.

**5-15 Jahre**: In dem Alter werden wir nicht mehr in allen Stadtteilen von der Verwaltung bewässert und sind noch keine „Selbstversorger“. Wir freuen uns gerade in trockenen Zeiten über Wasser - lieber seltener, aber viel auf einmal (ca. 100-200l pro Monat).

**Ältere Bäume (15+ Jahre)**: Wir können uns über das Grundwasser selbst versorgen.
`,
			ageAndWaterHintWinter: `
Wenn die Bäume im Herbst zunehmend ihre Blätter verlieren, reduzieren sich auch ihre photosynthetische Prozesse und sie benötigen weniger Energie – und deswegen auch weniger Wasser.
Mit dem offiziellen Ende der Vegetationsperiode neigt sich deshalb auch die Gießsaison dem diesjährigen Ende zu. Ab März geht es dann wieder los, und zwar volle Kanne!

**Wasserbedarf während der Vegetationsperiode (März-Oktober)**:

`,
			ageAndWaterHintSpecialDistrict: (
				babyAgeLimit: number,
				district: string,
			) => `
Insbesondere junge Bäume brauchen in den ersten Jahren Wasser. Lieber seltener, aber dafür viel.

Der Bezirk ${district} hat uns zusätzliche Informationen zur individuellen Gießstrategie zur Verfügung gestellt.

**Unter ${babyAgeLimit} Jahren**: Wir sind frische Jungbäume und unser Durst wird vom bezirklichen Grünflächenamt gestillt.

**Ältere Bäume (${babyAgeLimit}+ Jahre)**: Wir können uns über das Grundwasser selbst versorgen.
`,
			close: "Weniger anzeigen",
			lastXDaysYLitersWater: (days: number, liters: string) =>
				`Die letzten ${days} Tage wurden **${liters} Liter gegossen**.`,
			lastXDaysYLitersRain: (days: number, liters: string) =>
				`In den letzten ${days} Tagen sind **${liters} Liter Regen** gefallen.`,
			iWatered: "Ich habe gegossen",
			loginToWater: {
				login: "Logge Dich ein",
				toWater: "um eine Gießung einzutragen",
			},
			submitWatering: "Gießung eintragen",
			wateredHowMuch: "Gegossene Liter",
			wateredHowMuchPlaceholder: "Menge in L",
			wateredWhen: "Wann?",
			waterSave: "Speichern",
			waterCancel: "Abbrechen",
			wateringSuccessful: "Deine Gießung wurde eingetragen!",
		},
		lastWaterings: {
			deletedAccount: "Deaktivierter Account",
			title: "Letzte Gießungen",
			last30Days: "Letzte 30 Tage",
			nothingLast30Days: "Keine Gießungen in den letzten 30 Tagen",
			before: "Vorherige",
			nothingBefore: "Keine vorherigen Gießungen",
		},
		problem: {
			title: "Problem melden",
			description:
				"Du hast einen Baumschaden entdeckt, oder die Baumscheibe wird fehlgenutzt? Teile es dem Ordnungsamt mit:",
			link: "Zum offiziellen Formular",
		},
		treeTypeInfos: [
			{
				id: "LINDE",
				title: "Linde (Tilia)",
				description:
					"Die Linde gilt seit Jahren als der berlintypische Straßenbaum. Mit einem Anteil von gut einem Drittel prägt sie den Straßenbaumbestand. Insgesamt lassen sich 10 verschiedene Arten unterscheiden. Bevorzugt gepflanzt wird die Winter-Linde (Tilia cordata), die als mittelgroßer Baum auch in schmaleren Straßen noch Raum findet. Die großkronige Kaiserlinde (Tilia intermedia) ist dagegen den weiträumigen Alleen vorbehalten.",
			},
			{
				id: "AHORN",
				title: "Ahorn (Acer)",
				description:
					"Die Gattung der Ahorne umfasst ca. 20% des Gesamtbestandes. Für den Standort „Straße” ist vor allem der Spitzahorn (Acer platanoides) geeignet. Die frühe Blüte und die bunte Herbstfärbung machen den Ahorn zu einer besonders beliebten Baumgattung.",
			},
			{
				id: "EICHE",
				title: "Eiche (Quercus)",
				description:
					"Der Anteil der Eichen beträgt rund 9% des Gesamtbestandes. In Berlin wird vor allem die Stiel-Eiche (Quercus robur) angepflanzt. Als Lichtbaum ist die Eiche nicht für enge Straßen geeignet. Die jüngsten Alleen im Parlaments- und Regierungsviertel wurden mit der sog. Spree-Eiche (Quercus palustris) bepflanzt, die sich u.a. durch ihre besonders schöne Herbstfärbung auszeichnet.",
			},
			{
				id: "PLATANE",
				title: "Platane (Platanus)",
				description:
					"Ein idealer Alleebaum für breite Straßen ist die Platane (Platanus acerifolia), die neben einer Höhe von 20 bis 30 m auch einen stattlichen Kronendurchmesser von 15 bis 20 m erreichen kann. Am Gesamtbestand haben die Platanen einen Anteil von etwa 6%. Die bekannteste und mit über 120 Jahren älteste Platanenallee in Berlin ist die Puschkinallee in Berlin-Treptow.",
			},
			{
				id: "KASTANIE",
				title: "Kastanie (Aesculus)",
				description:
					"Die Kastanie (Aesculus) hat einen Anteil von ca. 5% am Gesamtbestand, und belegt damit den fünften Platz unter den Berliner Straßenbäumen. Rosskastanien haben fünf- und mehrgliedrige Blätter, die an die Finger einer Hand erinnern; Esskastanien haben einzelne Blätter, die überdies deutlich gezackt sind.",
			},
			{
				id: "ROSSKASTANIE",
				title: "Rosskastanie (Aesculus hippocastanum)",
				description:
					"Die Rosskastanie (Aesculus hippocastanum) hat einen Anteil von ca. 5% am Gesamtbestand, und belegt damit den fünften Platz unter den Berliner Straßenbäumen. Rosskastanien haben fünf- und mehrgliedrige Blätter, die an die Finger einer Hand erinnern; Esskastanien haben einzelne Blätter, die überdies deutlich gezackt sind.",
			},
			{
				id: "ESCHE",
				title: "Esche (Fraxinus)",
				description:
					"Die Esche (Fraxinus) hat einen Anteil von ca. 3% am Gesamtbestand, und belegt damit den sechsten Platz unter den Berliner Straßenbäumen. Mit einer Wuchshöhe von bis zu 40 m zählt sie zu den höchsten Laubbäumen Europas.",
			},
			{
				id: "BIRKE",
				title: "Birke (Betula)",
				description:
					"Die Birke (Betula) hat einen Anteil von ca. 3% am Gesamtbestand. Obwohl die Birke als Pionierbaum sehr anspruchslos und wachsend auf jedem Boden ist, eignet sie sich als Straßenbaum weniger, da die Baumscheiben oft zu wenig Raum für die Flachwurzler bieten.",
			},
			{
				id: "ROBINIE",
				title: "Robinie (Robinia)",
				description:
					"Die Robinie (Robinia) hat einen Anteil von ca. 2% am Gesamtbestand. Sie wurde ab 1672 im Berliner Lustgarten als Parkbaum kultiviert und ist heute in ganz Berlin sehr häufig. Die Robinie stellt nur geringe Anforderungen an den Boden, und sie kann dank der Knöllchenbakterien an ihren Wurzeln Luftstickstoff bindenden und düngt damit den Boden auf.",
			},
			{
				id: "HASEL",
				title: "Hasel Baum (Corylus)",
				description:
					"Der Hasel Baum (Corylus) hat einen Anteil von ca. 2% am Gesamtbestand, und ist somit der neunt häufigste Straßenbaum in Berlin. Die Haselnuss wächst als Strauch oder kleiner Baum bis zu 6 m hoch.",
			},
			{
				id: "HAINBUCHE",
				title: "Hainbuche (Carpinus)",
				description:
					"Der Anteil der Hainbuchen (Carpinus) beträgt rund 2% des Gesamtbestandes. Der Baum erreicht eine Höhe von bis zu 25 m. Die Krone ist erst leicht kegelförmig und später weit ausladend.",
			},
			{
				id: "PAPPEL",
				title: "Pappel (Populus)",
				description:
					"Die Pappel (Populus) hat einen Anteil von ca. 2% am Berliner Gesamtbestand. Sie haben eiförmige bis dreieckige, teils herzförmige Laubblätter.",
			},
			{
				id: "ULME",
				title: "Ulme (Ulmus)",
				description:
					"Der Anteil der Ulmen (Ulmus) beträgt rund 2% des Gesamtbestandes. Es gibt bei uns drei der weltweit 45 Arten dieses sommergrünen Laubbaumes: die Bergulme, die Feldulme und die Flatter-Ulme. Sie kommt mit einer Höhe von bis zu 600 Metern vor und kann 250 Jahre alt werden.",
			},
		],
		treeTypeInfoTitle: "Baumsteckbrief",
	},
	filter: {
		title: "Filter",
		publicPumps: "Öffentliche Pumpen",
		myAdoptedTrees: "Meine adoptierten Bäume",
		allAdoptedTrees: "Adoptierte Bäume",
		lastWateredTrees: "Zuletzt gegossene Bäume",
		treeAge: "Baumalter",
		show: "Anzeigen",
		reset: "Zurücksetzen",
		treeAgeTitle: "Alterspanne der Bäume",
		years: "Jahre",
	},
	common: {
		defaultErrorMessage:
			"Ups, da ist etwas schief gelaufen. Bitte versuche es erneut.",
	},
	contact: {
		dialogTitle: (contactName: string) =>
			`**Sende eine E-Mail an *${contactName}***`,
		dialogDetail: (contactName: string, userMail: string) =>
			`Die E-Mail an *${contactName}* enthält automatisch Deine E-Mail-Adresse (*${userMail}*) sowie Deine Textnachricht:`,
		dialogPlaceholder: "Beschreibe kurz, warum Du Dich vernetzen möchtest...",
		dialogCancel: "Abbrechen",
		dialogSubmit: "Senden",
		dialogAlreadyContactedError: (contactName: string) =>
			`Du hast *${contactName}* bereits eine Kontaktanfrage gesendet.`,
		dialogAlreadyContactedExplanation:
			"Du hast dieser Person bereits eine Kontaktanfrage gesendet. Eine erneute Anfrage ist nicht möglich.",
		genericErrorTitle: "Kontaktanfrage nicht möglich",
		genericError: `Ups, da ist etwas schief gelaufen. Bitte versuche es erneut.`,
		dialogSuccess: (contactName: string) =>
			`Die Kontaktanfrage an *${contactName}* wurde versendet.`,
		dailyLimitError: "Tageslimit für Kontaktanfragen erreicht.",
		dailyLimitExplanation:
			"Du hast das Tageslimit von 3 Kontaktanfragen erreicht. Bitte versuche es morgen erneut.",
		containsUrlHint:
			" Bitte beachte, dass Deine Nachricht keine Links enthalten darf.",
		messageTooLongError: "Die Nachricht darf max. 200 Zeichen lang sein.",
		messageRestrictionsHint: (maxLength: number, message: string) =>
			`Noch ${Math.max(0, maxLength - message.length)} Zeichen übrig.`,
		loginFirst: "Einloggen für Kontaktanfrage",
		loginFirstReason:
			"Du kannst Personen nur eine Kontaktanfrage stellen, wenn Du eingeloggt bist.",
		loginFirstAction: "Logge Dich ein",
		confirm: "Alles klar!",
	},
	pumps: {
		title: "Öffentliche Straßenpumpe",
		status: "Status",
		lastCheck: "Letzter Check",
		update: "Status in OpenStreetMap aktualisieren",
		working: "Funktionsfähig",
		defect: "Defekt",
		unknown: "Unbekannt",
	},
	splash: {
		headline:
			"Die Magdeburger Stadtbäume leiden unter Trockenheit und Du kannst ihnen helfen!",
		subheadlineWinter: `Derzeit sind die Bäume quasi im Winterschlaf und benötigen kein zusätzliches Wasser.
**Ab März startet die Gießsaison dann wieder, und zwar volle Kanne!**`,
		subheadline:
			"Erkundige Dich über den Wasserbedarf der Bäume in Deiner Nachbarschaft, adoptiere den Baum vor Deiner Haustür und werde Teil der aktiven Gieß-Community in Magdeburg!",
		actionTitle: "Los geht's",
		actionTitleWinter: "Erkunden!",
		discoverTitle: "Entdecken",
		discoverContent:
			"Die Karte visualisiert über 80.000 Stadtbäume und zeigt Informationen zu Art, Alter und Wasserbedarf an. Nutze die Filter- und Suchfunktionen, um schnell einen Überblick zu erhalten.",
		waterTitle: "Gießen",
		waterContent:
			"Schnapp Dir eine Gießkanne und werde Teil der Gieß-Community! Bereits über einhundert Aktive haben sich für die Bäume von Magdeburg zusammengeschlossen und tragen ihre Gießungen regelmäßig ein.",
		adoptTitle: "Adoptieren",
		adoptContent:
			"Durch das Adoptieren eines Baumes - oder auch mehrerer - lässt Du Deine Nachbarschaft wissen, dass für diese Bäume gesorgt wird. So gelingt ein koordiniertes Engagement.",
		networkTitle: "Vernetzen",
		networkContent:
			"Tritt unserem Slack-Chat bei, um Dich mit der Gieß-Community zu vernetzen, Fragen auszutauschen und die Bewässerung in Deinem Kiez abzustimmen.",
		questionHeadline: "Gieß den Kiez auch in Deiner Stadt?",
		questionSubheadline:
			"Städte wie Leipzig, Magdeburg und Co. haben sich bereits erfolgreich der Gieß-Welle angeschlossen! Ist Deine Stadt die nächste?",
		discoverMoreTitle: "Erfahre mehr!",
		letsGo: "Los geht's",
	},
	loading: {
		mapLoading:
			"Wir laden gerade über 82.000 Bäume aus dem Magdeburger Baumbestand.",
		treeLoading: "Lade Bauminformationen...",
	},
	stats: {
		title: "Statistiken Magdeburg",
		subtitle: "MAGDEBURG GIESST in Zahlen",
		streetTrees: "Stadtbäume",
		publicPumps: "Öffentliche Pumpen",
		activeUsers: "Aktive Gießer:innen",

		backToFront: "zurück",
		wateringsStat: {
			title: "Gießungen",
			unit: "mal",
			legend: "Anzahl der Gießungen",
			hint: (currentYear) => `wurde im Jahr ${currentYear} gegossen.`,
			backContent: `Die Gießaktivität variiert in den Magdeburger Stadtteilen je nach ehrenamtlichem Engagement. In einigen Stadtteilen haben sich engagierte Anwohner:innen bereits zu Gießgruppen organisiert ([Slack Community](https://join.slack.com/t/magdeburggiesst/shared_invite/zt-1tf5i2z3k-mTmk_PUBEOWuNWzDSNoH4w)).`,
		},
		wateringBehaviorStat: {
			title: "Gießverhalten",
			unit: "Liter",
			legend: `∑ Gegossene Liter pro Monat
`,
			watered: "gegossen",
			rain: "Regen",
			hint: () => `wurden insgesamt schon seit 2020 gegossen.`,
			backContent: `Tausende Liter Wasser wurden bereits ehrenamtlich gegossen! 
		
“Je mehr desto besser” gilt jedoch nicht immer angesichts immer größerer Wasserknappheit. Und das weiß die Magdeburger Gieß-Community natürlich, und ist daher hauptsächlich dann aktiv wenn die Bäume tatsächlich durstig sind: während der  Vegetationsperiode (April-Oktober) in besonders heißen trockenen Jahren. 

Datenquelle: [Wetterdaten (DWD)](https://opendata.dwd.de/)`,
		},
		wateringAmountStat: {
			title: "Gießvolumen",
			unit: "Liter",
			legend: "Ø Liter pro Jahr",
			hint: (currentYear) =>
				`werden ${currentYear} durchschnittlich pro Gießung eingetragen.`,
			backContent: `“Je mehr desto besser” gilt hier eingeschränkt: viel auf einmal, aber nicht zu oft. Und auch das weiß die aktive Community bereits.

Eine Gießung sollte eher mehr als weniger Liter auf einmal beinhalten, damit sich das Wurzelwerk der durstigen Jungbäume nach unten ausbilden kann. 

Aber Achtung! Jungbäume können auch überwässert werden. Mehr Informationen zur [Bewässerungsempfehlung für Stadtbäume](https://www.berlin.de/sen/uvk/natur-und-gruen/stadtgruen/stadtbaeume/waessern-von-stadtbaeumen/).`,
		},
		treeSpeciesStat: {
			title: "Baumarten",
			unit: "Baumarten",
			hint: () => `stehen in Magdeburg.`,
			other: "Andere",
			legend: "Anteile Magdeburger Baumbestand",
			backContent: `Magdeburg ist vielfältig - inklusive der Bäume!

Diese Übersicht zeigt die zwanzig häufigsten Arten, jeweils zusammengefasst nach der übergreifenden Gattung.

Die MAGDEBURG GIESST Karte zeigt die volle Pracht, und somit über 80.000 Stadtbäume, mit Infos zu Art, Alter und Wasserbedarf. Nutze die Filter und Suche, um mehr über die Bäume in Deiner Nachbarschaft zu erfahren.

Datenquelle: [Magdeburger Baumkataster](https://www.magdeburg.de/B%C3%BCrger-Stadt/Verwaltung-Service/Offene-Verwaltungsdaten/index.php?NavID=37.906&object=tx|37.12819.1&La=1&)`,
		},
		adoptionStat: {
			title: "Baumadoptionen",
			unit: "Bäume",
			hint: () => `sind adoptiert.`,
			legend: "der adoptierten Bäume sind besonders durstig.",
			backContent: `Einen Baum auf MAGDEBURG GIESST zu adoptieren, zeigt, dass sich regelmäßig um diesen gesorgt wird und erleichtert somit die nachbarschaftliche Koordination. Dutzende Bäume können sich also bereits glücklich schätzen.

Durstig sind vor allem Jungbäume (unter 15 Jahren). Diese werden in der Regel mind. bis zum fünften Jahr vom Stadtgartenbetrieb gegossen. “Besonders durstig” sind somit die **5 - 15 Jahre** alten Bäume.`,
		},
		gdKSalesPitch: `*Gieß den Kiez* für **Deine Stadt**?

[Erfahre mehr!](https://deinestadt.giessdenkiez.de/)`,
	},
};
