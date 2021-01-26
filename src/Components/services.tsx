import { Button, Grid, Paper, Typography } from '@material-ui/core';

import React from 'react';
import ServiceCard from './service-card';

export default function Services(props: any) {
	return (
		<Grid container spacing={3} justify='center'>
			<Grid item lg={7}>
				<ServiceCard
					image='https://static.s123-cdn-static.com/uploads/1980551/800_5700fe9d754d9.jpg'
					heading='MÅL'
					text='MÅLSÆTNING: Vores målsætning er at være det fleksible gulvfirma, som sikre vores kunder den optimale service og kvalitet. Samt at kunne levere et kvalitetsarbejde til konkurrencedygtige priser.'
					buttonText='Læs mere'
				/>
				<ServiceCard
					image='https://static.s123-cdn-static.com/uploads/1980551/800_5c83d4bac8c49.jpg'
					heading='DÆKNINGSOMRÅDE'
					text='Vi dækker hele Danmark'
					buttonText='Læs mere'
					// variant='image-right'
				/>
				<ServiceCard
					image='https://static.s123-cdn-static.com/uploads/1980551/800_5c842e0e5ae5d.jpg'
					heading='Gode råd'
					text='Gode råd og faglig ekspertise Vi vil gerne imødekomme dine ønsker og krav på den bedst mulige måde. Derfor er vores arbejde ikke afsluttet, før du er 100% tilfreds. Vi er klar til at aflægge dig et besøg og inspicere dit gulv, for at afgøre, hvilken behandlingsform, der bedst kan betale sig i netop dit tilfælde. Her vil du modtage gode fifs til pleje af dit gulv i fremtiden, ligesom du under behandlingsforløbet vil modtage faglig rådgivning. Som medlem af Dansk Byggeri lever vi op til kravene om god kundeservice og levering af kvalitetsarbejde. Udførelsen foretages naturligvis altid til aftalt tid og pris.'
					buttonText='Læs mere'
				/>
				<ServiceCard
					image='https://static.s123-cdn-static.com/uploads/1980551/800_5c843748d80b3.jpg'
					heading='Vægbeklædning'
					text='Vi udfører alt slags malerarbejde Vi udfører alt slags malerarbejde, også spartling, vægbeklædning, maling af træværk samt farverådgivning – både for private, virksomheder og det offentlige. [Y. A] Den Professionel Gulvmand Malerfirma benytter vi kun materialer af høj kvalitet, hvilket sikrer et holdbart og smukt resultat med lang levetid. [Y. A] Den Professionele Gulvmand følger altid tingene til dørs, og vi forlader aldrig arbejdsstedet, før alting er i orden. Hvis du har spørgsmål er du altid velkommen til at kontakte os. Naturligvis også hvis du ønsker yderligere oplysninger om en specifik arbejdsopgave'
					buttonText='Læs mere'
					variant='image-right'
				/>
			</Grid>
		</Grid>
	);
}
