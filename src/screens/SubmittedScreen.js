import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SubmittedScreen() {
	const userSubmitted = useSelector((state) => state.userSubmitted);
	const { applicantInfo } = userSubmitted;
	applicantInfo["cvUrl"] = URL.createObjectURL(applicantInfo.cv?.file);

	return (
		<div className="applicantInfo mt-3">
			<Container
				id="contactus"
				className=" text-center contact p-3 mx-auto my-2 rounded-pill"
			>
				<div className="">
					<Button className="btn-warning p-3 mb-2 rounded-circle">
						<img
							src="/images/outline_check_white_24dp.png"
							alt="submitted succesfully"
						/>
					</Button>
					<h5 className="p-3 my-2">
						Your Application has been submitted successfully!
					</h5>
					<p className="p-3 my-2">We will contact you shortly</p>
				</div>
			</Container>
			<Container>
				<div className="text-center">
					{" "}
					<Button
						variant="dark"
						type="button"
						className="w-50 text-white"
					>
						{" "}
						Application Preview
					</Button>
				</div>
				<Row className="m-2">
					<Col xs={4}>Name:</Col>
					<Col xs={8}>{applicantInfo?.name}</Col>
				</Row>
				<Row className="m-2">
					<Col xs={4}>Email:</Col>
					<Col xs={8}>{applicantInfo?.email}</Col>
				</Row>
				<Row className="m-2">
					<Col xs={4}>Years of Experience:</Col>
					<Col xs={8}>{applicantInfo?.experience}</Col>
				</Row>
				<Row className="m-2">
					<Col xs={4}>Address:</Col>
					<Col xs={8}>
						{applicantInfo?.address} {applicantInfo?.city}
					</Col>
				</Row>
				<Row className="m-2 mt-3">
					<Col xs={4}>CV:</Col>
					<Col xs={8}>
						<a
							href={applicantInfo.cvUrl}
							target="_blank"
							rel="noreferrer"
							className="text-decoration-none p-2 bg-dark m-2 text-white"
						>
							Preview CV
						</a>
					</Col>
				</Row>
				<Row className="mb-5 mx-auto text-center  w-50">
					<Link
						to="/"
						className="text-decoration-none border-3 m-4 rounded-3 shadow-lg text-white p-2 bg-warning"
					>
						{" "}
						Back to Home{" "}
					</Link>
				</Row>
			</Container>
		</div>
	);
}

export default SubmittedScreen;
