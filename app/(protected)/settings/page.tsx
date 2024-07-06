"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
import { signOut } from "next-auth/react";

const SettingsPage = () => {
	const user = useCurrentUser();

	const onClick = () => {
		signOut();
	};
	return (
		<div className="bg-white p-10 rounded-xl">
			<form>
				<button onClick={onClick} type="submit">
					Sign Out
				</button>
			</form>
		</div>
	);
};

export default SettingsPage;
