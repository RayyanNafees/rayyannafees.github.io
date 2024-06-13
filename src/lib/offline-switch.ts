function setOffline(checked: boolean) {
	
	const offlineSwitch = document.getElementById(
		"offline-switch",
	) as HTMLInputElement;
	offlineSwitch.className = checked ? "checked" : "";

	if (checked) {
		localStorage.setItem("offline", "true");
		navigator.serviceWorker
			.register("/sw.js")
			.then((reg) =>
				console.log(
					"Service Worker registration successful with scope: ",
					reg.scope,
				),
			)
			.catch((err) => {
				const checkbox = document.getElementById(
					"offline-checkbox",
				) as HTMLInputElement;
				checkbox.checked = false;
				offlineSwitch.className = "";
			});
	} else {
		localStorage.setItem("offline", "false");
		navigator.serviceWorker
			.getRegistration("/sw.js")
			.then((reg) => reg?.unregister())
			.then((res) => console.log("Unregistered", res))
			.catch(console.error);
	}
}

function updateSwitchFromStorage() {
	const offlineSwitch = document.getElementById(
		"offline-switch",
	) as HTMLInputElement;
	const offline = localStorage.getItem("offline");
	offlineSwitch.className = offline === "true" ? "checked" : "";

	const checkbox = document.getElementById(
		"offline-checkbox",
	) as HTMLInputElement;
	checkbox.checked = offline === "true";

	if (!offline && "serviceWorker" in navigator) {
		// Update the switch if offline is not in localstorage but site is indeed offline
		navigator.serviceWorker.getRegistration("/sw.js").then((reg) => {
			if (reg) {
				offlineSwitch.className = "checked";
				const checkbox = document.getElementById(
					"offline-checkbox",
				) as HTMLInputElement;
				checkbox.checked = true;
				localStorage.setItem("offline", "true");
			}
		});
	}
}

export { setOffline, updateSwitchFromStorage }