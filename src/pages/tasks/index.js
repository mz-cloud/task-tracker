import {
	Box,
	Button,
	CardBody,
	CardHeader,
	CheckBox,
	Collapsible,
	DateInput,
	FormField,
	Grid,
	Heading,
	TextArea,
	TextInput
} from "grommet";
import { Contract, Expand } from "grommet-icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, clearTasks, removeTask } from "../../state/store";
import {
	StyledCard,
	StyledClearTasks,
	StyledIconsWrapper,
	StyledPage,
	StyledShowMore,
	StyledTaskBox,
	StyledTaskDate,
	StyledTaskDescription,
	StyledTaskReminderEnabled,
	StyledTaskRemove,
	StyledTaskTitle,
	StyledTaskWrapper
} from "./styles";

const TaskEntry = (props) => {
	const dispatch = useDispatch();
	const [showMore, setShowMore] = useState(false);
	const task = props.task;
	const title = task.title.length > 25 ? `${task.title.substring(0, 25)}...` : task.title;
	return (
		<StyledTaskBox background="light-4" fill="horizontal">
			<Box fill="horizontal" direction="row">
				<StyledTaskTitle>{title}</StyledTaskTitle>
				<StyledIconsWrapper direction="row">
					<StyledShowMore
						as={showMore ? Contract : Expand}
						size="small"
						onClick={() => setShowMore(!showMore)}
					/>
					<StyledTaskRemove
						size="medium"
						onClick={() => {
							dispatch(removeTask(props.id));
						}}
					/>
				</StyledIconsWrapper>
			</Box>
			<Collapsible open={showMore}>
				<StyledTaskDate>
					{new Date(task.date).toLocaleDateString()}
					{task.reminder && <StyledTaskReminderEnabled size="small" />}
				</StyledTaskDate>
				<StyledTaskDescription>{task.description}</StyledTaskDescription>
			</Collapsible>
		</StyledTaskBox>
	);
};

const CurrentTasks = () => {
	const tasks = useSelector((state) => state.tasks);
	const dispatch = useDispatch();
	return (
		<div>
			<CardHeader>
				<Heading level={3}>Current Tasks</Heading>
				<StyledClearTasks onClick={() => dispatch(clearTasks())} />
			</CardHeader>
			<CardBody>
				<StyledTaskWrapper>
					{tasks.map((task, index) => (
						<TaskEntry key={index} id={index} task={task} />
					))}
				</StyledTaskWrapper>
			</CardBody>
		</div>
	);
};

const TaskForm = () => {
	const dispatch = useDispatch();
	const [inputs, setInputs] = useState({
		title: "",
		description: "",
		date: new Date(Date.now()).toISOString(),
		reminder: false,
	});

	const clearForm = () =>
		setInputs({
			title: "",
			description: "",
			date: new Date(Date.now()).toISOString(),
			reminder: false,
		});

	const handleSubmit = () => {
		console.log("submit");
		dispatch(addTask(inputs));
		clearForm();
	};

	return (
		<div>
			<CardHeader>
				<Heading level={3}>Add Tasks</Heading>
			</CardHeader>
			<CardBody>
				<FormField label="Title" name="title">
					<TextInput
						name="title"
						value={inputs.title}
						onChange={({ target }) => setInputs({ ...inputs, title: target.value })}
					/>
				</FormField>
				<FormField label="Description" name="description">
					<TextArea
						placeholder="type here"
						value={inputs.description}
						resize="vertical"
						onChange={({ target }) => setInputs({ ...inputs, description: target.value })}
						fill
					/>
				</FormField>
				<FormField label="Date">
					<DateInput
						format="mm/dd/yyyy"
						value={inputs.date}
						onChange={({ value }) => setInputs({ ...inputs, date: value })}
					/>
				</FormField>
				<CheckBox
					label="Remind me?"
					checked={inputs.reminder}
					onChange={(event) => setInputs({ ...inputs, reminder: event.target.checked })}
				/>
				<Box direction="row" gap="medium" margin={{ top: "20px" }}>
					<Button label="Submit" primary onClick={() => handleSubmit()} />
					<Button label="Reset" onClick={() => clearForm()} />
				</Box>
			</CardBody>
		</div>
	);
};

const TasksPage = () => {
	return (
		<StyledPage kind="full">
			<Grid
				rows={["100%", "100%"]}
				columns={["1fr", "1fr"]}
				gap="medium"
				areas={[
					{ name: "nav", start: [0, 0], end: [0, 0] },
					{ name: "main", start: [1, 0], end: [1, 0] },
				]}
				fill="horizontal"
			>
				<StyledCard gridArea="nav" background="light-2">
					<CurrentTasks />
				</StyledCard>
				<StyledCard gridArea="main" background="light-2">
					<TaskForm />
				</StyledCard>
			</Grid>
		</StyledPage>
	);
};

export default TasksPage;
