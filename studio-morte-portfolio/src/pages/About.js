import Footer from "./../components/Footer";
import aboutMe from "./../images/about-me.jpg";
import aboutMeMobile from "./../images/about-me-mobile.jpg";

function About() {
	return (
		<>
			<section className="about__container">
				<img
					className="about__image--desktop"
					src={aboutMe}
					alt="Rachael cuddles a stuffed unicorn"
				/>
				<img
					className="about__image--mobile"
					src={aboutMeMobile}
					alt="Rachael cuddles a stuffed unicorn"
				/>

				<div className="about__content written">
					<h1 className="m">
						Hey, I'm Rachael - a passionate creative with a love of cats, carbs,
						and caffeine. I have experience in web design, web development, UX
						design, and QA testing.
					</h1>
					<p>
						Throughout 2022 I've had the incredible opportunity to intern at
						Humaan and in 2021 claimed first place for 'Best Overall Design' in
						the Curtin Creative Jam. In 2022 I received recognition for being an
						outstanding New To Curtin mentor and previously secured a spot on
						the Curtin University Vice-Chancellors list.
					</p>
					<p>
						I have an endless desire to learn and if there's one thing for
						certain, you'll always find me busy doing something. Ultimately I
						want to design for a better, brighter future and create meaningful,
						memorable experiences.
					</p>
				</div>

				<Footer />
			</section>
		</>
	);
}

export default About;
