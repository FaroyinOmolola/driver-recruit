import React, { useState } from "react";
import { Container, Form, Button, FloatingLabel } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { submitted } from "../actions/UserAction";

function Register(props) {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [experience, setExperience] = useState("");
	const [cv, setCV] = useState("");
	const [reason, setReason] = useState("");

	const [validated, setValidated] = useState(false);

	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			setValidated(true);
			e.stopPropagation();
		} else {
			setValidated(true);
			dispatch(submitted(name, email, city, address, experience, reason, cv));
			history.push("/submitted");
		}
	};

	let history = useHistory();
	// const userRegister = useSelector((state) => state.userRegister);
	// const { userInfo } = userRegister;

	const handleFile = (e) => {
		const formFile = { file: e.target.files[0] };
		setCV(formFile);
	};
	return (
		<div>
			<Container>
				<Link to="" className="text-decoration-none p-3 text-dark">
					{" "}
					Back to Home{" "}
				</Link>
				<Form
					onSubmit={submitHandler}
					noValidate
					validated={validated}
					className=" mb-3 mx-auto border-3 rounded-3 shadow-lg p-5 pt-4"
				>
					<div className="mb-3 text-center">
						<h1>Fill and submit the form below</h1>
					</div>
					<FloatingLabel controlId="name" label=" Full Name" className="mb-3">
						<Form.Control
							type="text"
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="name"
						/>
					</FloatingLabel>{" "}
					<FloatingLabel
						controlId="email"
						label="Email address"
						className="mb-3"
					>
						<Form.Control
							type="email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="email"
						/>
					</FloatingLabel>{" "}
					<FloatingLabel controlId="address" label="Address" className="mb-3">
						<Form.Control
							type="text"
							required
							value={address}
							onChange={(e) => setAddress(e.target.value)}
							placeholder="address"
						/>
					</FloatingLabel>{" "}
					<FloatingLabel controlId="city" label="City" className="mb-3">
						<Form.Control
							type="text"
							required
							value={city}
							onChange={(e) => setCity(e.target.value)}
							placeholder="city"
						/>
					</FloatingLabel>{" "}
					<FloatingLabel controlId="experience" className="mb-3">
						<Form.Select
							required
							value={experience}
							onChange={(e) => {
								setExperience(e.target.value);
							}}
						>
							<option value="" disabled>
								Select Years of Experience
							</option>
							<option value="0-1">Less than 1 year</option>
							<option value="1">1 year</option>
							<option value="2-3">2-3 years</option>
							<option value="4-5">4-5 years</option>
							<option value="5 above">Above 5 years</option>
						</Form.Select>
					</FloatingLabel>
					<FloatingLabel
						controlId="reason"
						label="Why work with us?"
						className="mb-3"
					>
						<Form.Control
							as="textarea"
							required
							value={reason}
							onChange={(e) => setReason(e.target.value)}
							placeholder="reason"
						/>
					</FloatingLabel>{" "}
					<FloatingLabel controlId="productImages" className="mb-3">
						<Form.Control
							type="file"
							accept="application/msword, application/pdf"
							required
							onChange={(e) => handleFile(e)}
						/>
					</FloatingLabel>
					<div className="text-center mt-3">
						<Button
							variant="warning"
							className="w-50 text-white  fs-5"
							type="submit"
						>
							SUBMIT
						</Button>
					</div>
				</Form>
			</Container>
		</div>
	);
}

export default Register;
