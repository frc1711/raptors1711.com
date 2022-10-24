/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:19 AM -- October 17th, 2022
 * Project: v2.raptors1711.com
 */

import { ReactElement } from "react";
import { css, SerializedStyles } from "@emotion/react";
import { flexContainer } from "../../styles/mixins";
import {
	PAGE_MARGIN_BOTTOM,
	PAGE_MARGIN_SIDES, PAGE_PADDING_FOOTER,
	PAGE_WIDTH
} from "../../styles/sizing";
import FRCLogoHorizontalRule from "../frc-logo-horizontal-rule";

const footerContainerStyles: SerializedStyles = css({
	...flexContainer({ crossAxis: "center" }),
	width: "100%",
	paddingTop: PAGE_PADDING_FOOTER,
	paddingLeft: PAGE_MARGIN_SIDES,
	paddingRight: PAGE_MARGIN_SIDES,
	paddingBottom: PAGE_MARGIN_BOTTOM,
});

const footerStyles: SerializedStyles = css({
	...flexContainer(),
	maxWidth: PAGE_WIDTH,
	width: "100%",
	height: "30px",
	backgroundColor: "red",
});

export default function Footer(): ReactElement {
	
	return (
		<div css={footerContainerStyles}>
			<FRCLogoHorizontalRule />
			<footer css={footerStyles}>
				
			</footer>
		</div>
	);
	
}
