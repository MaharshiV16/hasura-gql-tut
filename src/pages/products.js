import React from "react";

import { List, Datagrid, TextField, Create, SimpleForm, TextInput } from "react-admin";

export const UserList = (props) => {
	return (
		<List {...props}>
			<Datagrid>
				<TextField source="id" />
				<TextField source="first_name" />
				<TextField source="last_name" />
				<TextField source="email" />
			</Datagrid>
		</List>
	);
};

export const UserCreate = (props) => {
	return (
		<Create {...props}>
			<SimpleForm>
				<TextInput label="Enter first name" source="first_name" />
				<TextInput label="Enter last name" source="last_name" />
				<TextInput label="Enter email" source="email" />
				<TextInput label="Enter auth0 id" source="auth0_id" />
			</SimpleForm>
		</Create>
	);
};
