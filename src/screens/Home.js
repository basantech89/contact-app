import React, { useState } from 'react';
import { TabContent, TabPane, NavLink, Nav, NavItem } from 'reactstrap';
import Contacts from "../components/contacts/Contacts";
import Messages from "../components/messages/Messages";
import { PageProvider } from "../components/common/Pagination/PageProvider";

const Home = () => {
	const [activeTab, setActiveTab] = useState("1");
	const toggle = tab => {
		if (activeTab !== tab) {
			setActiveTab(tab);
		}
	};
	return (
		<>
			<Nav tabs>
				<NavItem>
					<NavLink className={activeTab === "1" ? 'active': ''}
					         onClick={() => toggle("1")}
					         >
						Contacts
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink className={activeTab === "2" ? 'active': ''}
					         onClick={() => toggle("2")}
					         >
						Sent Messages
					</NavLink>
				</NavItem>
			</Nav>
			<TabContent activeTab={activeTab}>
				<TabPane tabId="1">
					<PageProvider> <Contacts /> </PageProvider>
				</TabPane>
				<TabPane tabId="2">
					<Messages />
				</TabPane>
			</TabContent>
		</>
	);
};

export default Home;
