export const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD':
			return [...state, action.payload.message];
		case 'BULK_ADD':
			return [...state, ...action.payload.messages];
		case 'DELETE':
			return state.filter((message, index) => action.payload.messageId !== index);
		default:
			return state;
	}
};

export const addMessage = message => ({
	type: 'ADD',
	payload: { message },
});

export const addMessages = messages => ({
	type: 'BULK_ADD',
	payload: { messages },
});

export const deleteMessage = messageId => ({
	type: 'DELETE',
	payload: { messageId },
});
