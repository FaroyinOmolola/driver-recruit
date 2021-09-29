import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomeScreen() {
	return (
		<div>
			<div className="text-center">
				<img
					src="/images/istockphoto-1291742533-612x612.jpg"
					alt="we are hiring"
					style={{ width: "200px", height: "auto" }}
				/>
			</div>
			<Container className="px-4 pt-4">
				<p>
					<span className="fw-bold">Lotim Enterprise</span> is a food and
					beverage company registered on 28th January 2008 and was incorporated
					in Lagos, Nigeria with Registration Number 1127532. We are
					manufacturer of whole milk, mixed fruit milk drink, pineapple, mango
					and orange milk drink, yoghurt, bottled water, dispense water and
					more.
					<br />
					We are recruiting to fill the position below:
				</p>
				<h2>Job Title: Driver</h2>
				<p>
					<span className="fw-bold">Location: </span>Ikeja, Lagos
					<br />
					Employment Type: Full-time{" "}
				</p>
				<h2>Job Description</h2>
				<ul>
					<li>
						We are looking for a reliable and experienced company driver to
						assist the company with all transport-related duties. The company
						driver’s responsibilities include dropping and picking up staff,
						collecting various packages, and maintaining a travel log to record
						work hours, travel-time and locations traveled to. Interested
						candidate should also be able to perform routine checks on the
						company vehicle.
					</li>
				</ul>
				<h2>Responsibilities</h2>
				<ul>
					<li>
						Safely transporting company staff as well as various products and
						materials to and from specified locations in a timely manner.
					</li>
					<li>
						Ensuring that the company vehicle is always parked in areas that
						permit parking in order to avoid towing.
					</li>
					<li>
						Keeping the company vehicle clean and properly maintained by
						performing regular washing, cleaning and vehicle maintenance.
					</li>
					<li>
						Providing accurate time records of the company vehicle’s coming and
						goings.
					</li>
					<li>
						Reporting any accidents, injuries, and vehicle damage to management.
					</li>
				</ul>
				<h2>Requirements</h2>
				<ul>
					<li>Minimum of SSCE required.</li>
					<li>Minimum of 6 years driving experience.</li>
					<li>Must be able to read and write.</li>
					<li>Must reside within Ikeja axis.</li>
					<li>Must be able to drive both manual and automatic vehicles.</li>
					<li>Must be able to drive both cars and trucks.</li>
					<li>
						Must be conversant with lagos road (both island and mainland).
					</li>
					<li>Valid driver’s license. Clean driving record.</li>
					<li>Sound knowledge of road safety regulations.</li>
					<li>Working knowledge of local roads and routes.</li>
					<li>Effective communication skills.</li>
					<li>Punctual and reliable.</li>
				</ul>
				<h2>Application Closing Date</h2>
				<p>15th October, 2021.</p>
			</Container>
			<Row className="mb-5 mx-auto text-center  w-50">
				<Link
					to="/apply"
					className="text-decoration-none border-3 rounded-3 shadow-lg text-white p-2 bg-warning"
				>
					{" "}
					APPLY{" "}
				</Link>
			</Row>
		</div>
	);
}

export default HomeScreen;
