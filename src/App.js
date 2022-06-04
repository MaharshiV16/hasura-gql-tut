import React from "react";
import { useEffect, useState } from "react";

// admin imports
import { Admin, Resource } from "react-admin";
import { buildHasuraProvider } from "ra-data-hasura";

// pages
import { UserList, UserCreate } from "./pages/products";

const App = () => {
	const [dataProvider, setDataProvider] = useState(null);

	useEffect(() => {
		const buildDataProvider = async () => {
			const dataProviderHasura = await buildHasuraProvider({
				clientOptions: {
					uri: "https://tutorial-project-ra.hasura.app/v1/graphql",
				},
			});
			setDataProvider(() => dataProviderHasura);
		};
		buildDataProvider();
	}, []);

	if (!dataProvider) return <p>Loading...</p>;

	return (
		<Admin dataProvider={dataProvider}>
			<Resource name="users" list={UserList} create={UserCreate} />
		</Admin>
	);
};
export default App;
