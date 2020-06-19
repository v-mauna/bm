const Awards = () => (
	<div className="container">
		<style jsx>
			{`
				@import 'https://fonts.googleapis.com/css2?family=Lato&family=Work+Sans&family=Lexend+Tera&family=Archivo+Black&display=swap';
				.container {
					display: flex;
					flex-direction: column;
					flex-wrap: wrap;
					box-sizing: border-box;
					font-size: 16px;
                    width: 100vw;
                    margin: auto;
					line-height: 1.5em;
				}

				.laurels {
                    display: flex;
                    flex-wrap: wrap;
					letter-spacing: 3px;
					width: 100vw;
					height: auto;
					align-content: center;
                    justify-content: center;  
				}

				.laurels img {
					width: 180px;
					height: 140px;
                    padding: 2em;;
                }
                .laurels img:first-child{
                    margin-left: 2.5%;
                }
			`}
		</style>
		<section>
			<div className="laurels">
				<img
					src="https://mattemmi.s3.amazonaws.com/AWARD+WINNER+-+NO+AR+Drone+Film+Fest+Brazil+-+2019.png"
					alt="No AR Drone Film Festival - Brazil Laurel"
				/>
				<img
					src="https://mattemmi.s3.amazonaws.com/BEST+DRONE+-+New+Media+Film+Festival+-+2019.png"
					alt="2019 New Media Festival - Best Drone Laurel "
				/>
				<img
					src="https://mattemmi.s3.amazonaws.com/OFFICIAL+SELECTION+-+New+Vision+International+Film+Festival+-+2019.png"
					alt="New Vision International Film Festival - Official Selection 2019"
				/>
				<img
					src="https://mattemmi.s3.amazonaws.com/OFFICIAL+SELECTION+-+Oaxaca+FilmFest+-+2019.png"
					alt="Oaxaca Film Festival - Official Selection 2019"
				/>
				<img
					src="https://mattemmi.s3.amazonaws.com/OFFICIAL+SELECTION+-+Shorts+On+Tap+-+2019.png"
					alt="Shorts On Tap Film Festival - Official Selection 2019"
				/>
				<img
					src="https://mattemmi.s3.amazonaws.com/TOP+50+-+PEUGEOT+Drone+Film+Festival+-+2019.png"
					alt="Peugeot Drone Film Festival - Top 50 Selection 2019"
				/>
                <img
					src="https://mattemmi.s3.amazonaws.com/WINNER+NEWS++DOCS+-+New+York+City+Drone+Film+Festival+-+2019.png"
					alt="New York City Drone Film Festival - Winner - News Docs 2019"
				/>
			</div>
		</section>
	</div>
);

export default Awards;
