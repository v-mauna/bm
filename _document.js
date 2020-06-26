import Document, { HTML, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<HTML lang="en">
				<Head>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
					/>
					  <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
					<meta name="description" content="" />
				</Head>
				<body>
					<Main />
					<NextScript />
					<script src="https://unpkg.com/aos@next/dist/aos.js" />
					<script>AOS.init();</script>
				</body>
			</HTML>
		);
	}
}

export default MyDocument;
