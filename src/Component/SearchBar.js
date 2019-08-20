import React , {Component} from "react"

class SearchBar extends Component {
    render(){
        return(
            <form>
                <lable>Search</lable>
                <input type="text" placeholder="Enter here"></input>
            </form>
        )
    }
}

export default SearchBar ;