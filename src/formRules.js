export const formRules = [
    {
        id: 1,
        field: 'visitor',
        name: 'Name required',
        valid: false
    },
    {
        id: 2,
        field: 'visitor',
        name: 'Name valid',
        valid: false
    },
    {
        id: 3,
        field: 'email',
        name: 'Email required',
        valid: false
    },
    {
        id: 4,
        field: 'email',
        name: 'Email valid',
        valid: false
    },
    {
        id: 5,
        field: 'message',
        name: 'Message required',
        valid: false
    },
    {
        id: 6,
        field: 'message',
        name: 'Message valid',
        valid: false
    },
    {
        id: 7,
        field: 'message',
        name: 'Message must be less than 10 characters',
        valid: false
    },
];

export default formRules;