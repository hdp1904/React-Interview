import { Container, Divider, List, ListItemButton, ListItemText, Typography } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';

export default function Home() {
	// noinspection HtmlUnknownTarget
	return <Container sx={{ pt: 2 }}>
		<Typography variant='h5'>Invoiss Interview</Typography>
		<List>
			<Link href='/question1' passHref>
				<ListItemButton component='a'>
					<ListItemText>Question 1</ListItemText>
				</ListItemButton>
			</Link>
			<Divider/>
			<Link href='/question2' passHref>
				<ListItemButton component='a'>
					<ListItemText>Question 2</ListItemText>
				</ListItemButton>
			</Link>
			<Divider/>
			<Link href='/question3' passHref>
				<ListItemButton component='a'>
					<ListItemText>Question 3</ListItemText>
				</ListItemButton>
			</Link>
			<Divider/>
			<Link href='/question4' passHref>
				<ListItemButton component='a'>
					<ListItemText>Question 4</ListItemText>
				</ListItemButton>
			</Link>
		</List>
		<Typography>
			Write your code in the respected file in the repository
		</Typography>
	</Container>;
}
