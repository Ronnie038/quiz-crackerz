import React from 'react';
import './Blog.css';
import Accordion from 'react-bootstrap/Accordion';

function Blog() {
	return (
		<div className='blog'>
			<Accordion defaultActiveKey='0'>
				<Accordion.Item eventKey='0'>
					<Accordion.Header>
						What is the purpose of the react router?
					</Accordion.Header>
					<Accordion.Body>
						ReactJS Router is mainly used for developing Single Page Web
						Applications. React Router is used to define multiple routes in the
						application. When a user types a specific URL into the browser, and
						if this URL path matches any 'route' inside the router file, the
						user will be redirected to that particular route.
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey='1'>
					<Accordion.Header>How does context api work?</Accordion.Header>
					<Accordion.Body>
						The React Context API is a way for a React app to effectively
						produce global variables that can be passed around. This is the
						alternative to "prop drilling" or moving props from grandparent to
						child to parent, and so on. Context is also touted as an easier,
						lighter approach to state management using Redux.
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey='2'>
					<Accordion.Header>What is useRef hook?</Accordion.Header>
					<Accordion.Body>
						The useRef Hook allows you to persist values between renders. It can
						be used to store a mutable value that does not cause a re-render
						when updated. It can be used to access a DOM element directly.
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</div>
	);
}

export default Blog;
