import NYCDFF from '../images/NYCDFF.png' 
import NewMedia from '../images/NewMedia.png'
import Blue2Blue from '../images/Blue2Blue.png'
import BgImg from '../images/Untitled.jpg'
const Awards = () => (
	<div className="container">
		<style jsx>
			{`
				.container {
					display: flex;
					flex-direction: column;
					flex-wrap: wrap;
					box-sizing: border-box;
					width: 100vw;
					height: auto;
                    margin: auto;
				}

				.laurels {
                    display: flex;
                    flex-wrap: wrap;
					min-width: 100vw;
					padding: 2em;
					height: 300px;
					background-color: rgb(230,230,230);
					background:url(${BgImg});
					background-size: cover;
					background-repeat: no-repeat
				}

				.laurels img {
					width: 180px;
					height: 140px;
                }
                .laurels img:first-child{
                    margin-left: 2.5%;
				}
				@media(max-width: 700px){
					.laurels{
						background-size:contain;
						height:100px;
						width: 100vw;
					}
				}
			`}
		</style>
		<section>
			<div className="laurels">
				
			</div>
		</section>
	</div>
);

export default Awards;
