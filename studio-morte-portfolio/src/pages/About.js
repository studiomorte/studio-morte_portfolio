import Footer from "./../components/Footer";

function About() {
	return (
		<>
			<section className="about__container">
				<div className="about__inner">
					<div className="about__photo"></div>

					<div className="about__content">
						<h1 className="brand-display xxl">hey!</h1>
						<p>
							I'm Rachael - a passionate creative with a love of cats, carbs,
							and caffeine. I have experience in web development, web design,
							UX, and QA testing.
						</p>
						<p>
							Creative Development is of particular interest to me and I aim to
							delve deeper into web animation with a focus on accessibility
							standards. I love to work in teams with quirky, passionate people
							who share a desire to create exceptional digital products.
							Ultimately, I want to design for a better, brighter future and
							create meaningful, memorable experiences.
						</p>
						<p>
							During my time as a student at Curtin University I received
							various awards including: the DIGEX Industry Award from Equ
							(2022), 1st Place for Best Overall Design in the Curtin Creative
							Jam (2021), Admission to the Vice-Chancellors List in 2019, and
							various Letters of Commendation and mentoring certificates.
						</p>
						<p>
							In my down time you'll find me toying with various hobbies
							including Warhammer, sewing, drawing, and playing RuneScape. In
							2021 I won a local award for my Warhammer miniature painting. I
							also love watching Star Trek, cuddling my cats, and staying cozy
							in bed during storms.
						</p>
						{/* <p className="bold-italic">
							I'm currently looking for work. <br />
							Keen to chat? Please get in touch!
						</p> */}
						<p className="bold-italic">Keen to chat? Please get in touch!</p>
					</div>
				</div>
				<Footer />
			</section>
		</>
	);
}

export default About;
