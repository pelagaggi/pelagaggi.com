
function updateFilterList(state,action){
    if(action.type === "FILTER_LIST_TOGGLE_SKILL"){
        return [];
    }
    return state
}
const rootReducer = function(state,action){
    console.log("RootReducer\t"+JSON.stringify(action,undefined,2));
    return{
        filterlist:updateFilterList(state.filterlist,action),
        skills:state.skills
    };
};

module.exports = rootReducer;