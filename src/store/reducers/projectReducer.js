const initState ={
  projects: [
    {id: '1', title: '1xxxx xx xxxx', content: 'xxx xxxxx'},
    {id: '2', title: '2xxxx xx xxxx', content: 'xxx xxxxx'},
    {id: '3', title: '3xxxx xx xxxx', content: 'xxx xxxxx'},
  ]
}

const projectReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_PROJECT':
      console.log('careated project', action.project)
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('careated project error', action.err)
      return state;
    default:
      return state;
  }
}

export default projectReducer