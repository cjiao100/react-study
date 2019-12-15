const defaultState = {
    inputValue: 'Writee Something',
    list: [
        '早8点开晨会，分配今天的代码任务',
        '早9点和项目经理开需求沟通会',
        '晚5点组织人员进行Review代码'
    ]
}

export default (state = defaultState, action) => {
    // console.log(state,action)
    // Reducer 里只能接受state，不能改变state
    if (action.type === 'changeInput') {
        // 深度拷贝
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value

        return newState
    }

    if(action.type === 'addItem') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''

        return newState
    }

    return state
}