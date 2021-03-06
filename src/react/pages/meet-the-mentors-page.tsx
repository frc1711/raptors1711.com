import "./meet-the-mentors-page.scss";
import mentorImageJenniferDezeeuw from "../../assets/images/mentors/jennifer-dezeeuw.jpg";
import mentorImageLeilaniSigsbey from "../../assets/images/mentors/leilani-sigsbey.jpg";
import mentorImageTrevorSears from "../../assets/images/mentors/trevor-sears.jpg";
import mentorImageJohnFailor from "../../assets/images/mentors/john-failor.jpg";
import mentorImageJeremiahStieve from "../../assets/images/mentors/jeremiah-stieve.jpg";
import mentorImageRussRiker from "../../assets/images/mentors/russ-riker.jpg";
import mentorImageBrianLettinga from "../../assets/images/mentors/brian-lettinga.jpg";
import mentorImageEricSmith from "../../assets/images/mentors/eric-smith.jpg";
import mentorImagePaulDeZeeuw from "../../assets/images/mentors/paul-dezeeuw.jpg";
import mentorImageGregLuyt from "../../assets/images/mentors/greg-luyt.jpg";
import React from "react";
import { Page } from "../elements/page-flow/page";
import { Props, State } from "./home";
import { PageHeading } from "../elements/page-heading";
import { TextImageBox } from "../elements/text-image-box";
import { sanitizeStringToID } from "../../util/sanitize-string-to-id";

type MentorProfile = {
	name: string,
	title: string,
	bio: React.ReactNode,
	image: string
};

export class MeetTheMentorsPage extends React.Component<Props, State> {
	
	public static readonly MENTORS: MentorProfile[] = [
		{
			name: "Jennifer Dezeeuw",
			title: "Coach",
			bio: <p>
				Mrs. DeZeeuw has been with the RAPTORS for 6 years, and this is her 3rd year as our coach. Overseeing
				all of the complex behind-the-scenes planning, she applies for grants, orders supplies, arranges meals
				and transportation, and connects the robotics team with the school. Additionally, she assists with
				Chairman’s Award, Safety team, Super Science Saturday, and other Non-Tech projects.
			</p>,
			image: mentorImageJenniferDezeeuw
		},
		{
			name: "Leilani Sigsbey",
			title: "Non-Tech Mentor",
			bio: <p>
				Leilani has been a part of FIRST robotics for 4 years. She assists with the Non-Tech team, focusing on
				primarily Chairman's and outreach events. Leilani graduated from Central in 2021, majors in public
				relations at Ferris State, and enjoys volunteering within the community. She is excited to get back onto
				the FIRST Robotics scene.
			</p>,
			image: mentorImageLeilaniSigsbey
		},
		{
			name: "Trevor Sears",
			title: "Build & Programming Mentor",
			bio: <p>
				Graduated 2018, Trevor has participated in FIRST Robotics since 2014, specializing on the tech side now.
				Being very dedicated to the RAPTORS Robotics Team, Trevor is always open to teaching others about build
				and programming elements. Trevor anticipates going to Houston, Texas for Worlds as well as subsequently
				'winning back my Saturday mornings'.
			</p>,
			image: mentorImageTrevorSears
		},
		{
			name: "John Failor",
			title: "School Liaison & Logistics Mentor",
			bio: <p>
				Mr. John Failor focuses on the financial and sponsorship aspects of the RAPTORS Team. Being a
				mathematics staff member at Traverse City Central High School, Mr. Failor allows the team to utilize
				supplies and materials that the school provides. If he is not currently grading papers, Mr. Failor
				enjoys cross-country skiing and mountain biking.
			</p>,
			image: mentorImageJohnFailor
		},
		{
			name: "Jeremiah Stieve",
			title: "Build Mentor",
			bio: <p>
				This is Mr. Stieve’s second year on the team; he assists the Tech side of the team and is most excited
				for the new game. Furthermore, Mr. Stieve anticipates seeing new talent join the RAPTORS and enjoys
				outdoor sports in his free time.
			</p>,
			image: mentorImageJeremiahStieve
		},
		{
			name: "Russ Riker",
			title: "Programming & Electrical Mentor",
			bio: <p>
				This is Mr. Riker’s 10th season with the RAPTORS. He primarily assists the Electronics and Programming
				teams and is interested in seeing End Game and climbers in upcoming competitions. Mr. Riker’s hobbies
				include pinball and repairing old computers.
			</p>,
			image: mentorImageRussRiker
		},
		{
			name: "Brian Lettinga",
			title: "Finance & Logistics Mentor",
			bio: <p>
				This is Mr. Lettinga’s fourth year with FIRST. He helps supervise the Build team and is most excited to
				see FIRST robotics competitions in the United States. Sports, fishing, and cooking are his favorite
				hobbies.
			</p>,
			image: mentorImageBrianLettinga
		},
		{
			name: "Eric Smith",
			title: "Build Mentor",
			bio: <p>
				Eric Smith has been a part of FIRST Robotics for 4 years. He assists the Strategy and Mechanical teams
				and looks forward to seeing what a full game looks like and how it plays out. Eric’s hobbies include
				watching and playing sports, specifically, basketball.
			</p>,
			image: mentorImageEricSmith
		},
		{
			name: "Paul DeZeeuw",
			title: "Build & Design Mentor",
			bio: <p>
				Paul DeZeeuw has also been with the RAPTORS for 6 year, as a mentor. He continues to help the tech side
				of the team throughout the build season. Helping everyone understand various building ideas, Paul
				DeZeeuw is a valued mentor on the team.
			</p>,
			image: mentorImagePaulDeZeeuw
		},
		{
			name: "Greg Luyt",
			title: "Build Mentor",
			bio: <p>
				Greg Luyt has been a RAPTORS mentor for 4 years. He helps out with everything and keeps things on task.
				Mr. Luyt is excited to get back to competition and enjoys playing music, skiing, and hiking.
			</p>,
			image: mentorImageGregLuyt
		},
	];
	
	public render(): React.ReactNode {
		
		let mentors: React.ReactNode[] = [];
		let reversed: boolean = false;
		
		for (let mentor of MeetTheMentorsPage.MENTORS) {
			
			mentors.push(
				<TextImageBox image={mentor.image}
							  imageAlt={mentor.name}
							  reverse={reversed = !reversed}
				              className={sanitizeStringToID(mentor.name)}>
					<div className="mentor-header">
						<h4>{mentor.name}</h4>
						<h6>{mentor.title}</h6>
					</div>
					{mentor.bio}
				</TextImageBox>
			);
			
		}
		
		return (
			<Page name="meet-the-mentors">
				<PageHeading>Meet the Mentors</PageHeading>
				{mentors}
			</Page>
		);
	
	}
	
}
