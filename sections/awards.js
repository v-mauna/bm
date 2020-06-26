import Blue from '../images/Blue2Blue.png'
import NewMedia from '../images/NewMedia.png'
import NYCDFF from '../images/NYCDFF.png'
import KFF from '../images/KFF.jpg'

const Awards = () => (
	<div>
		<style jsx>
			{`
				@import 'https://fonts.googleapis.com/css2?family=Lato&family=Work+Sans&family=Lexend+Tera&family=Archivo+Black&display=swap';
				.laurels {
                    display: flex;
                    flex-wrap: wrap;
					letter-spacing: 3px;
					width: 100vw;
					margin-top: 0;
					height: auto;
					justify-content: center;
					border-bottom: 1px solid black;
				}
				.nycDff{
					width: 100vw;
					height: auto;
					margin: 0;
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
				}
				#nycDff{
					width: 250px;
					height: 170px;
					margin: 0;
				}
				.laurels img {
					position: relative;
					width: 180px;
					padding: .5em;
					height: 140px;
					
                }
                .laurels img:first-child{
                    margin-left: 2.5%;
				}
				.laurels img:last-child{
                    margin-bottom: 50px;
                }
			`}
		</style>
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
					alt="New York City Drone Film Festival - Winner - News and Documentary - 2019"
				/>
				<img
					src={Blue}
					alt="Blue2Blue Drone Film Festival - Finalist - 2019"
				/>
			</div>
	</div>
);

export default Awards;