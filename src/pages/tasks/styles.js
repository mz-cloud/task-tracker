import { Box, Card, Page, Text } from "grommet";
import { Clear, FormClose, Notification } from "grommet-icons";
import { normalizeColor } from "grommet/utils";
import styled from "styled-components";

export const StyledPage = styled(Page)`
	padding: 0px 20px;
`;

export const StyledCard = styled(Card)`
	padding-top: 0px;
	padding-bottom: 10px;
	padding-left: 20px;
	padding-right: 20px;
`;

export const StyledShowMore = styled.svg`
	cursor: pointer;
	margin-top: auto;
	margin-bottom: auto;
	:hover {
		transition: stroke 0.1s linear;
		stroke: ${({ theme }) => normalizeColor("neutral-2", theme)};
	}
`;

export const StyledTaskDate = styled(Text)``;
export const StyledTaskReminderEnabled = styled(Notification)`
	margin-left: 8px;
`;
export const StyledTaskDescription = styled(Text)`
	margin-top: 0px;
	margin-bottom: 10px;
	margin-left: 0px;
	margin-right: 0px;
`;
export const StyledTaskRemove = styled(FormClose)`
	cursor: pointer;
	margin-top: auto;
	margin-bottom: auto;
	margin-left: 5px;
	:hover {
		transition: stroke 0.1s linear;
		stroke: ${({ theme }) => normalizeColor("status-critical", theme)};
	}
`;
export const StyledIconsWrapper = styled(Box)`
	margin-top: auto;
	margin-bottom: auto;
	margin-left: auto;
	padding: 0px;
`;
export const StyledTaskTitle = styled.h4`
	margin: 5px 0px;
`;
export const StyledTaskBox = styled(Box)`
	padding-top: 5px;
	padding-bottom: 5px;
	padding-left: 20px;
	padding-right: 10px;
`;
export const StyledTaskWrapper = styled(Box)`
	${StyledTaskBox}:not(:last-child) {
		margin-bottom: 5px;
	}
`;
export const StyledClearTasks = styled(Clear)`
	cursor: pointer;
	margin-right: 5px;
	:hover {
		transition: stroke 0.1s linear;
		stroke: ${({ theme }) => normalizeColor("status-critical", theme)};
	}
`;
