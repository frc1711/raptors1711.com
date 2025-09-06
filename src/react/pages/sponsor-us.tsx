import "./sponsor-us.scss";
import mitvcBlueBanner from "../../assets/images/mitvc-district-championship-banner.jpg";
import React from "react";
import { Page } from "../elements/page-flow/page";
import { PageHeading } from "../elements/page-heading";

export type Props = Readonly<{}>;
export type State = Readonly<{}>;

export class SponsorUs extends React.Component<Props, State> {
    
    public render(): React.ReactNode {
    	
    	return (
			<Page name="sponsor-us">
				<PageHeading>Sponsorship Opportunities</PageHeading>
				<img src={mitvcBlueBanner}
					 alt="RAPTORS team members showing off the blue banner that they received after winning their
					      Traverse City district competition." />
				<p>
					TC Central's RAPTORS Robotics Team 1711 is heading to States and a strong showing will earn them a
					chance to complete at Worlds in Houston, TX! The registration fees and travel expenses are
					significant, so any amount is greatly appreciated!
				</p>
				<p>
					<i>To sponsor/donate to our team, please visit the link below, and add <span className="team-name">
					RAPTORS Team 1711</span> in the program designation box or memo line if you are sending a check.</i>
				</p>
				<a href="https://docs.google.com/forms/d/1qXTrBuLf6QTeViidB6IWpQNK5V_pJfBURjVZpeL5OJU/edit "
				   target="_blank"
				   rel="noreferrer">Click Here to Sponsor FRC Team 1711 - The RAPTORS</a>
			</Page>
		);
		
	}
    
}
