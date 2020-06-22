import Head from 'next/head';
import Layout from '../components/layout';

const Watch = () => (
	<Layout>
		<div className="container">
			<style jsx>
				{`
					@import 'https://fonts.googleapis.com/css2?family=Lato&family=Work+Sans&family=Lexend+Tera&family=Archivo+Black&display=swap';
					.container {
						display: flex;
						flex-wrap: wrap;
						flex-shrink: 1;
						box-sizing: border-box;
						font-size: 16px;
                        width: 100vw;
                        height: 100vh;
						background: black;
						overflow: hidden;
					}
					header {
						display: flex;
						width: 100vw;
						flex-direction: column;
						padding: 0;
						background: black;
						margin: 0;
						box-sizing: border-box;
						animation: slide-left 1s;
                    }
                    video{
                        width: 100%;
                        height: 100%;
                    }

				`}
			</style>
			<Head>
				<script src="https://kit.fontawesome.com/6f92a9206c.js" crossOrigin="anonymous" />
				<meta name="description" content="" />
				<title>Burning Man</title>
			</Head>
			<header>
				<div className="content">
					<video
						id="my-video"
						className="video-js"
						controls
                        preload="auto"
                        >
						<source src="https://mattemmi.s3.amazonaws.com/1767551805.mp4" type="video/mp4" />
					</video>
				</div>
			</header>
		</div>
	</Layout>
);

export default Watch;
