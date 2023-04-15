import React from "react";
import Footer from "./../components/Footer";
import ProjectSwiper from "../components/ProjectSwiper";
import BulletList from "../components/BulletList";
import LinkBlock from "../components/LinkBlock";

/* IMAGES */
import headerImg from "./../images/stauntonv3.jpg";
import featureImg from "./../images/staunton1.jpg";
import brandLogo from "./../images/staunton-logo.png";
import persona1 from "./../images/persona-jason.jpg";
import persona2 from "./../images/persona-cathy.jpg";
import persona3 from "./../images/persona-heather.jpg";
import ideation from "./../images/staunton-ideation.jpg";
import wireframe1 from "./../images/staunton-wireframes1.jpg";
import wireframe2 from "./../images/staunton-wireframes2.jpg";
import mockup1 from "./../images/staunton-mockup1.jpg";
import mockup2 from "./../images/staunton-mockup2.jpg";

function Staunton() {
	const personas = [
		{ id: "slide1", imageUrl: persona1, alt: "Jason Winters persona" },
		{ id: "slide2", imageUrl: persona2, alt: "Cathy Andersen persona" },
		{
			id: "slide3",
			imageUrl: persona3,
			alt: "Heather Staunton client profile",
		},
	];

	const drafts = [
		{
			id: "slide1",
			imageUrl: ideation,
			alt: "photo of hand drawn ideation steps",
		},
		{
			id: "slide2",
			imageUrl: wireframe1,
			alt: "screenshot of desktop wireframes of initial design",
		},
		{
			id: "slide3",
			imageUrl: wireframe2,
			alt: "screenshot of mobile wireframes of initial design",
		},
	];

	const mockups = [
		{
			id: "slide1",
			imageUrl: mockup1,
			alt: "screenshot of original high-fidelity desktop design",
		},
		{
			id: "slide2",
			imageUrl: mockup2,
			alt: "screenshot of new high-fidelity desktop design",
		},
	];

	const projectGoals = [
		{
			id: 1,
			copy: "Create an aesthetically pleasing design that leverages white space to convey the 'feeling' that the user is browsing through a physical gallery",
		},
		{
			id: 2,
			copy: "Feature artworks and photography as key structural elements of each page, creating an editoral style design",
		},
		{
			id: 3,
			copy: "Utilise subtle animations to engage users",
		},
		{
			id: 4,
			copy: "Strategically plan page navigation to limit clicks and encourage engagement",
		},
	];

	const topLinks = [
		{
			id: 1,
			link: "https://www.figma.com/file/BSzPFzFGqQiWPlmDEri3DE/Staunton-Gallery?node-id=727%3A4868",
			icon: "bxl:figma",
			title: "Figma Design",
		},
		{
			id: 2,
			link: "https://www.figma.com/proto/BSzPFzFGqQiWPlmDEri3DE/Staunton-Gallery?node-id=727%3A5042&scaling=scale-down&page-id=727%3A4868&starting-point-node-id=727%3A5042",
			icon: "bxl:figma",
			title: "Figma Prototype",
		},
		{
			id: 3,
			link: "https://www.figma.com/file/BSzPFzFGqQiWPlmDEri3DE/Staunton-Gallery?node-id=949%3A3352&t=GocV1JCtJcYRRznx-0",
			icon: "bxl:figma",
			title: "Design System",
		},
	];

	const mockupLink = [
		{
			id: 1,
			link: "https://www.figma.com/file/BSzPFzFGqQiWPlmDEri3DE/Staunton-Gallery?node-id=727%3A4868",
			icon: "bxl:figma",
			title: "Figma Design",
		},
	];

	return (
		<>
			<div className="staunton">
				<header className="project__header">
					<img
						className="project__logo project__logo--center"
						src={brandLogo}
						alt="Staunton Gallery Logo"
					/>
					<div className="project__hero-overlay"></div>
					<img
						className="project__hero"
						src={headerImg}
						alt="Collection of screens designed for Staunton Gallery"
					/>
				</header>
				<section className="project__container">
					<section className="project__summary">
						<h1 className="hidden">Project Summary</h1>
						<div className="written left">
							<h2>Overview</h2>
							<p>
								Staunton Gallery is a local art gallery situated in the heart of
								Subiaco featuring multiple exhibition spaces. The gallery
								curates and hosts exhibitions, provides a support network to
								associated artists, and houses artist studios. Heather Staunton
								has been operating the gallery as an independent artist since
								2007 and is seeking to reimagine the galleries online presence
								with a brand new website.
							</p>
							<p>
								The website design must showcase the venue, their exhibitions,
								artists, and history, while also providing their clientele with
								information regarding upcoming events. The design must reflect
								the creative nature of the gallery, appeal to their existing
								customer base, and seek to attract a younger audience.
							</p>
							<div className="project__status">
								<p>
									Project Status:
									<span className="italic"> Development</span>
								</p>
								<p>
									This is a<span className="bold-italic"> fictional brief</span>
									, further details at the end of this page
								</p>
							</div>
						</div>

						<LinkBlock items={topLinks} />

						<div className="project__problem full-width">
							<p>
								Staunton Gallery wants to reimagine their online presence with a
								brand new website that reflects the creative nature of the
								gallery in a professional, yet aesthetically pleasing manner.
							</p>
							<p>
								The design must showcase the venue, their exhibitions, artists,
								and history, while providing information on upcoming events.
							</p>
						</div>

						<div className="project__goals written left bullets">
							<h3>Project Goals</h3>
							<BulletList items={projectGoals} />
						</div>

						<div className="project__solution written right">
							<h3>The Solution</h3>
							<p>
								Featuring a soft colour palette, asymmetrical layout, and
								geometric colour blocks, the final design is a unique and modern
								website that's easy to navigate and pleasant to browse. The
								minimalistic design accomodates the needs of older users, while
								the subtle animations and clean, editorial style design
								simultaneously appeals to a younger audience.
							</p>
							<p>
								The final design is fully responsive, with careful consideration
								given to layout adjustments made for mobile devices.
							</p>
						</div>

						<div className="project__image--feature full-width">
							<img src={featureImg} alt="mockup of final website design" />
						</div>
					</section>

					{/* Case Study Section ------------------------------------- */}

					<section className="project__case-study">
						<h2 className="project__heading full-width brand-display xxl">
							<div
								className="project__heading-rectangle"
								aria-hidden="true"
							></div>
							<span>research</span>
						</h2>

						<div className="written left">
							<p>
								To understand the needs of the project brief I initially
								conducted topic research focusing on understanding what{" "}
								<span className="italic">artist studios</span> and{" "}
								<span className="italic">resident artists</span> are. I also
								researched other small art galleries found throughout Perth,
								analysing their online presence including social media pages.
							</p>
							<p>
								I discovered that small art galleries typically feature raw and
								unfinished materials in their buildings, imperfections that give
								these spaces a relaxed and inviting atmosphere
							</p>
						</div>

						<div className="quote right">
							<p>
								“Many young people do not feel at home in art galleries or are
								inhibited from visiting them by the very way in which these
								institutions collect and display art” (Mason, 2006)
							</p>
						</div>

						<div className="written left">
							<h3>Competitor Analysis</h3>
							<p>
								Based on my analysis of art galleries from around the world I
								discovered that there's a tendency to present a plethora of
								information to the user at any given moment. White space is used
								in an attempt to give this content space to breathe, but the
								contrasting colours and photography can quickly cause overwhelm.
								Notably, Frans Hals Museum has an incredibly unique and creative
								website that features microinteractions, playful colours, and
								huge typography that engages users.
							</p>
						</div>

						<div className="written left">
							<h3>User Research</h3>
							<p>
								Initial user research revealed that although art is enjoyed by
								people of all ages and genders, those that typically browse art
								galleries tend to be more educated, well-paid, and professional.
								I also uncovered interviews suggesting that young people believe
								that art galleries are uninviting, silent, and cold.
							</p>
						</div>

						<div className="persona-swiper">
							<ProjectSwiper images={personas} />
						</div>

						<h2 className="project__heading full-width brand-display xxl">
							<div
								className="project__heading-rectangle"
								aria-hidden="true"
							></div>
							<span>ideation & wireframes</span>
						</h2>

						<div className="written left">
							<p>
								Initial stages of ideation involved multiple quick brainstorms,
								followed by extensive sketching of a range of concepts aiming
								for a high quantity of potential website layouts. To help filter
								through the options I used red and green sticky dots to vote for
								a design element.
							</p>
							<p>
								I then created low-fidelity mockups in Figma to visualise these
								chosen sketches.
							</p>
						</div>

						<div className="landscape-swiper">
							<ProjectSwiper images={drafts} />
						</div>

						<h2 className="project__heading full-width brand-display xxl">
							<div
								className="project__heading-rectangle"
								aria-hidden="true"
							></div>
							<span>high-fidelity mockups</span>
						</h2>

						<div className="written left">
							<p>
								From the initial wireframes I created high-fidelity mockups that
								feature parallax animation. Ultimately I decided to remove this
								as, while this parallax animation looked interesting and unique,
								it didn't serve to enhance the artworks or photography on
								display.
							</p>
							<p>
								Upon removal of the large background images I opted to include
								more of the brand colour in the design, choosing to
								strategically add colour blocks to various sections of the
								design. These blocks of colour add to the structure of the
								website and an element of interest without taking away from the
								incredible artworks on display.
							</p>
							<p className="bold-italic">
								Click through to the Figma Design to explore the design
								iterations and responsive variations.
							</p>
						</div>

						<LinkBlock items={mockupLink} />

						<div className="landscape-swiper">
							<ProjectSwiper images={mockups} />
						</div>

						<h2 className="project__heading full-width brand-display xxl">
							<div
								className="project__heading-rectangle"
								aria-hidden="true"
							></div>
							<span>prototype</span>
						</h2>

						<div className="project_figma-container"></div>

						<div className="fine-print margin-width">
							<p>
								This is a fictional brief. This project has been created as part
								of an assignment in an approved course of study for Curtin
								University and contains copyright material not created by the
								author. All copyright material used remains copyright of the
								respective owners and has been used here pursuant to Section 40
								of the Copyright Act 1968 (Commonwealth of Australia). No part
								of this work may be reproduced without consent of the original
								copyright owners.
							</p>
							<div className="project_references">
								<p className="bold-italic">References</p>
								<p>
									Mason, David. 2006. "'The feeling of exclusion': Young
									peoples' perceptions of art galleries." Museum Management and
									Curatorship 21 (1): 20-31.
									https://doi.org/10.1016/j.musmancur.2005.11.002.{" "}
								</p>
							</div>
						</div>
					</section>
				</section>
			</div>
			<Footer />
		</>
	);
}

export default Staunton;
